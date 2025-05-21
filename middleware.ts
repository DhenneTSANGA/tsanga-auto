import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Vérifier la session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protection de la page de configuration
  if (req.nextUrl.pathname === '/setup') {
    // Vérifier si un admin existe déjà
    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers()
    
    if (!listError) {
      const adminExists = users.some(user => user.user_metadata?.role === 'admin')
      if (adminExists) {
        return NextResponse.redirect(new URL('/', req.url))
      }
    }
    return res
  }

  // Si l'utilisateur n'est pas connecté et essaie d'accéder à une route admin
  if (!session && req.nextUrl.pathname.startsWith('/admin')) {
    const redirectUrl = new URL('/auth/login', req.url)
    redirectUrl.searchParams.set('redirectTo', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Si l'utilisateur est connecté mais n'est pas admin et essaie d'accéder à une route admin
  if (session && req.nextUrl.pathname.startsWith('/admin')) {
    const { data: { user } } = await supabase.auth.getUser()
    const isAdmin = user?.user_metadata?.role === 'admin'

    if (!isAdmin) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return res
}

// Configurer les routes à protéger
export const config = {
  matcher: [
    '/setup',
    '/admin/:path*',
    '/profile/:path*',
    '/mes-vehicules/:path*',
    '/favoris/:path*',
    '/parametres/:path*'
  ]
} 