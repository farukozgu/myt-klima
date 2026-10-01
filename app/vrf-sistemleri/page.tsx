import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import WhatsAppIcon from "../whatsapp-icon";
import { business, getWhatsAppHref } from "../business";
import VrfFaq from "./vrf-faq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "VRF Sistemleri | MYT Klima",
  description:
    "Çok bölmeli yapılarda VRF sistemleri için keşif, projelendirme, montaj, bakım ve teknik servis.",
};

const heroMessage = "Merhaba Erhan Bey, VRF sistemi hakkında bilgi almak istiyorum.";
const projectMessage = "Merhaba Erhan Bey, VRF sistemi için proje hakkında bilgi almak istiyorum.";

const benefits = [
  ["BAĞIMSIZ ALAN KONTROLÜ", "Farklı odaların veya bölümlerin sıcaklık ihtiyacı ayrı ayrı yönetilebilir."],
  ["DAHA DÜZENLİ DIŞ ÜNİTE YAPISI", "Çok sayıda bağımsız split dış ünitesi yerine merkezi bir dış sistem planlanabilir."],
  ["FARKLI İÇ ÜNİTE SEÇENEKLERİ", "Duvar tipi, kaset tipi, kanallı veya tavan tipi iç üniteler proje ihtiyacına göre birlikte değerlendirilebilir."],
  ["BÜYÜK VE ÇOK BÖLMELİ YAPILAR", "VRF; otel, plaza, büyük ofis, hastane, ticari alan, restoran, villa ve benzeri yapılarda değerlendirilebilir."],
];

const indoorUnits = [
  ["DUVAR TİPİ", "Bağımsız oda ve daha küçük alanlarda değerlendirilebilir."],
  ["KASET TİPİ", "Asma tavan bulunan ofis, mağaza ve ticari alanlarda kullanılabilir."],
  ["KANALLI TİP", "İç ünitenin gizlendiği ve havanın kanal sistemiyle dağıtıldığı uygulamalarda."],
  ["TAVAN TİPİ", "Tavan yapısı ve kullanım koşullarının uygun olduğu alanlarda alternatif olabilir."],
];

const processSteps = [
  ["01", "KEŞİF", "Yapı ve kullanım koşulları değerlendirilir."],
  ["02", "PROJELENDİRME", "Kapasite, iç ünite tipleri ve sistem yerleşimi planlanır."],
  ["03", "MONTAJ", "Boru hatları, iç ve dış üniteler projeye göre uygulanır."],
  ["04", "DEVREYE ALMA", "Kurulum sonrası temel çalışma kontrolleri yapılır."],
  ["05", "BAKIM VE SERVİS", "Kullanım sürecindeki bakım ve teknik servis ihtiyaçları yönetilir."],
];

function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 3.5h3l1.4 4.1-1.8 1.8a16.1 16.1 0 0 0 6.5 6.5l1.8-1.8 4.1 1.4v3a2 2 0 0 1-2.2 2C10 19.9 4.1 14 3.5 5.7a2 2 0 0 1 2-2.2Z" /></svg>;
}

export default function VrfPage() {
  return <>
    <SiteHeader />
    <main>
      <section className={styles.hero} aria-labelledby="vrf-title">
        <div className="container">
          <p className={styles.eyebrow}>VRF SİSTEMLERİ</p>
          <h1 id="vrf-title">Birden fazla alanı tek sistem üzerinden yönetmek.</h1>
          <p className={styles.heroCopy}>VRF sistemleri, birden fazla iç ünitenin ortak bir dış sistem üzerinden çalışabildiği iklimlendirme çözümleridir. İç ünite tipi, kapasite ve kontrol yapısı binanın kullanımına göre projelendirilir.</p>
          <a className="button button-primary" href={getWhatsAppHref(heroMessage)} target="_blank" rel="noreferrer">VRF için bilgi al</a>
          <p className={styles.serviceLine}>Keşif <span aria-hidden="true">·</span> Projelendirme <span aria-hidden="true">·</span> Montaj <span aria-hidden="true">·</span> Bakım <span aria-hidden="true">·</span> Teknik servis</p>
        </div>
      </section>

      <section className={styles.explainer} aria-labelledby="explainer-title">
        <div className={`container ${styles.explainerGrid}`}>
          <figure className={styles.diagramFigure}><Image src="/images/vrf-system-diagram.png" alt="Çok katlı yapıda VRF sisteminin çalışma mantığını gösteren temsili görsel" width={1536} height={1024} priority sizes="(max-width: 800px) calc(100vw - 40px), 58vw" /></figure>
          <div className={styles.explainerCopy}>
            <p className={styles.eyebrow}>VRF NASIL ÇALIŞIR?</p>
            <h2 id="explainer-title">Bir dış sistem, birden fazla iç alan.</h2>
            <p>VRF sistemlerinde ortak dış sistem, projeye göre birden fazla iç üniteyle birlikte çalışabilir. Böylece aynı yapı içindeki farklı bölümler ayrı ayrı kontrol edilebilir.</p>
            <p>Boru dağılımı, kapasite, iç ünite tipi ve cihaz yerleşimi yapının mimarisine ve kullanımına göre planlanır.</p>
            <p className={styles.imageNote}>Görsel, sistem çalışma mantığını anlatan temsili bir görselleştirmedir.</p>
          </div>
        </div>
      </section>

      <section className={styles.benefits} aria-labelledby="benefits-title">
        <div className="container">
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>NEDEN VRF?</p><h2 id="benefits-title">Çok bölmeli yapılarda daha merkezi bir sistem yaklaşımı.</h2></div>
          <dl className={styles.benefitGrid}>{benefits.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
          <p className={styles.benefitNote}>Her yapı için VRF gerekli değildir. Sistem seçimi, alan ve kullanım koşullarına göre yapılmalıdır.</p>
        </div>
      </section>

      <section className={styles.units} aria-labelledby="units-title">
        <div className={`container ${styles.unitsGrid}`}>
          <figure className={styles.unitFigure}><Image src="/images/vrf-cassette-detail.png" alt="Asma tavanda bulunan kaset tipi klima iç ünitesi" width={1536} height={1024} sizes="(max-width: 800px) calc(100vw - 40px), 50vw" /></figure>
          <div><p className={styles.eyebrow}>İÇ ÜNİTE SEÇENEKLERİ</p><h2 id="units-title">Projeye göre farklı iç üniteler kullanılabilir.</h2><dl className={styles.unitList}>{indoorUnits.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className="container">
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>VRF PROJE SÜRECİ</p><h2 id="process-title">Keşiften teknik servise kadar.</h2></div>
          <ol className={styles.steps}>{processSteps.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="faq-title">
        <div className={`container ${styles.faqGrid}`}><div><p className={styles.eyebrow}>SIK SORULAN SORULAR</p><h2 id="faq-title">VRF hakkında kısa cevaplar.</h2></div><VrfFaq /></div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-title">
        <div className={`container ${styles.finalGrid}`}>
          <div><p className={styles.eyebrow}>VRF SİSTEMLERİ</p><h2 id="final-title">Projeniz için uygun sistemi birlikte değerlendirelim.</h2><p>Yapının kullanım amacı, yaklaşık alanı ve iklimlendirilmesi düşünülen bölümler ilk değerlendirme için yeterli olabilir.</p></div>
          <div className={styles.contactActions}><div className={styles.contactButtons}><a className={styles.whatsappButton} href={getWhatsAppHref(projectMessage)} target="_blank" rel="noreferrer"><WhatsAppIcon />WhatsApp’tan Yaz</a><a className={styles.phoneButton} href={business.phoneHref}><PhoneIcon />Ara</a></div><p>Erhan Paltacı<br /><a href={business.phoneHref}>{business.phoneDisplay}</a></p></div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
