import { Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

// Simulated vehicle data
const vehicles = [
  {
    id: 1,
    name: "Toyota Land Cruiser",
    category: "SUV",
    price: 75000,
    image: "/vehicules/land-cruiser.jpg",
    features: ["5 portes", "Diesel", "Automatique", "4x4"],
    isPromotion: true,
  },
  {
    id: 2,
    name: "Toyota Hilux",
    category: "Pick-up",
    price: 65000,
    image: "/vehicules/hilux.jpg",
    features: ["Double cabine", "Diesel", "Manuelle", "4x4"],
    isPromotion: false,
  },
  {
    id: 3,
    name: "Nissan Patrol",
    category: "SUV Premium",
    price: 85000,
    image: "/vehicules/patrol.jpg",
    features: ["5 portes", "Diesel", "Automatique", "4x4"],
    isPromotion: false,
  },
  {
    id: 4,
    name: "Mitsubishi Pajero",
    category: "SUV",
    price: 70000,
    image: "/vehicules/pajero.png",
    features: ["5 portes", "Diesel", "Automatique", "4x4"],
    isPromotion: true,
  },
  {
    id: 5,
    name: "Toyota Corolla",
    category: "Berline",
    price: 45000,
    image: "/vehicules/corolla.jpg",
    features: ["5 portes", "Essence", "Automatique", "Climatisation"],
    isPromotion: false,
  },
  {
    id: 6,
    name: "Suzuki Jimny",
    category: "SUV Compact",
    price: 55000,
    image: "/vehicules/jimny.avif",
    features: ["3 portes", "Essence", "Manuelle", "4x4"],
    isPromotion: true,
  },
  {
    id: 7,
    name: "Toyota RAV4",
    category: "SUV",
    price: 60000,
    image: "/vehicules/rav4.png",
    features: ["5 portes", "Essence", "Automatique", "4x4"],
    isPromotion: false,
  },
  {
    id: 8,
    name: "Nissan X-Trail",
    category: "SUV",
    price: 65000,
    image: "/vehicules/x-trail.webp",
    features: ["5 portes", "Diesel", "Automatique", "4x4"],
    isPromotion: false,
  },
  {
    id: 9,
    name: "Toyota Fortuner",
    category: "SUV",
    price: 80000,
    image: "/vehicules/fortuner.png",
    features: ["7 places", "Diesel", "Automatique", "4x4"],
    isPromotion: true,
  },
]

export default function vehiclesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8">Nos Véhicules</h1>

      {/* Conditions de Location Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conditions de Location au Gabon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Documents Requis</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Permis de conduire valide (minimum 2 ans)</li>
              <li>Carte nationale d'identité ou passeport</li>
              <li>Justificatif de domicile récent</li>
              <li>Garantie financière (chèque de caution ou caution bancaire)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Conditions Spécifiques</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Âge minimum : 25 ans</li>
              <li>Assurance tous risques incluse</li>
              <li>Kilométrage illimité</li>
              <li>Assistance 24/7 sur tout le territoire</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Paiement et Tarifs</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Paiement en FCFA uniquement</li>
              <li>Caution de 200 000 FCFA à 500 000 FCFA selon le véhicule</li>
              <li>Réduction de 10% pour location longue durée (plus de 7 jours)</li>
              <li>Frais de carburant à la charge du locataire</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Zones de Circulation</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Libreville et ses environs</li>
              <li>Port-Gentil et sa région</li>
              <li>Franceville et le Haut-Ogooué</li>
              <li>Autres provinces sur demande spéciale</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input placeholder="Rechercher un véhicule..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Button>Rechercher</Button>
            <Button variant="outline" className="md:hidden">
              <Filter size={18} className="mr-2" />
              Filtres
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium">Type de véhicule</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="berline" />
                <label htmlFor="berline" className="text-sm">
                  Berline
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="suv" />
                <label htmlFor="suv" className="text-sm">
                  SUV
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="citadine" />
                <label htmlFor="citadine" className="text-sm">
                  Citadine
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="premium" />
                <label htmlFor="premium" className="text-sm">
                  Premium
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Carburant</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="essence" />
                <label htmlFor="essence" className="text-sm">
                  Essence
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="diesel" />
                <label htmlFor="diesel" className="text-sm">
                  Diesel
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hybride" />
                <label htmlFor="hybride" className="text-sm">
                  Hybride
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="electrique" />
                <label htmlFor="electrique" className="text-sm">
                  Électrique
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Transmission</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="manuelle" />
                <label htmlFor="manuelle" className="text-sm">
                  Manuelle
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="automatique" />
                <label htmlFor="automatique" className="text-sm">
                  Automatique
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Prix par jour</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="price-1" />
                <label htmlFor="price-1" className="text-sm">
                  Moins de 50€
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="price-2" />
                <label htmlFor="price-2" className="text-sm">
                  50€ - 75€
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="price-3" />
                <label htmlFor="price-3" className="text-sm">
                  75€ - 100€
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="price-4" />
                <label htmlFor="price-4" className="text-sm">
                  Plus de 100€
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="overflow-hidden">
            <div className="relative">
              <img src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} className="w-full h-48 object-cover" />
              {vehicle.isPromotion && <Badge className="absolute top-2 right-2 bg-red-500">Promotion</Badge>}
            </div>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                  <p className="text-muted-foreground">{vehicle.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary">
                    {vehicle.price.toLocaleString('fr-FR')} FCFA<span className="text-sm font-normal text-muted-foreground">/jour</span>
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, index) => (
                    <Badge key={index} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href={`/vehicules/${vehicle.id}`}>Détails</Link>
              </Button>
              <Button asChild>
                <Link href={`/location/rental/reserve/${vehicle.id}`}>Réserver</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
} 