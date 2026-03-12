"use client";
import { useState } from "react";
import styles from "./page.module.css";
import CoverageMap from "@/components/CoverageMap";

const MACHINES = [
  {
    id: 1,
    name: "CAT 320D Excavator",
    year: 2018,
    hours: "4,200 hrs",
    location: "Nairobi Yard",
    price: "KES 7.2M",
    tag: "Ready to Work",
    img: "/CAT 320D Excavator.jpg",
  },
  {
    id: 2,
    name: "Komatsu WA380 Loader",
    year: 2017,
    hours: "5,800 hrs",
    location: "Nairobi Yard",
    price: "KES 6.5M",
    tag: "Minor Service",
    img: "/Komatsu WA380 Loader.png",
  },
  {
    id: 3,
    name: "Volvo G940 Motor Grader",
    year: 2016,
    hours: "6,100 hrs",
    location: "Mombasa",
    price: "KES 8.8M",
    tag: "Ready to Work",
    img: "/Volvo G940 Motor Grader.jpg",
  },
  {
    id: 4,
    name: "Caterpillar D6T Dozer",
    year: 2015,
    hours: "7,400 hrs",
    location: "Nairobi Yard",
    price: "KES 9.1M",
    tag: "Refurb OK",
    img: "/Caterpillar D6T Dozer.jpg",
  },
  {
    id: 5,
    name: "Howo 371 Tractor Head",
    year: 2019,
    hours: "310,000 km",
    location: "Nairobi Yard",
    price: "KES 3.2M",
    tag: "Ready to Work",
    img: "/Howo 371 Tractor Head.jpg",
  },
  {
    id: 6,
    name: "Isuzu FVZ Tipper",
    year: 2018,
    hours: "215,000 km",
    location: "Kampala",
    price: "KES 2.8M",
    tag: "Minor Service",
    img: "/Isuzu FVZ Tipper.jpg",
  },
];

const FAQS = [
  {
    q: "How do I know the machine is not faulty?",
    a: "Every unit goes through our written inspection checklist: engine start and smoke test, hydraulic pressure and response, undercarriage wear, hours meter cross-check, and a video walkaround. You receive the full checklist report before committing.",
  },
  {
    q: "Can you prove actual hours and condition?",
    a: "Yes. We record a video walkaround of the hours meter, run the machine under load, and document findings in our inspection report. For excavators we physically measure undercarriage wear.",
  },
  {
    q: "What if I need parts after buying?",
    a: "We provide 30 days of after-sale support including parts sourcing guidance and referrals to vetted mechanics in your region. We also maintain relationships with parts suppliers for all major brands in our stock.",
  },
  {
    q: "Can you deliver upcountry or cross-border?",
    a: "Yes. We coordinate delivery across Kenya and to Uganda, Tanzania, Ethiopia, and Rwanda. We provide a delivery timeline and cost estimate per region before you commit.",
  },
  {
    q: "Why is your price higher than a Facebook listing?",
    a: "Facebook prices rarely include inspection, paperwork guidance, or delivery. One hidden fault — a cracked engine block or bad transmission — can cost KES 1M+ in repairs. Our process eliminates that risk. You pay a fair price for a machine you can trust on site.",
  },
  {
    q: "What paperwork do you help with?",
    a: "We guide you through ownership transfer, import documents, KRA clearance, and logbook processes. We don't do it for you, but we know exactly what is needed and flag any issues before you pay.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Book a 15-Min Equipment Match Call",
    body: "Tell us your project, timeline, and budget. We listen, not pitch.",
  },
  {
    num: "02",
    title: "We Match and Verify the Machine",
    body: "We run our inspection checklist and send you a video walkaround report.",
  },
  {
    num: "03",
    title: "Hold with a Small Deposit",
    body: "Reserve the right machine while paperwork and transport are confirmed.",
  },
  {
    num: "04",
    title: "Delivery to Your Site",
    body: "We coordinate transport to your project location — Nairobi, upcountry, or cross-border.",
  },
];

const CHECKLIST = [
  "Engine cold start & warm-up smoke check",
  "Hydraulic pressure, speed & response test",
  "Undercarriage pin & bush wear measurement",
  "Hours meter recorded against wear indicators",
  "Cab controls, HVAC & visibility check",
  "Undercarriage frame for cracks or welds",
  "Import documents & ownership history review",
  "Delivery timeline & transport cost estimate",
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    machineType: "", timeline: "", location: "",
    budget: "", brand: "", condition: "",
    payment: "", decisionMaker: "", name: "", phone: "", email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
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
          <div className={styles.heroEyebrow}>
            <span className={styles.heroPulse} />
            <span>Verified Stock &nbsp;·&nbsp; Nairobi &amp; Mombasa</span>
          </div>

          <h1 className={styles.heroHeading}>
            Buy Used Heavy<br />
            Machinery Without<br />
            <em>Guesswork</em>
          </h1>

          <div className={styles.heroAccentLine} />

          <p className={styles.heroSub}>
            Inspection, paperwork support &amp; delivery to site—<br />
            so your project stays on time and on budget.
          </p>

          <ul className={styles.heroBullets}>
            <li className={styles.heroBullet}>
              <span className={styles.bulletMark} />
              Inspection &amp; verification included — engine, hydraulics, undercarriage
            </li>
            <li className={styles.heroBullet}>
              <span className={styles.bulletMark} />
              Paperwork guidance — import docs, ownership transfer
            </li>
            <li className={styles.heroBullet}>
              <span className={styles.bulletMark} />
              30-day after-sale support — parts sourcing &amp; mechanic referrals
            </li>
          </ul>

          <div className={styles.heroCtas}>
            <a href="#book" className={styles.ctaPrimary}>
              Book a 15-Min Equipment Match Call
            </a>
            <button
              type="button"
              className={styles.ctaSecondary}
              onClick={() => window.dispatchEvent(new CustomEvent("openWhatsAppModal"))}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Request Stock + Prices on WhatsApp
            </button>
          </div>
        </div>

        <div className={styles.heroScroll}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollLabel}>Scroll</span>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <div className={styles.trustBar}>
        <div className={styles.trustInner}>
          {[
            ["500+", "Machines Sold"],
            ["7-Day", "Avg Delivery"],
            ["100%", "Inspection Reports"],
            ["Kenya & EA", "Coverage"],
          ].map(([stat, label]) => (
            <div key={label} className={styles.trustItem}>
              <span className={styles.trustStat}>{stat}</span>
              <span className={styles.trustLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CURRENT STOCK ─── */}
      <section id="stock" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Updated Weekly</p>
            <h2 className={styles.sectionHeading}>
              Current High-Demand Machines
            </h2>
            <p className={styles.sectionSub}>
              All units in yard. Prices include our standard inspection report. Stock moves fast.
            </p>
          </div>

          <div className={styles.stockGrid}>
            {MACHINES.map((m) => (
              <article key={m.id} className={styles.machineCard}>
                <div className={styles.cardImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div className={styles.cardImageOverlay} />
                  <span className={`${styles.cardTag} ${m.tag === "Ready to Work" ? styles.tagGreen : ""}`}>
                    {m.tag}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{m.name}</h3>
                  <div className={styles.cardSpecs}>
                    <span>{m.year}</span>
                    <span className={styles.cardDot} />
                    <span>{m.hours}</span>
                    <span className={styles.cardDot} />
                    <span>{m.location}</span>
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardPrice}>{m.price}</span>
                    <a
                      href={`https://wa.me/254717295952?text=Hi%2C+I%27m+interested+in+the+${encodeURIComponent(m.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardCta}
                    >
                      Enquire
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
              href="https://wa.me/254717295952?text=Hi%2C+I%27m+looking+for+a+specific+machine"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaOutline}
            >
              Request a Specific Machine
            </a>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="process" className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>Zero Guesswork</p>
            <h2 className={styles.sectionHeading}>How Buying With Us Works</h2>
            <p className={styles.sectionSub}>
              From enquiry to machine on site — a clear, predictable process.
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

      {/* ─── VERIFICATION ─── */}
      <section id="verify" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.verifyGrid}>
            <div className={styles.verifyLeft}>
              <p className={styles.sectionTag}>What We Check</p>
              <h2 className={styles.sectionHeading}>
                Our Inspection &amp;<br />Verification Process
              </h2>
              <p className={styles.verifyBody}>
                Every machine in our yard is physically inspected before it appears in our stock list.
                We document findings in a written report and a 60–120 second video walkaround — so you
                can make a decision based on evidence, not salesman claims.
              </p>
              <a href="#book" className={styles.ctaPrimary} style={{ marginTop: 8 }}>
                Book an Inspection Call
              </a>
            </div>
            <div className={styles.verifyRight}>
              <ul className={styles.checklist}>
                {CHECKLIST.map((item) => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkMark} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COVERAGE ─── */}
      <section className={styles.coverageSection}>
        <div className={styles.sectionInner}>
          <div className={styles.coverageGrid}>
            <div>
              <p className={styles.sectionTag}>Delivery Coverage</p>
              <h2 className={styles.sectionHeading}>
                We Deliver Across<br />Kenya &amp; East Africa
              </h2>
              <p className={styles.coverageBody}>
                We coordinate transport from our Nairobi and Mombasa yards to your
                project site — anywhere in Kenya, Uganda, Tanzania, Ethiopia, or Rwanda.
                Every delivery includes a timeline estimate before you commit.
              </p>
              <div className={styles.coverageRegions}>
                {["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Kampala", "Dar es Salaam", "Addis Ababa", "Kigali"].map((city) => (
                  <span key={city} className={styles.coverageTag}>{city}</span>
                ))}
              </div>
            </div>
            <div className={styles.coverageVisual}>
              <CoverageMap />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className={styles.sectionDark}>
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
                  <span className={styles.faqIcon} aria-hidden="true">
                    {openFaq === i ? "−" : "+"}
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
                call you within 24 hours — no generic sales pitch, just the right options.
              </p>
              <div className={styles.formMeta}>
                <div className={styles.formMetaItem}>
                  <span className={styles.formMetaDot} />
                  <span>15-minute Equipment Match Call</span>
                </div>
                <div className={styles.formMetaItem}>
                  <span className={styles.formMetaDot} />
                  <span>2–3 verified options sent same day</span>
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
                  <a href="https://wa.me/254717295952?text=Hi%2C+I+just+submitted+a+match+request" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
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
                          <option>Tractor Head</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="timeline">When do you need it on site? *</label>
                        <select id="timeline" name="timeline" className={styles.fieldSelect} value={form.timeline} onChange={handleChange} required>
                          <option value="">Select timeline</option>
                          <option>0–7 days (urgent)</option>
                          <option>1–2 weeks</option>
                          <option>3–4 weeks</option>
                          <option>Just comparing options</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="location">Project location *</label>
                        <input id="location" name="location" type="text" className={styles.fieldInput} placeholder="e.g. Thika, Kiambu, Kenya" value={form.location} onChange={handleChange} required />
                      </div>
                      <button type="button" className={styles.formNext} onClick={() => setFormStep(2)} disabled={!form.machineType || !form.timeline || !form.location}>
                        Next — Budget &amp; Preferences
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
                          <option>KES 2M – 3M</option>
                          <option>KES 3M – 5M</option>
                          <option>KES 5M – 8M</option>
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
                          <option>Ready to work — minimal service needed</option>
                          <option>Minor service OK — I have a mechanic</option>
                          <option>Refurb OK — I want a lower price</option>
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
                        <button type="button" className={styles.formBack} onClick={() => setFormStep(1)}>← Back</button>
                        <button type="button" className={styles.formNext} onClick={() => setFormStep(3)} disabled={!form.budget || !form.condition || !form.payment}>
                          Next — Your Details
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
                          <option>I recommend — company approves</option>
                          <option>Procurement / procurement team</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label className={styles.fieldLabel} htmlFor="name">Your name *</label>
                        <input id="name" name="name" type="text" className={styles.fieldInput} placeholder="Full name" value={form.name} onChange={handleChange} required />
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
                        <button type="button" className={styles.formBack} onClick={() => setFormStep(2)}>← Back</button>
                        <button type="submit" className={styles.formSubmit} disabled={!form.decisionMaker || !form.name || !form.phone || !form.email}>
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
              <h2 className={styles.finalCtaHeading}>Need a machine on site in 7–14 days?</h2>
              <p className={styles.finalCtaBody}>Tell us your project and we&apos;ll match and verify the right unit fast.</p>
            </div>
            <div className={styles.finalCtaButtons}>
              <a href="#book" className={styles.ctaPrimary}>Book a 15-Min Call</a>
              <button type="button" className={styles.ctaWhatsAppFull} onClick={() => window.dispatchEvent(new CustomEvent("openWhatsAppModal"))}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
