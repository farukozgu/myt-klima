import Image from "next/image";
import styles from "./installation-section.module.css";

const considerations = [
  {
    title: "İÇ ÜNİTE KONUMU",
    description: "Havanın odaya dengeli dağılabileceği ve kullanım alanını rahatsız etmeyeceği bir konum belirlenir.",
  },
  {
    title: "DIŞ ÜNİTE KONUMU",
    description: "Hava sirkülasyonu, servis erişimi ve montaj koşulları birlikte değerlendirilir.",
  },
  {
    title: "BORU HATTI",
    description: "Bakır boru hattı ve gerekli elektrik bağlantısı, gereksiz uzatmalardan kaçınılarak planlanır.",
  },
  {
    title: "DRENAJ",
    description: "Yoğuşma suyunun doğru şekilde tahliye edilebilmesi için gider hattı montajdan önce düşünülür.",
  },
];

function InstallationVisual() {
  return (
    <figure className={styles.visual}>
      <svg
        className={styles.diagram}
        viewBox="0 0 600 440"
        role="img"
        aria-labelledby="installation-diagram-title installation-diagram-description"
      >
        <title id="installation-diagram-title">Montaj yerleşimi</title>
        <desc id="installation-diagram-description">
          İç ve dış üniteyi, aralarındaki boru hattını ve ayrı bir drenaj
          güzergâhını gösteren sade, ölçeksiz şema.
        </desc>
        <g fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <g className={styles.referenceLines}>
            <path d="M338 58v324M350 58v324M65 366h465" />
            <path d="M72 68h12M78 62v12M516 68h12M522 62v12" />
          </g>
          <g className={styles.units}>
            <rect x="92" y="110" width="204" height="70" rx="5" />
            <path d="M106 159h176M112 168h164M269 125h9" />
            <rect x="388" y="252" width="136" height="96" rx="3" />
            <circle cx="434" cy="300" r="29" />
            <circle cx="434" cy="300" r="19" />
            <path d="M477 272h30M477 283h30M477 294h30M477 305h30M477 316h30M401 348v10h18v-10M493 348v10h18v-10" />
          </g>
          <path className={styles.pipe} d="M296 141h61a13 13 0 0 1 13 13v119a13 13 0 0 0 13 13h5" />
          <path className={styles.drain} strokeDasharray="5 6" d="M296 166l24 8v158l26 34" />
          <g className={styles.markers}>
            <circle cx="370" cy="216" r="3" />
            <circle cx="320" cy="276" r="3" />
          </g>
        </g>
      </svg>
      <div className={styles.detailMedia}>
        <Image
          src="/images/installation-detail.png"
          alt="Klima montajında boru hattı bağlantısı yapan teknik personel"
          width={1899}
          height={831}
          sizes="(max-width: 480px) calc(100vw - 40px), (max-width: 820px) calc(100vw - 48px), 440px"
        />
      </div>
      <figcaption>Montaj yerleşimi <span aria-hidden="true">·</span> Şematik gösterim</figcaption>
    </figure>
  );
}

export default function InstallationSection() {
  return (
    <section className={styles.section} aria-labelledby="installation-title">
      <div className="container">
        <header className={styles.intro}>
          <p className={styles.eyebrow}>MONTAJ</p>
          <h2 id="installation-title">İyi bir montaj, cihaz kadar önemlidir.</h2>
          <p className={styles.description}>
            İç ve dış ünitenin konumu, bakır boru hattı, gerekli elektrik bağlantısı
            ve yoğuşma suyunun doğru tahliyesi montajdan önce birlikte planlanır.
          </p>
        </header>
        <div className={styles.layout}>
          <InstallationVisual />
          <ol className={styles.considerations}>
            {considerations.map((item, index) => (
              <li className={styles.row} key={item.title}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
