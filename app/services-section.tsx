import Image from "next/image";

const services = [
  {
    name: "Klima Satışı",
    description: "Alanınıza ve kullanım koşullarınıza uygun kapasiteyi birlikte belirliyoruz.",
  },
  {
    name: "Klima Montajı",
    description: "İç ve dış ünite konumu, bakır boru hattı, elektrik bağlantısı ve drenajı montajdan önce değerlendiriyoruz.",
  },
  {
    name: "Klima Bakımı",
    description: "Filtre ve iç ünite temizliğinin yanında drenajı, dış üniteyi ve çalışma değerlerini kontrol ediyoruz.",
  },
  {
    name: "Teknik Servis",
    description: "Soğutmama, su akıtma, olağandışı ses veya çalışma sorunlarında önce arızanın kaynağını tespit ediyoruz.",
  },
  {
    name: "VRF Sistemleri",
    description: "Ofis, mağaza, villa ve daha büyük yapılarda bağımsız iklimlendirme ihtiyacı için.",
  },
  {
    name: "Keşif ve Projelendirme",
    description: "Montajdan önce alanı, kapasite ihtiyacını ve uygulama koşullarını değerlendiriyoruz.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="hizmetler" aria-labelledby="services-title">
      <div className="services-layout container">
        <div className="services-intro">
          <p className="eyebrow">HİZMETLER</p>
          <h2 id="services-title">Klima işi sadece montajdan ibaret değil.</h2>
          <p className="services-description">
            Yeni bir klima seçerken de, mevcut cihazınızla ilgili bir sorun
            çıktığında da önce ihtiyacı doğru belirlemek gerekiyor. MYT Klima;
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
        </div>
        <ul className="services-list">
          {services.map((service) => (
            <li className="service-row" key={service.name}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <svg className="service-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
