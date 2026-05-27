"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Analyse des besoins", desc: "Compréhension approfondie de vos objectifs et contraintes." },
  { title: "Étude technique", desc: "Évaluation de la faisabilité et conception préliminaire." },
  { title: "Planification", desc: "Structuration détaillée du projet et budgétisation." },
  { title: "Réalisation", desc: "Exécution des travaux avec un suivi rigoureux." },
  { title: "Livraison", desc: "Remise des clés et accompagnement post-projet." }
];

export default function ProcessusPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-sbpc-blue mb-6">Notre Processus</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-20">
          Une méthodologie éprouvée pour garantir le succès de chaque projet, de l'idée à la remise des clés.
        </p>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 md:-translate-x-1/2" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between mb-12 md:mb-24 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-5/12" />
              
              <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-sbpc-gold rounded-full border-4 border-white flex items-center justify-center text-sbpc-blue font-bold text-xl md:-translate-x-1/2 z-10 shadow-lg">
                {i + 1}
              </div>
              
              <div className="w-full md:w-5/12 pl-20 md:pl-0">
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-left">
                  <h3 className="text-2xl font-bold text-sbpc-blue mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
