'use client'

import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'
import { 
  Car, 
  Home, 
  ShoppingCart, 
  User, 
  Phone, 
  Newspaper,
  Heart,
  Settings,
  Menu,
  CarFront,
  LayoutDashboard
} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const { user, loading, signOut } = useAuth()

  // Vérifier si l'utilisateur est un administrateur
  const isAdmin = user?.user_metadata?.role === 'admin'

  const mainNavItems = [
    { href: '/', label: 'Accueil', icon: Home },
    { href: '/vehicules', label: 'Véhicules', icon: CarFront },
    { href: '/location', label: 'Location', icon: Car },
    { href: '/achat', label: 'Achat', icon: ShoppingCart },
    { href: '/blog', label: 'Blog', icon: Newspaper },
    { href: '/contact', label: 'Contact', icon: Phone },
  ]

  if (loading) {
    return (
      <nav className="border-b bg-background">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-primary">
            Tsanga-Auto
          </Link>
          <div className="flex items-center gap-4">
            <div className="animate-pulse bg-gray-200 h-8 w-8 rounded-full" />
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="font-bold text-xl text-primary">
            Tsanga-Auto
          </Link>
        </div>
        
        {/* Navigation desktop - Centered */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="flex items-center gap-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side items */}
        <div className="flex items-center gap-4 ml-auto">
          <ThemeToggle />
          
          {/* Menu mobile */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.user_metadata?.avatar_url} alt={user.email || ''} />
                    <AvatarFallback>
                      {user.email?.charAt(0).toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.email}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.user_metadata?.full_name || 'Utilisateur'}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {isAdmin && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/admin/dashboard" className="flex items-center gap-2">
                        <LayoutDashboard className="h-4 w-4" />
                        Administration
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Mon Profil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/mes-vehicules" className="flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Mes Véhicules
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/favoris" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Favoris
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/parametres" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Paramètres
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600 focus:text-red-600"
                  onClick={() => signOut()}
                >
                  Se déconnecter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Se connecter</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/login?view=sign_up">S'inscrire</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
} 