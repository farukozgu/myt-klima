"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getWhatsAppHref } from "./business";

const quoteMessage = "Merhaba Erhan Bey, klima için bilgi ve teklif almak istiyorum.";

const navigation = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Klimalar", href: "/klimalar" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "VRF Sistemleri", href: "/vrf-sistemleri" },
  { label: "Projeler", href: "/projeler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 8);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner container">
        <Link className="wordmark" href="/" aria-label="MYT Klima ana sayfa">
          <span className="wordmark-main">MYT<span>.</span></span>
          <span className="wordmark-sub">KLİMA <span>·</span> MÜHENDİSLİK</span>
        </Link>

        <nav className="desktop-nav" aria-label="Ana menü">
          {navigation.map((item) => (
            <Link className="nav-link" href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="header-cta"
          href={getWhatsAppHref(quoteMessage)}
          target="_blank"
          rel="noreferrer"
        >
          Teklif Al
        </a>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </div>

      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobil menü"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            onClick={() => setMenuOpen(false)}
          >
            <span>{item.label}</span>
          </Link>
        ))}
        <a
          className="mobile-nav-cta"
          href={getWhatsAppHref(quoteMessage)}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Teklif Al
        </a>
      </nav>
    </header>
  );
}
