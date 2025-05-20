import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PromotionBanner() {
  return (
    <section className="bg-primary py-8 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Offre Spéciale d'Été</h2>
            <p className="text-primary-foreground/90">Jusqu'à 20% de réduction sur les locations de longue durée</p>
          </div>
          <Button
            variant="outline"
            className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link href="/promotions">Voir les offres</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
