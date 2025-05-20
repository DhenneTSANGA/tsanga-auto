"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
      <p className="text-xl text-gray-600 mb-8">
        Notre équipe est à votre disposition pour répondre à toutes vos questions
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Message envoyé !</h2>
                  <p className="text-gray-600 mb-6">
                    Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)}>Envoyer un autre message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>

                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Objet de votre demande</h3>
                    <RadioGroup defaultValue="information">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="information" id="information" />
                          <Label htmlFor="information">Demande d'information</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="reservation" id="reservation" />
                          <Label htmlFor="reservation">Réservation</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="devis" id="devis" />
                          <Label htmlFor="devis">Demande de devis</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="reclamation" id="reclamation" />
                          <Label htmlFor="reclamation">Réclamation</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="autre" id="autre" />
                          <Label htmlFor="autre">Autre</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="first-name">Prénom</Label>
                      <Input id="first-name" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Nom</Label>
                      <Input id="last-name" required className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" className="mt-1" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" required className="mt-1" />
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="vehicle-interest">Véhicule qui vous intéresse</Label>
                    <Select>
                      <SelectTrigger id="vehicle-interest" className="mt-1">
                        <SelectValue placeholder="Sélectionnez un véhicule (optionnel)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Aucun en particulier</SelectItem>
                        <SelectItem value="renault-clio">Renault Clio</SelectItem>
                        <SelectItem value="peugeot-3008">Peugeot 3008</SelectItem>
                        <SelectItem value="citroen-c3">Citroën C3</SelectItem>
                        <SelectItem value="bmw-x5">BMW X5</SelectItem>
                        <SelectItem value="mercedes-classe-a">Mercedes Classe A</SelectItem>
                        <SelectItem value="fiat-500">Fiat 500</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" required className="mt-1" rows={6} />
                  </div>

                  <Button type="submit" className="w-full md:w-auto">
                    Envoyer le message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Nos coordonnées</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-gray-600">123 Avenue des Champs-Élysées, 75008 Paris</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+33123456789" className="hover:text-primary">
                        +33 1 23 45 67 89
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@Tsanga-Auto.com" className="hover:text-primary">
                        contact@Tsanga-Auto.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Horaires d'ouverture</h3>
                    <p className="text-gray-600">Lundi - Vendredi: 9h00 - 19h00</p>
                    <p className="text-gray-600">Samedi: 10h00 - 18h00</p>
                    <p className="text-gray-600">Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Chat en direct</h2>
              <p className="text-gray-600 mb-4">
                Besoin d'une réponse immédiate ? Discutez avec l'un de nos conseillers en ligne.
              </p>
              <Button className="w-full flex items-center justify-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Démarrer le chat
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Nous trouver</h2>
        <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=400&width=1200&text=Google+Maps"
            alt="Carte"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Quels documents sont nécessaires pour louer un véhicule ?</h3>
              <p className="text-gray-600">
                Pour louer un véhicule, vous devez présenter un permis de conduire valide depuis plus d'un an, une pièce
                d'identité et une carte bancaire à votre nom pour le dépôt de garantie.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Comment puis-je modifier ou annuler ma réservation ?</h3>
              <p className="text-gray-600">
                Vous pouvez modifier ou annuler votre réservation jusqu'à 48 heures avant la date de début sans frais.
                Contactez notre service client par téléphone ou email pour effectuer ces changements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Proposez-vous des services de livraison de véhicules ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons la livraison de véhicules à domicile ou à l'adresse de votre choix moyennant des
                frais supplémentaires. Ce service est disponible dans un rayon de 50 km autour de nos agences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Quelles sont les options de financement disponibles ?</h3>
              <p className="text-gray-600">
                Nous proposons plusieurs options de financement : crédit classique, leasing avec option d'achat (LOA) et
                location longue durée (LLD). Nos conseillers peuvent vous aider à choisir la solution la plus adaptée à
                votre situation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à prendre la route ?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Découvrez notre sélection de véhicules et trouvez celui qui correspond parfaitement à vos besoins.
        </p>
        <Button
          size="lg"
          variant="outline"
          className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          <a href="/vehicles">Voir nos véhicules</a>
        </Button>
      </section>
    </div>
  )
}
