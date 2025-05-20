"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Cliente fidèle",
    content:
      "J'utilise Tsanga-Auto depuis plus de 2 ans pour mes déplacements professionnels. Le service est impeccable et les véhicules toujours en parfait état. Je recommande vivement !",
    rating: 5,
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Entrepreneur",
    content:
      "J'ai acheté ma voiture chez Tsanga-Auto après l'avoir louée pendant un mois. Le processus d'achat a été simple et transparent. Très satisfait de mon expérience !",
    rating: 5,
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "Marie Leroy",
    role: "Voyageuse",
    content:
      "Pour mes vacances en famille, j'ai loué un SUV spacieux. Le rapport qualité-prix est excellent et le personnel très attentionné. Je reviendrai !",
    rating: 4,
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 4,
    name: "Pierre Moreau",
    role: "Client régulier",
    content:
      "Service client exceptionnel. Quand j'ai eu un problème avec mon véhicule de location, ils ont immédiatement envoyé un remplaçant. C'est ce genre de service qui fait la différence.",
    rating: 5,
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 2
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage)

  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage,
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Ce que disent nos clients</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={prevPage} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextPage} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedTestimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-card-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
