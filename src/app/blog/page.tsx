"use client";

import { Search } from "lucide-react";

const articles = [
  {
    title: "Les tendances de l'architecture moderne en 2026",
    category: "Architecture",
    date: "12 Mai 2026",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2065&auto=format&fit=crop"
  },
  {
    title: "Comment optimiser l'efficacité énergétique d'un bâtiment",
    category: "Innovation",
    date: "28 Avril 2026",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "L'impact des matériaux durables dans la construction",
    category: "Construction",
    date: "15 Avril 2026",
    image: "https://images.unsplash.com/photo-1541888081622-446738562306?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-sbpc-light py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-sbpc-blue mb-6">Blog & Actualités</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Découvrez nos derniers articles, conseils et analyses sur le monde de la construction et de l'immobilier.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Rechercher un article..." 
              className="w-full pl-6 pr-14 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-sbpc-gold focus:ring-1 focus:ring-sbpc-gold shadow-sm"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-sbpc-blue text-white p-3 rounded-full hover:bg-sbpc-gold transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="h-60 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sbpc-gold font-bold text-sm tracking-wide uppercase">{article.category}</span>
                  <span className="text-gray-400 text-sm">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-sbpc-blue mb-4 group-hover:text-sbpc-gold transition-colors">{article.title}</h3>
                <a href="#" className="font-semibold text-sbpc-blue hover:text-sbpc-gold transition-colors inline-flex items-center gap-2">
                  Lire l'article
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
