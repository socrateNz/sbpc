"use client";

import { motion } from "framer-motion";
import { PenTool, HardHat, Building, LayoutDashboard, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <PenTool size={40} />,
    title: "Étude & Faisabilité",
    description: "Analyse technique, financière et réglementaire pour valider le potentiel de votre projet."
  },
  {
    icon: <LayoutDashboard size={40} />,
    title: "Conception Architecturale",
    description: "Plans sur-mesure et modélisation 3D pour des espaces modernes et fonctionnels."
  },
  {
    icon: <HardHat size={40} />,
    title: "Construction & Suivi",
    description: "Pilotage complet du chantier, garantissant qualité, budget et délais."
  },
  {
    icon: <Building size={40} />,
    title: "Rénovation Premium",
    description: "Transformation et valorisation de biens existants avec des finitions haut de gamme."
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-sbpc-blue text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Une expertise globale pour accompagner la réussite de vos projets immobiliers et de construction.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
