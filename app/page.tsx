import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FeaturedVehicles from "@/components/featured-vehicles"
import Testimonials from "@/components/testimonials"
import PromotionBanner from "@/components/promotion-banner"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/placeholder.svg?height=600&width=1920" alt="Luxury car" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Trouvez le véhicule parfait pour vos besoins</h1>
            <p className="text-xl mb-8">Location et achat de véhicules de qualité avec un service exceptionnel</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/vehicles">Explorer nos véhicules</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 shadow-lg relative z-20 -mt-16 rounded-t-3xl mx-4 sm:mx-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Search className="mr-2 h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Rechercher un véhicule</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Marque</label>
              <select className="w-full p-2 border rounded-md">
                <option>Toutes les marques</option>
                <option>Renault</option>
                <option>Peugeot</option>
                <option>Citroën</option>
                <option>BMW</option>
                <option>Mercedes</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Type de véhicule</label>
              <select className="w-full p-2 border rounded-md">
                <option>Tous les types</option>
                <option>Berline</option>
                <option>SUV</option>
                <option>Camionnette</option>
                <option>Cabriolet</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Prix maximum</label>
              <select className="w-full p-2 border rounded-md">
                <option>Tous les prix</option>
                <option>Moins de 50€/jour</option>
                <option>50€ - 100€/jour</option>
                <option>100€ - 200€/jour</option>
                <option>Plus de 200€/jour</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button className="w-full">Rechercher</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <PromotionBanner />

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Location Flexible</h3>
                <p className="text-muted-foreground">
                  Louez un véhicule pour quelques heures, jours ou semaines selon vos besoins.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Achat Simplifié</h3>
                <p className="text-gray-600">
                  Achetez votre véhicule idéal avec notre processus d'achat transparent et sans stress.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Assurance Complète</h3>
                <p className="text-gray-600">
                  Voyagez l'esprit tranquille avec nos options d'assurance complètes pour tous les véhicules.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <FeaturedVehicles />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à prendre la route ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez notre sélection de véhicules et trouvez celui qui correspond parfaitement à vos besoins.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link href="/vehicles">Voir tous les véhicules</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
