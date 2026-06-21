import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services | SBPC — Solution Bâti Plus Consulting",
  description:
    "Étude & faisabilité, conception architecturale, construction & suivi de chantier, rénovation premium. Découvrez l'offre complète de SBPC.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
