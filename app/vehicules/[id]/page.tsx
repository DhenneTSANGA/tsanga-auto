import Link from "next/link"
import { Calendar, Check, ChevronLeft, Info, MapPin, Phone, Shield, Tool } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Base de données simulée des véhicules
const vehicles = {
  "1": {
    id: 1,
    name: "Toyota Land Cruiser",
    category: "SUV",
    price: 75000,
    images: [
      "/vehicules/land-cruiser.jpg",
      "/vehicules/land-cruiser-interior.jpg",
      "/vehicules/land-cruiser-back.jpg",
    ],
    features: ["5 portes", "Diesel", "Automatique", "4x4"],
    isPromotion: true,
    description: "Le Toyota Land Cruiser est le SUV par excellence pour les conditions gabonaises. Sa robustesse et sa fiabilité en font le véhicule idéal pour tous vos déplacements, que ce soit en ville ou sur les pistes.",
    specifications: {
      motorisation: "4.5L V8 Diesel",
      puissance: "272 ch",
      transmission: "Automatique 6 rapports",
      traction: "4x4 permanent",
      consommation: "11.5L/100km",
      reservoir: "93L",
      longueur: "4950 mm",
      largeur: "1970 mm",
      hauteur: "1880 mm",
      capacite: "7 places",
      bagages: "1041L",
    },
    equipements: [
      "Climatisation automatique",
      "Système audio premium",
      "Caméra de recul",
      "Régulateur de vitesse",
      "Sièges en cuir",
      "Toit ouvrant panoramique",
      "Système de navigation",
      "Bluetooth",
      "Apple CarPlay/Android Auto",
      "Capteurs de stationnement",
      "Phares LED",
      "Jantes alliage 18 pouces",
    ],
    securite: [
      "7 airbags",
      "ABS",
      "ESP",
      "Contrôle de stabilité",
      "Aide au freinage d'urgence",
      "Détecteur de fatigue",
      "Système de surveillance des angles morts",
      "Freinage automatique d'urgence",
    ],
    disponibilite: {
      status: "Disponible",
      prochaineDisponibilite: "2024-03-20",
      dureeMinimale: "2 jours",
      dureeMaximale: "30 jours",
    },
    conditions: {
      caution: 500000,
      kilometrage: "Illimité",
      assurance: "Tous risques inclus",
      carburant: "Plein départ et retour",
      ageMinimum: 25,
      permisMinimum: "2 ans",
    },
    localisation: {
      agence: "Libreville Centre",
      adresse: "Quartier Nzeng-Ayong, Libreville",
      telephone: "+241 01 23 45 67",
      email: "libreville@tsanga-auto.ga",
    },
  },
  "2": {
    id: 2,
    name: "Toyota Hilux",
    category: "Pick-up",
    price: 65000,
    images: [
      "/vehicules/hilux.jpg",
      "/vehicules/hilux-interior.jpg",
      "/vehicules/hilux-back.jpg",
    ],
    features: ["4 portes", "Diesel", "Manuelle", "4x4"],
    isPromotion: false,
    description: "Le Toyota Hilux est le pick-up le plus fiable pour les conditions difficiles du Gabon. Sa robustesse légendaire et sa capacité de charge en font le véhicule idéal pour les professionnels et les aventuriers.",
    specifications: {
      motorisation: "2.8L Diesel",
      puissance: "204 ch",
      transmission: "Manuelle 6 rapports",
      traction: "4x4 sélectif",
      consommation: "8.5L/100km",
      reservoir: "80L",
      longueur: "5330 mm",
      largeur: "1855 mm",
      hauteur: "1815 mm",
      capacite: "5 places",
      bagages: "1061L",
    },
    equipements: [
      "Climatisation",
      "Système audio",
      "Caméra de recul",
      "Régulateur de vitesse",
      "Sièges en tissu",
      "Bluetooth",
      "Capteurs de stationnement",
      "Phares LED",
      "Jantes acier 17 pouces",
    ],
    securite: [
      "7 airbags",
      "ABS",
      "ESP",
      "Contrôle de stabilité",
      "Aide au freinage d'urgence",
      "Détecteur de fatigue",
    ],
    disponibilite: {
      status: "Disponible",
      prochaineDisponibilite: "2024-03-18",
      dureeMinimale: "2 jours",
      dureeMaximale: "30 jours",
    },
    conditions: {
      caution: 400000,
      kilometrage: "Illimité",
      assurance: "Tous risques inclus",
      carburant: "Plein départ et retour",
      ageMinimum: 25,
      permisMinimum: "2 ans",
    },
    localisation: {
      agence: "Libreville Centre",
      adresse: "Quartier Nzeng-Ayong, Libreville",
      telephone: "+241 01 23 45 67",
      email: "libreville@tsanga-auto.ga",
    },
  },
  "3": {
    id: 3,
    name: "Nissan Patrol",
    category: "SUV",
    price: 85000,
    images: [
      "/vehicules/patrol.jpg",
      "/vehicules/patrol-interior.jpg",
      "/vehicules/patrol-back.jpg",
    ],
    features: ["5 portes", "Diesel", "Automatique", "4x4"],
    isPromotion: true,
    description: "Le Nissan Patrol est un SUV de luxe offrant un confort exceptionnel tout en conservant des capacités tout-terrain remarquables. Parfait pour les familles exigeantes et les voyages longue distance.",
    specifications: {
      motorisation: "4.0L V6 Diesel",
      puissance: "275 ch",
      transmission: "Automatique 7 rapports",
      traction: "4x4 permanent",
      consommation: "12.0L/100km",
      reservoir: "100L",
      longueur: "5165 mm",
      largeur: "1995 mm",
      hauteur: "1940 mm",
      capacite: "7 places",
      bagages: "1134L",
    },
    equipements: [
      "Climatisation quadri-zone",
      "Système audio Bose",
      "Caméra 360°",
      "Régulateur de vitesse adaptatif",
      "Sièges en cuir",
      "Toit panoramique",
      "Système de navigation",
      "Bluetooth",
      "Apple CarPlay/Android Auto",
      "Capteurs de stationnement",
      "Phares LED",
      "Jantes alliage 20 pouces",
    ],
    securite: [
      "8 airbags",
      "ABS",
      "ESP",
      "Contrôle de stabilité",
      "Aide au freinage d'urgence",
      "Détecteur de fatigue",
      "Système de surveillance des angles morts",
      "Freinage automatique d'urgence",
      "Caméra de recul",
    ],
    disponibilite: {
      status: "Disponible",
      prochaineDisponibilite: "2024-03-22",
      dureeMinimale: "2 jours",
      dureeMaximale: "30 jours",
    },
    conditions: {
      caution: 600000,
      kilometrage: "Illimité",
      assurance: "Tous risques inclus",
      carburant: "Plein départ et retour",
      ageMinimum: 25,
      permisMinimum: "2 ans",
    },
    localisation: {
      agence: "Libreville Centre",
      adresse: "Quartier Nzeng-Ayong, Libreville",
      telephone: "+241 01 23 45 67",
      email: "libreville@tsanga-auto.ga",
    },
  },
  "4": {
    id: 4,
    name: "Mitsubishi Pajero",
    category: "SUV",
    price: 70000,
    images: [
      "/vehicules/pajero.jpg",
      "/vehicules/pajero-interior.jpg",
      "/vehicules/pajero-back.jpg",
    ],
    features: ["5 portes", "Diesel", "Automatique", "4x4"],
    isPromotion: false,
    description: "Le Mitsubishi Pajero est un SUV robuste et polyvalent, parfaitement adapté aux conditions gabonaises. Son système 4x4 sophistiqué et sa fiabilité en font un véhicule de choix pour l'exploration.",
    specifications: {
      motorisation: "3.2L Diesel",
      puissance: "200 ch",
      transmission: "Automatique 5 rapports",
      traction: "4x4 Super Select",
      consommation: "9.5L/100km",
      reservoir: "88L",
      longueur: "4900 mm",
      largeur: "1875 mm",
      hauteur: "1900 mm",
      capacite: "7 places",
      bagages: "966L",
    },
    equipements: [
      "Climatisation automatique",
      "Système audio",
      "Caméra de recul",
      "Régulateur de vitesse",
      "Sièges en cuir",
      "Système de navigation",
      "Bluetooth",
      "Capteurs de stationnement",
      "Phares LED",
      "Jantes alliage 18 pouces",
    ],
    securite: [
      "7 airbags",
      "ABS",
      "ESP",
      "Contrôle de stabilité",
      "Aide au freinage d'urgence",
      "Détecteur de fatigue",
      "Système de surveillance des angles morts",
    ],
    disponibilite: {
      status: "Disponible",
      prochaineDisponibilite: "2024-03-19",
      dureeMinimale: "2 jours",
      dureeMaximale: "30 jours",
    },
    conditions: {
      caution: 450000,
      kilometrage: "Illimité",
      assurance: "Tous risques inclus",
      carburant: "Plein départ et retour",
      ageMinimum: 25,
      permisMinimum: "2 ans",
    },
    localisation: {
      agence: "Libreville Centre",
      adresse: "Quartier Nzeng-Ayong, Libreville",
      telephone: "+241 01 23 45 67",
      email: "libreville@tsanga-auto.ga",
    },
  },
  "5": {
    id: 5,
    name: "Suzuki Jimny",
    category: "4x4",
    price: 45000,
    images: [
      "/vehicules/jimny.jpg",
      "/vehicules/jimny-interior.jpg",
      "/vehicules/jimny-back.jpg",
    ],
    features: ["3 portes", "Essence", "Manuelle", "4x4"],
    isPromotion: true,
    description: "Le Suzuki Jimny est un petit 4x4 agile et maniable, parfait pour la ville tout en conservant d'excellentes capacités tout-terrain. Idéal pour les petits budgets et les aventuriers urbains.",
    specifications: {
      motorisation: "1.5L Essence",
      puissance: "102 ch",
      transmission: "Manuelle 5 rapports",
      traction: "4x4 sélectif",
      consommation: "6.4L/100km",
      reservoir: "40L",
      longueur: "3645 mm",
      largeur: "1645 mm",
      hauteur: "1725 mm",
      capacite: "4 places",
      bagages: "377L",
    },
    equipements: [
      "Climatisation",
      "Système audio",
      "Caméra de recul",
      "Bluetooth",
      "Sièges en tissu",
      "Phares LED",
      "Jantes acier 15 pouces",
    ],
    securite: [
      "6 airbags",
      "ABS",
      "ESP",
      "Contrôle de stabilité",
      "Aide au freinage d'urgence",
    ],
    disponibilite: {
      status: "Disponible",
      prochaineDisponibilite: "2024-03-21",
      dureeMinimale: "2 jours",
      dureeMaximale: "30 jours",
    },
    conditions: {
      caution: 300000,
      kilometrage: "Illimité",
      assurance: "Tous risques inclus",
      carburant: "Plein départ et retour",
      ageMinimum: 25,
      permisMinimum: "2 ans",
    },
    localisation: {
      agence: "Libreville Centre",
      adresse: "Quartier Nzeng-Ayong, Libreville",
      telephone: "+241 01 23 45 67",
      email: "libreville@tsanga-auto.ga",
    },
  }
}

export default async function VehicleDetailPage(props: { params: { id: string } }) {
  const { id } = props.params;
  const vehicle = vehicles[id as keyof typeof vehicles];

  if (!vehicle) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Véhicule non trouvé</h1>
        <p className="mt-4">Le véhicule que vous recherchez n'existe pas ou a été retiré.</p>
        <Button asChild className="mt-4">
          <Link href="/vehicules">Retour à la liste des véhicules</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Navigation */}
      <div className="mb-6">
        <Link href="/vehicules" className="flex items-center text-primary hover:underline">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Retour à la liste des véhicules
        </Link>
      </div>

      {/* En-tête */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Galerie d'images */}
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={vehicle.images[0]}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
            {vehicle.isPromotion && (
              <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                Promotion
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {vehicle.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <img src={image} alt={`${vehicle.name} - Vue ${index + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Informations principales */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{vehicle.name}</h1>
            <p className="text-xl text-muted-foreground">{vehicle.category}</p>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">
              {vehicle.price.toLocaleString('fr-FR')} FCFA
            </span>
            <span className="text-muted-foreground">/jour</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {vehicle.features.map((feature, index) => (
              <Badge key={index} variant="secondary">
                {feature}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground">{vehicle.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Disponible immédiatement</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Assurance tous risques incluse</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{vehicle.localisation.agence}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1" asChild>
              <Link href={`/location/reservation/${vehicle.id}`}>
                Réserver maintenant
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="flex-1" asChild>
              <Link href={`tel:${vehicle.localisation.telephone}`}>
                <Phone className="h-4 w-4 mr-2" />
                Nous appeler
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Onglets d'information détaillée */}
      <Tabs defaultValue="specifications" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="specifications">Spécifications</TabsTrigger>
          <TabsTrigger value="equipements">Équipements</TabsTrigger>
          <TabsTrigger value="securite">Sécurité</TabsTrigger>
          <TabsTrigger value="conditions">Conditions</TabsTrigger>
        </TabsList>

        <TabsContent value="specifications">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(vehicle.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="equipements">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vehicle.equipements.map((equipement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{equipement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="securite">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vehicle.securite.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conditions">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Conditions de location</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(vehicle.conditions).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-muted-foreground">
                          {typeof value === 'number' ? `${value.toLocaleString('fr-FR')} FCFA` : value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Localisation</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{vehicle.localisation.adresse}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href={`tel:${vehicle.localisation.telephone}`} className="hover:underline">
                        {vehicle.localisation.telephone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-primary" />
                      <a href={`mailto:${vehicle.localisation.email}`} className="hover:underline">
                        {vehicle.localisation.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Section disponibilité */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Disponibilité</h3>
              <p className="text-muted-foreground">
                Prochaine disponibilité : {new Date(vehicle.disponibilite.prochaineDisponibilite).toLocaleDateString('fr-FR')}
              </p>
            </div>
            <Button asChild>
              <Link href={`/location/reservation/${vehicle.id}`}>
                <Calendar className="h-4 w-4 mr-2" />
                Vérifier la disponibilité
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Section assistance */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Tool className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Assistance 24/7</h3>
              <p className="text-muted-foreground mb-4">
                Notre équipe d'assistance est disponible 24h/24 et 7j/7 pour vous aider en cas de besoin.
                Que ce soit pour une panne, un accident ou une simple question, nous sommes là pour vous.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Contacter l'assistance</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 