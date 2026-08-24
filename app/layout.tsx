import type { Metadata } from "next";
import { fraunces, jetbrains } from "./fonts";

const siteUrl = "https://daniszwarc.com";
const title = "Dani Szwarc — AI Engineer & Full-Stack Developer";
const description =
  "Montreal-based AI engineer and full-stack developer. I build AI systems from idea to production.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Dani Szwarc",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dani Szwarc",
  url: siteUrl,
  jobTitle: "AI Engineer & Full-Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montreal",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  email: "mailto:dani@daniszwarc.com",
  sameAs: ["https://linkedin.com/in/daniszwarc", "https://github.com/daniszwarc"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrains.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
