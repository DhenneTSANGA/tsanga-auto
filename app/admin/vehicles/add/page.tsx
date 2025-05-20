import Link from "next/link"
import { ChevronLeft, Upload, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function AddVehiclePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/admin/vehicles" className="flex items-center text-primary hover:underline">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Retour à la liste des véhicules
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Ajouter un nouveau véhicule</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Informations générales</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="brand">Marque</Label>
                  <Select>
                    <SelectTrigger id="brand">
                      <SelectValue placeholder="Sélectionner une marque" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="renault">Renault</SelectItem>
                      <SelectItem value="peugeot">Peugeot</SelectItem>
                      <SelectItem value="citroen">Citroën</SelectItem>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes</SelectItem>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="volkswagen">Volkswagen</SelectItem>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="fiat">Fiat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="model">Modèle</Label>
                  <Input id="model" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <Label htmlFor="year">Année</Label>
                  <Input id="year" type="number" />
                </div>
                <div>
                  <Label htmlFor="mileage">Kilométrage</Label>
                  <Input id="mileage" type="number" />
                </div>
                <div>
                  <Label htmlFor="registration">Immatriculation</Label>
                  <Input id="registration" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="category">Catégorie</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Sélectionner une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="berline">Berline</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="citadine">Citadine</SelectItem>
                      <SelectItem value="break">Break</SelectItem>
                      <SelectItem value="cabriolet">Cabriolet</SelectItem>
                      <SelectItem value="utilitaire">Utilitaire</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="seats">Nombre de places</Label>
                  <Input id="seats" type="number" />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" className="mt-1" rows={4} />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Caractéristiques techniques</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="fuel-type">Type de carburant</Label>
                  <Select>
                    <SelectTrigger id="fuel-type">
                      <SelectValue placeholder="Sélectionner un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essence">Essence</SelectItem>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="hybride">Hybride</SelectItem>
                      <SelectItem value="electrique">Électrique</SelectItem>
                      <SelectItem value="gpl">GPL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="transmission">Transmission</Label>
                  <Select>
                    <SelectTrigger id="transmission">
                      <SelectValue placeholder="Sélectionner un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manuelle">Manuelle</SelectItem>
                      <SelectItem value="automatique">Automatique</SelectItem>
                      <SelectItem value="semi-auto">Semi-automatique</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <Label htmlFor="engine">Moteur</Label>
                  <Input id="engine" />
                </div>
                <div>
                  <Label htmlFor="power">Puissance (ch)</Label>
                  <Input id="power" type="number" />
                </div>
                <div>
                  <Label htmlFor="consumption">Consommation (L/100km)</Label>
                  <Input id="consumption" type="number" step="0.1" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="emissions">Émissions CO2 (g/km)</Label>
                  <Input id="emissions" type="number" />
                </div>
                <div>
                  <Label htmlFor="trunk">Volume coffre (L)</Label>
                  <Input id="trunk" type="number" />
                </div>
              </div>

              <h3 className="font-medium mt-6 mb-2">Équipements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="air-conditioning" />
                  <label htmlFor="air-conditioning" className="text-sm">
                    Climatisation
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="gps" />
                  <label htmlFor="gps" className="text-sm">
                    GPS
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="bluetooth" />
                  <label htmlFor="bluetooth" className="text-sm">
                    Bluetooth
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="parking-sensors" />
                  <label htmlFor="parking-sensors" className="text-sm">
                    Capteurs de stationnement
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="rear-camera" />
                  <label htmlFor="rear-camera" className="text-sm">
                    Caméra de recul
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cruise-control" />
                  <label htmlFor="cruise-control" className="text-sm">
                    Régulateur de vitesse
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="leather-seats" />
                  <label htmlFor="leather-seats" className="text-sm">
                    Sièges en cuir
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="sunroof" />
                  <label htmlFor="sunroof" className="text-sm">
                    Toit ouvrant
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="heated-seats" />
                  <label htmlFor="heated-seats" className="text-sm">
                    Sièges chauffants
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Photos du véhicule</h2>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
                <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 mb-2">Glissez-déposez des images ou cliquez pour parcourir</p>
                <p className="text-gray-400 text-sm">PNG, JPG ou WEBP (max. 5MB)</p>
                <Button variant="outline" className="mt-4">
                  Parcourir les fichiers
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src="/placeholder.svg?height=100&width=150"
                    alt="Aperçu du véhicule"
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="destructive" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src="/placeholder.svg?height=100&width=150"
                    alt="Aperçu du véhicule"
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="destructive" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Tarification</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <Label htmlFor="daily-price">Prix journalier (€)</Label>
                  <Input id="daily-price" type="number" />
                </div>
                <div>
                  <Label htmlFor="weekly-price">Prix hebdomadaire (€)</Label>
                  <Input id="weekly-price" type="number" />
                </div>
                <div>
                  <Label htmlFor="monthly-price">Prix mensuel (€)</Label>
                  <Input id="monthly-price" type="number" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="purchase-price">Prix d'achat (€)</Label>
                  <Input id="purchase-price" type="number" />
                </div>
                <div>
                  <Label htmlFor="deposit">Caution (€)</Label>
                  <Input id="deposit" type="number" />
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <Checkbox id="promotion" />
                <div>
                  <Label htmlFor="promotion">Mettre en promotion</Label>
                  <p className="text-sm text-gray-500">
                    Le véhicule sera affiché dans la section "Promotions" sur la page d'accueil
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Résumé</h2>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-medium text-sm text-gray-500">Statut</h3>
                  <div className="flex items-center mt-1">
                    <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                    <span>Brouillon</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-gray-500">Disponibilité</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Checkbox id="availability" />
                    <label htmlFor="availability">Disponible à la location</label>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-gray-500">Emplacement</h3>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Sélectionner un emplacement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paris">Paris</SelectItem>
                      <SelectItem value="lyon">Lyon</SelectItem>
                      <SelectItem value="marseille">Marseille</SelectItem>
                      <SelectItem value="bordeaux">Bordeaux</SelectItem>
                      <SelectItem value="lille">Lille</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  Enregistrer le véhicule
                </Button>
                <Button variant="outline" className="w-full">
                  Aperçu
                </Button>
                <Button variant="ghost" className="w-full text-gray-500">
                  Annuler
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
