import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Processus | SBPC — Solution Bâti Plus Consulting",
  description:
    "Découvrez la méthodologie SBPC en 5 étapes : de l'analyse des besoins à la livraison finale, une approche éprouvée pour garantir le succès de votre projet.",
};

export default function ProcessusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
