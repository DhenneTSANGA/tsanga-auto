import Link from "next/link"
import { Calendar, Check, ChevronLeft, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// This would normally come from a database
const getVehicle = (id: string) => {
  return {
    id: Number.parseInt(id),
    name: "Peugeot 3008",
    category: "SUV",
    price: 75,
    priceMonth: 1800,
    purchasePrice: 28500,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "Le Peugeot 3008 est un SUV compact qui allie style, confort et technologie. Avec son design élégant et ses fonctionnalités avancées, il est parfait pour les trajets urbains comme pour les longues distances.",
    features: [
      "5 portes",
      "Diesel",
      "Automatique",
      "GPS",
      "Climatisation",
      "Bluetooth",
      "Caméra de recul",
      "Régulateur de vitesse",
    ],
    specifications: {
      engine: "2.0 BlueHDi",
      power: "150 ch",
      transmission: "Automatique",
      fuelType: "Diesel",
      consumption: "5.2 L/100km",
      emissions: "136 g/km CO2",
      dimensions: "4.45m x 1.84m x 1.62m",
      trunk: "520 L",
      seats: 5,
    },
    availability: true,
    reviews: [
      {
        name: "Thomas D.",
        rating: 5,
        comment:
          "Excellent véhicule, très confortable et économique. Je le recommande vivement pour les longs trajets.",
        date: "15/03/2023",
      },
      {
        name: "Sophie M.",
        rating: 4,
        comment:
          "Très bon SUV, spacieux et agréable à conduire. Seul bémol : la consommation en ville est un peu élevée.",
        date: "22/01/2023",
      },
    ],
  }
}

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const vehicle = getVehicle(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/vehicles" className="flex items-center text-primary hover:underline">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Retour aux véhicules
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Vehicle Images and Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <img
              src={vehicle.images[0] || "/placeholder.svg"}
              alt={vehicle.name}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold">{vehicle.name}</h1>
                  <p className="text-gray-500">{vehicle.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">
                    {vehicle.price}€<span className="text-sm font-normal text-gray-500">/jour</span>
                  </p>
                  <p className="text-gray-500">{vehicle.priceMonth}€/mois en LLD</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {vehicle.features.map((feature, index) => (
                  <Badge key={index} variant="secondary">
                    {feature}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-700 mb-6">{vehicle.description}</p>

              <Tabs defaultValue="specifications">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="specifications">Spécifications</TabsTrigger>
                  <TabsTrigger value="rental">Location</TabsTrigger>
                  <TabsTrigger value="purchase">Achat</TabsTrigger>
                </TabsList>
                <TabsContent value="specifications" className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Moteur</span>
                        <span className="font-medium">{vehicle.specifications.engine}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Puissance</span>
                        <span className="font-medium">{vehicle.specifications.power}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Transmission</span>
                        <span className="font-medium">{vehicle.specifications.transmission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Carburant</span>
                        <span className="font-medium">{vehicle.specifications.fuelType}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Consommation</span>
                        <span className="font-medium">{vehicle.specifications.consumption}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Émissions CO2</span>
                        <span className="font-medium">{vehicle.specifications.emissions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Dimensions</span>
                        <span className="font-medium">{vehicle.specifications.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Volume coffre</span>
                        <span className="font-medium">{vehicle.specifications.trunk}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="rental" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Location Courte Durée</h4>
                        <p className="text-gray-600">
                          À partir de {vehicle.price}€/jour, kilométrage limité à 200km/jour
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Location Longue Durée</h4>
                        <p className="text-gray-600">
                          À partir de {vehicle.priceMonth}€/mois, engagement minimum de 12 mois
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Assurance Incluse</h4>
                        <p className="text-gray-600">Assurance tous risques avec franchise de 800€</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Options Supplémentaires</h4>
                        <p className="text-gray-600">Siège bébé, GPS, chaînes à neige disponibles en supplément</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="purchase" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Prix d'Achat</h4>
                        <p className="text-gray-600">{vehicle.purchasePrice}€, financement possible sur 12 à 60 mois</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Garantie</h4>
                        <p className="text-gray-600">Garantie constructeur de 3 ans ou 100 000 km</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Entretien</h4>
                        <p className="text-gray-600">Premier entretien offert, contrat d'entretien disponible</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Reprise</h4>
                        <p className="text-gray-600">Possibilité de reprise de votre ancien véhicule</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Avis Clients</h2>
            {vehicle.reviews.map((review, index) => (
              <div key={index} className={`${index > 0 ? "border-t pt-4 mt-4" : ""}`}>
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">{review.name}</h3>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < review.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${i < review.rating ? "text-yellow-400" : "text-gray-300"} mr-1`}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reservation Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Réserver ce véhicule</h2>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Date de début</label>
                  <div className="relative">
                    <input type="date" className="w-full p-2 border rounded-md pl-10" />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Date de fin</label>
                  <div className="relative">
                    <input type="date" className="w-full p-2 border rounded-md pl-10" />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
              </div>

              <div className="border-t border-b py-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Prix journalier</span>
                  <span>{vehicle.price}€</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Durée estimée</span>
                  <span>7 jours</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total estimé</span>
                  <span>{vehicle.price * 7}€</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg" asChild>
                  <Link href={`/rental/reserve/${vehicle.id}`}>Réserver maintenant</Link>
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link href={`/contact?vehicle=${vehicle.id}`}>Demander plus d'informations</Link>
                </Button>
              </div>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Besoin d'aide pour réserver ?</p>
                <p className="font-medium text-primary">Appelez-nous au 01 23 45 67 89</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
