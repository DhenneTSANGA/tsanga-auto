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
    name: "Renault Clio",
    category: "Berline",
    price: 45,
    image: "/placeholder.svg?height=200&width=300",
    features: ["5 portes", "Essence", "Manuelle", "Climatisation"],
    isPromotion: true,
  },
  {
    id: 2,
    name: "Peugeot 3008",
    category: "SUV",
    price: 75,
    image: "/placeholder.svg?height=200&width=300",
    features: ["5 portes", "Diesel", "Automatique", "GPS"],
    isPromotion: false,
  },
  {
    id: 3,
    name: "Citroën C3",
    category: "Berline",
    price: 40,
    image: "/placeholder.svg?height=200&width=300",
    features: ["5 portes", "Essence", "Manuelle", "Bluetooth"],
    isPromotion: false,
  },
  {
    id: 4,
    name: "BMW X5",
    category: "SUV Premium",
    price: 120,
    image: "/placeholder.svg?height=200&width=300",
    features: ["5 portes", "Diesel", "Automatique", "Cuir"],
    isPromotion: true,
  },
  {
    id: 5,
    name: "Mercedes Classe A",
    category: "Berline Premium",
    price: 95,
    image: "/placeholder.svg?height=200&width=300",
    features: ["5 portes", "Essence", "Automatique", "Toit ouvrant"],
    isPromotion: false,
  },
  {
    id: 6,
    name: "Fiat 500",
    category: "Citadine",
    price: 35,
    image: "/placeholder.svg?height=200&width=300",
    features: ["3 portes", "Essence", "Manuelle", "Bluetooth"],
    isPromotion: true,
  },
  {
    id: 7,
    name: "Volkswagen Golf",
    category: "Berline",
    price: 55,
    image: "/placeholder.svg?height=200&width=300",
    features: ["5 portes", "Diesel", "Manuelle", "GPS"],
    isPromotion: false,
  },
  {
    id: 8,
    name: "Audi A3",
    category: "Berline Premium",
    price: 85,
    image: "/placeholder.svg?height=200&width=300",
    features: ["5 portes", "Essence", "Automatique", "Cuir"],
    isPromotion: false,
  },
  {
    id: 9,
    name: "Toyota Yaris",
    category: "Citadine",
    price: 38,
    image: "/placeholder.svg?height=200&width=300",
    features: ["5 portes", "Hybride", "Automatique", "Bluetooth"],
    isPromotion: true,
  },
]

export default function VehiclesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nos Véhicules</h1>

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

      {/* Vehicles Grid */}
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
                    {vehicle.price}€<span className="text-sm font-normal text-muted-foreground">/jour</span>
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
                <Link href={`/vehicles/${vehicle.id}`}>Détails</Link>
              </Button>
              <Button asChild>
                <Link href={`/rental/reserve/${vehicle.id}`}>Réserver</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="flex items-center space-x-2">
          <Button variant="outline" size="icon" disabled>
            <span className="sr-only">Page précédente</span>
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
              className="h-4 w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-white">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="icon">
            <span className="sr-only">Page suivante</span>
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
              className="h-4 w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Button>
        </nav>
      </div>
    </div>
  )
}
