"use client"

import { useState } from "react"
import { format, addDays, differenceInDays } from "date-fns"
import { fr } from "date-fns/locale"
import { Calendar, ChevronLeft, Clock, CreditCard, MapPin, Phone, Shield, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// Types
interface Vehicle {
  id: number
  name: string
  category: string
  price: number
  images: string[]
  conditions: {
    caution: number
  }
  localisation: {
    telephone: string
  }
}

interface ReservationFormProps {
  vehicle: Vehicle
}

// Types de paiement acceptés
const paymentMethods = [
  { id: "cash", name: "Espèces" },
  { id: "card", name: "Carte bancaire" },
  { id: "transfer", name: "Virement bancaire" },
  { id: "mobile", name: "Mobile Money" },
]

// Agences disponibles
const agencies = [
  { id: "libreville", name: "Libreville Centre", address: "Quartier Nzeng-Ayong, Libreville" },
  { id: "port-gentil", name: "Port-Gentil", address: "Quartier Alénakiri, Port-Gentil" },
  { id: "franceville", name: "Franceville", address: "Quartier Mvou-Mvou, Franceville" },
]

export function ReservationForm({ vehicle }: ReservationFormProps) {
  // État du formulaire
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [duration, setDuration] = useState<string>("")
  const [agency, setAgency] = useState<string>("")
  const [paymentMethod, setPaymentMethod] = useState<string>("")

  // Calcul du prix total
  const calculateTotal = () => {
    if (!startDate || !endDate) return 0
    const days = differenceInDays(endDate, startDate)
    return days * vehicle.price
  }

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // TODO: Implémenter la logique de soumission
    console.log({
      vehicleId: vehicle.id,
      startDate,
      endDate,
      duration,
      agency,
      paymentMethod,
      total: calculateTotal(),
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Formulaire de réservation */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-6">Réserver votre véhicule</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informations personnelles */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informations personnelles
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Adresse</Label>
                  <Textarea id="address" required />
                </div>
              </div>

              {/* Dates de location */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Dates de location
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date de début</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !startDate && "text-muted-foreground"
                          )}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP", { locale: fr }) : "Sélectionner une date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CalendarComponent
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                          locale={fr}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Date de fin</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP", { locale: fr }) : "Sélectionner une date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CalendarComponent
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                          locale={fr}
                          disabled={(date) => 
                            date < (startDate || new Date()) || 
                            date > addDays(startDate || new Date(), 30)
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Durée de location</Label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une durée" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 jours</SelectItem>
                      <SelectItem value="3">3 jours</SelectItem>
                      <SelectItem value="7">1 semaine</SelectItem>
                      <SelectItem value="14">2 semaines</SelectItem>
                      <SelectItem value="30">1 mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Agence de retrait */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Agence de retrait
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="agency">Agence</Label>
                  <Select value={agency} onValueChange={setAgency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une agence" />
                    </SelectTrigger>
                    <SelectContent>
                      {agencies.map((agency) => (
                        <SelectItem key={agency.id} value={agency.id}>
                          {agency.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Mode de paiement */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Mode de paiement
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="payment">Méthode de paiement</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un mode de paiement" />
                    </SelectTrigger>
                    <SelectContent>
                      {paymentMethods.map((method) => (
                        <SelectItem key={method.id} value={method.id}>
                          {method.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Commentaires */}
              <div className="space-y-2">
                <Label htmlFor="comments">Commentaires ou demandes spéciales</Label>
                <Textarea id="comments" placeholder="Facultatif" />
              </div>

              <Button type="submit" className="w-full">
                Confirmer la réservation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Résumé de la réservation */}
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">Résumé de la réservation</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-medium">{vehicle.name}</h4>
                  <p className="text-sm text-muted-foreground">{vehicle.category}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Prix journalier</span>
                  <span>{vehicle.price.toLocaleString('fr-FR')} FCFA</span>
                </div>
                {startDate && endDate && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Durée</span>
                      <span>{differenceInDays(endDate, startDate)} jours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total location</span>
                      <span>{calculateTotal().toLocaleString('fr-FR')} FCFA</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Caution</span>
                  <span>{vehicle.conditions.caution.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total à payer</span>
                    <span>
                      {startDate && endDate
                        ? (calculateTotal() + vehicle.conditions.caution).toLocaleString('fr-FR')
                        : "À calculer"}{" "}
                      FCFA
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5" />
                  <span>Kilométrage illimité inclus</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 mt-0.5" />
                  <span>Assurance tous risques incluse</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5" />
                  <span>Assistance 24/7 incluse</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">Besoin d'aide ?</h3>
            <p className="text-muted-foreground mb-4">
              Notre équipe est disponible pour vous aider avec votre réservation.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link href={`tel:${vehicle.localisation.telephone}`}>
                <Phone className="h-4 w-4 mr-2" />
                Nous appeler
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 