import Link from "next/link"
import { ChevronLeft, Calendar, CreditCard, Shield, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

// This would normally come from a database
const getVehicle = (id: string) => {
  return {
    id: Number.parseInt(id),
    name: "Peugeot 3008",
    category: "SUV",
    price: 75,
    priceMonth: 1800,
    image: "/placeholder.svg?height=200&width=300",
    features: ["5 portes", "Diesel", "Automatique", "GPS"],
  }
}

export default function ReservationPage({ params }: { params: { id: string } }) {
  const vehicle = getVehicle(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href={`/vehicles/${vehicle.id}`} className="flex items-center text-primary hover:underline">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Retour aux détails du véhicule
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Réserver votre véhicule</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reservation Form */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Informations de location</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label htmlFor="start-date">Date de début</Label>
                  <div className="relative mt-1">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input id="start-date" type="date" className="pl-10" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="end-date">Date de fin</Label>
                  <div className="relative mt-1">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input id="end-date" type="date" className="pl-10" />
                  </div>
                </div>
              </div>

              <h3 className="font-medium mb-2">Options supplémentaires</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="gps" />
                  <label htmlFor="gps" className="text-sm">
                    GPS (+5€/jour)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="baby-seat" />
                  <label htmlFor="baby-seat" className="text-sm">
                    Siège bébé (+3€/jour)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="additional-driver" />
                  <label htmlFor="additional-driver" className="text-sm">
                    Conducteur additionnel (+8€/jour)
                  </label>
                </div>
              </div>

              <h3 className="font-medium mb-2">Assurance</h3>
              <RadioGroup defaultValue="basic">
                <div className="flex items-start space-x-2 mb-2">
                  <RadioGroupItem value="basic" id="basic" className="mt-1" />
                  <div>
                    <Label htmlFor="basic" className="font-medium">
                      Assurance de base (incluse)
                    </Label>
                    <p className="text-sm text-gray-500">Responsabilité civile et dommages avec franchise de 800€</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 mb-2">
                  <RadioGroupItem value="medium" id="medium" className="mt-1" />
                  <div>
                    <Label htmlFor="medium" className="font-medium">
                      Assurance intermédiaire (+10€/jour)
                    </Label>
                    <p className="text-sm text-gray-500">Franchise réduite à 400€, assistance 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="premium" id="premium" className="mt-1" />
                  <div>
                    <Label htmlFor="premium" className="font-medium">
                      Assurance premium (+18€/jour)
                    </Label>
                    <p className="text-sm text-gray-500">Zéro franchise, assistance 24/7, véhicule de remplacement</p>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="first-name">Prénom</Label>
                  <Input id="first-name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="last-name">Nom</Label>
                  <Input id="last-name" className="mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" className="mt-1" />
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" className="mt-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="postal-code">Code postal</Label>
                  <Input id="postal-code" className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="city">Ville</Label>
                  <Input id="city" className="mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Informations de paiement</h2>

              <div className="mb-4">
                <Label htmlFor="card-number">Numéro de carte</Label>
                <div className="relative mt-1">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="card-number" placeholder="1234 5678 9012 3456" className="pl-10" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="expiry">Date d'expiration</Label>
                  <Input id="expiry" placeholder="MM/AA" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" className="mt-1" />
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="name-on-card">Nom sur la carte</Label>
                <Input id="name-on-card" className="mt-1" />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="save-card" className="mt-1" />
                <div>
                  <Label htmlFor="save-card" className="font-medium">
                    Sauvegarder cette carte pour mes prochaines réservations
                  </Label>
                  <p className="text-sm text-gray-500">Vos informations de paiement sont sécurisées et cryptées</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reservation Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>

              <div className="flex items-center mb-4">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="font-medium">{vehicle.name}</h3>
                  <p className="text-gray-500">{vehicle.category}</p>
                </div>
              </div>

              <div className="border-t border-b py-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span>Dates</span>
                  <span>10/06/2023 - 17/06/2023</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Durée</span>
                  <span>7 jours</span>
                </div>
              </div>

              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span>Location ({vehicle.price}€ x 7 jours)</span>
                  <span>{vehicle.price * 7}€</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Assurance intermédiaire (10€ x 7 jours)</span>
                  <span>70€</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>GPS (5€ x 7 jours)</span>
                  <span>35€</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Frais de service</span>
                  <span>25€</span>
                </div>
              </div>

              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>{vehicle.price * 7 + 70 + 35 + 25}€</span>
              </div>

              <div className="bg-blue-50 p-4 rounded-md mb-6 flex items-start">
                <Info className="text-blue-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  Un dépôt de garantie de 800€ sera pré-autorisé sur votre carte mais non débité.
                </p>
              </div>

              <Button className="w-full" size="lg">
                Confirmer la réservation
              </Button>

              <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                <Shield className="h-4 w-4 mr-1 text-green-500" />
                Paiement sécurisé
              </div>
            </CardContent>
            <CardFooter className="px-6 py-4 bg-gray-50 text-sm text-gray-500">
              En confirmant, vous acceptez nos{" "}
              <Link href="/terms" className="text-primary hover:underline">
                conditions générales
              </Link>{" "}
              et notre{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                politique de confidentialité
              </Link>
              .
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
