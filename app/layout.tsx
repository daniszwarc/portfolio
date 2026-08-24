import type { Metadata } from "next";
import { fraunces, jetbrains } from "./fonts";

export const metadata: Metadata = {
  title: "Daniel Szwarc — Alternate Build",
  description: "Alternate design direction for daniszwarc.com — bold constructivist light theme.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
