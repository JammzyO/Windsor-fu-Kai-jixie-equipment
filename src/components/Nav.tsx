"use client";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="/" className={styles.logo} aria-label="Windsor Fu Kai Equipment">
          <svg
            width="220"
            height="44"
            viewBox="0 0 220 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Geometric W mark */}
            <g>
              <line x1="4" y1="6" x2="11" y2="30" stroke="#8B6B5E" strokeWidth="2.5" strokeLinecap="square"/>
              <line x1="11" y1="30" x2="18" y2="14" stroke="#8B6B5E" strokeWidth="2.5" strokeLinecap="square"/>
              <line x1="18" y1="14" x2="25" y2="30" stroke="#8B6B5E" strokeWidth="2.5" strokeLinecap="square"/>
              <line x1="25" y1="30" x2="32" y2="6" stroke="#8B6B5E" strokeWidth="2.5" strokeLinecap="square"/>
              {/* Horizontal base bar */}
              <line x1="4" y1="34" x2="32" y2="34" stroke="#F5F2EE" strokeWidth="1" opacity="0.4"/>
            </g>
            {/* Company name */}
            <text
              x="42"
              y="22"
              fontFamily="'Cormorant Garamond', Georgia, serif"
              fontSize="18"
              fontWeight="600"
              letterSpacing="0.12em"
              fill="#F5F2EE"
              dominantBaseline="middle"
            >
              WINDSOR FU KAI
            </text>
            <text
              x="42"
              y="36"
              fontFamily="'DM Sans', system-ui, sans-serif"
              fontSize="8"
              fontWeight="400"
              letterSpacing="0.32em"
              fill="#8B6B5E"
              dominantBaseline="middle"
            >
              JIXIE EQUIPMENT
            </text>
          </svg>
        </a>

        {/* Desktop nav links */}
        <nav className={styles.links} aria-label="Main navigation">
          <a href="#stock" className={styles.link}>Current Stock</a>
          <a href="#process" className={styles.link}>How It Works</a>
          <a href="#verify" className={styles.link}>Verification</a>
          <a href="#faq" className={styles.link}>FAQ</a>
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <a
            href="https://wa.me/254717295952?text=Habari%20Windsor%2C%20nataka%20kujua%20kuhusu%20mashine%20zenu.%20Nina%20mradi%20wa%E2%80%A6"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookCta}
            aria-label="WhatsApp Windsor"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Tuma WhatsApp
          </a>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#stock" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Current Stock</a>
          <a href="#process" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#faq" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#book" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Book a Call</a>
        </div>
      )}
    </header>
    </>
  );
}
