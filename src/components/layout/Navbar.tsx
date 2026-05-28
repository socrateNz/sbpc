"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/processus", label: "Processus" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent backdrop-blur-2xl",
        isScrolled
          ? "bg-sbpc-blue/90 backdrop-blur-md border-white/10 shadow-lg py-4"
          : "py-6 bg-black/30 text"
      )}
    >
      <div className="relative container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="SBPC Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="ml-auto hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-sbpc-gold",
                pathname === link.href ? "text-sbpc-gold" : "text-gray-200"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/devis"
            className="px-6 py-2.5 bg-sbpc-gold text-sbpc-blue font-semibold rounded-md hover:bg-yellow-500 transition-colors"
          >
            Demander un devis
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-sbpc-blue border-b border-white/10 shadow-xl lg:hidden flex flex-col"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-6 py-4 border-b border-white/5 text-sm font-medium",
                  pathname === link.href ? "text-sbpc-gold" : "text-gray-200"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="p-6">
              <Link
                href="/devis"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex justify-center w-full px-6 py-3 bg-sbpc-gold text-sbpc-blue font-semibold rounded-md"
              >
                Demander un devis
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
