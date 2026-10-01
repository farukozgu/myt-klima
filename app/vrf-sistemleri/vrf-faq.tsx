"use client";

import { useId, useState } from "react";
import styles from "./page.module.css";

const items = [
  ["VRF sistemi nedir?", "VRF, bir dış sistem üzerinden birden fazla iç ünitenin çalışabildiği ve farklı alanların iklimlendirme ihtiyacının proje kapsamında yönetilebildiği sistem yapısıdır."],
  ["VRF sistemi neden tercih edilir?", "Birden fazla alanın ayrı ayrı kontrol edilmesi, farklı iç ünite tiplerinin aynı proje içinde kullanılabilmesi ve çok sayıda bağımsız dış ünite yerine daha merkezi bir sistem planlanabilmesi önemli tercih nedenleri arasındadır."],
  ["VRF hangi yapılarda kullanılabilir?", "Otel, plaza, büyük ofis, hastane, alışveriş veya ticari alan, restoran, villa ve benzeri çok bölmeli yapılarda değerlendirilebilir. Uygunluk proje koşullarına göre belirlenmelidir."],
  ["VRF sisteminde hangi iç üniteler kullanılabilir?", "Projeye göre duvar tipi, kaset tipi, kanallı veya tavan tipi gibi farklı iç ünite seçenekleri kullanılabilir."],
  ["MYT VRF sürecinde hangi hizmetleri veriyor?", "VRF uygulamalarında keşif, projelendirme, montaj, periyodik bakım ve teknik servis süreçleri birlikte ele alınabilir."],
];

export default function VrfFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return <div className={styles.accordion}>{items.map(([question, answer], index) => {
    const isOpen = open === index;
    const buttonId = `${id}-button-${index}`;
    const panelId = `${id}-panel-${index}`;
    return <div className={styles.accordionItem} key={question}><h3><button id={buttonId} className={styles.accordionButton} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(index)}><span>{question}</span><span aria-hidden="true">{isOpen ? "−" : "+"}</span></button></h3><div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}><p>{answer}</p></div></div>;
  })}</div>;
}
