import type { Metadata } from "next";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import WhatsAppIcon from "../whatsapp-icon";
import { business, getWhatsAppHref } from "../business";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "İletişim | MYT Klima",
  description:
    "Klima satışı, montaj, bakım, teknik servis ve VRF sistemleri hakkında MYT Klima ile telefon veya WhatsApp üzerinden iletişime geçin.",
};

const generalMessage =
  "Merhaba Erhan Bey, MYT Klima hizmetleri hakkında bilgi almak istiyorum.";
const photoMessage =
  "Merhaba Erhan Bey, klima hakkında birkaç fotoğraf ve bilgi göndermek istiyorum.";

const topics = [
  ["KLİMA SATIŞI", "Alanınıza uygun klima seçimi hakkında."],
  ["KLİMA MONTAJI", "Montaj yeri ve uygulama koşulları hakkında."],
  ["KLİMA BAKIMI", "Bakım ve cihaz kontrolü hakkında."],
  ["TEKNİK SERVİS", "Soğutmama, su akıtma, ses veya çalışma sorunları hakkında."],
  ["VRF SİSTEMLERİ", "Ofis, mağaza, villa ve ticari yapılar için VRF uygulamaları hakkında."],
  ["KEŞİF VE PROJELENDİRME", "Daha büyük veya çok bölmeli uygulamalar hakkında."],
] as const;

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className={styles.hero} aria-labelledby="contact-hero-title">
          <div className="container">
            <p className={styles.eyebrow}>İLETİŞİM</p>
            <h1 id="contact-hero-title">Klima hakkında konuşalım.</h1>
            <p>Klima seçimi, montaj, bakım, teknik servis veya VRF sistemleriyle ilgili bilgi almak için doğrudan ulaşabilirsiniz.</p>
          </div>
        </section>

        <section className={styles.contactInfo} aria-labelledby="contact-person-title">
          <div className={`container ${styles.contactLayout}`}>
            <div>
              <p className={styles.eyebrow}>MYT KLİMA · MYT MÜHENDİSLİK</p>
              <h2 id="contact-person-title">{business.contactPerson}</h2>
              <p className={styles.supporting}>Klima satışı, montaj, bakım, teknik servis ve VRF uygulamalarıyla ilgili iletişim.</p>
            </div>
            <div className={styles.actions}>
              <p className={styles.actionLabel}>TELEFON</p>
              <a className={styles.phoneNumber} href={business.phoneHref}>{business.phoneDisplay}</a>
              <div className={styles.buttons}>
                <a className={styles.whatsappButton} href={getWhatsAppHref(generalMessage)} target="_blank" rel="noreferrer">
                  <WhatsAppIcon />
                  WhatsApp’tan Yaz
                </a>
                <a className={styles.phoneButton} href={business.phoneHref}>Ara</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.topics} aria-labelledby="topics-title">
          <div className="container">
            <div className={styles.topicsHeading}>
              <p className={styles.eyebrow}>HANGİ KONULARDA?</p>
              <h2 id="topics-title">Doğrudan ulaşabilirsiniz.</h2>
            </div>
            <dl className={styles.topicList}>
              {topics.map(([title, description]) => (
                <div key={title}>
                  <dt>{title}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={styles.note} aria-labelledby="photo-note-title">
          <div className={`container ${styles.noteInner}`}>
            <div>
              <h2 id="photo-note-title">İlk mesajda ne gönderebilirsiniz?</h2>
              <p>Klima takılacak alanın veya mevcut cihazdaki sorunun birkaç fotoğrafını ve kısa bir açıklamasını göndermeniz ilk değerlendirmeyi kolaylaştırabilir.</p>
            </div>
            <a href={getWhatsAppHref(photoMessage)} target="_blank" rel="noreferrer">WhatsApp’tan fotoğraf gönder <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className={styles.closing} aria-label="İletişim bağlantıları">
          <div className={`container ${styles.closingInner}`}>
            <p>{business.contactPerson} <span aria-hidden="true">·</span> {business.phoneDisplay}</p>
            <div>
              <a href={getWhatsAppHref(generalMessage)} target="_blank" rel="noreferrer">WhatsApp</a>
              <a href={business.phoneHref}>Ara</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
