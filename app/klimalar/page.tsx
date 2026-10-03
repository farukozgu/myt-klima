import Link from "next/link";
import { pageMetadata } from "../seo";
import Breadcrumbs from "../breadcrumbs";
import Image from "next/image";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import WhatsAppIcon from "../whatsapp-icon";
import { business, getWhatsAppHref } from "../business";
import shared from "../vrf-sistemleri/page.module.css";
import KlimaFaq from "./klima-faq";
import styles from "./page.module.css";

export const metadata = pageMetadata("/klimalar");

const quoteMessage = "Merhaba Erhan Bey, klima seçimi ve fiyat teklifi hakkında bilgi almak istiyorum.";
const selectionMessage = "Merhaba Erhan Bey, alanıma uygun klima seçimi hakkında bilgi almak istiyorum.";

const types = [
  { title: "Duvar Tipi Klima", copy: "Evlerde, küçük ve orta ölçekli ofislerde en sık kullanılan klima tiplerinden biridir. İç ünite duvara monte edilir ve alanın yapısına göre farklı kapasite seçenekleri değerlendirilebilir.", uses: "Ev · Oda · Salon · Küçük ofis", note: "Cihaz kapasitesi yalnızca metrekareye göre seçilmemelidir." },
  { title: "Salon Tipi Klima", copy: "Daha geniş veya yoğun kullanılan alanlarda değerlendirilebilen, zemine yakın konumlanan yüksek hava debili klima tipidir.", uses: "Mağaza · Salon · Restoran · Geniş ticari alan" },
  { title: "Kaset Tipi Klima", copy: "Asma tavan bulunan ofis, mağaza ve ticari alanlarda tercih edilebilen bir iç ünite tipidir. Havanın farklı yönlere dağıtılması gereken alanlarda değerlendirilebilir.", uses: "Ofis · Mağaza · Ticari alan" },
  { title: "Multi Split Klima", copy: "Bir dış üniteyle birden fazla iç ünitenin çalıştırılabildiği uygulamalardır. Birden fazla odada klima ihtiyacı olduğunda dış ünite sayısını azaltmak için değerlendirilebilir.", uses: "Ev · Villa · Birden fazla oda", note: "İç ünite sayısı ve uygunluk kullanılacak sisteme göre belirlenmelidir." },
];

const factors = [
  ["ALAN BÜYÜKLÜĞÜ", "Metrekare kapasite hesabının başlangıç noktalarından biridir."],
  ["GÜNEŞ VE CEPHE", "Doğrudan güneş alan veya büyük pencere yüzeyine sahip alanlarda ısı yükü değişebilir."],
  ["TAVAN YÜKSEKLİĞİ", "Standarttan yüksek tavanlar iklimlendirilecek hava hacmini artırır."],
  ["YALITIM", "Pencere, duvar ve genel yalıtım koşulları kapasite ihtiyacını etkileyebilir."],
  ["KULLANIM YOĞUNLUĞU", "Ofis, mağaza veya kalabalık kullanılan alanların yükü ev kullanımından farklı olabilir."],
];

const steps = [
  ["ALANI SÖYLEYİN", "Yaklaşık m² ve kullanım amacını paylaşın."],
  ["KOŞULLARI ANLATIN", "Güneş alma, tavan yüksekliği veya çok sayıda oda gibi önemli detayları belirtin."],
  ["MONTAJ YERİNİ GÖSTERİN", "Alan ve düşünülen montaj noktasının birkaç fotoğrafı ilk değerlendirmeyi kolaylaştırabilir."],
];

export default function KlimalarPage() {
  return <>
    <SiteHeader />
    <main>
      <section className={`${shared.hero} ${styles.hero}`} aria-labelledby="klimalar-title">
        <div className="container">
          <Breadcrumbs path="/klimalar" />
          <p className={shared.eyebrow}>KLİMALAR</p>
          <h1 id="klimalar-title">Her alan için aynı klima tipi uygun değildir.</h1>
          <p className={shared.heroCopy}>Klima seçerken yalnızca kapasiteye değil, alanın kullanımına ve <Link className="context-link" href="/hizmetler#klima-montaji">montaj koşullarına</Link> da bakmak gerekir. Ev, ofis, mağaza veya daha büyük alanlar için farklı cihaz tipleri değerlendirilebilir.</p>
          <a className="button button-primary" href={getWhatsAppHref(quoteMessage)} target="_blank" rel="noreferrer">Klima için teklif al</a>
          <p className={shared.serviceLine}>Duvar tipi · Salon tipi · Kaset tipi · Multi Split</p>
        </div>
      </section>

      <div className="container">
        <figure className={styles.heroImage}>
          <Image src="/images/klimalar-hero.webp" alt="Gün ışığı alan sade bir salonda duvara monte edilmiş split klima" width={1672} height={941} preload sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1020px) calc(100vw - 48px), (max-width: 1304px) calc(100vw - 64px), 1240px" />
        </figure>
      </div>

      <section className={styles.section} aria-labelledby="types-title">
        <div className="container">
          <div className={shared.sectionIntro}><p className={shared.eyebrow}>KLİMA TİPLERİ</p><h2 id="types-title">Kullanım alanına göre farklı seçenekler.</h2></div>
          <ol className={styles.types}>{types.map((type, index) => <li key={type.title}>
            <span className={styles.number} aria-hidden="true">0{index + 1}</span>
            <h3>{type.title}</h3>
            <div><p className={styles.typeCopy}>{type.copy}</p><p className={styles.uses}>{type.uses}</p>{type.note && <p className={styles.note}>{type.note}</p>}</div>
          </li>)}</ol>
        </div>
      </section>

      <section className={shared.benefits} aria-labelledby="selection-title">
        <div className={`container ${styles.selection}`}>
          <div className={shared.sectionIntro}><p className={shared.eyebrow}>KLİMA SEÇİMİ</p><h2 id="selection-title">Hangi klima size uygun?</h2><p className={styles.selectionCopy}>Cihaz tipi kadar kapasite seçimi de önemlidir. Aynı metrekaredeki iki alan, kullanım ve yapı özellikleri nedeniyle farklı klima ihtiyacına sahip olabilir.</p></div>
          <dl className={styles.factors}>{factors.map(([title, copy]) => <div key={title}><dt>{title}</dt><dd>{copy}</dd></div>)}</dl>
          <p className={styles.selectionNote}>Bu nedenle yalnızca ‘kaç m²?’ sorusuna bakarak cihaz seçmek her zaman doğru değildir.</p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="steps-title">
        <div className="container">
          <div className={shared.sectionIntro}><p className={shared.eyebrow}>NEREDEN BAŞLAMALI?</p><h2 id="steps-title">İhtiyacınızı üç adımda anlatabilirsiniz.</h2></div>
          <ol className={styles.steps}>{steps.map(([title, copy], index) => <li key={title}><span className={styles.number} aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
          <a className={`button button-primary ${styles.guideCta}`} href={getWhatsAppHref(selectionMessage)} target="_blank" rel="noreferrer">Klima seçimi için bilgi al</a>
        </div>
      </section>

      <section className={styles.capacity} aria-labelledby="capacity-title">
        <div className={`container ${styles.capacityGrid}`}><h2 id="capacity-title">Önce cihaz tipi, sonra doğru kapasite.</h2><div><p>En yüksek BTU değerini seçmek her zaman daha iyi sonuç anlamına gelmez. Gereğinden büyük veya küçük kapasite seçimi cihazın çalışma davranışını ve kullanım konforunu etkileyebilir.</p><p>Alan ve kullanım koşulları değerlendirildikten sonra uygun klima tipi ve kapasite birlikte belirlenmelidir.</p></div></div>
      </section>

      <section className={shared.faq} aria-labelledby="faq-title">
        <div className={`container ${shared.faqGrid}`}><div><p className={shared.eyebrow}>SIK SORULAN SORULAR</p><h2 id="faq-title">Klima seçimi hakkında kısa cevaplar.</h2></div><KlimaFaq /></div>
      </section>

      <section className={shared.finalCta} aria-labelledby="final-title">
        <div className={`container ${shared.finalGrid}`}>
          <div><p className={shared.eyebrow}>KLİMA SEÇİMİ</p><h2 id="final-title">Alanınıza uygun klimayı birlikte belirleyelim.</h2><p>Yaklaşık metrekareyi, kullanım amacını ve varsa alanın birkaç fotoğrafını paylaşmanız ilk değerlendirme için yeterli olabilir.</p></div>
          <div className={shared.contactActions}>
            <div className={shared.contactButtons}>
              <a className={shared.whatsappButton} href={getWhatsAppHref(selectionMessage)} target="_blank" rel="noreferrer"><WhatsAppIcon />WhatsApp’tan Yaz</a>
              <a className={shared.phoneButton} href={business.phoneHref}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 3.5h3l1.4 4.1-1.8 1.8a16.1 16.1 0 0 0 6.5 6.5l1.8-1.8 4.1 1.4v3a2 2 0 0 1-2.2 2C10 19.9 4.1 14 3.5 5.7a2 2 0 0 1 2-2.2Z" /></svg>Ara</a>
            </div>
            <p>{business.contactPerson}<br /><a href={business.phoneHref}>{business.phoneDisplay}</a></p>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
