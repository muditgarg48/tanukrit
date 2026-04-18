import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CONTENT } from "@/constants/content";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: CONTENT.seo.title,
  description: CONTENT.seo.description,
  keywords: CONTENT.seo.keywords,
  appleMobileWebAppTitle: CONTENT.navbar.logo,
  metadataBase: new URL(CONTENT.seo.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${CONTENT.navbar.logo} | Premium Gift Hampers`,
    description: CONTENT.seo.description,
    url: CONTENT.seo.siteUrl,
    siteName: CONTENT.navbar.logo,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONTENT.navbar.logo} | Premium Gift Hampers`,
    description: CONTENT.seo.description,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${CONTENT.seo.siteUrl}/#organization`,
        "name": CONTENT.navbar.logo,
        "url": CONTENT.seo.siteUrl,
        "logo": CONTENT.seo.logoUrl,
        "sameAs": CONTENT.contact.socials.map(s => s.link),
        "description": CONTENT.seo.description
      },
      {
        "@type": "LocalBusiness",
        "name": CONTENT.navbar.logo,
        "image": CONTENT.seo.logoUrl,
        "@id": `${CONTENT.seo.siteUrl}/#localbusiness`,
        "url": CONTENT.seo.siteUrl,
        "telephone": CONTENT.contact.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CONTENT.seo.address.street,
          "addressLocality": CONTENT.seo.address.city,
          "postalCode": CONTENT.seo.address.zip,
          "addressCountry": CONTENT.seo.address.country
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": CONTENT.seo.address.lat,
          "longitude": CONTENT.seo.address.lng
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "10:30",
          "closes": "19:00"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": CONTENT.faq.items.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}