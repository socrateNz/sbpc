import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | SBPC — Solution Bâti Plus Consulting",
  description:
    "Découvrez l'histoire, la vision et les valeurs de SBPC. Plus de 15 ans d'expertise dans la construction haut de gamme et le conseil immobilier premium.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
