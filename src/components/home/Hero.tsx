"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-sbpc-blue/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-sbpc-blue via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 px-6 lg:px-12 text-white flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight"
        >
          Construire aujourd'hui,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sbpc-gold to-yellow-200">
            valoriser demain.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light"
        >
          SBPC accompagne vos projets de construction et d&apos;investissement immobilier avec expertise, innovation et exigence de qualité.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/devis"
            className="group px-8 py-4 bg-sbpc-gold text-sbpc-blue font-bold rounded-md hover:bg-yellow-500 transition-all flex items-center justify-center gap-2"
          >
            Demander un devis
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
          >
            Découvrir nos services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest">Défiler</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-sbpc-gold to-transparent" />
      </motion.div>
    </section>
  );
}