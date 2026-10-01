import Link from "next/link";
import styles from "./site-footer.module.css";
import { business } from "./business";
import Reveal from "./reveal";

const services = [
  { label: "Klima Satışı", href: "/klimalar" },
  { label: "Klima Montajı", href: "/hizmetler#klima-montaji" },
  { label: "Klima Bakımı", href: "/hizmetler#klima-bakimi" },
  { label: "Teknik Servis", href: "/hizmetler#teknik-servis" },
  { label: "VRF Sistemleri", href: "/vrf-sistemleri" },
  { label: "Keşif ve Projelendirme", href: "/hizmetler#kesif-ve-projelendirme" },
];

const maintenanceServices = [
  { label: "Su Tesisatı Bakımı", href: "/hizmetler#tesisat-bakim" },
  { label: "Doğalgaz Tesisatı Bakımı", href: "/hizmetler#tesisat-bakim" },
];

const pages = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Klimalar", href: "/klimalar" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "VRF Sistemleri", href: "/vrf-sistemleri" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Reveal><div className="container">
        <div className={styles.columns}>
          <div className={styles.brand}>
            <Link className={styles.wordmark} href="/" aria-label="MYT Klima ana sayfa">
              <span className={styles.logo}>MYT<span>.</span></span>
              <span className={styles.descriptor}>KLİMA <span>·</span> MÜHENDİSLİK</span>
            </Link>
            <p>Klima satışı, montaj, bakım, teknik servis ve ticari iklimlendirme uygulamaları.</p>
          </div>
          <nav aria-labelledby="footer-services-title">
            <h2 id="footer-services-title">HİZMETLER</h2>
            <ul className={styles.links}>
              {services.map((item) => (
                <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
            <p className={styles.serviceGroup}>TESİSAT BAKIMI</p>
            <ul className={styles.links}>
              {maintenanceServices.map((item) => (
                <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-pages-title">
            <h2 id="footer-pages-title">SAYFALAR</h2>
            <ul className={styles.links}>
              {pages.map((item) => (
                <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>İLETİŞİM</h2>
            <address className={styles.contact}>
              <ul className={styles.links}>
                <li>{business.contactPerson}</li>
                <li><a href={business.phoneHref}>{business.phoneDisplay}</a></li>
                <li>
                  <a href={business.whatsappHref} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 MYT Klima. Tüm hakları saklıdır.</p>
          {/* Reserved routes; legal pages will be added separately. */}
          <nav className={styles.legal} aria-label="Yasal bilgiler">
            <Link href="/gizlilik">Gizlilik</Link>
            <Link href="/kvkk">KVKK</Link>
          </nav>
        </div>
      </div></Reveal>
    </footer>
  );
}
