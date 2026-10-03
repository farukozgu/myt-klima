import JsonLd from "../json-ld";
import { serviceCatalogSchema } from "../seo";
import { pageMetadata } from "../seo";
import Breadcrumbs from "../breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import WhatsAppIcon from "../whatsapp-icon";
import { business, getWhatsAppHref } from "../business";
import styles from "./page.module.css";

export const metadata = pageMetadata("/hizmetler");

const serviceMessage =
  "Merhaba Erhan Bey, klimamda bir sorun var. Teknik servis hakkında bilgi almak istiyorum.";
const guidanceMessage =
  "Merhaba Erhan Bey, hangi klima hizmetine ihtiyacım olduğunu öğrenmek istiyorum.";
const contactMessage =
  "Merhaba Erhan Bey, klima hizmetleri hakkında bilgi almak istiyorum.";
const maintenanceMessage =
  "Merhaba Erhan Bey, su veya doğalgaz tesisatı bakım hizmeti hakkında bilgi almak istiyorum.";

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 3.5h3l1.4 4.1-1.8 1.8a16.1 16.1 0 0 0 6.5 6.5l1.8-1.8 4.1 1.4v3a2 2 0 0 1-2.2 2C10 19.9 4.1 14 3.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={serviceCatalogSchema} />
      <main>
        <section className={styles.hero} aria-labelledby="services-hero-title">
          <div className={`container ${styles.heroInner}`}>
            <Breadcrumbs path="/hizmetler" />
            <p className={styles.eyebrow}>HİZMETLER</p>
            <h1 id="services-hero-title">Klima satışı, montajı, bakımı ve teknik servisi.</h1>
            <p className={styles.heroCopy}>
              Yeni bir cihaz seçiminden mevcut klimanızdaki bir soruna kadar, yapılacak işi
              önce doğru belirlemek gerekiyor. MYT Klima; İstanbul genelinde bireysel ve ticari iklimlendirme
              ihtiyaçlarında süreci baştan sona ele alır.
            </p>
            <p className={styles.serviceAreas}>Ev <span aria-hidden="true">·</span> Ofis <span aria-hidden="true">·</span> Mağaza <span aria-hidden="true">·</span> Villa <span aria-hidden="true">·</span> Ticari alanlar</p>
            <p className={styles.heroQuestion}>
              Ne yapmanız gerektiğinden emin değil misiniz?{" "}
              <a href={getWhatsAppHref(guidanceMessage)} target="_blank" rel="noreferrer">
                WhatsApp’tan sorun
              </a>
            </p>
          </div>
        </section>

        <section className={styles.primaryEditorial} aria-label="Klima bakımı uygulaması">
          <div className="container">
            <figure className={styles.primaryFigure}>
              <Image
                className={styles.primaryImage}
                src="/images/services-maintenance.webp"
                alt="Duvar tipi klimada bakım yapan teknik personel"
                width={1774}
                height={887}
                sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1020px) calc(100vw - 48px), 1240px"
              />
            </figure>
          </div>
        </section>

        <section className={styles.services} aria-labelledby="service-index-title">
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>HİZMET ALANLARI</p>
              <h2 id="service-index-title">İhtiyaca göre başlayan, uygulamayla devam eden hizmetler.</h2>
            </div>

            <div className={styles.serviceList}>
              <section className={styles.serviceBlock} id="klima-satisi" aria-labelledby="klima-satisi-title">
                <p className={styles.serviceNumber}>01 <span>— KLİMA SATIŞI</span></p>
                <div className={styles.serviceContent}>
                  <h2 id="klima-satisi-title">Klima Satışı</h2>
                  <p><Link className="context-link" href="/klimalar">Klima seçimini</Link> yalnızca metrekareye göre yapmak her zaman doğru sonuç vermez. Alanın kullanım şekli, güneş alma durumu, tavan yüksekliği ve montaj koşulları birlikte değerlendirilmelidir.</p>
                  <h3>Bu hizmette neye bakıyoruz?</h3>
                  <ul>
                    <li>Alanın büyüklüğü ve kullanım şekli</li>
                    <li>Yaklaşık kapasite ihtiyacı</li>
                    <li>İç ve dış ünite için uygun koşullar</li>
                    <li>Montajın nasıl uygulanacağı</li>
                  </ul>
                </div>
              </section>

              <section className={styles.serviceBlock} id="klima-montaji" aria-labelledby="klima-montaji-title">
                <p className={styles.serviceNumber}>02 <span>— KLİMA MONTAJI</span></p>
                <div className={styles.serviceContent}>
                  <h2 id="klima-montaji-title">Klima Montajı</h2>
                  <p>Montaj öncesinde iç ve dış ünitenin konumu, boru hattı, drenaj ve gerekli bağlantılar değerlendirilir. Amaç yalnızca cihazı duvara sabitlemek değil, uygulamayı baştan doğru planlamaktır.</p>
                  <h3>Montajda değerlendirdiğimiz başlıklar</h3>
                  <ul>
                    <li>İç ünite konumu</li>
                    <li>Dış ünite hava sirkülasyonu ve servis erişimi</li>
                    <li>Bakır boru hattı</li>
                    <li>Drenaj hattı</li>
                    <li>Elektrik bağlantısı ve uygulama koşulları</li>
                  </ul>
                </div>
              </section>

              <section className={styles.serviceBlock} id="klima-bakimi" aria-labelledby="klima-bakimi-title">
                <p className={styles.serviceNumber}>03 <span>— KLİMA BAKIMI</span></p>
                <div className={styles.serviceContent}>
                  <h2 id="klima-bakimi-title">Klima Bakımı</h2>
                  <p>Kullanım yoğunluğu ve ortam koşulları cihazın bakım ihtiyacını etkiler. Bakım sırasında yalnızca filtrenin temizlenmesi değil, cihazın genel çalışma durumu da kontrol edilir.</p>
                  <h3>Kontrol edilebilecek noktalar</h3>
                  <ul>
                    <li>Filtre ve iç ünite temizliği</li>
                    <li>Drenaj hattı</li>
                    <li>Dış ünite ve kondenser durumu</li>
                    <li>Hava akışı</li>
                    <li>Genel çalışma değerleri</li>
                  </ul>
                  <p className={styles.note}>Soğutucu akışkan kontrolü ihtiyaç halinde yapılır; her bakım otomatik olarak gaz dolumu anlamına gelmez.</p>
                </div>
              </section>

              <section className={styles.serviceBlock} id="teknik-servis" aria-labelledby="teknik-servis-title">
                <p className={styles.serviceNumber}>04 <span>— TEKNİK SERVİS</span></p>
                <div className={styles.serviceContent}>
                  <h2 id="teknik-servis-title">Teknik Servis</h2>
                  <p>Klima soğutmuyor, su akıtıyor veya normalden farklı çalışıyorsa tek bir nedene bağlamak doğru değildir. Önce sorunun kaynağı belirlenir, ardından gerekli işlem değerlendirilir.</p>
                  <h3>Sık karşılaşılan durumlar</h3>
                  <ul>
                    <li>Yeterince soğutmama veya ısıtmama</li>
                    <li>Su akıtma</li>
                    <li>Olağandışı ses</li>
                    <li>Çalışmama veya düzensiz çalışma</li>
                    <li>Hava akışının zayıflaması</li>
                  </ul>
                  <a className={styles.textLink} href={getWhatsAppHref(serviceMessage)} target="_blank" rel="noreferrer">
                    Servis için WhatsApp’tan bilgi ver <span aria-hidden="true">→</span>
                  </a>
                </div>
              </section>

              <section className={styles.serviceBlock} id="vrf-sistemleri" aria-labelledby="vrf-sistemleri-title">
                <p className={styles.serviceNumber}>05 <span>— VRF SİSTEMLERİ</span></p>
                <div className={styles.serviceContent}>
                  <h2 id="vrf-sistemleri-title">VRF Sistemleri</h2>
                  <p>Birden fazla alanın ayrı ayrı iklimlendirilmesi gereken ofis, mağaza, villa, otel, plaza, restoran ve benzeri yapılarda VRF sistemleri değerlendirilebilir.</p>
                  <p>Duvar tipi, kaset tipi, kanallı ve tavan tipi iç üniteler proje ihtiyacına göre aynı sistem içerisinde kullanılabilir.</p>
                  <h3>Süreç</h3>
                  <ul>
                    <li>Keşif</li>
                    <li>Kapasite ve sistem planlaması</li>
                    <li>Cihaz yerleşimi</li>
                    <li>Montaj</li>
                    <li>Devreye alma</li>
                    <li>Bakım ve teknik servis</li>
                  </ul>
                  <Link className={styles.textLink} href="/vrf-sistemleri">
                    VRF Sistemlerini detaylı incele <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </section>

              <section className={styles.serviceBlock} id="kesif-ve-projelendirme" aria-labelledby="kesif-ve-projelendirme-title">
                <p className={styles.serviceNumber}>06 <span>— KEŞİF VE PROJELENDİRME</span></p>
                <div className={styles.serviceContent}>
                  <h2 id="kesif-ve-projelendirme-title">Keşif ve Projelendirme</h2>
                  <p>Özellikle birden fazla cihazın kullanılacağı veya uygulama koşullarının baştan değerlendirilmesi gereken işlerde montajdan önce keşif yapılması gerekebilir.</p>
                  <h3>Keşifte değerlendirilebilecek konular</h3>
                  <ul>
                    <li>Alan ve kullanım koşulları</li>
                    <li>Kapasite ihtiyacı</li>
                    <li>İç ve dış ünite konumları</li>
                    <li>Boru ve drenaj güzergâhı</li>
                    <li>Elektrik altyapısı</li>
                    <li>Uygulama detayları</li>
                  </ul>
                </div>
              </section>
            </div>

            <figure className={styles.secondaryFigure}>
              <Image
                className={styles.secondaryImage}
                src="/images/services-technical-check.webp"
                alt="Klima kontrolü yapan teknik personel"
                width={1672}
                height={941}
                sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1020px) calc(100vw - 48px), 970px"
              />
            </figure>
          </div>
        </section>

        <section className={styles.maintenance} id="tesisat-bakim" aria-labelledby="maintenance-title">
          <div className="container">
            <div className={styles.maintenanceIntro}>
              <p className={styles.eyebrow}>TESİSAT BAKIM HİZMETLERİ</p>
              <h2 id="maintenance-title">Daire içi tesisatlarda bakım ve kontrol.</h2>
              <p>MYT Mühendislik, iklimlendirme hizmetlerinin yanında mevcut su ve doğalgaz tesisatlarında bakım ve kontrol hizmetleri de sunar.</p>
              <p className={styles.maintenanceClarification}>Bu bölümdeki hizmetler arıza onarımı veya acil müdahale hizmeti değildir.</p>
            </div>

            <div className={styles.maintenanceList}>
              <article className={styles.maintenanceBlock} aria-labelledby="water-maintenance-title">
                <p className={styles.serviceNumber}>01 <span>— SU TESİSATI BAKIMI</span></p>
                <div className={styles.serviceContent}>
                  <h2 id="water-maintenance-title">Su Tesisatı Bakımı</h2>
                  <p>Mevcut su tesisatının genel durumu ve kullanım sırasında bakım gerektirebilecek noktalar değerlendirilir.</p>
                  <h3>Bakım kapsamında değerlendirilebilecek noktalar</h3>
                  <ul>
                    <li>Görünür bağlantı noktalarının kontrolü</li>
                    <li>Tesisatın genel durumunun değerlendirilmesi</li>
                    <li>Kullanım kaynaklı bakım ihtiyacının belirlenmesi</li>
                    <li>Gerekli görülürse sonraki işlem için yönlendirme</li>
                  </ul>
                </div>
              </article>

              <article className={styles.maintenanceBlock} aria-labelledby="gas-maintenance-title">
                <p className={styles.serviceNumber}>02 <span>— DAİRE İÇİ DOĞALGAZ TESİSATI BAKIMI</span></p>
                <div className={styles.serviceContent}>
                  <h2 id="gas-maintenance-title">Daire İçi Doğalgaz Tesisatı Bakımı</h2>
                  <p>Mevcut doğalgaz tesisatının bakım ve kontrol ihtiyacı, daire içindeki mevcut sistem üzerinden değerlendirilir.</p>
                  <h3>Bakım yaklaşımı</h3>
                  <ul>
                    <li>Mevcut tesisatın genel durumunun gözden geçirilmesi</li>
                    <li>Görünür bağlantı ve kullanım noktalarının değerlendirilmesi</li>
                    <li>Bakım ihtiyacının belirlenmesi</li>
                    <li>Gerekli görülürse uygun sonraki adımın paylaşılması</li>
                  </ul>
                </div>
              </article>
            </div>
            <p className={styles.maintenanceNote}>Su ve doğalgaz tesisatı bakım hizmetleri, klima teknik servis hizmetlerinden ayrı kapsamda değerlendirilir. Arıza onarımı veya acil müdahale hizmeti olarak sunulmaz.</p>
            <a className={styles.maintenanceLink} href={getWhatsAppHref(maintenanceMessage)} target="_blank" rel="noreferrer">
              Bakım hakkında bilgi al <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className={styles.guidance} aria-labelledby="guidance-title">
          <div className="container">
            <div className={styles.guidanceIntro}>
              <p className={styles.eyebrow}>NEREDEN BAŞLAMALI?</p>
              <h2 id="guidance-title">Hangi hizmete ihtiyacınız olduğundan emin değilseniz sorun değil.</h2>
              <p>Yeni klima almak, mevcut cihazı kontrol ettirmek veya birden fazla alan için sistem planlamak arasında fark var. Durumu kısaca anlatmanız yeterli; hangi adımla başlanması gerektiğini birlikte netleştirebiliriz.</p>
            </div>
            <div className={styles.scenarios}>
              <div>
                <h3>Yeni klima alacağım</h3>
                <p>Alan ve kullanım koşullarına göre cihaz seçimiyle başlayabiliriz.</p>
              </div>
              <div>
                <h3>Mevcut klimamda sorun var</h3>
                <p>Belirtiyi öğrenip teknik servis gerekip gerekmediğini değerlendirebiliriz.</p>
              </div>
              <div>
                <h3>Ofis / mağaza / villa için sistem gerekiyor</h3>
                <p>Keşif ve sistem planlaması üzerinden ilerlemek daha doğru olabilir.</p>
              </div>
            </div>
            <a className={styles.guidanceLink} href={getWhatsAppHref(guidanceMessage)} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Durumu WhatsApp’tan anlat
            </a>
          </div>
        </section>

        <section className={styles.workflow} aria-labelledby="workflow-title">
          <div className="container">
            <div className={styles.workflowHeader}>
              <p className={styles.eyebrow}>NASIL İLERLİYOR?</p>
              <h2 id="workflow-title">Önce ihtiyacı netleştiriyoruz.</h2>
            </div>
            <ol className={styles.steps}>
              <li><span>01</span><h3>İhtiyacı konuşuyoruz</h3><p>Yeni cihaz, bakım, arıza veya proje ihtiyacını netleştiriyoruz.</p></li>
              <li><span>02</span><h3>Gerekirse alanı değerlendiriyoruz</h3><p>Montaj veya sistem planlamasını etkileyen koşulları inceliyoruz.</p></li>
              <li><span>03</span><h3>Uygulamayı planlıyoruz</h3><p>Cihaz, yerleşim ve gerekli işlemler belirleniyor.</p></li>
              <li><span>04</span><h3>Uygulama ve kontrol</h3><p>Montaj veya servis işlemi tamamlandıktan sonra sistemin çalışması kontrol ediliyor.</p></li>
            </ol>
          </div>
        </section>

        <section className={styles.contact} aria-labelledby="services-contact-title">
          <div className={`container ${styles.contactLayout}`}>
            <div>
              <p className={styles.contactEyebrow}>İLETİŞİM</p>
              <h2 id="services-contact-title">Klimayla ilgili ne yapılması gerektiğini birlikte netleştirelim.</h2>
              <p>Yeni cihaz seçimi, montaj, bakım veya teknik servis için Erhan Paltacı’ya ulaşabilirsiniz.</p>
            </div>
            <div className={styles.contactActions}>
              <div className={styles.contactButtons}>
                <a className={styles.whatsappButton} href={getWhatsAppHref(contactMessage)} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp’tan Yaz</a>
                <a className={styles.phoneButton} href={business.phoneHref}><PhoneIcon /> Ara</a>
              </div>
              <p>{business.contactPerson}<br /><a href={business.phoneHref}>{business.phoneDisplay}</a></p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
