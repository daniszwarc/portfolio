import type { Metadata } from "next";
import { fraunces, jetbrains } from "./fonts";

const siteUrl = "https://daniszwarc.com";
const title = "Dani Szwarc — AI Systems Engineer";
const description =
  "Montreal-based AI systems engineer. I build production AI systems from idea to deployment.";

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
  jobTitle: "AI Systems Engineer",
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
