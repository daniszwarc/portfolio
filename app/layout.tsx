import type { Metadata } from "next";
import { playfair, plexMono, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Szwarc — AI Engineer & Full-Stack Developer",
  description:
    "Daniel Szwarc builds AI systems that work in production. Montreal-based AI engineer and full-stack developer, MSc in Artificial Intelligence (University of Liverpool, 2026).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plexMono.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
