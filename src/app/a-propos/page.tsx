"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')" }} />
        <div className="absolute inset-0 bg-sbpc-blue/80" />
        <div className="container relative z-10 mx-auto px-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            À propos de SBPC
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Notre histoire, notre vision et notre engagement envers l'excellence architecturale.
          </motion.p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="container mx-auto px-6 lg:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-sbpc-blue mb-6">Notre Histoire & Vision</h2>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              Fondée avec la conviction que chaque espace a le potentiel de transformer l'expérience humaine, <strong>Solution Bâti Plus Consulting</strong> (SBPC) s'est imposée comme un acteur de référence dans le conseil et la construction premium.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Nous croyons en une architecture durable, innovante et centrée sur l'humain. Notre vision est de redéfinir les standards de la construction en alliant esthétique intemporelle, rigueur technique et responsabilité environnementale.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-2 border-sbpc-gold pl-4">
                <h4 className="text-xl font-bold text-sbpc-blue">Excellence</h4>
                <p className="text-gray-500 text-sm mt-1">Une qualité sans compromis à chaque étape.</p>
              </div>
              <div className="border-l-2 border-sbpc-gold pl-4">
                <h4 className="text-xl font-bold text-sbpc-blue">Innovation</h4>
                <p className="text-gray-500 text-sm mt-1">Des solutions avant-gardistes et durables.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }} />
          </motion.div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-sbpc-light py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-sbpc-blue mb-6">Prêt à collaborer avec nous ?</h2>
          <Link href="/contact" className="inline-block px-8 py-4 bg-sbpc-gold text-sbpc-blue font-bold rounded-md hover:bg-yellow-500 transition-colors">
            Contactez notre équipe
          </Link>
        </div>
      </section>
    </div>
  );
}
