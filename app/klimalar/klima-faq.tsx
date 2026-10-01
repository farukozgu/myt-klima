"use client";

import { useId, useState } from "react";
import styles from "../vrf-sistemleri/page.module.css";

const items = [
  ["Kaç BTU klima almalıyım?", "Metrekare önemli bir başlangıç noktasıdır ancak güneş alma durumu, tavan yüksekliği, yalıtım ve kullanım yoğunluğu da kapasite ihtiyacını etkileyebilir."],
  ["Duvar tipi klima hangi alanlar için uygundur?", "Ev, oda, salon ve küçük veya orta ölçekli ofislerde sık kullanılır. Uygunluk alanın büyüklüğü ve montaj koşullarına göre değerlendirilmelidir."],
  ["Salon tipi klima ne zaman tercih edilir?", "Daha geniş veya yoğun kullanılan alanlarda değerlendirilebilir. Ancak alan büyük diye otomatik olarak salon tipi seçmek doğru değildir."],
  ["Multi Split sistem nedir?", "Bir dış ünitenin birden fazla iç üniteyle çalışabildiği sistem yapısıdır. Birden fazla odada klima ihtiyacı olduğunda değerlendirilebilir."],
  ["Klima seçmeden önce keşif gerekiyor mu?", "Standart olmayan alanlarda veya montaj koşullarının önceden değerlendirilmesi gereken durumlarda keşif gerekebilir."],
];

export default function KlimaFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return <div className={styles.accordion}>{items.map(([question, answer], index) => {
    const isOpen = open === index;
    const buttonId = `${id}-button-${index}`;
    const panelId = `${id}-panel-${index}`;
    return <div className={styles.accordionItem} key={question}>
      <h3><button id={buttonId} className={styles.accordionButton} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(isOpen ? null : index)}><span>{question}</span><span aria-hidden="true">{isOpen ? "−" : "+"}</span></button></h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}><p>{answer}</p></div>
    </div>;
  })}</div>;
}
