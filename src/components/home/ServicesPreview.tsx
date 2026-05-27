"use client";

import { motion } from "framer-motion";
import { PenTool, HardHat, Building, LayoutDashboard, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <PenTool size={32} />,
    title: "Étude & Faisabilité",
    description: "Analyse technique et financière rigoureuse pour garantir la viabilité de votre projet immobilier."
  },
  {
    icon: <LayoutDashboard size={32} />,
    title: "Conception & Planification",
    description: "Création de plans architecturaux modernes et optimisation des espaces selon vos exigences."
  },
  {
    icon: <HardHat size={32} />,
    title: "Suivi de Chantier",
    description: "Coordination et supervision des travaux pour un respect strict des délais et de la qualité."
  },
  {
    icon: <Building size={32} />,
    title: "Conseil Immobilier",
    description: "Accompagnement stratégique pour vos investissements et la valorisation de votre patrimoine."
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-sbpc-gold font-bold tracking-wider uppercase text-sm mb-2 block">Nos Domaines d'Expertise</span>
            <h2 className="text-4xl font-bold text-sbpc-blue mb-4">L'excellence à chaque étape de votre projet</h2>
            <p className="text-gray-600 text-lg">
              De l'idée initiale à la livraison finale, nous déployons notre savoir-faire pour concrétiser vos ambitions architecturales.
            </p>
          </div>
          <Link href="/services" className="hidden lg:flex items-center gap-2 text-sbpc-blue font-semibold hover:text-sbpc-gold transition-colors">
            Voir tous nos services <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
