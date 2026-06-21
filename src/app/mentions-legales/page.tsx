import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales | SBPC — Solution Bâti Plus Consulting",
  description:
    "Mentions légales du site SBPC — Solution Bâti Plus Consulting : éditeur, hébergeur, propriété intellectuelle et conditions d'utilisation.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-sbpc-blue mb-10">Mentions Légales</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sbpc-blue mb-4">Éditeur du site</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Dénomination sociale :</strong> SBPC — Solution Bâti Plus Consulting<br />
            <strong>Siège social :</strong> Douala, Cameroun<br />
            <strong>Téléphone :</strong> +237 691 46 36 36 / +237 670 20 20 52<br />
            <strong>Email :</strong> solutionbatiplusconsultings@gmail.com<br />
            <strong>Directeur de la publication :</strong> Direction SBPC
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sbpc-blue mb-4">Hébergement</h2>
          <p className="text-gray-600 leading-relaxed">
            Ce site est hébergé par un prestataire professionnel. Les coordonnées de l&apos;hébergeur
            sont disponibles sur demande à l&apos;adresse : contact@sbpc-consulting.com.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sbpc-blue mb-4">Propriété intellectuelle</h2>
          <p className="text-gray-600 leading-relaxed">
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes,
            sons, logiciels, etc.) est la propriété exclusive de SBPC, sauf mention contraire.
            Toute reproduction, distribution, modification, adaptation ou retransmission du
            contenu de ce site, sous quelque forme que ce soit, est strictement interdite
            sans l&apos;accord préalable écrit de SBPC.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sbpc-blue mb-4">Limitation de responsabilité</h2>
          <p className="text-gray-600 leading-relaxed">
            SBPC ne saurait être tenu responsable des dommages directs ou indirects causés
            au matériel de l&apos;utilisateur lors de l&apos;accès au site, résultant de
            l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications
            indiquées ou de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sbpc-blue mb-4">Droit applicable</h2>
          <p className="text-gray-600 leading-relaxed">
            Tout litige en relation avec l&apos;utilisation du site est soumis au droit
            français. Il est fait attribution exclusive de juridiction aux tribunaux
            compétents de Paris.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sbpc-gold font-semibold hover:text-sbpc-blue transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
