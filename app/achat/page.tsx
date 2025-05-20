import Link from "next/link"
import { Check, Car, FileText, ThumbsUp, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PurchasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=400&width=1920"
            alt="Achat de voitures"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Achat de Véhicules</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Trouvez le véhicule de vos rêves parmi notre sélection de voitures de qualité, avec des garanties et des
            options de financement adaptées.
          </p>
          <Button size="lg" asChild>
            <Link href="/vehicles">Découvrir nos véhicules</Link>
          </Button>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pourquoi acheter chez Tsanga-Auto ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous vous offrons une expérience d'achat transparente et sans stress, avec des véhicules soigneusement
            sélectionnés et des services complets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Véhicules sélectionnés</h3>
              <p className="text-gray-600">
                Tous nos véhicules sont soigneusement inspectés et préparés pour vous garantir une qualité irréprochable
                et une fiabilité optimale.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Historique transparent</h3>
              <p className="text-gray-600">
                Nous vous fournissons l'historique complet de chaque véhicule, y compris l'entretien et les éventuelles
                réparations effectuées.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garantie étendue</h3>
              <p className="text-gray-600">
                Tous nos véhicules sont couverts par une garantie minimale de 12 mois, avec possibilité d'extension pour
                une tranquillité d'esprit totale.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Financing Options */}
      <section className="mb-16 bg-muted/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Options de financement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous proposons plusieurs solutions de financement pour vous aider à acquérir le véhicule de vos rêves dans
              les meilleures conditions.
            </p>
          </div>

          <Tabs defaultValue="credit" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="credit">Crédit classique</TabsTrigger>
              <TabsTrigger value="leasing">Leasing avec option d'achat</TabsTrigger>
              <TabsTrigger value="cash">Paiement comptant</TabsTrigger>
            </TabsList>
            <TabsContent value="credit">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">Crédit automobile</h3>
                      <p className="text-gray-600 mb-6">
                        Notre solution de crédit classique vous permet de devenir propriétaire de votre véhicule dès le
                        début, avec des mensualités adaptées à votre budget.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Durée de financement de 12 à 84 mois</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Taux d'intérêt compétitifs à partir de 2,9%</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Possibilité de remboursement anticipé</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Assurance emprunteur optionnelle</span>
                        </li>
                      </ul>
                      <Button asChild>
                        <Link href="/contact">Demander une simulation</Link>
                      </Button>
                    </div>
                    <div className="md:w-1/2">
                      <img
                        src="/placeholder.svg?height=300&width=500"
                        alt="Crédit automobile"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="leasing">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">Location avec Option d'Achat (LOA)</h3>
                      <p className="text-gray-600 mb-6">
                        La LOA vous permet de louer un véhicule neuf ou d'occasion récente avec la possibilité de
                        l'acheter à la fin du contrat.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Loyers mensuels réduits par rapport à un crédit classique</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Durée de 24 à 60 mois</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Option d'achat à la fin du contrat</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Entretien et garantie inclus pendant toute la durée</span>
                        </li>
                      </ul>
                      <Button asChild>
                        <Link href="/contact">Demander une simulation</Link>
                      </Button>
                    </div>
                    <div className="md:w-1/2">
                      <img
                        src="/placeholder.svg?height=300&width=500"
                        alt="Location avec option d'achat"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cash">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">Paiement comptant</h3>
                      <p className="text-gray-600 mb-6">
                        Le paiement comptant vous permet d'acquérir votre véhicule immédiatement sans frais de
                        financement, avec des avantages exclusifs.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Aucun frais de dossier ni intérêts</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Remise spéciale sur le prix d'achat</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Processus d'achat simplifié et rapide</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Possibilité de négocier des services supplémentaires</span>
                        </li>
                      </ul>
                      <Button asChild>
                        <Link href="/vehicles">Voir nos véhicules</Link>
                      </Button>
                    </div>
                    <div className="md:w-1/2">
                      <img
                        src="/placeholder.svg?height=300&width=500"
                        alt="Paiement comptant"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Purchase Process */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Le processus d'achat simplifié</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chez Tsanga-Auto, nous avons simplifié le processus d'achat pour vous offrir une expérience agréable et sans
            stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sélection du véhicule</h3>
              <p className="text-gray-600">
                Parcourez notre catalogue en ligne ou visitez notre showroom pour trouver le véhicule qui vous
                correspond.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#e63946"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Essai routier</h3>
              <p className="text-gray-600">
                Prenez rendez-vous pour essayer le véhicule et vérifier qu'il répond parfaitement à vos attentes.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#e63946"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Financement</h3>
              <p className="text-gray-600">
                Choisissez la solution de financement qui vous convient et complétez les formalités administratives.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#e63946"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-primary">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Livraison</h3>
            <p className="text-gray-600">
              Récupérez votre véhicule à notre agence ou optez pour une livraison à domicile (selon disponibilité).
            </p>
          </div>
        </div>
      </section>

      {/* After-Sales Services */}
      <section className="mb-16 bg-muted/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services après-vente</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre engagement envers vous ne s'arrête pas à l'achat. Nous vous accompagnons tout au long de la vie de
              votre véhicule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Garantie étendue</h3>
                <p className="text-gray-600 mb-4">
                  Tous nos véhicules sont couverts par une garantie minimale de 12 mois, avec possibilité d'extension
                  jusqu'à 60 mois.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Pièces et main d'œuvre incluses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Assistance dépannage 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Véhicule de remplacement en cas d'immobilisation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Entretien et réparation</h3>
                <p className="text-gray-600 mb-4">
                  Notre centre de service certifié assure l'entretien et la réparation de votre véhicule avec des
                  techniciens qualifiés.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Pièces d'origine garanties</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Contrats d'entretien personnalisés</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Diagnostic électronique complet</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Assistance client</h3>
                <p className="text-gray-600 mb-4">
                  Notre équipe de service client est disponible pour répondre à toutes vos questions et vous assister
                  dans vos démarches.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Support téléphonique dédié</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Assistance pour les démarches administratives</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Conseils personnalisés pour l'entretien</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de clients satisfaits qui ont fait confiance à Tsanga-Auto pour l'achat de leur
            véhicule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="Thomas D."
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Thomas D.</h3>
                  <p className="text-gray-500 text-sm">Propriétaire d'une Peugeot 3008</p>
                </div>
              </div>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-400 mr-1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">
                "J'ai acheté ma Peugeot 3008 chez Tsanga-Auto après l'avoir louée pendant un mois. Le processus d'achat a
                été simple et transparent. L'équipe a été très professionnelle et m'a guidé à chaque étape. Je
                recommande vivement !"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="Sophie M."
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Sophie M.</h3>
                  <p className="text-gray-500 text-sm">Propriétaire d'une Renault Clio</p>
                </div>
              </div>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-400 mr-1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">
                "Excellente expérience d'achat chez Tsanga-Auto ! J'ai pu essayer plusieurs modèles avant de me décider
                pour ma Renault Clio. Le financement proposé était très avantageux et les formalités ont été réglées
                rapidement. Je suis ravie de mon achat !"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="Pierre M."
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Pierre M.</h3>
                  <p className="text-gray-500 text-sm">Propriétaire d'une BMW X5</p>
                </div>
              </div>
              <div className="flex mb-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-400 mr-1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-300 mr-1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <p className="text-gray-700">
                "J'ai acheté ma BMW X5 chez Tsanga-Auto il y a 6 mois. Le service après-vente est impeccable, j'ai eu un
                petit souci technique qui a été résolu immédiatement sous garantie. Le seul bémol était le délai de
                livraison un peu long, mais la qualité du véhicule compense largement."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 px-4 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à trouver votre prochain véhicule ?</h2>
          <p className="text-xl mb-8">
            Parcourez notre sélection de véhicules de qualité ou contactez-nous pour un conseil personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/vehicles">Voir nos véhicules</Link>
            </Button>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/contact">Demander un rendez-vous</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
