import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      
      {/* About Section */}
      <section className="py-24 bg-sbpc-light">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888081622-446738562306?q=80&w=2070&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 bg-sbpc-blue/20" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-lg">
                <p className="text-sbpc-blue font-bold text-2xl mb-1">+15 Ans</p>
                <p className="text-gray-600 font-medium">d'expertise dans la construction haut de gamme</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-sbpc-gold font-bold tracking-wider uppercase text-sm mb-2 block">À propos de SBPC</span>
            <h2 className="text-4xl font-bold text-sbpc-blue mb-6">Bâtir l'avenir avec précision et élégance</h2>
            <p className="text-gray-600 text-lg mb-8">
              SBPC (Solution Bâti Plus Consulting) est une agence de conseil et de construction dédiée aux projets immobiliers premium. Nous combinons innovation architecturale et rigueur technique pour livrer des réalisations exceptionnelles.
            </p>
            <ul className="space-y-4 mb-10">
              {["Approche sur-mesure", "Matériaux de haute qualité", "Respect strict des délais", "Accompagnement transparent"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-sbpc-gold" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/a-propos" className="inline-flex items-center gap-2 px-8 py-4 bg-sbpc-blue text-white font-semibold rounded-md hover:bg-sbpc-blue/90 transition-colors">
              Découvrir notre histoire <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sbpc-blue text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "250+", label: "Projets Réalisés" },
              { number: "15", label: "Années d'Expérience" },
              { number: "40+", label: "Experts Dédiés" },
              { number: "100%", label: "Clients Satisfaits" },
            ].map((stat, i) => (
              <div key={i} className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                <p className="text-4xl md:text-5xl font-bold text-sbpc-gold mb-2">{stat.number}</p>
                <p className="text-gray-300 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-sbpc-dark" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }} />
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Prêt à donner vie à votre projet ?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Contactez nos experts pour une consultation initiale gratuite et découvrez comment nous pouvons valoriser votre investissement.
          </p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-10 py-5 bg-sbpc-gold text-sbpc-blue font-bold text-lg rounded-md hover:bg-yellow-500 transition-transform hover:scale-105">
            Démarrer votre projet
          </Link>
        </div>
      </section>
    </>
  );
}
