import Link from "next/link"
import { Check, Calendar, Shield, Clock, Car, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RentalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=400&width=1920"
            alt="Location de voitures"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Location de Véhicules</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez notre gamme complète de véhicules disponibles à la location pour tous vos besoins, que ce soit
            pour un jour ou plusieurs mois.
          </p>
          <Button size="lg" asChild>
            <Link href="/vehicles">Explorer nos véhicules</Link>
          </Button>
        </div>
      </section>

      {/* Rental Options */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Formules de Location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous proposons différentes formules adaptées à vos besoins, de la location courte durée à la location longue
            durée avec option d'achat.
          </p>
        </div>

        <Tabs defaultValue="short-term" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="short-term">Courte Durée</TabsTrigger>
            <TabsTrigger value="medium-term">Moyenne Durée</TabsTrigger>
            <TabsTrigger value="long-term">Longue Durée</TabsTrigger>
          </TabsList>
          <TabsContent value="short-term">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Location Courte Durée</h3>
                    <p className="text-gray-600 mb-6">
                      Idéale pour vos besoins ponctuels, notre formule courte durée vous permet de louer un véhicule de
                      1 à 30 jours avec une flexibilité maximale.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Tarifs à partir de 35€/jour</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Kilométrage limité à 200km/jour (options illimitées disponibles)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Assurance tous risques avec options de franchise</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Assistance 24/7 incluse</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="/vehicles">Voir les véhicules disponibles</Link>
                    </Button>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Location courte durée"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="medium-term">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Location Moyenne Durée</h3>
                    <p className="text-gray-600 mb-6">
                      Notre formule moyenne durée est parfaite pour vos besoins de 1 à 6 mois, avec des tarifs
                      avantageux et des services inclus.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Tarifs à partir de 600€/mois</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Kilométrage de 1500km/mois inclus</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Entretien et assistance inclus</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Possibilité de changer de véhicule</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="/contact">Demander un devis</Link>
                    </Button>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Location moyenne durée"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="long-term">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Location Longue Durée (LLD)</h3>
                    <p className="text-gray-600 mb-6">
                      Notre formule longue durée vous permet de profiter d'un véhicule neuf pendant 12 à 60 mois avec un
                      loyer mensuel fixe et de nombreux services inclus.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Engagement de 12 à 60 mois</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Entretien, assurance et assistance inclus</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Véhicule neuf avec les dernières technologies</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Option d'achat à la fin du contrat</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="/contact">Demander un devis personnalisé</Link>
                    </Button>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Location longue durée"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* How It Works */}
      <section className="mb-16 bg-muted/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Louer un véhicule chez Tsanga-Auto est simple et rapide. Suivez ces étapes pour obtenir le véhicule parfait
              pour vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Choisissez votre véhicule</h3>
                <p className="text-gray-600">
                  Parcourez notre catalogue et sélectionnez le véhicule qui correspond à vos besoins.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Réservez vos dates</h3>
                <p className="text-gray-600">
                  Sélectionnez les dates de début et de fin de location qui vous conviennent.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Confirmez et payez</h3>
                <p className="text-gray-600">
                  Complétez votre réservation en fournissant vos informations et en effectuant le paiement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">4. Récupérez le véhicule</h3>
                <p className="text-gray-600">
                  Rendez-vous à notre agence à la date convenue pour récupérer votre véhicule.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pourquoi choisir Tsanga-Auto pour votre location ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous nous engageons à vous offrir une expérience de location sans stress avec des véhicules de qualité et un
            service client exceptionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Car className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flotte récente et diversifiée</h3>
            <p className="text-gray-600">
              Notre flotte comprend des véhicules récents, régulièrement entretenus et adaptés à tous les besoins, des
              citadines économiques aux SUV spacieux.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Assurance complète</h3>
            <p className="text-gray-600">
              Tous nos véhicules sont couverts par une assurance tous risques avec différentes options de franchise pour
              vous offrir une tranquillité d'esprit totale.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexibilité maximale</h3>
            <p className="text-gray-600">
              Nous nous adaptons à vos besoins avec des options de location flexibles, des extensions de durée et des
              services supplémentaires à la demande.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-gray-600">
              Vous avez des questions sur notre service de location ? Consultez nos réponses aux questions les plus
              fréquentes.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Quels documents sont nécessaires pour louer un véhicule ?</h3>
              <p className="text-gray-600">
                Pour louer un véhicule, vous devez présenter un permis de conduire valide depuis plus d'un an, une pièce
                d'identité et une carte bancaire à votre nom pour le dépôt de garantie.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Puis-je modifier ou annuler ma réservation ?</h3>
              <p className="text-gray-600">
                Oui, vous pouvez modifier ou annuler votre réservation jusqu'à 48 heures avant la date de début sans
                frais. Des frais peuvent s'appliquer pour les modifications ou annulations tardives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Quel est le montant de la caution ?</h3>
              <p className="text-gray-600">
                Le montant de la caution varie selon le type de véhicule, généralement entre 800€ et 1500€. Cette somme
                est pré-autorisée sur votre carte bancaire mais non débitée, sauf en cas de dommages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Puis-je louer un véhicule si j'ai moins de 25 ans ?</h3>
              <p className="text-gray-600">
                Oui, les conducteurs de 21 à 25 ans peuvent louer certains véhicules de notre flotte avec un supplément
                jeune conducteur. Certaines restrictions peuvent s'appliquer sur les véhicules haut de gamme.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
            <Button asChild>
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 px-4 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à prendre la route ?</h2>
          <p className="text-xl mb-8">
            Réservez dès maintenant votre véhicule et profitez de nos offres spéciales pour votre prochaine aventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/vehicles">Explorer nos véhicules</Link>
            </Button>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
