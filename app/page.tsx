import Image from "next/image";
import SiteHeader from "./site-header";
import ServicesSection from "./services-section";
import ClimateSelection from "./climate-selection";
import InstallationSection from "./installation-section";
import CommercialSection from "./commercial-section";
import FaqSection from "./faq-section";
import ContactCta from "./contact-cta";
import SiteFooter from "./site-footer";
import { getWhatsAppHref, quoteMessage } from "./business";

const services = [
  "Klima Satışı",
  "Montaj",
  "Bakım",
  "Teknik Servis",
  "VRF Sistemleri",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="ana-sayfa">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-intro container">
            <div className="hero-copy">
              <p className="eyebrow">MYT KLİMA · İKLİMLENDİRME SİSTEMLERİ</p>
              <h1 id="hero-title">
                Doğru klima.<br />
                <span>Doğru montaj.</span>
              </h1>
              <p className="hero-description">
                Eviniz veya iş yeriniz için uygun klimayı belirliyor, montajını
                yapıyor ve ihtiyaç halinde teknik desteğini sürdürüyoruz.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={getWhatsAppHref(quoteMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Teklif Al
                </a>
              </div>
              <p className="service-line">
                Klima satışı, montaj, bakım ve teknik servis.
              </p>
            </div>
          </div>

          <div className="hero-media container">
            <Image
              className="hero-image"
              src="/images/myt-klima-hero-technician.png"
              alt="Duvar tipi klimaya montaj yapan teknik personel"
              width={2132}
              height={738}
              priority
              sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1020px) calc(100vw - 48px), 1240px"
            />
          </div>

          <div className="capabilities-wrap container">
            <ul className="capabilities" aria-label="Hizmet alanları">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </section>
        <ServicesSection />
        <ClimateSelection />
        <InstallationSection />
        <CommercialSection />
        <FaqSection />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
