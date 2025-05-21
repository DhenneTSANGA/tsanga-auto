"use client"

import Link from "next/link"
import { Car, Users, CreditCard, Calendar, TrendingUp, BarChart, AlertCircle, CheckCircle2, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

// Données de démonstration (à remplacer par des données réelles)
const stats = [
  {
    title: "Véhicules disponibles",
    value: "24",
    icon: Car,
    description: "Véhicules en stock",
    trend: "+2 cette semaine"
  },
  {
    title: "Réservations actives",
    value: "12",
    icon: Calendar,
    description: "Réservations en cours",
    trend: "+5 aujourd'hui"
  },
  {
    title: "Clients",
    value: "156",
    icon: Users,
    description: "Clients inscrits",
    trend: "+12 ce mois"
  },
  {
    title: "Revenus mensuels",
    value: "2.4M FCFA",
    icon: CreditCard,
    description: "Revenus générés",
    trend: "+15% vs mois dernier"
  }
]

const recentActivity = [
  {
    id: 1,
    type: "reservation",
    description: "Nouvelle réservation pour Toyota Land Cruiser",
    time: "Il y a 5 minutes",
    status: "En attente"
  },
  {
    id: 2,
    type: "payment",
    description: "Paiement reçu de Jean Dupont",
    time: "Il y a 15 minutes",
    status: "Confirmé"
  },
  {
    id: 3,
    type: "vehicle",
    description: "Ajout d'un nouveau véhicule : BMW X5",
    time: "Il y a 1 heure",
    status: "Complété"
  }
]

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold">Tableau de Bord Administrateur</h1>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <Button asChild>
            <Link href="/admin/vehicles/add">Ajouter un véhicule</Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
                <div className="mt-2 flex items-center text-xs text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  {stat.trend}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Recent Reservations */}
          <Card className="mb-8">
            <CardHeader className="pb-2">
              <CardTitle>Réservations Récentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 font-medium">ID</th>
                      <th className="text-left py-3 px-2 font-medium">Client</th>
                      <th className="text-left py-3 px-2 font-medium">Véhicule</th>
                      <th className="text-left py-3 px-2 font-medium">Dates</th>
                      <th className="text-left py-3 px-2 font-medium">Montant</th>
                      <th className="text-left py-3 px-2 font-medium">Statut</th>
                      <th className="text-left py-3 px-2 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">#12345</td>
                      <td className="py-3 px-2">Thomas Dubois</td>
                      <td className="py-3 px-2">Peugeot 3008</td>
                      <td className="py-3 px-2">10/06 - 17/06</td>
                      <td className="py-3 px-2">655€</td>
                      <td className="py-3 px-2">
                        <Badge className="bg-green-500">Confirmée</Badge>
                      </td>
                      <td className="py-3 px-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/admin/reservations/12345">Détails</Link>
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">#12344</td>
                      <td className="py-3 px-2">Marie Leroy</td>
                      <td className="py-3 px-2">Renault Clio</td>
                      <td className="py-3 px-2">12/06 - 15/06</td>
                      <td className="py-3 px-2">210€</td>
                      <td className="py-3 px-2">
                        <Badge className="bg-yellow-500">En attente</Badge>
                      </td>
                      <td className="py-3 px-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/admin/reservations/12344">Détails</Link>
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">#12343</td>
                      <td className="py-3 px-2">Pierre Moreau</td>
                      <td className="py-3 px-2">BMW X5</td>
                      <td className="py-3 px-2">15/06 - 22/06</td>
                      <td className="py-3 px-2">980€</td>
                      <td className="py-3 px-2">
                        <Badge className="bg-blue-500">En cours</Badge>
                      </td>
                      <td className="py-3 px-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/admin/reservations/12343">Détails</Link>
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">#12342</td>
                      <td className="py-3 px-2">Sophie Martin</td>
                      <td className="py-3 px-2">Citroën C3</td>
                      <td className="py-3 px-2">08/06 - 10/06</td>
                      <td className="py-3 px-2">120€</td>
                      <td className="py-3 px-2">
                        <Badge className="bg-gray-500">Terminée</Badge>
                      </td>
                      <td className="py-3 px-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/admin/reservations/12342">Détails</Link>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2">#12341</td>
                      <td className="py-3 px-2">Jean Dupont</td>
                      <td className="py-3 px-2">Fiat 500</td>
                      <td className="py-3 px-2">05/06 - 08/06</td>
                      <td className="py-3 px-2">105€</td>
                      <td className="py-3 px-2">
                        <Badge className="bg-red-500">Annulée</Badge>
                      </td>
                      <td className="py-3 px-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/admin/reservations/12341">Détails</Link>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right">
                <Button variant="outline" asChild>
                  <Link href="/admin/reservations">Voir toutes les réservations</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Analyse des Performances</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="revenue">
                <TabsList className="mb-4">
                  <TabsTrigger value="revenue">Revenus</TabsTrigger>
                  <TabsTrigger value="reservations">Réservations</TabsTrigger>
                  <TabsTrigger value="vehicles">Utilisation des Véhicules</TabsTrigger>
                </TabsList>
                <TabsContent value="revenue" className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <BarChart className="h-16 w-16 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500">Graphique d'analyse des revenus</p>
                  </div>
                </TabsContent>
                <TabsContent value="reservations" className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500">Graphique d'analyse des réservations</p>
                  </div>
                </TabsContent>
                <TabsContent value="vehicles" className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <Car className="h-16 w-16 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500">Graphique d'utilisation des véhicules</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          {/* Vehicle Status */}
          <Card className="mb-8">
            <CardHeader className="pb-2">
              <CardTitle>État des Véhicules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Disponibles</p>
                      <p className="text-sm text-gray-500">Prêts à être loués</p>
                    </div>
                  </div>
                  <span className="font-bold">28</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Clock className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium">En location</p>
                      <p className="text-sm text-gray-500">Actuellement utilisés</p>
                    </div>
                  </div>
                  <span className="font-bold">12</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-yellow-100 p-2 rounded-full mr-3">
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="font-medium">En maintenance</p>
                      <p className="text-sm text-gray-500">Réparation ou entretien</p>
                    </div>
                  </div>
                  <span className="font-bold">2</span>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin/vehicles">Gérer les véhicules</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Activités Récentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {activity.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {activity.time}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                          activity.status === "Confirmé"
                            ? "bg-green-100 text-green-700"
                            : activity.status === "En attente"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        )}
                      >
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin/activities">Voir toutes les activités</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
