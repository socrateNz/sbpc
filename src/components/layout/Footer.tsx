import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sbpc-dark text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-white tracking-wider">
                SB<span className="text-sbpc-gold">PC</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Solution Bâti Plus Consulting vous accompagne dans tous vos projets
              immobiliers et architecturaux avec une expertise haut de gamme.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="hover:text-sbpc-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-sbpc-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-sbpc-gold transition-colors"><Linkedin size={20} /></a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Liens Rapides</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/a-propos" className="hover:text-sbpc-gold transition-colors">À propos de nous</Link></li>
              <li><Link href="/services" className="hover:text-sbpc-gold transition-colors">Nos Services</Link></li>
              <li><Link href="/realisations" className="hover:text-sbpc-gold transition-colors">Nos Réalisations</Link></li>
              <li><Link href="/processus" className="hover:text-sbpc-gold transition-colors">Notre Processus</Link></li>
              <li><Link href="/blog" className="hover:text-sbpc-gold transition-colors">Blog & Actualités</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Nos Expertises</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services" className="hover:text-sbpc-gold transition-colors">Étude & Faisabilité</Link></li>
              <li><Link href="/services" className="hover:text-sbpc-gold transition-colors">Conception & Architecture</Link></li>
              <li><Link href="/services" className="hover:text-sbpc-gold transition-colors">Suivi de Chantier</Link></li>
              <li><Link href="/services" className="hover:text-sbpc-gold transition-colors">Rénovation Premium</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-sbpc-gold shrink-0 mt-1" size={18} />
                <span>123 Avenue des Champs-Élysées<br />75008 Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-sbpc-gold shrink-0" size={18} />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sbpc-gold shrink-0" size={18} />
                <span>contact@sbpc-consulting.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>&copy; {new Date().getFullYear()} SBPC. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-sbpc-gold transition-colors">Mentions Légales</Link>
            <Link href="#" className="hover:text-sbpc-gold transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
