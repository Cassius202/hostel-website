'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'

export async function approveTenant(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id') as string

  const { error } = await supabase
    .from('profiles')
    .update({ status: 'approved' })
    .eq('id', id)

  if (error) return { error: error.message }

  revalidatePath('/admin/pending')
}

export async function rejectTenant(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id') as string

  const { error } = await supabase
    .from('profiles')
    .update({ status: 'rejected' })
    .eq('id', id)

  if (error) return { error: error.message }

  revalidatePath('/admin/pending')
}