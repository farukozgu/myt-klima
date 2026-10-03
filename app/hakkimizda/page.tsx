import { pageMetadata } from "../seo";
import Breadcrumbs from "../breadcrumbs";
import Image from "next/image";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import WhatsAppIcon from "../whatsapp-icon";
import { business, getWhatsAppHref } from "../business";
import styles from "./page.module.css";

export const metadata = pageMetadata("/hakkimizda");

const aboutMessage =
  "Merhaba Erhan Bey, MYT Klima hizmetleri hakkında bilgi almak istiyorum.";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.5 3.5h3l1.4 4.1-1.8 1.8a16.1 16.1 0 0 0 6.5 6.5l1.8-1.8 4.1 1.4v3a2 2 0 0 1-2.2 2C10 19.9 4.1 14 3.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

const steps = [
  ["01", "İHTİYACI ANLAMAK", "Yeni cihaz, bakım, arıza veya proje ihtiyacını netleştiriyoruz."],
  ["02", "ALANI DEĞERLENDİRMEK", "Cihaz kapasitesi, montaj noktası ve uygulama koşullarını birlikte ele alıyoruz."],
  ["03", "UYGULAMAYI PLANLAMAK", "Montaj, boru hattı, drenaj veya sistem yerleşimi gibi detayları işe başlamadan önce değerlendiriyoruz."],
  ["04", "ÇALIŞMASINI KONTROL ETMEK", "Uygulama tamamlandıktan sonra cihazın veya sistemin temel çalışma durumunu kontrol ediyoruz."],
];

const serviceAreas = [
  ["EVLER", "Klima seçimi, montaj, bakım ve teknik servis."],
  ["OFİSLER", "Bireysel klima uygulamalarından çoklu iklimlendirme sistemlerine kadar."],
  ["MAĞAZALAR", "Satış alanı ve diğer bölümlerin kullanımına göre iklimlendirme."],
  ["VİLLALAR", "Birden fazla oda veya kat için split, multi veya VRF seçeneklerinin değerlendirilmesi."],
  ["TİCARİ YAPILAR", "Daha büyük ve çok bölmeli alanlarda proje bazlı iklimlendirme."],
];

function ContactActions() {
  return (
    <div className={styles.contactActions}>
      <a className={styles.whatsapp} href={getWhatsAppHref(aboutMessage)} target="_blank" rel="noreferrer">
        <WhatsAppIcon /> <span>WhatsApp’tan Yaz</span>
      </a>
      <a className={styles.phone} href={business.phoneHref}>
        <PhoneIcon /> <span>Ara</span>
      </a>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className={styles.hero} aria-labelledby="about-hero-title">
          <div className={`container ${styles.heroInner}`}>
            <Breadcrumbs path="/hakkimizda" />
            <p className={styles.eyebrow}>MYT MÜHENDİSLİK</p>
            <h1 id="about-hero-title">İklimlendirme işini baştan sona ele alıyoruz.</h1>
            <p>MYT Klima; İstanbul genelinde bireysel ve ticari iklimlendirme ihtiyaçlarında klima satışı, montaj, bakım, teknik servis ve VRF sistemleri üzerine çalışır.</p>
            <p>Her uygulama aynı olmadığı için önce ihtiyacı, alanı ve montaj koşullarını değerlendirip ardından uygun sistemi veya işlemi belirliyoruz.</p>
          </div>
        </section>

        <section className={styles.introduction} aria-labelledby="what-we-do-title">
          <div className={`container ${styles.introductionGrid}`}>
            <figure className={styles.figure}>
              <Image src="/images/myt-klima-brand-editorial.png" alt="MYT Klima Mühendislik marka görseli" width={1776} height={888} sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 48px), 600px" />
            </figure>
            <div className={styles.introductionCopy}>
              <p className={styles.eyebrow}>MYT KLİMA</p>
              <h2 id="what-we-do-title">Ne yapıyoruz?</h2>
              <p>Yeni klima seçiminden mevcut cihazın bakımına, teknik servis ihtiyacından daha büyük VRF uygulamalarına kadar farklı iklimlendirme işlerini aynı yapı içinde ele alıyoruz.</p>
              <p>Cihaz seçimi, montaj noktası, boru ve drenaj güzergâhı veya daha büyük sistemlerde kapasite ve iç ünite planlaması gibi detayların işin başında değerlendirilmesini önemsiyoruz.</p>
            </div>
          </div>
        </section>

        <section className={styles.approach} aria-labelledby="approach-title">
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>ÇALIŞMA YAKLAŞIMI</p>
              <h2 id="approach-title">Önce ne gerektiğini netleştiriyoruz.</h2>
            </div>
            <ol className={styles.steps}>
              {steps.map(([number, title, description]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></li>)}
            </ol>
          </div>
        </section>

        <section className={styles.areas} aria-labelledby="areas-title">
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>ÇALIŞMA ALANLARI</p>
              <h2 id="areas-title">Evden ticari yapılara kadar.</h2>
            </div>
            <dl className={styles.areaList}>
              {serviceAreas.map(([name, description]) => <div key={name}><dt>{name}</dt><dd>{description}</dd></div>)}
            </dl>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="final-cta-title">
          <div className={`container ${styles.finalCtaInner}`}>
            <div><h2 id="final-cta-title">İklimlendirme ihtiyacınızı konuşalım.</h2><p>Yeni klima seçimi, montaj, bakım, teknik servis veya VRF sistemi için kısa bilgi paylaşmanız yeterli.</p></div>
            <ContactActions />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
