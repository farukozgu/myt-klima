export const business = {
  businessName: "MYT Klima",
  legalName: "MYT Mühendislik",
  serviceArea: "İstanbul",
  country: "Türkiye",
  language: "tr",
  locale: "tr_TR",
  telephone: "+905427983156",
  contactPerson: "Erhan Paltacı",
  phoneDisplay: "0542 798 31 56",
  phoneInternational: "+90 542 798 31 56",
  phoneHref: "tel:+905427983156",
  email: "mytklimamuhendislik@gmail.com",
  emailHref: "mailto:mytklimamuhendislik@gmail.com",
  instagram: "https://www.instagram.com/mytklimamuhendislik/",
  instagramHandle: "@mytklimamuhendislik",
  whatsappNumber: "905427983156",
  whatsappHref: "https://wa.me/905427983156",
} as const;

export const quoteMessage =
  "Merhaba Erhan Bey, klima hakkında bilgi ve teklif almak istiyorum.";

export function getWhatsAppHref(message: string) {
  return `${business.whatsappHref}?${new URLSearchParams({ text: message }).toString()}`;
}
