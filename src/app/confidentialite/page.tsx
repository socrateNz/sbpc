import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | SBPC — Solution Bâti Plus Consulting",
  description:
    "Politique de confidentialité de SBPC : comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.",
};

export default function ConfidentialitePage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-sbpc-blue mb-4">Politique de Confidentialité</h1>
        <p className="text-gray-500 mb-10">Dernière mise à jour : Juin 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sbpc-blue mb-4">1. Responsable du traitement</h2>
          <p className="text-gray-600 leading-relaxed">
            SBPC — Solution Bâti Plus Consulting, Douala, Cameroun.<br />
          Contact : solutionbatiplusconsultings@gmail.com
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sbpc-blue mb-4">2. Données collectées</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lors de l&apos;utilisation de notre formulaire de contact ou de demande de devis,
            nous collectons les informations suivantes :
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (le cas échéant)</li>
            <li>Informations relatives à votre projet</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sbpc-blue mb-4">3. Finalités du traitement</h2>
          <p className="text-gray-600 leading-relaxed">
            Les données collectées sont utilisées uniquement pour répondre à vos demandes,
            établir des devis et assurer le suivi commercial de vos projets. Elles ne sont
            jamais transmises à des tiers à des fins commerciales.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sbpc-blue mb-4">4. Durée de conservation</h2>
          <p className="text-gray-600 leading-relaxed">
            Vos données sont conservées pendant une durée maximum de 3 ans à compter de
            notre dernier contact, conformément aux dispositions du RGPD.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sbpc-blue mb-4">5. Vos droits</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous
            disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d&apos;opposition</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Pour exercer ces droits, contactez-nous à : solutionbatiplusconsultings@gmail.com
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sbpc-blue mb-4">6. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Ce site n&apos;utilise pas de cookies de suivi ou publicitaires. Des cookies
            techniques strictement nécessaires au fonctionnement du site peuvent être
            déposés sur votre navigateur.
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
