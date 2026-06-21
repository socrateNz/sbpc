"use client";

import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <section className="bg-sbpc-blue text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Notre équipe d&apos;experts est à votre disposition pour échanger sur vos projets et répondre à vos questions.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-sbpc-blue mb-8">Informations de Contact</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-sbpc-light text-sbpc-gold rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-sbpc-blue mb-1">Notre Agence</h4>
                  <p className="text-gray-600">Douala, Cameroun</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-sbpc-light text-sbpc-gold rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-sbpc-blue mb-1">Téléphone</h4>
                  <p className="text-gray-600">+237 691 46 36 36</p>
                  <p className="text-gray-600">+237 670 20 20 52</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-sbpc-light text-sbpc-gold rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-sbpc-blue mb-1">Email</h4>
                  <p className="text-gray-600">solutionbatiplusconsultings@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-sbpc-blue mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-sbpc-gold" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-sbpc-gold" placeholder="Votre email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-sbpc-gold" placeholder="Sujet de votre message" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-sbpc-gold" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-sbpc-blue text-white font-bold rounded-lg hover:bg-sbpc-gold transition-colors flex items-center justify-center gap-2">
                Envoyer le message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
