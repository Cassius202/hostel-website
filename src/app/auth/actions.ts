'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) return { error: error.message }

  redirect('/tenant')
}

export async function register(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const rawRoom = (formData.get('roomNumber') as string).trim().toUpperCase() // e.g "B20"
  const matric = (formData.get('matric') as string).trim()

  // ── 1. Email validation ────────────────────────────────────────
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: 'Enter a valid email address.' }
  }

  // ── 2. Room number parsing — split "B20" into floor: "B", room_number: 20 ──
  const roomMatch = rawRoom.match(/^([A-D])(\d+)$/)
  if (!roomMatch) {
    return { error: 'Room must be a letter (A–D) followed by a number. e.g A4, B20' }
  }
  const floor = roomMatch[1]           // "B"
  const room_number = parseInt(roomMatch[2], 10) // 20

  // ── 3. Matric validation — exactly 6 digits ────────────────────
  const matricRegex = /^\d{6}$/
  if (!matricRegex.test(matric)) {
    return { error: 'Matric number must be exactly 6 digits.' }
  }

  // ── 4. Matric uniqueness check — must not already exist ────────
  const { data: existingMatric } = await supabase
    .from('profiles')
    .select('matric')
    .eq('matric', matric)
    .single()

  if (existingMatric) {
    return { error: 'This matric number is already registered.' }
  }

  const { data, error } = await supabase.auth.signUp({ email, password })

  if (error) return { error: error.message }

  // ── 6. Insert profile ──────────────────────────────────────────
  const { error: profileError } = await supabase
    .from('profiles')
    .insert({
      id: data.user?.id,
      email,
      first_name: firstName,
      last_name: lastName,
      room_number,
      floor,
      matric,
    })

  if (profileError) return { error: profileError.message }

  redirect('/auth/pending')
}
export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/auth/login')
}