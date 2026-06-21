import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Réalisations | SBPC — Solution Bâti Plus Consulting",
  description:
    "Découvrez une sélection de nos projets les plus emblématiques : villas résidentielles premium, sièges sociaux, rénovations et constructions neuves.",
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
