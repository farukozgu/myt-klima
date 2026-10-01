"use client";

import { useId, useState } from "react";
import styles from "./faq-section.module.css";
import Reveal from "./reveal";

const questions = [
  {
    question: "Kaç BTU klima almalıyım?",
    answer: "Metrekare iyi bir başlangıçtır ancak tek başına yeterli değildir. Odanın güneş alma durumu, tavan yüksekliği, yalıtımı ve kullanım şekli de kapasite ihtiyacını etkiler. Bu nedenle cihaz seçimini alanı birlikte değerlendirerek yapmak daha sağlıklıdır.",
  },
  {
    question: "Her klima her odaya monte edilebilir mi?",
    answer: "Her zaman değil. İç ünitenin hava dağılımı, dış ünite için uygun alan, boru hattının geçeceği güzergâh ve drenaj imkânı montajdan önce değerlendirilmelidir.",
  },
  {
    question: "Klima montajı ne kadar sürer?",
    answer: "Standart bir montajın süresi uygulama koşullarına göre değişir. Boru hattının uzunluğu, iç ve dış ünite konumu veya ek uygulama gerektiren durumlar süreyi etkileyebilir.",
  },
  {
    question: "Klima bakımı ne zaman yapılmalı?",
    answer: "Bakım ihtiyacı cihazın kullanım yoğunluğuna ve bulunduğu ortama göre değişebilir. Filtreler, iç ünite, drenaj ve dış ünitenin durumu kullanım koşullarına göre kontrol edilebilir. Teknik olarak gerekli görülürse soğutucu akışkan basıncı da incelenir.",
  },
  {
    question: "Klima neden su akıtır?",
    answer: "Drenaj hattındaki tıkanıklık veya eğim problemi, kirlenme ve bazı teknik arızalar su akıntısına neden olabilir. Sorunun kaynağı görülmeden yalnızca tahmin üzerinden işlem yapmak doğru değildir.",
  },
  {
    question: "Klima soğutmuyorsa sorun gaz eksikliği midir?",
    answer: "Her soğutma problemi gaz eksikliğinden kaynaklanmaz. Filtre, sensör, dış ünite, hava akışı veya farklı bir teknik sorun da aynı belirtiyi oluşturabilir. Önce arızanın kaynağının kontrol edilmesi gerekir.",
  },
  {
    question: "Keşif yapıyor musunuz?",
    answer: "Uygulama öncesinde alanın ve montaj koşullarının değerlendirilmesi gereken işlerde keşif planlanabilir. Detayları iletişim sırasında netleştirebiliriz.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();

  return (
    <section className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={`container ${styles.layout}`}>
        <Reveal><div className={styles.intro}>
          <p className={styles.eyebrow}>SIK SORULAN SORULAR</p>
          <h2 id={`${id}-title`}>Klima almadan önce akla takılanlar.</h2>
          <p className={styles.description}>
            Doğru cihazı seçmekten montaj yerine kadar birkaç detay sonucu
            doğrudan etkileyebilir. En sık karşılaştığımız soruları burada topladık.
          </p>
        </div></Reveal>
        <Reveal variant="stagger"><div className={styles.accordion}>
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const triggerId = `${id}-question-${index}`;
            const panelId = `${id}-answer-${index}`;

            return (
              <div className={styles.item} key={item.question}>
                <h3 className={styles.question}>
                  <button
                    className={styles.trigger}
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex((current) => current === index ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.indicator} aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={triggerId} hidden={!isOpen}>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div></Reveal>
      </div>
    </section>
  );
}
