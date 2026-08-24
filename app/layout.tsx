import type { Metadata } from "next";
import { fraunces, jetbrains } from "./fonts";

export const metadata: Metadata = {
  title: "Daniel Szwarc — Alternate Build",
  description: "Alternate design direction for daniszwarc.com — bold constructivist light theme.",
};

export default function AltLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${fraunces.variable} ${jetbrains.variable}`}>{children}</div>;
}
