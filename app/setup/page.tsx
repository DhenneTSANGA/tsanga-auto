"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { toast } from "sonner"
import { Loader2, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SetupPage() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Vérifier si un admin existe déjà
      const { data: { users }, error: listError } = await supabase.auth.admin.listUsers()
      
      if (listError) throw listError

      const adminExists = users.some(user => user.user_metadata?.role === 'admin')
      
      if (adminExists) {
        toast.error("Un administrateur existe déjà. Cette page n'est accessible que lors de la configuration initiale.")
        router.push('/')
        return
      }

      // Créer le compte administrateur
      const { data: { user }, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role: 'admin'
          }
        }
      })

      if (signUpError) throw signUpError

      if (user) {
        toast.success("Compte administrateur créé avec succès !")
        router.push('/auth/login')
      }
    } catch (error) {
      console.error('Erreur lors de la création du compte administrateur:', error)
      toast.error("Une erreur est survenue lors de la création du compte administrateur")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-lg py-12">
      <Card>
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Configuration Initiale</CardTitle>
          </div>
          <CardDescription>
            Créez le premier compte administrateur pour votre site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nom complet</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Création en cours...
                </>
              ) : (
                "Créer le compte administrateur"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 