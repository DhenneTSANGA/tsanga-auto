import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tsanga-Auto</h3>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour la location et l'achat de véhicules de qualité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/vehicules" className="text-gray-400 hover:text-white">
                  Véhicules
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-400 hover:text-white">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/achat" className="text-gray-400 hover:text-white">
                  Achat
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/location-court-terme" className="text-gray-400 hover:text-white">
                  Location Court Terme
                </Link>
              </li>
              <li>
                <Link href="/services/location-longue-duree" className="text-gray-400 hover:text-white">
                  Location Longue Durée
                </Link>
              </li>
              <li>
                <Link href="/services/achat" className="text-gray-400 hover:text-white">
                  Achat de Véhicules
                </Link>
              </li>
              <li>
                <Link href="/services/insurance" className="text-gray-400 hover:text-white">
                  Assurance Auto
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-gray-400 hover:text-white">
                  Entretien et Réparation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-400">123 Avenue des Champs-Élysées, Paris</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <a href="tel:+33123456789" className="text-gray-400 hover:text-white">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <a href="mailto:contact@Tsanga-Auto.com" className="text-gray-400 hover:text-white">
                  contact@Tsanga-Auto.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Tsanga-Auto. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Politique de Confidentialité
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Conditions d'Utilisation
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Plan du Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
