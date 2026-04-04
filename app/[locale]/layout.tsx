import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://www.theirregularshow.de/";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: locale === "en" ? BASE_URL : `${BASE_URL}/de`,
      languages: {
        en: BASE_URL,
        de: `${BASE_URL}/de`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: locale === "en" ? BASE_URL : `${BASE_URL}/de`,
      siteName: "The Irre.Gular Show",
      locale: locale === "de" ? "de_DE" : "en_GB",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest",
  };
}

const shows2026 = [
  { date: "2026-05-14", name: "The Wizard of Oz but gay" },
  { date: "2026-05-16", name: "Lichtenberg edition" },
  { date: "2026-06-25", name: "Animal Farm but gay" },
  { date: "2026-07-23", name: "Men in Black but gay" },
  { date: "2026-09-18", name: "Spirited Away but gay" },
];

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": shows2026.map((show) => ({
      "@type": "Event",
      name: `The Irre.Gular Show – ${show.name}`,
      startDate: show.date,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Nirgendwo",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Helsingforser Str. 10",
          addressLocality: "Berlin",
          postalCode: "10243",
          addressCountry: "DE",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "The Irre.Gular Show",
        url: BASE_URL,
      },
      url: "https://www.eventbrite.de/cc/the-irregular-show-4th-season-4829069?aff=odclrlmcfto",
    })),
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
