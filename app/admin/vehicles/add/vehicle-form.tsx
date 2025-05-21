"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { id: "suv", name: "SUV" },
  { id: "berline", name: "Berline" },
  { id: "citadine", name: "Citadine" },
  { id: "utilitaire", name: "Utilitaire" },
  { id: "luxe", name: "Luxe" }
]

const locations = [
  { id: "libreville", name: "Libreville" },
  { id: "port-gentil", name: "Port-Gentil" },
  { id: "franceville", name: "Franceville" }
]

interface VehicleFormProps {
  initialData?: any
  onSubmit: (data: any) => Promise<void>
  submitLabel?: string
}

export default function VehicleForm({
  initialData,
  onSubmit,
  submitLabel = "Ajouter le véhicule"
}: VehicleFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [images, setImages] = useState<File[]>([])
  const [existingImages, setExistingImages] = useState<string[]>(
    initialData?.images || []
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const vehicleData = {
        name: formData.get("name"),
        category: formData.get("category"),
        price: Number(formData.get("price")),
        location: formData.get("location"),
        description: formData.get("description"),
        specifications: {
          brand: formData.get("brand"),
          model: formData.get("model"),
          year: Number(formData.get("year")),
          transmission: formData.get("transmission"),
          fuel: formData.get("fuel"),
          seats: Number(formData.get("seats")),
          doors: Number(formData.get("doors")),
          luggage: Number(formData.get("luggage")),
          airConditioning: formData.get("airConditioning") === "on",
          bluetooth: formData.get("bluetooth") === "on",
          gps: formData.get("gps") === "on",
          cruiseControl: formData.get("cruiseControl") === "on"
        },
        conditions: {
          caution: Number(formData.get("caution")),
          minAge: Number(formData.get("minAge")),
          licenseYears: Number(formData.get("licenseYears"))
        },
        images: [...existingImages]
      }

      await onSubmit(vehicleData)
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files)
      setImages(prev => [...prev, ...newImages])
    }
  }

  const removeExistingImage = (index: number) => {
    setExistingImages(prev => prev.filter((_, i) => i !== index))
  }

  const removeNewImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Informations principales */}
      <Card>
        <CardHeader>
          <CardTitle>Informations principales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom du véhicule</Label>
              <Input
                id="name"
                name="name"
                defaultValue={initialData?.name}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Catégorie</Label>
              <Select name="category" defaultValue={initialData?.category} required>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Prix journalier (FCFA)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                min="0"
                defaultValue={initialData?.price}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Localisation</Label>
              <Select name="location" defaultValue={initialData?.location} required>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une localisation" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location.id} value={location.id}>
                      {location.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              rows={4}
              defaultValue={initialData?.description}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Images du véhicule</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {existingImages.map((image, index) => (
                <div
                  key={`existing-${index}`}
                  className="relative aspect-video rounded-lg border bg-muted"
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-6 w-6"
                    onClick={() => removeExistingImage(index)}
                  >
                    ×
                  </Button>
                </div>
              ))}
              {images.map((image, index) => (
                <div
                  key={`new-${index}`}
                  className="relative aspect-video rounded-lg border bg-muted"
                >
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index + 1}`}
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-6 w-6"
                    onClick={() => removeNewImage(index)}
                  >
                    ×
                  </Button>
                </div>
              ))}
              <label
                htmlFor="images"
                className="flex aspect-video cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed bg-muted hover:bg-muted/80"
              >
                <Upload className="h-8 w-8 text-muted-foreground" />
                <span className="mt-2 text-sm text-muted-foreground">
                  Ajouter une image
                </span>
                <input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spécifications */}
      <Card>
        <CardHeader>
          <CardTitle>Spécifications techniques</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brand">Marque</Label>
              <Input
                id="brand"
                name="brand"
                defaultValue={initialData?.specifications?.brand}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Modèle</Label>
              <Input
                id="model"
                name="model"
                defaultValue={initialData?.specifications?.model}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year">Année</Label>
              <Input
                id="year"
                name="year"
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                defaultValue={initialData?.specifications?.year}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transmission">Transmission</Label>
              <Select
                name="transmission"
                defaultValue={initialData?.specifications?.transmission}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manual">Manuelle</SelectItem>
                  <SelectItem value="automatic">Automatique</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fuel">Carburant</Label>
              <Select
                name="fuel"
                defaultValue={initialData?.specifications?.fuel}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="essence">Essence</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="hybrid">Hybride</SelectItem>
                  <SelectItem value="electric">Électrique</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="seats">Nombre de places</Label>
              <Input
                id="seats"
                name="seats"
                type="number"
                min="1"
                max="9"
                defaultValue={initialData?.specifications?.seats}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="doors">Nombre de portes</Label>
              <Input
                id="doors"
                name="doors"
                type="number"
                min="2"
                max="5"
                defaultValue={initialData?.specifications?.doors}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="luggage">Volume bagages (L)</Label>
              <Input
                id="luggage"
                name="luggage"
                type="number"
                min="0"
                defaultValue={initialData?.specifications?.luggage}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="airConditioning"
                name="airConditioning"
                defaultChecked={initialData?.specifications?.airConditioning}
                className="h-4 w-4 rounded border-gray-300"
              />
              <Label htmlFor="airConditioning">Climatisation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="bluetooth"
                name="bluetooth"
                defaultChecked={initialData?.specifications?.bluetooth}
                className="h-4 w-4 rounded border-gray-300"
              />
              <Label htmlFor="bluetooth">Bluetooth</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="gps"
                name="gps"
                defaultChecked={initialData?.specifications?.gps}
                className="h-4 w-4 rounded border-gray-300"
              />
              <Label htmlFor="gps">GPS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="cruiseControl"
                name="cruiseControl"
                defaultChecked={initialData?.specifications?.cruiseControl}
                className="h-4 w-4 rounded border-gray-300"
              />
              <Label htmlFor="cruiseControl">Régulateur</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conditions de location */}
      <Card>
        <CardHeader>
          <CardTitle>Conditions de location</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="caution">Caution (FCFA)</Label>
              <Input
                id="caution"
                name="caution"
                type="number"
                min="0"
                defaultValue={initialData?.conditions?.caution}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="minAge">Âge minimum</Label>
              <Input
                id="minAge"
                name="minAge"
                type="number"
                min="18"
                defaultValue={initialData?.conditions?.minAge}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="licenseYears">Années de permis</Label>
              <Input
                id="licenseYears"
                name="licenseYears"
                type="number"
                min="0"
                defaultValue={initialData?.conditions?.licenseYears}
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
        >
          Annuler
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enregistrement..." : submitLabel}
        </Button>
      </div>
    </form>
  )
} 