import type { Metadata } from "next";
import { business } from "./business";

// Stable staging origin only; never use VERCEL_URL (a deployment-specific URL).
const configuredUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://myt-klima.vercel.app");
if (!['https:', 'http:'].includes(configuredUrl.protocol) || configuredUrl.username || configuredUrl.password || configuredUrl.pathname !== '/' || configuredUrl.search || configuredUrl.hash) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path, credentials, query or hash.");
}
export const SITE_URL = configuredUrl.origin;
export const isPreview = Boolean(process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production");
export const siteUrl = (path: string) => new URL(path, `${SITE_URL}/`).toString();

export const pages = {
  "/": {
    label: "Ana Sayfa",
    title: "İstanbul Klima Servisi, Montaj ve Bakım | MYT Klima",
    description: "İstanbul genelinde klima satışı, montaj, bakım, teknik servis ve VRF sistemleri. Klima seçimi ve uygulama hakkında MYT Klima’dan bilgi alın.",
  },
  "/klimalar": {
    label: "Klimalar",
    title: "İstanbul Klima Satışı ve Klima Seçimi | MYT Klima",
    description: "Duvar tipi, salon tipi, kaset tipi ve Multi Split klima seçeneklerini inceleyin. İstanbul’da alanınıza uygun klima tipi ve kapasitesi için bilgi alın.",
  },
  "/hizmetler": {
    label: "Hizmetler",
    title: "İstanbul Klima Hizmetleri | Montaj, Bakım ve Servis | MYT Klima",
    description: "İstanbul genelinde klima satışı, montaj, bakım, teknik servis, VRF, keşif ve tesisat bakım hizmetleri hakkında bilgi alın.",
  },
  "/vrf-sistemleri": {
    label: "VRF Sistemleri",
    title: "İstanbul VRF Sistemleri ve Projelendirme | MYT Klima",
    description: "İstanbul’da ofis, mağaza, villa, otel ve ticari yapılar için VRF sistemi keşif, projelendirme, montaj, bakım ve teknik servis hizmetleri.",
  },
  "/hakkimizda": {
    label: "Hakkımızda",
    title: "MYT Klima Mühendislik | İstanbul İklimlendirme",
    description: "MYT Klima; İstanbul genelinde klima satışı, montaj, bakım, teknik servis, VRF ve iklimlendirme uygulamaları üzerine çalışır.",
  },
  "/iletisim": {
    label: "İletişim",
    title: "İletişim | MYT Klima İstanbul",
    description: "Klima satışı, montaj, bakım, teknik servis ve VRF sistemleri için MYT Klima’ya telefon veya WhatsApp üzerinden ulaşın. Hizmet bölgesi: İstanbul.",
  },
} as const;
export type PagePath = keyof typeof pages;

const socialImage = {
  url: siteUrl("/images/myt-klima-social.jpg"),
  width: 1200,
  height: 630,
  alt: "MYT Klima — klima montajı ve iklimlendirme hizmetleri",
};

export function pageMetadata(path: PagePath): Metadata {
  const { title, description } = pages[path];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: siteUrl(path) },
    openGraph: {
      title, description, url: siteUrl(path),
      siteName: business.businessName, locale: business.locale, type: "website",
      images: [socialImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

export const globalMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: business.businessName, template: `%s | ${business.businessName}` },
  description: pages["/"].description,
  applicationName: business.businessName,
  robots: { index: !isPreview, follow: !isPreview },
  openGraph: {
    title: business.businessName, description: pages["/"].description,
    siteName: business.businessName, locale: business.locale, type: "website", images: [socialImage],
  },
  twitter: { card: "summary_large_image", images: [socialImage] },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export const organizationId = siteUrl("/#organization");
export const areaServed = { "@type": "City", name: business.serviceArea, containedInPlace: { "@type": "Country", name: business.country } };
export const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", "@id": organizationId,
  name: business.businessName, legalName: business.legalName,
  url: siteUrl("/"), telephone: business.telephone, email: business.email, sameAs: [business.instagram], areaServed,
  contactPoint: { "@type": "ContactPoint", telephone: business.telephone, contactType: "customer service", availableLanguage: business.language, areaServed },
};
export const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": siteUrl("/#website"),
  name: business.businessName, url: siteUrl("/"), inLanguage: business.language,
  publisher: { "@id": organizationId },
};

const services = [
  ["Klima Satışı", "klima-satisi", "Alan ve kullanım koşullarına uygun klima seçimi ve satışı."],
  ["Klima Montajı", "klima-montaji", "İç ve dış ünite yerleşimi ve klima montajı."],
  ["Klima Bakımı", "klima-bakimi", "Klima temizliği, bakım ve çalışma kontrolleri."],
  ["Klima Teknik Servis", "teknik-servis", "Klima arızalarının değerlendirilmesi ve teknik servis."],
  ["VRF Sistemleri", "vrf-sistemleri", "VRF keşif, projelendirme, montaj, bakım ve teknik servis."],
  ["Keşif ve Projelendirme", "kesif-ve-projelendirme", "Alan, kapasite ve cihaz yerleşimi değerlendirmesi."],
  ["Su Tesisatı Bakımı", "tesisat-bakim", "Su tesisatında bakım ve kontrol hizmetleri."],
  ["Daire İçi Doğalgaz Tesisatı Bakımı", "tesisat-bakim", "Daire içi doğalgaz tesisatında bakım ve kontrol hizmetleri."],
] as const;
export const serviceCatalogSchema = {
  "@context": "https://schema.org", "@type": "OfferCatalog", "@id": siteUrl("/hizmetler#hizmet-katalogu"),
  name: "MYT Klima Hizmetleri", url: siteUrl("/hizmetler"),
  itemListElement: services.map(([name, anchor, description]) => ({
    "@type": "Offer", itemOffered: {
      "@type": "Service", name, serviceType: name, description,
      url: siteUrl(`/hizmetler#${anchor}`), areaServed, provider: { "@id": organizationId },
    },
  })),
};
