"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"
import VehicleForm from "./vehicle-form"

export default function AddVehiclePage() {
  const router = useRouter()

  const handleSubmit = async (data: any) => {
    try {
      // TODO: Implémenter l'appel API pour créer le véhicule
      console.log("Données du véhicule:", data)
      
      // Simuler un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success("Véhicule ajouté avec succès")
      router.push("/admin/vehicles")
    } catch (error) {
      console.error("Erreur lors de l'ajout du véhicule:", error)
      toast.error("Une erreur est survenue lors de l'ajout du véhicule")
    }
  }

  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Ajouter un véhicule</h1>
        <p className="text-muted-foreground">
          Remplissez le formulaire ci-dessous pour ajouter un nouveau véhicule à la flotte.
        </p>
      </div>

      <VehicleForm onSubmit={handleSubmit} />
    </div>
  )
}
