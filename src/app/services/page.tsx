"use client";

import { motion } from "framer-motion";
import { Ruler, Settings, Map, Building2, Cog, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Ruler size={40} />,
    title: "Études Architecturales",
    description: "Conception et études architecturales sur-mesure pour donner vie à vos projets avec rigueur et créativité."
  },
  {
    icon: <Settings size={40} />,
    title: "Prestation de Service Général",
    description: "Un accompagnement global couvrant tous les aspects techniques et administratifs de votre projet de construction."
  },
  {
    icon: <Map size={40} />,
    title: "Expertise Topographique",
    description: "Relevés et analyses topographiques précis pour garantir la fiabilité de vos plans et implantations terrain."
  },
  {
    icon: <Building2 size={40} />,
    title: "Réalisation de Bâtiments",
    description: "Construction et livraison de bâtiments résidentiels, commerciaux et industriels selon les plus hauts standards."
  },
  {
    icon: <Cog size={40} />,
    title: "Ingénierie",
    description: "Solutions d'ingénierie structurelle, mécanique et électrique pour des ouvrages solides et pérennes."
  },
  {
    icon: <Layers size={40} />,
    title: "Forage",
    description: "Prestations de forage professionnelles pour l'approvisionnement en eau et les fondations spéciales."
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-sbpc-blue text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <span className="text-sbpc-gold font-bold tracking-widest uppercase text-sm mb-4 block">Ce que nous faisons</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Une expertise globale pour accompagner la réussite de vos projets immobiliers et de construction.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group p-10 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="w-20 h-20 bg-sbpc-light text-sbpc-gold rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sbpc-blue group-hover:scale-110 transition-all">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-sbpc-blue mb-4">{service.title}</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {service.description}
              </p>
              <Link href="/devis" className="inline-flex items-center gap-2 text-sbpc-gold font-bold hover:text-sbpc-blue transition-colors">
                Demander ce service <ArrowRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
