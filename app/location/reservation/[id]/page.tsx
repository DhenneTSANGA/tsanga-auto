import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ReservationForm } from "./reservation-form"

// Base de données simulée des véhicules
const vehicles = [
  {
    id: 1,
    name: "Toyota Land Cruiser",
    category: "SUV Premium",
    price: 75000,
    images: ["/vehicules/land-cruiser.jpg"],
    conditions: {
      caution: 500000,
    },
    localisation: {
      telephone: "+241 01 23 45 67",
    },
  },
  {
    id: 2,
    name: "Toyota Hilux",
    category: "Pick-up",
    price: 65000,
    images: ["/vehicules/hilux.jpg"],
    conditions: {
      caution: 400000,
    },
    localisation: {
      telephone: "+241 01 23 45 67",
    },
  },
  {
    id: 3,
    name: "Nissan Patrol",
    category: "SUV Premium",
    price: 85000,
    images: ["/vehicules/patrol.jpg"],
    conditions: {
      caution: 600000,
    },
    localisation: {
      telephone: "+241 01 23 45 67",
    },
  },
  {
    id: 4,
    name: "Mitsubishi Pajero",
    category: "SUV",
    price: 70000,
    images: ["/vehicules/pajero.jpg"],
    conditions: {
      caution: 450000,
    },
    localisation: {
      telephone: "+241 01 23 45 67",
    },
  },
  {
    id: 5,
    name: "Toyota Corolla",
    category: "Berline",
    price: 45000,
    images: ["/vehicules/corolla.jpg"],
    conditions: {
      caution: 300000,
    },
    localisation: {
      telephone: "+241 01 23 45 67",
    },
  },
  {
    id: 6,
    name: "Suzuki Jimny",
    category: "4x4 Compact",
    price: 45000,
    images: ["/vehicules/jimny.jpg"],
    conditions: {
      caution: 300000,
    },
    localisation: {
      telephone: "+241 01 23 45 67",
    },
  },
]

interface ReservationPageProps {
  params: {
    id: string
  }
}

export default function ReservationPage({ params }: ReservationPageProps) {
  const vehicle = vehicles.find((v) => v.id === parseInt(params.id))

  if (!vehicle) {
    notFound()
  }

  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/vehicules/${vehicle.id}`}>
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Réservation - {vehicle.name}</h1>
      </div>

      <ReservationForm vehicle={vehicle} />
    </div>
  )
} 