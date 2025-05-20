'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function AuthForm() {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const view = searchParams.get('view') || 'sign_in'

  useEffect(() => {
    setMounted(true)

    // Écouter les changements d'authentification
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        router.push('/')
        router.refresh()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router])

  if (!mounted) {
    return null // Évite le rendu côté serveur
  }

  return (
    <div className="w-[350px] p-4">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#525252',
              },
            },
          },
          className: {
            container: 'w-full',
            button: 'w-full bg-gray-800 hover:bg-gray-700 text-white',
            input: 'w-full border border-gray-300 rounded-md',
            divider: 'my-4 border-gray-300',
            message: 'text-sm text-red-500 mt-2',
          },
        }}
        providers={['google', 'github']}
        redirectTo={`${window.location.origin}/auth/callback`}
        localization={{
          variables: {
            sign_in: {
              email_label: 'Email',
              password_label: 'Mot de passe',
              button_label: 'Se connecter',
              loading_button_label: 'Connexion en cours...',
              link_text: 'Déjà un compte ? Connectez-vous',
              social_provider_text: 'Se connecter avec {{provider}}',
            },
            sign_up: {
              email_label: 'Email',
              password_label: 'Mot de passe',
              button_label: 'S\'inscrire',
              loading_button_label: 'Inscription en cours...',
              link_text: 'Pas de compte ? Inscrivez-vous',
              social_provider_text: 'S\'inscrire avec {{provider}}',
            },
            forgotten_password: {
              email_label: 'Email',
              password_label: 'Mot de passe',
              button_label: 'Réinitialiser le mot de passe',
              loading_button_label: 'Envoi en cours...',
              link_text: 'Mot de passe oublié ?',
            },
            magic_link: {
              email_input_label: 'Email',
              email_input_placeholder: 'Votre email',
              button_label: 'Envoyer le lien magique',
              loading_button_label: 'Envoi du lien...',
              link_text: 'Envoyer un lien magique',
              confirmation_text: 'Vérifiez votre email pour le lien de connexion',
            },
          },
        }}
        theme="dark"
        showLinks={true}
        view={view as 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password'}
        magicLink={true}
      />
    </div>
  )
} 