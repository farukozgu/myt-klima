import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";

const services = [
  {
    name: "Klima Satışı",
    href: "/klimalar",
    description: "Alanınıza ve kullanım koşullarınıza uygun kapasiteyi birlikte belirliyoruz.",
  },
  {
    name: "Klima Montajı",
    href: "/hizmetler#klima-montaji",
    description: "İç ve dış ünite konumu, bakır boru hattı, elektrik bağlantısı ve drenajı montajdan önce değerlendiriyoruz.",
  },
  {
    name: "Klima Bakımı",
    href: "/hizmetler#klima-bakimi",
    description: "Filtre ve iç ünite temizliğinin yanında drenajı, dış üniteyi ve çalışma değerlerini kontrol ediyoruz.",
  },
  {
    name: "Teknik Servis",
    href: "/hizmetler#teknik-servis",
    description: "Soğutmama, su akıtma, olağandışı ses veya çalışma sorunlarında önce arızanın kaynağını tespit ediyoruz.",
  },
  {
    name: "VRF Sistemleri",
    href: "/vrf-sistemleri",
    description: "Ofis, mağaza, villa ve daha büyük yapılarda bağımsız iklimlendirme ihtiyacı için.",
  },
  {
    name: "Keşif ve Projelendirme",
    href: "/hizmetler#kesif-ve-projelendirme",
    description: "Montajdan önce alanı, kapasite ihtiyacını ve uygulama koşullarını değerlendiriyoruz.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="hizmetler" aria-labelledby="services-title">
      <div className="services-layout container">
        <Reveal><div className="services-intro">
          <p className="eyebrow">HİZMETLER</p>
          <h2 id="services-title">Klima işi sadece montajdan ibaret değil.</h2>
          <p className="services-description">
            Yeni bir klima seçerken de, mevcut cihazınızla ilgili bir sorun
            çıktığında da önce ihtiyacı doğru belirlemek gerekiyor. <Link className="context-link" href="/hakkimizda">MYT Klima</Link>;
            satış, montaj, bakım ve teknik servis süreçlerini aynı noktadan yürütür.
          </p>
          <div className="services-media">
            <Image
              className="services-image"
              src="/images/service-maintenance.png"
              alt="Duvar tipi klimada bakım yapan teknik personel"
              width={1456}
              height={1088}
              sizes="(max-width: 480px) calc(100vw - 40px), (max-width: 820px) calc(100vw - 48px), 432px"
            />
          </div>
        </div></Reveal>
        <Reveal variant="stagger"><ul className="services-list">
          {services.map((service) => (
            <li className="service-row" key={service.name}>
              <div>
                <h3><Link href={service.href}>{service.name}</Link></h3>
                <p>{service.description}</p>
              </div>
              <svg className="service-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </li>
          ))}
        </ul></Reveal>
      </div>
    </section>
  );
}
