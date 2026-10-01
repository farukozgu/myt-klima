import styles from "./climate-selection.module.css";
import { getWhatsAppHref } from "./business";
import Reveal from "./reveal";

const quoteMessage = "Merhaba Erhan Bey, klima için bilgi ve teklif almak istiyorum.";

const factors = [
  {
    title: "ALAN BÜYÜKLÜĞÜ",
    description: "Metrekare, kapasite hesabının başlangıç noktasıdır; tek başına yeterli değildir.",
  },
  {
    title: "GÜNEŞ VE CEPHE",
    description: "Gün boyunca doğrudan güneş alan bir oda daha fazla soğutma yükü oluşturabilir.",
  },
  {
    title: "TAVAN VE YALITIM",
    description: "Tavan yüksekliği, pencere yüzeyi ve yalıtım durumu alanın ısı yükünü değiştirir.",
  },
  {
    title: "KULLANIM ŞEKLİ",
    description: "Ev, ofis veya mağaza gibi farklı kullanım biçimleri klima ihtiyacını etkiler.",
  },
];

export default function ClimateSelection() {
  return (
    <section className={styles.section} aria-labelledby="climate-selection-title">
      <div className={`container ${styles.layout}`}>
        <Reveal><div className={styles.intro}>
          <p className={styles.eyebrow}>KLİMA SEÇİMİ</p>
          <h2 id="climate-selection-title">
            Klima seçmek yalnızca BTU seçmek değildir.
          </h2>
          <p className={styles.description}>
            Aynı büyüklükteki iki oda her zaman aynı kapasiteye ihtiyaç duymaz.
            Güneş alma süresi, yalıtım, tavan yüksekliği ve alanın nasıl
            kullanıldığı da doğru klima seçiminde önemlidir.
          </p>
          <a
            className={styles.cta}
            href={getWhatsAppHref(quoteMessage)}
            target="_blank"
            rel="noreferrer"
          >
            <span>Alanınıza uygun klimayı konuşalım</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div></Reveal>
        <Reveal variant="stagger"><div>
          <ol className={styles.factors}>
            {factors.map((factor, index) => (
              <li className={styles.factor} key={factor.title}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{factor.title}</h3>
                  <p>{factor.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.note}>
            Kesin kapasite seçimi, alan ve kullanım koşulları birlikte
            değerlendirilerek yapılmalıdır.
          </p>
        </div></Reveal>
      </div>
    </section>
  );
}
