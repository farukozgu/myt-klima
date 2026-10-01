import styles from "./contact-cta.module.css";
import WhatsAppIcon from "./whatsapp-icon";
import { business, getWhatsAppHref } from "./business";
import Reveal from "./reveal";

const contactMessage = "Merhaba Erhan Bey, klima hakkında bilgi almak istiyorum.";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.5 3.5h3l1.4 4.1-1.8 1.8a16.1 16.1 0 0 0 6.5 6.5l1.8-1.8 4.1 1.4v3a2 2 0 0 1-2.2 2C10 19.9 4.1 14 3.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export default function ContactCta() {
  return (
    <section className={styles.section} id="iletisim" aria-labelledby="contact-cta-title">
      <div className={`container ${styles.layout}`}>
        <Reveal><div className={styles.copy}>
          <p className={styles.eyebrow}>İLETİŞİM</p>
          <h2 id="contact-cta-title">
            Yeni klima mı düşünüyorsunuz, mevcut cihazda bir sorun mu var?
          </h2>
          <p className={styles.description}>
            Ne yapılması gerektiğinden emin değilseniz, alanı veya cihazdaki
            sorunu kısaca anlatın. Uygun seçeneği birlikte değerlendirelim.
          </p>
        </div></Reveal>
        <Reveal delay={90}><div className={styles.actions}>
          <div className={styles.buttons}>
            <a
              className={styles.whatsapp}
              href={getWhatsAppHref(contactMessage)}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              <span>WhatsApp’tan Yaz</span>
            </a>
            <a className={styles.phone} href={business.phoneHref}>
              <PhoneIcon />
              <span>Ara</span>
            </a>
          </div>
          <p className={styles.contactDetails}>
            {business.contactPerson} <span aria-hidden="true">·</span>{" "}
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
          </p>
          <p className={styles.microcopy}>
            Klima seçimi · Montaj · Bakım · Teknik servis · VRF
          </p>
        </div></Reveal>
      </div>
    </section>
  );
}
