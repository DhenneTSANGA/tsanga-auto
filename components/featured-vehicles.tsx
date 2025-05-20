"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
]

export default function FeaturedVehicles() {
  const [currentPage, setCurrentPage] = useState(0)
  const vehiclesPerPage = 3
  const pageCount = Math.ceil(vehicles.length / vehiclesPerPage)

  const displayedVehicles = vehicles.slice(currentPage * vehiclesPerPage, (currentPage + 1) * vehiclesPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Véhicules Populaires</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={prevPage} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextPage} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden bg-card">
              <div className="relative">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
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

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/vehicles">Voir tous les véhicules</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
