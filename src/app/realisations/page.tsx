"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Villa Lumina",
    category: "Résidentiel Premium",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
  },
  {
    title: "Siège Social Horizon",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Résidence L'Écrin",
    category: "Rénovation",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Tour Azur",
    category: "Construction Neuve",
    image: "https://images.unsplash.com/photo-1541888081622-446738562306?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function RealisationsPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-sbpc-light py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-sbpc-blue mb-6">Nos Réalisations</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de nos projets les plus emblématiques, symboles de notre exigence.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sbpc-blue/90 via-sbpc-blue/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-sbpc-gold font-bold uppercase tracking-wider text-sm mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
