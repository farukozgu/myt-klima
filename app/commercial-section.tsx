import Link from "next/link";
import Image from "next/image";
import styles from "./commercial-section.module.css";
import Reveal from "./reveal";

const details = [
  {
    title: "ÇOKLU ALAN YÖNETİMİ",
    description: "Birden fazla iç ünite aynı sistem içinde çalışabilir.",
  },
  {
    title: "PROJEYE GÖRE PLANLAMA",
    description: "Duvar tipi, kaset tipi, kanallı ve tavan tipi iç üniteler proje ihtiyacına göre bir arada kullanılabilir.",
  },
  {
    title: "TİCARİ VE BÜYÜK ALANLAR",
    description: "Ofis, mağaza, villa, otel, plaza, restoran ve büyük ticari yapılar için değerlendirilebilir.",
  },
];

export default function CommercialSection() {
  return (
    <section className={styles.section} aria-labelledby="commercial-title">
      <div className={`container ${styles.layout}`}>
        <Reveal><div className={styles.content}>
          <p className={styles.eyebrow}>TİCARİ SİSTEMLER</p>
          <h2 id="commercial-title">
            Birden fazla alan için daha kontrollü iklimlendirme.
          </h2>
          <p className={styles.description}>
            VRF sistemleri; ofis, mağaza, villa, otel, plaza, restoran ve benzeri
            yapılarda birden fazla alanın bağımsız iklimlendirilmesi gerektiğinde
            değerlendirilebilir. Keşif, projelendirme, montaj, bakım ve teknik servis
            ihtiyaçları projeye göre birlikte planlanır.
          </p>
          <dl className={styles.details}>
            {details.map((detail) => (
              <div className={styles.detail} key={detail.title}>
                <dt>{detail.title}</dt>
                <dd>{detail.description}</dd>
              </div>
            ))}
          </dl>
          <Link className={styles.cta} href="/vrf-sistemleri">
            <span>VRF Sistemlerini İncele</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div></Reveal>
        <Reveal variant="imageReveal"><figure className={styles.media}>
          <div className={styles.mediaSurface}>
            <Image
              src="/images/vrf-commercial.png"
              alt="VRF sistemi kullanılan modern ticari iç mekân"
              width={1456}
              height={1088}
              sizes="(max-width: 480px) calc(100vw - 40px), (max-width: 900px) calc(100vw - 48px), 54vw"
            />
          </div>
          <figcaption>VRF / TİCARİ İKLİMLENDİRME</figcaption>
        </figure></Reveal>
      </div>
    </section>
  );
}
