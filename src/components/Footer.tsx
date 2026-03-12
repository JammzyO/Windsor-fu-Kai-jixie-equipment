import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <svg
              width="180"
              height="36"
              viewBox="0 0 220 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Windsor Fu Kai Equipment"
            >
              <g>
                <line x1="4" y1="6" x2="11" y2="30" stroke="#8B6B5E" strokeWidth="2.5" strokeLinecap="square"/>
                <line x1="11" y1="30" x2="18" y2="14" stroke="#8B6B5E" strokeWidth="2.5" strokeLinecap="square"/>
                <line x1="18" y1="14" x2="25" y2="30" stroke="#8B6B5E" strokeWidth="2.5" strokeLinecap="square"/>
                <line x1="25" y1="30" x2="32" y2="6" stroke="#8B6B5E" strokeWidth="2.5" strokeLinecap="square"/>
                <line x1="4" y1="34" x2="32" y2="34" stroke="#F5F2EE" strokeWidth="1" opacity="0.3"/>
              </g>
              <text x="42" y="22" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="18" fontWeight="600" letterSpacing="0.12em" fill="#F5F2EE" dominantBaseline="middle">WINDSOR FU KAI</text>
              <text x="42" y="36" fontFamily="'DM Sans', system-ui, sans-serif" fontSize="8" fontWeight="400" letterSpacing="0.32em" fill="#8B6B5E" dominantBaseline="middle">JIXIE EQUIPMENT</text>
            </svg>
            <p className={styles.tagline}>
              Verified used heavy machinery for contractors across Kenya and East Africa.
            </p>
          </div>

          <div className={styles.columns}>
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Navigate</h4>
              <a href="#stock" className={styles.colLink}>Current Stock</a>
              <a href="#process" className={styles.colLink}>How It Works</a>
              <a href="#verify" className={styles.colLink}>Verification</a>
              <a href="#faq" className={styles.colLink}>FAQ</a>
              <a href="#book" className={styles.colLink}>Book a Call</a>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Equipment</h4>
              <span className={styles.colText}>Excavators</span>
              <span className={styles.colText}>Wheel Loaders</span>
              <span className={styles.colText}>Motor Graders</span>
              <span className={styles.colText}>Bulldozers</span>
              <span className={styles.colText}>Tipper Trucks</span>
              <span className={styles.colText}>Tractor Heads</span>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Contact</h4>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.colLink}
              >
                +254 700 000 000
              </a>
              <span className={styles.colText}>Nairobi, Kenya</span>
              <span className={styles.colText}>Mon–Sat, 8am–6pm</span>
              <a href="mailto:info@windsorfukai.co.ke" className={styles.colLink}>
                info@windsorfukai.co.ke
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} Windsor Fu Kai Jixie Equipment. All rights reserved.
          </p>
          <p className={styles.copy}>
            Kenya &nbsp;·&nbsp; Uganda &nbsp;·&nbsp; Tanzania &nbsp;·&nbsp; Ethiopia &nbsp;·&nbsp; Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}
