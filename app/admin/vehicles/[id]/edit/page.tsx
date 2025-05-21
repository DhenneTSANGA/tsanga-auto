"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import VehicleForm from "../../add/vehicle-form"

// TODO: Remplacer par un appel API réel
const getVehicle = async (id: string) => {
  // Simuler un délai de chargement
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Retourner des données de test
  return {
    id,
    name: "Toyota Land Cruiser 2023",
    category: "suv",
    price: 75000,
    location: "libreville",
    description: "Un SUV robuste et confortable, parfait pour les familles et les aventures.",
    images: [
      "/images/vehicles/land-cruiser-1.jpg",
      "/images/vehicles/land-cruiser-2.jpg"
    ],
    specifications: {
      brand: "Toyota",
      model: "Land Cruiser",
      year: 2023,
      transmission: "automatic",
      fuel: "diesel",
      seats: 7,
      doors: 5,
      luggage: 300,
      airConditioning: true,
      bluetooth: true,
      gps: true,
      cruiseControl: true
    },
    conditions: {
      caution: 500000,
      minAge: 21,
      licenseYears: 2
    }
  }
}

export default function EditVehiclePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [vehicle, setVehicle] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadVehicle = async () => {
      try {
        const data = await getVehicle(params.id)
        setVehicle(data)
      } catch (err) {
        console.error("Erreur lors du chargement du véhicule:", err)
        setError("Impossible de charger les données du véhicule")
      } finally {
        setIsLoading(false)
      }
    }

    loadVehicle()
  }, [params.id])

  const handleSubmit = async (data: any) => {
    try {
      // TODO: Implémenter l'appel API pour mettre à jour le véhicule
      console.log("Données du véhicule à mettre à jour:", data)
      
      // Simuler un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success("Véhicule mis à jour avec succès")
      router.push("/admin/vehicles")
    } catch (error) {
      console.error("Erreur lors de la mise à jour du véhicule:", error)
      toast.error("Une erreur est survenue lors de la mise à jour du véhicule")
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-6">
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
          <p>{error}</p>
          <button
            onClick={() => router.push("/admin/vehicles")}
            className="mt-4 text-sm underline"
          >
            Retour à la liste des véhicules
          </button>
        </div>
      </div>
    )
  }

  if (!vehicle) {
    return (
      <div className="container py-6">
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
          <p>Véhicule non trouvé</p>
          <button
            onClick={() => router.push("/admin/vehicles")}
            className="mt-4 text-sm underline"
          >
            Retour à la liste des véhicules
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Modifier le véhicule</h1>
        <p className="text-muted-foreground">
          Modifiez les informations du véhicule ci-dessous.
        </p>
      </div>

      <VehicleForm
        initialData={vehicle}
        onSubmit={handleSubmit}
        submitLabel="Enregistrer les modifications"
      />
    </div>
  )
} 