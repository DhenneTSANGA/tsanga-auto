import Link from "next/link"
import { Calendar, User, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// Simulated blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Comment choisir la voiture idéale pour vos besoins ?",
    excerpt:
      "Découvrez les critères essentiels à prendre en compte lors du choix d'un véhicule qui correspond parfaitement à votre style de vie et à vos besoins quotidiens.",
    image: "/placeholder.svg?height=250&width=500",
    date: "15 mai 2023",
    author: "Sophie Martin",
    category: "Conseils d'achat",
    tags: ["Achat", "Guide", "Comparatif"],
  },
  {
    id: 2,
    title: "Les avantages de la location longue durée",
    excerpt:
      "La location longue durée (LLD) offre de nombreux avantages par rapport à l'achat. Découvrez pourquoi de plus en plus de conducteurs optent pour cette solution.",
    image: "/placeholder.svg?height=250&width=500",
    date: "28 avril 2023",
    author: "Thomas Dubois",
    category: "Location",
    tags: ["LLD", "Financement", "Budget"],
  },
  {
    id: 3,
    title: "Entretien de votre véhicule : les gestes essentiels",
    excerpt:
      "Un entretien régulier est crucial pour maintenir votre véhicule en bon état et éviter les pannes. Voici les gestes essentiels à adopter pour prolonger la durée de vie de votre voiture.",
    image: "/placeholder.svg?height=250&width=500",
    date: "10 avril 2023",
    author: "Jean Dupont",
    category: "Entretien",
    tags: ["Maintenance", "Conseils", "Économie"],
  },
  {
    id: 4,
    title: "Voitures électriques : tout ce que vous devez savoir",
    excerpt:
      "Le marché des véhicules électriques est en pleine expansion. Découvrez les avantages, les inconvénients et les considérations importantes avant de faire le grand saut vers l'électrique.",
    image: "/placeholder.svg?height=250&width=500",
    date: "2 avril 2023",
    author: "Marie Leroy",
    category: "Tendances",
    tags: ["Électrique", "Écologie", "Innovation"],
  },
  {
    id: 5,
    title: "Les meilleures destinations pour un road trip en France",
    excerpt:
      "Envie d'évasion ? Découvrez notre sélection des plus beaux itinéraires pour un road trip inoubliable à travers les paysages variés de la France.",
    image: "/placeholder.svg?height=250&width=500",
    date: "20 mars 2023",
    author: "Pierre Moreau",
    category: "Voyage",
    tags: ["Road Trip", "Tourisme", "Aventure"],
  },
  {
    id: 6,
    title: "Assurance auto : comment choisir la meilleure formule ?",
    excerpt:
      "L'assurance auto est obligatoire, mais comment choisir la formule qui vous convient le mieux ? Nos experts vous guident pour faire le bon choix selon vos besoins et votre budget.",
    image: "/placeholder.svg?height=250&width=500",
    date: "5 mars 2023",
    author: "Sophie Martin",
    category: "Assurance",
    tags: ["Protection", "Économie", "Conseils"],
  },
]

// Simulated categories
const categories = [
  { name: "Conseils d'achat", count: 12 },
  { name: "Location", count: 8 },
  { name: "Entretien", count: 15 },
  { name: "Tendances", count: 10 },
  { name: "Voyage", count: 7 },
  { name: "Assurance", count: 5 },
  { name: "Technologie", count: 9 },
]

// Simulated popular tags
const popularTags = [
  "Achat",
  "Location",
  "Entretien",
  "Électrique",
  "Hybride",
  "Économie",
  "Écologie",
  "Road Trip",
  "Assurance",
  "Innovation",
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog Tsanga-Auto</h1>
        <p className="text-xl text-gray-600 mb-8">
          Découvrez nos articles, conseils et actualités sur l'univers automobile
        </p>

        <div className="relative">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Blog Tsanga-Auto"
            className="w-full h-[400px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-xl flex items-center">
            <div className="max-w-xl p-8">
              <Badge className="mb-4 bg-primary">Tendances</Badge>
              <h2 className="text-3xl font-bold text-white mb-4">Les nouvelles tendances automobiles pour 2023</h2>
              <p className="text-white/90 mb-6">
                Découvrez les innovations technologiques, les designs émergents et les nouvelles pratiques qui façonnent
                l'industrie automobile cette année.
              </p>
              <Button asChild>
                <Link href="/blog/tendances-automobiles-2023">Lire l'article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input placeholder="Rechercher un article..." className="pl-10" />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                Tous les articles
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category.name}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-white"
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">{/* This space is intentionally left empty for layout purposes */}</div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <CardContent className="pt-6">
                    <Badge className="mb-2">{post.category}</Badge>
                    <h3 className="text-xl font-semibold mb-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" size="sm" className="text-primary" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Lire la suite
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <span className="sr-only">Page précédente</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Page suivante</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Catégories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name} className="flex justify-between items-center">
                      <Link href={`/blog/category/${category.name}`} className="text-gray-700 hover:text-primary">
                        {category.name}
                      </Link>
                      <Badge variant="outline">{category.count}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tags populaires</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Abonnez-vous à notre newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Recevez nos derniers articles et conseils directement dans votre boîte mail.
                </p>
                <div className="space-y-2">
                  <Input placeholder="Votre adresse email" />
                  <Button className="w-full">S'abonner</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Articles recommandés</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Les meilleurs SUV compacts de 2023"
              className="w-full h-40 object-cover"
            />
            <CardContent className="pt-4">
              <h3 className="font-semibold mb-2">
                <Link href="/blog/meilleurs-suv-compacts-2023" className="hover:text-primary">
                  Les meilleurs SUV compacts de 2023
                </Link>
              </h3>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>2 juin 2023</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Comment économiser du carburant ?"
              className="w-full h-40 object-cover"
            />
            <CardContent className="pt-4">
              <h3 className="font-semibold mb-2">
                <Link href="/blog/economiser-carburant" className="hover:text-primary">
                  Comment économiser du carburant ?
                </Link>
              </h3>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>28 mai 2023</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Les avantages des pneus toutes saisons"
              className="w-full h-40 object-cover"
            />
            <CardContent className="pt-4">
              <h3 className="font-semibold mb-2">
                <Link href="/blog/pneus-toutes-saisons" className="hover:text-primary">
                  Les avantages des pneus toutes saisons
                </Link>
              </h3>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>15 mai 2023</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/10 py-12 px-4 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Vous avez des questions sur nos véhicules ?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Notre équipe d'experts est disponible pour vous conseiller et répondre à toutes vos questions concernant la
          location ou l'achat de véhicules.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">Nous contacter</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/vehicules">Voir nos véhicules</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
