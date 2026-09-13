import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session — do not remove, keeps auth alive
  const { data: { user } } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl

  // Protect /tenant and /admin — redirect to login if not authed
  if (!user && (pathname.startsWith('/tenant') || pathname.startsWith('/admin'))) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/login'
    return NextResponse.redirect(url)
  }

  if (user) {
  const { data: profile } = await supabase
    .from('profiles')
    .select('status')
    .eq('id', user.id)
    .single()

  // Logged in but not approved yet
  if (profile?.status === 'pending' && pathname.startsWith('/tenant')) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/pending'  // a simple "awaiting approval" page
    return NextResponse.redirect(url)
  }

  if (profile?.status === 'rejected' && pathname.startsWith('/tenant')) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/rejected'
    return NextResponse.redirect(url)
  }
}

  // Already logged in? Redirect away from auth pages
  if (user && (pathname.startsWith('/auth/login') || pathname.startsWith('/auth/register'))) {
    const url = request.nextUrl.clone()
    url.pathname = '/tenant'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}