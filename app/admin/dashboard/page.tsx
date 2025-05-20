import Link from "next/link"
import { Car, Users, CreditCard, Calendar, TrendingUp, BarChart, AlertCircle, CheckCircle2, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Véhicules Actifs</p>
                <h3 className="text-2xl font-bold mt-1">42</h3>
                <p className="text-xs text-green-500 mt-1">+3 ce mois</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <Car className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Réservations</p>
                <h3 className="text-2xl font-bold mt-1">128</h3>
                <p className="text-xs text-green-500 mt-1">+12% vs dernier mois</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Clients</p>
                <h3 className="text-2xl font-bold mt-1">2,845</h3>
                <p className="text-xs text-green-500 mt-1">+85 ce mois</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Revenus</p>
                <h3 className="text-2xl font-bold mt-1">48,256€</h3>
                <p className="text-xs text-green-500 mt-1">+8% vs dernier mois</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
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
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-0.5">
                    <Calendar className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Nouvelle réservation</p>
                    <p className="text-sm text-gray-500">Thomas Dubois a réservé une Peugeot 3008</p>
                    <p className="text-xs text-gray-400">Il y a 35 minutes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Retour de véhicule</p>
                    <p className="text-sm text-gray-500">Citroën C3 retournée par Sophie Martin</p>
                    <p className="text-xs text-gray-400">Il y a 2 heures</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3 mt-0.5">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium">Maintenance programmée</p>
                    <p className="text-sm text-gray-500">BMW X5 envoyée pour entretien régulier</p>
                    <p className="text-xs text-gray-400">Il y a 5 heures</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-0.5">
                    <Car className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Nouveau véhicule ajouté</p>
                    <p className="text-sm text-gray-500">Audi A3 ajoutée à la flotte</p>
                    <p className="text-xs text-gray-400">Il y a 1 jour</p>
                  </div>
                </div>
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
