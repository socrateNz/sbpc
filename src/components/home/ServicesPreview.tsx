"use client";

import { motion } from "framer-motion";
import { Ruler, Settings, Map, Building2, Cog, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Ruler size={32} />,
    title: "Études Architecturales",
    description: "Conception et études architecturales sur-mesure pour donner vie à vos projets avec rigueur et créativité."
  },
  {
    icon: <Settings size={32} />,
    title: "Prestation de Service Général",
    description: "Un accompagnement global couvrant tous les aspects techniques et administratifs de votre projet."
  },
  {
    icon: <Map size={32} />,
    title: "Expertise Topographique",
    description: "Relevés et analyses topographiques précis pour garantir la fiabilité de vos plans et implantations."
  },
  {
    icon: <Building2 size={32} />,
    title: "Réalisation de Bâtiments",
    description: "Construction et livraison de bâtiments résidentiels, commerciaux et industriels selon les plus hauts standards."
  },
  {
    icon: <Cog size={32} />,
    title: "Ingénierie",
    description: "Solutions d'ingénierie structurelle, mécanique et électrique pour des ouvrages solides et durables."
  },
  {
    icon: <Layers size={32} />,
    title: "Forage",
    description: "Prestations de forage professionnelles pour l'approvisionnement en eau et les fondations spéciales."
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-sbpc-gold font-bold tracking-wider uppercase text-sm mb-2 block">Ce que nous faisons</span>
            <h2 className="text-4xl font-bold text-sbpc-blue mb-4">L'excellence à chaque étape de votre projet</h2>
            <p className="text-gray-600 text-lg">
              De l'étude initiale à la livraison finale, nous déployons notre savoir-faire pour concrétiser vos ambitions.
            </p>
          </div>
          <Link href="/services" className="hidden lg:flex items-center gap-2 text-sbpc-blue font-semibold hover:text-sbpc-gold transition-colors">
            Voir tous nos services <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:shadow-xl hover:border-sbpc-gold/30 transition-all group"
            >
              <div className="w-16 h-16 bg-sbpc-blue text-sbpc-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-sbpc-blue mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 lg:hidden flex justify-center">
          <Link href="/services" className="flex items-center gap-2 text-sbpc-blue font-semibold hover:text-sbpc-gold transition-colors">
            Voir tous nos services <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
