import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Calendar, Shield, Clock } from "lucide-react"

export default function LocationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src="/location.png"
            alt="Location de voitures"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Location de Véhicules</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez notre gamme complète de véhicules disponibles à la location pour tous vos besoins
          </p>
          <Button size="lg" asChild>
            <Link href="/location/rental">Voir nos offres de location</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Car className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Large choix de véhicules</h3>
            <p className="text-gray-600">
              Des citadines économiques aux SUV spacieux, trouvez le véhicule adapté à vos besoins
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexibilité des durées</h3>
            <p className="text-gray-600">
              Location courte, moyenne ou longue durée selon vos besoins
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Assurance complète</h3>
            <p className="text-gray-600">
              Tous nos véhicules sont couverts par une assurance tous risques
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à louer votre véhicule ?</h2>
          <p className="text-xl mb-8">
            Découvrez nos offres de location et réservez dès maintenant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/location/rental">Voir nos offres</Link>
            </Button>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 