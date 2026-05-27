"use client";

import { ArrowRight, UploadCloud } from "lucide-react";

export default function DevisPage() {
  return (
    <div className="pt-24 pb-16 bg-sbpc-light min-h-screen flex flex-col justify-center">
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-sbpc-blue p-10 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-3">Demande de Devis</h1>
              <p className="text-gray-300">Détaillez votre projet, nos experts vous répondront sous 48h.</p>
            </div>
            <div className="absolute right-0 top-0 w-64 h-64 bg-sbpc-gold opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="p-10">
            <form className="space-y-8">
              {/* Type de projet */}
              <div>
                <label className="block text-sm font-bold text-sbpc-blue mb-3">Type de Projet</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Construction", "Rénovation", "Conseil", "Autre"].map((type) => (
                    <label key={type} className="cursor-pointer">
                      <input type="radio" name="project_type" className="peer sr-only" />
                      <div className="text-center px-4 py-3 rounded-xl border border-gray-200 peer-checked:border-sbpc-gold peer-checked:bg-sbpc-gold/10 peer-checked:text-sbpc-gold font-medium transition-all text-sm">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Informations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-sbpc-blue mb-2">Budget Estimatif</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-sbpc-gold bg-white">
                    <option>Moins de 50 000 €</option>
                    <option>50 000 € - 150 000 €</option>
                    <option>150 000 € - 500 000 €</option>
                    <option>Plus de 500 000 €</option>
                    <option>À définir</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-sbpc-blue mb-2">Délais Souhaités</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-sbpc-gold bg-white">
                    <option>Immédiat</option>
                    <option>Dans les 3 mois</option>
                    <option>Dans les 6 mois</option>
                    <option>L'année prochaine</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-sbpc-blue mb-2">Description du Projet</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-sbpc-gold" placeholder="Décrivez vos attentes, contraintes et objectifs..."></textarea>
              </div>

              {/* Upload */}
              <div>
                <label className="block text-sm font-bold text-sbpc-blue mb-2">Pièces jointes (Plans, croquis, photos)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-sbpc-gold transition-colors cursor-pointer bg-gray-50">
                  <UploadCloud size={32} className="mx-auto text-gray-400 mb-3" />
                  <p className="text-sm font-medium text-sbpc-blue">Cliquez pour ajouter des fichiers</p>
                  <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (Max 10MB)</p>
                </div>
              </div>

              <div className="pt-4">
                <button type="button" className="w-full py-4 bg-sbpc-gold text-sbpc-blue font-bold text-lg rounded-xl hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                  Soumettre la demande <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
