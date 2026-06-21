import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande de Devis | SBPC — Solution Bâti Plus Consulting",
  description:
    "Soumettez votre demande de devis en ligne. Décrivez votre projet de construction ou rénovation, nos experts vous répondent sous 48h.",
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
