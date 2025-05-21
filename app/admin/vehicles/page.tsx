"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Car, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  MoreVertical,
  Filter
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

// Données de démonstration (à remplacer par des données réelles)
const vehicles = [
  {
    id: 1,
    name: "Toyota Land Cruiser",
    category: "SUV",
    price: 150000,
    status: "available",
    location: "Libreville",
    lastMaintenance: "2024-02-15"
  },
  {
    id: 2,
    name: "BMW X5",
    category: "SUV",
    price: 180000,
    status: "rented",
    location: "Port-Gentil",
    lastMaintenance: "2024-02-10"
  },
  {
    id: 3,
    name: "Mercedes C200",
    category: "Berline",
    price: 120000,
    status: "maintenance",
    location: "Libreville",
    lastMaintenance: "2024-02-20"
  }
]

const statusColors = {
  available: "bg-green-100 text-green-700",
  rented: "bg-blue-100 text-blue-700",
  maintenance: "bg-yellow-100 text-yellow-700"
}

export default function VehiclesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null)

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vehicle.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vehicle.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = (vehicle: typeof vehicles[0]) => {
    setSelectedVehicle(vehicle)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    // TODO: Implémenter la suppression
    console.log("Suppression du véhicule:", selectedVehicle?.id)
    setIsDeleteDialogOpen(false)
    setSelectedVehicle(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestion des véhicules</h1>
          <p className="text-muted-foreground">
            Gérez votre flotte de véhicules
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/vehicles/add">
            <Plus className="mr-2 h-4 w-4" />
            Ajouter un véhicule
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher un véhicule..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Véhicule</TableHead>
              <TableHead>Catégorie</TableHead>
              <TableHead>Prix/jour</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Localisation</TableHead>
              <TableHead>Dernière maintenance</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell className="font-medium">{vehicle.name}</TableCell>
                <TableCell>{vehicle.category}</TableCell>
                <TableCell>{vehicle.price.toLocaleString('fr-FR')} FCFA</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={statusColors[vehicle.status as keyof typeof statusColors]}
                  >
                    {vehicle.status === "available" && "Disponible"}
                    {vehicle.status === "rented" && "En location"}
                    {vehicle.status === "maintenance" && "En maintenance"}
                  </Badge>
                </TableCell>
                <TableCell>{vehicle.location}</TableCell>
                <TableCell>{vehicle.lastMaintenance}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/vehicles/${vehicle.id}/edit`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Modifier
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => handleDelete(vehicle)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmer la suppression</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer le véhicule {selectedVehicle?.name} ?
              Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Annuler
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
            >
              Supprimer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 