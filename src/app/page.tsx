"use client";
import { useState } from "react";
import styles from "./page.module.css";

const WA_NUMBER = "254717295952";

function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

const MACHINES = [
  {
    id: 1,
    name: "CAT D6H Dozer",
    specs: ["185 HP", "Tracks: Excellent", "Hours: TBC"],
    price: "KSh 5,500,000",
    tag: "Available",
    img: "https://images.pexels.com/photos/12247603/pexels-photo-12247603.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    waMsg: "Habari Windsor, naomba kujua zaidi kuhusu CAT D6H Dozer (KSh 5.5M). Nina mradi wa…",
  },
  {
    id: 2,
    name: "Zoomlion 7.8-Ton Excavator",
    specs: ["7.8 tons", "Hydraulics: Tested", "Hours: TBC"],
    price: "KSh 1,700,000",
    tag: "Available",
    img: "https://images.pexels.com/photos/30751525/pexels-photo-30751525.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    waMsg: "Habari Windsor, naomba kujua zaidi kuhusu Zoomlion 7.8-Ton Excavator (KSh 1.7M). Nina mradi wa…",
  },
  {
    id: 3,
    name: "CAT 160G Motor Grader",
    specs: ["CAT 3306 Diesel", "Blade: Full Range", "Hours: TBC"],
    price: "KSh 8,500,000",
    tag: "Available",
    img: "https://images.pexels.com/photos/8809464/pexels-photo-8809464.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    waMsg: "Habari Windsor, naomba kujua zaidi kuhusu CAT 160G Motor Grader (KSh 8.5M). Nina mradi wa…",
  },
  {
    id: 4,
    name: "Isuzu EXZ 3339 Prime Mover",
    specs: ["270,000 km", "Company serviced", "Locally assembled"],
    price: "KSh 3,500,000",
    tag: "2 Units",
    img: "https://images.pexels.com/photos/28264496/pexels-photo-28264496.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    waMsg: "Habari Windsor, naomba kujua zaidi kuhusu Isuzu EXZ 3339 Prime Mover (KSh 3.5M). Nina mradi wa…",
  },
];

const WHY_WINDSOR = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" stroke="#E8B400" strokeWidth="1.5"/>
        <path d="M8 16l5 5 11-11" stroke="#E8B400" strokeWidth="2" strokeLinecap="square"/>
      </svg>
    ),
    headline: "Every machine, inspected before it lists.",
    proof: "We don’t sell what we wouldn’t buy ourselves. Engine, hydraulics, undercarriage, and hours — verified, documented, and ready for your inspection.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="15" stroke="#E8B400" strokeWidth="1.5"/>
        <path d="M10 16h12M16 10v12" stroke="#E8B400" strokeWidth="2" strokeLinecap="square"/>
      </svg>
    ),
    headline: "Buy with confidence. Inspect on-site.",
    proof: "Visit our Garden Estate yard. Bring your mechanic. Start the machine. Walk away with the keys the same day.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 26V6h24v20H4Z" stroke="#E8B400" strokeWidth="1.5"/>
        <path d="M16 10v4M16 18v.5" stroke="#E8B400" strokeWidth="2" strokeLinecap="square"/>
        <circle cx="16" cy="20" r="1" fill="#E8B400"/>
      </svg>
    ),
    headline: "Financing made simple.",
    proof: "We work with leading banks and SACCOs to help you finance your purchase. Tell us your project, we’ll suggest the right route.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "WhatsApp Us",
    body: "Tell us which machine interests you and what project you’re running. We’ll reply within minutes with full specs, more photos, and a video walkaround.",
  },
  {
    num: "02",
    title: "Inspect at the Yard",
    body: "Come to Garden Estate. Bring your operator or mechanic. Start the engine, test the hydraulics, check the hours. No pressure.",
  },
  {
    num: "03",
    title: "Agree & Deposit",
    body: "Once you’re satisfied, we lock in the unit with a deposit. Payment terms confirmed in writing.",
  },
  {
    num: "04",
    title: "Collect or Deliver",
    body: "Pay the balance, take delivery at the yard, or arrange transport to your site — anywhere in Kenya.",
  },
];

const TESTIMONIALS = [
  {
    quote: "“We needed a grader fast for a county road project. Windsor had the CAT 160G in their yard, we inspected it on a Saturday and it was on our site in Embu by Tuesday. Solid machine, fair price.”",
    name: "[Contractor Name]",
    company: "[Company]",
    project: "[Project]",
  },
];

const FAQS = [
  {
    q: "Are your machines really inspected, or is that just talk?",
    a: "Every machine goes through a documented check before it lists on this page. Engine, hydraulics, undercarriage, hours. We’ll show you the checklist when you visit the yard, and you’re welcome to bring your own mechanic. No surprises.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes — we work with banks and SACCOs that specialise in asset finance for construction equipment. Tell us your project and budget on WhatsApp and we’ll guide you to the right route.",
  },
  {
    q: "Can you deliver to my site outside Nairobi?",
    a: "Yes. We’ve delivered to sites in Embu, Eldoret, Nakuru, Mombasa and beyond. Cost depends on the machine and distance — we’ll quote on WhatsApp.",
  },
  {
    q: "What if something breaks after I buy it?",
    a: "We don’t disappear after the sale. Our mechanics are reachable, and we’ll help you sort out parts and service. Ask us about warranty terms on WhatsApp.",
  },
  {
    q: "Are these machines really worth the price?",
    a: "New equivalents cost 3–5 times what we sell at. Our machines come from verified sources, with hours and condition that match what we list. Compare us with anyone — then visit the yard.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    machineType: "", timeline: "", location: "",
    budget: "", brand: "", condition: "",
    payment: "", decisionMaker: "", firstName: "", lastName: "", phone: "", email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("https://hook.eu2.make.com/knpw4zm1cu1g2jip8ltmplvrd52bkc7q", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        machine_type: form.machineType,
        timeline: form.timeline,
        location: form.location,
        budget: form.budget,
        brand_preference: form.brand || "No preference",
        condition: form.condition,
        payment_method: form.payment,
        decision_maker: form.decisionMaker,
        first_name: form.firstName,
        last_name: form.lastName,
        phone: form.phone,
        email: form.email,
        source_page: "Book a Call Form",
      }),
    }).catch(() => {});
    setSubmitted(true);
  };

  const WA_ICON = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  return (
    <>
    <main className={styles.main}>

      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <video
            src="/heavy_machine_vid.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className={styles.heroBgOverlay} />
          <div className={styles.heroBgRadial} />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            Heavy Machinery,<br />
            <em>Ready to Work.</em>
          </h1>

          <div className={styles.heroAccentLine} />

          <p className={styles.heroSub}>
            Dozers. Excavators. Graders. Prime Movers.<br />
            Inspected, serviced, and waiting for your next job.
          </p>

          <div className={styles.heroCtas}>
            <a
              href={waLink("Habari Windsor, nataka kujua kuhusu mashine zenu. Nina mradi wa…")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaWhatsApp}
            >
              {WA_ICON}
              Tuma WhatsApp &mdash; Get a Quote
            </a>
            <a href="tel:+254717295952" className={styles.ctaCall}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.61 21 3 14.39 3 6c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/>
              </svg>
              Call 0717 295 952
            </a>
          </div>

          <p className={styles.heroLocation}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            Garden Estate, near Windsor Roundabout, Northern Bypass, Nairobi
          </p>
        </div>

        <div className={styles.heroScroll}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollLabel}>Scroll</span>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <div className={styles.trustBar}>
        <div className={styles.trustInner}>
          {[
            "Company Serviced",
            "Locally Available",
            "Inspection Welcome",
            "Financing Facilitated",
          ].map((label) => (
            <div key={label} className={styles.trustItem}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 9l4.5 4.5 9.5-9" stroke="#111111" strokeWidth="2" strokeLinecap="square"/>
              </svg>
              <span className={styles.trustLabel}>{label}</span>
            </div>
          ))}
        </div>
        <p className={styles.trustTagline}>
          Trusted by contractors across Kenya &mdash; from county road projects to private quarries.
        </p>
      </div>

      {/* ─── CURRENT STOCK ─── */}
      <section id="stock" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Current Stock</p>
            <h2 className={styles.sectionHeading}>
              Machines Available Now
            </h2>
            <p className={styles.sectionSub}>
              All units in our Garden Estate yard. Prices include our standard inspection report.
            </p>
          </div>

          <div className={styles.stockGrid}>
            {MACHINES.map((m) => (
              <article key={m.id} className={styles.machineCard}>
                <div className={styles.cardImage}>
                  {m.img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  )}
                  <div className={styles.cardImageOverlay} />
                  <span className={styles.cardTag}>{m.tag}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{m.name}</h3>
                  <div className={styles.cardSpecs}>
                    {m.specs.map((spec, i) => (
                      <span key={i} className={styles.cardSpecItem}>{spec}</span>
                    ))}
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardPrice}>{m.price}</span>
                    <a
                      href={waLink(m.waMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardCta}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Tuma WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.stockFooter}>
            <p className={styles.stockNote}>
              Don&apos;t see what you need? We source to order.
            </p>
            <a
              href={waLink("Habari Windsor, ninahitaji mashine maalum ambayo haiko kwenye orodha yenu. Nina mradi wa…")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaOutline}
            >
              Request a Specific Machine
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY WINDSOR ─── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Why Windsor</p>
            <h2 className={styles.sectionHeading}>Why Contractors Choose Us</h2>
          </div>

          <div className={styles.whyGrid}>
            {WHY_WINDSOR.map((item) => (
              <div key={item.headline} className={styles.whyCard}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <h3 className={styles.whyHeadline}>{item.headline}</h3>
                <p className={styles.whyProof}>{item.proof}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="process" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>The Process</p>
            <h2 className={styles.sectionHeading}>How Buying From Windsor Works</h2>
            <p className={styles.sectionSub}>
              From enquiry to machine on site &mdash; a clear, predictable process.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {STEPS.map((s) => (
              <div key={s.num} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>What Contractors Say</p>
            <h2 className={styles.sectionHeading}>Real Buyers. Real Projects.</h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.testimonialQuoteMark}>&ldquo;</div>
                <p className={styles.testimonialText}>{t.quote}</p>
                <div className={styles.testimonialAttrib}>
                  <span className={styles.testimonialName}>{t.name}</span>
                  <span className={styles.testimonialMeta}>{t.company} &middot; {t.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Common Questions</p>
            <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq, i) => (
              <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className={`${styles.faqIcon} ${openFaq === i ? styles.faqIconOpen : ""}`} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <p className={styles.faqAnswer}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOK A CALL FORM ─── */}
      <section id="book" className={styles.formSection}>
        <div className={styles.sectionInner}>
          <div className={styles.formGrid}>
            <div className={styles.formLeft}>
              <p className={styles.sectionTag}>Book a Call</p>
              <h2 className={styles.formHeading}>
                Find the Right Machine<br />
                <em>for Your Project</em>
              </h2>
              <p className={styles.formIntro}>
                Answer 8 quick questions. We&apos;ll match you to the best available units and
                call you within 24 hours &mdash; no generic sales pitch, just the right options.
              </p>
              <div className={styles.formMeta}>
                <div className={styles.formMetaItem}>
                  <span className={styles.formMetaDot} />
                  <span>15-minute Equipment Match Call</span>
                </div>
                <div className={styles.formMetaItem}>
                  <span className={styles.formMetaDot} />
                  <span>2&ndash;3 verified options sent same day</span>
                </div>
                <div className={styles.formMetaItem}>
                  <span className={styles.formMetaDot} />
                  <span>No obligation to buy</span>
                </div>
              </div>
            </div>

            <div className={styles.formRight}>
              {submitted ? (
                <div className={styles.formSuccess}>
                  <div className={styles.formSuccessIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M6 16l7 7 13-13" stroke="#E8B400" strokeWidth="2" strokeLinecap="square"/>
                    </svg>
                  </div>
                  <h3 className={styles.formSuccessTitle}>Request Received</h3>
                  <p className={styles.formSuccessBody}>
                    We&apos;ll match you to the best options and call you within 24 hours.
                  </p>
                  <a
                    href={waLink("Habari Windsor, nimetuma fomu ya maombi. Naomba msaada zaidi.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaWhatsApp}
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formProgress}>
                    <div className={styles.formProgressBar} style={{ width: `${(formStep / 3) * 100}%` }} />
                  </div>
                  <p className={styles.formStepLabel}>Step {formStep} of 3</p>

                  {formStep === 1 && (
                    <div className={styles.formFields}>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="machineType">What machine type do you need? *</label>
                        <select id="machineType" name="machineType" className={styles.fieldSelect} value={form.machineType} onChange={handleChange} required>
                          <option value="">Select machine type</option>
                          <option>Excavator</option>
                          <option>Wheel Loader</option>
                          <option>Motor Grader</option>
                          <option>Bulldozer / Dozer</option>
                          <option>Tipper Truck</option>
                          <option>Tractor Head / Prime Mover</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="timeline">When do you need it on site? *</label>
                        <select id="timeline" name="timeline" className={styles.fieldSelect} value={form.timeline} onChange={handleChange} required>
                          <option value="">Select timeline</option>
                          <option>0&ndash;7 days (urgent)</option>
                          <option>1&ndash;2 weeks</option>
                          <option>3&ndash;4 weeks</option>
                          <option>Just comparing options</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="location">Project location *</label>
                        <input id="location" name="location" type="text" className={styles.fieldInput} placeholder="e.g. Thika, Kiambu, Kenya" value={form.location} onChange={handleChange} required />
                      </div>
                      <button type="button" className={styles.formNext} onClick={() => setFormStep(2)} disabled={!form.machineType || !form.timeline || !form.location}>
                        Next &mdash; Budget &amp; Preferences
                      </button>
                    </div>
                  )}

                  {formStep === 2 && (
                    <div className={styles.formFields}>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="budget">Budget range (KES)? *</label>
                        <select id="budget" name="budget" className={styles.fieldSelect} value={form.budget} onChange={handleChange} required>
                          <option value="">Select budget range</option>
                          <option>Below KES 2M</option>
                          <option>KES 2M &ndash; 3M</option>
                          <option>KES 3M &ndash; 5M</option>
                          <option>KES 5M &ndash; 8M</option>
                          <option>KES 8M+</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="brand">Preferred brand or model?</label>
                        <input id="brand" name="brand" type="text" className={styles.fieldInput} placeholder="e.g. Caterpillar, Komatsu, Any" value={form.brand} onChange={handleChange} />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="condition">Condition preference? *</label>
                        <select id="condition" name="condition" className={styles.fieldSelect} value={form.condition} onChange={handleChange} required>
                          <option value="">Select condition</option>
                          <option>Ready to work &mdash; minimal service needed</option>
                          <option>Minor service OK &mdash; I have a mechanic</option>
                          <option>Refurb OK &mdash; I want a lower price</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="payment">Payment method? *</label>
                        <select id="payment" name="payment" className={styles.fieldSelect} value={form.payment} onChange={handleChange} required>
                          <option value="">Select payment method</option>
                          <option>Cash / full payment</option>
                          <option>Part payment (deposit + balance)</option>
                          <option>Financing / asset finance</option>
                        </select>
                      </div>
                      <div className={styles.formNavRow}>
                        <button type="button" className={styles.formBack} onClick={() => setFormStep(1)}>&larr; Back</button>
                        <button type="button" className={styles.formNext} onClick={() => setFormStep(3)} disabled={!form.budget || !form.condition || !form.payment}>
                          Next &mdash; Your Details
                        </button>
                      </div>
                    </div>
                  )}

                  {formStep === 3 && (
                    <div className={styles.formFields}>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="decisionMaker">Your role in this purchase? *</label>
                        <select id="decisionMaker" name="decisionMaker" className={styles.fieldSelect} value={form.decisionMaker} onChange={handleChange} required>
                          <option value="">Select your role</option>
                          <option>I make the final decision</option>
                          <option>I recommend &mdash; company approves</option>
                          <option>Procurement / procurement team</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="firstName">First name *</label>
                        <input id="firstName" name="firstName" type="text" className={styles.fieldInput} placeholder="First name" value={form.firstName} onChange={handleChange} required />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="lastName">Last name *</label>
                        <input id="lastName" name="lastName" type="text" className={styles.fieldInput} placeholder="Last name" value={form.lastName} onChange={handleChange} required />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="email">Email *</label>
                        <input id="email" name="email" type="email" className={styles.fieldInput} placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="phone">Phone / WhatsApp *</label>
                        <input id="phone" name="phone" type="tel" className={styles.fieldInput} placeholder="+254 7XX XXX XXX" value={form.phone} onChange={handleChange} required />
                      </div>
                      <div className={styles.formNavRow}>
                        <button type="button" className={styles.formBack} onClick={() => setFormStep(2)}>&larr; Back</button>
                        <button type="submit" className={styles.formSubmit} disabled={!form.decisionMaker || !form.firstName || !form.lastName || !form.phone || !form.email}>
                          Book My Equipment Match Call
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className={styles.finalCta}>
        <div className={styles.sectionInner}>
          <div className={styles.finalCtaInner}>
            <div>
              <h2 className={styles.finalCtaHeading}>Ready to find your next machine?</h2>
              <p className={styles.finalCtaBody}>
                WhatsApp us now. We reply within minutes, in English or Kiswahili.<br />
                Tell us your project and budget &mdash; we&apos;ll match you to the right machine.
              </p>
            </div>
            <div className={styles.finalCtaButtons}>
              <a
                href={waLink("Habari Windsor, nataka kujua kuhusu mashine zenu. Nina mradi wa…")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaWhatsApp}
              >
                {WA_ICON}
                Tuma WhatsApp &mdash; 0717 295 952
              </a>
              <a href="tel:+254717295952" className={styles.ctaCallDark}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.61 21 3 14.39 3 6c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/>
                </svg>
                Call 0717 295 952
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>

    {/* ─── STICKY MOBILE BAR ─── */}
    <div className={styles.stickyBar} aria-label="Quick contact">
      <a
        href={waLink("Habari Windsor, nataka kujua kuhusu mashine zenu. Nina mradi wa…")}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.stickyWa}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Tuma WhatsApp
      </a>
      <a href="tel:+254717295952" className={styles.stickyCall}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.61 21 3 14.39 3 6c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/>
        </svg>
        Call
      </a>
    </div>
    </>
  );
}
