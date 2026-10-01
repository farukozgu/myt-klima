import { getWhatsAppHref } from "./business";
import Reveal from "./reveal";

const maintenanceMessage =
  "Merhaba Erhan Bey, tesisat bakım hizmetleri hakkında bilgi almak istiyorum.";

const services = [
  {
    title: "Su Tesisatı Bakımı",
    description:
      "Daire içindeki mevcut su tesisatının genel durumu, bağlantı noktaları ve bakım ihtiyacı kontrol edilir.",
    note: "Arıza onarımı ve acil tesisat müdahalesi bu hizmet kapsamında değildir.",
  },
  {
    title: "Daire İçi Doğalgaz Tesisatı Bakımı",
    description:
      "Daire içindeki mevcut doğalgaz tesisatının bakım ve kontrol ihtiyacı değerlendirilir.",
    note: "Bu hizmet, doğalgaz arızası veya acil müdahale hizmeti olarak sunulmaz.",
  },
];

export default function MaintenanceSection() {
  return (
    <section className="maintenance-section" aria-labelledby="maintenance-title">
      <div className="container maintenance-layout">
        <Reveal><div className="maintenance-intro">
          <p className="eyebrow">TESİSAT BAKIM HİZMETLERİ</p>
          <h2 id="maintenance-title">Klima dışında tesisat bakım hizmetleri de sunuyoruz.</h2>
          <p>
            Daire içindeki mevcut su ve doğalgaz tesisatlarında bakım ve kontrol ihtiyacını
            değerlendiriyoruz. Bu hizmetler arıza onarımı veya acil müdahale kapsamına girmez.
          </p>
        </div></Reveal>
        <Reveal variant="stagger"><div>
          <div className="maintenance-rows">
            {services.map((service) => (
              <article className="maintenance-row" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <small>{service.note}</small>
              </article>
            ))}
          </div>
          <a
            className="maintenance-link"
            href={getWhatsAppHref(maintenanceMessage)}
            target="_blank"
            rel="noreferrer"
          >
            Bakım hakkında bilgi al <span aria-hidden="true">→</span>
          </a>
        </div></Reveal>
      </div>
    </section>
  );
}
