import type { Metadata } from "next";
import { fraunces, jetbrains } from "./fonts";

export const metadata: Metadata = {
  title: "Dani Szwarc — AI Engineer & Full-Stack Developer",
  description:
    "Montreal-based AI engineer and full-stack developer. I build AI systems from idea to production.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
