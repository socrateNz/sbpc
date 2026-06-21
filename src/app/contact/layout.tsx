import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous | SBPC — Solution Bâti Plus Consulting",
  description:
    "Prenez contact avec les experts SBPC pour discuter de votre projet immobilier ou de construction. Réponse sous 24h.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
