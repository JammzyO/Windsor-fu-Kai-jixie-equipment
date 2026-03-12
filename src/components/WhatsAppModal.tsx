"use client";
import { useState } from "react";
import styles from "./WhatsAppModal.module.css";

type Props = { onClose: () => void };

const EMPTY = {
  machineType: "", timeline: "", location: "",
  budget: "", brand: "", condition: "",
  payment: "", decisionMaker: "", name: "", phone: "", email: "",
};

function Chips({ options, value, onSelect }: { options: string[]; value: string; onSelect: (v: string) => void }) {
  return (
    <div className={styles.chipGroup}>
      {options.map(opt => (
        <button
          key={opt} type="button"
          className={`${styles.chip} ${value === opt ? styles.chipActive : ""}`}
          onClick={() => onSelect(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function WhatsAppModal({ onClose }: Props) {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState(EMPTY);

  const set = (k: keyof typeof EMPTY, v: string) => setForm(p => ({ ...p, [k]: v }));
  const txt = (e: React.ChangeEvent<HTMLInputElement>) => set(e.target.name as keyof typeof EMPTY, e.target.value);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "Hi! I found your website and I'm looking for a machine.",
      "",
      `*Name:* ${form.name}`,
      `*Email:* ${form.email || "–"}`,
      `*Phone/WhatsApp:* ${form.phone}`,
      "",
      `*1. Machine needed:* ${form.machineType}`,
      `*2. When on site:* ${form.timeline}`,
      `*3. Project location:* ${form.location}`,
      `*4. Budget:* ${form.budget}`,
      `*5. Brand preference:* ${form.brand || "No preference"}`,
      `*6. Condition:* ${form.condition}`,
      `*7. Payment:* ${form.payment}`,
      `*8. Decision maker:* ${form.decisionMaker}`,
    ].join("\n");
    window.open(`https://wa.me/254700000000?text=${encodeURIComponent(msg)}`, "_blank");
    setDone(true);
  };

  return (
    <div className={styles.overlay} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="WhatsApp Machine Enquiry">
        <div className={styles.header}>
          <span className={styles.title}>Find Your Machine via WhatsApp</span>
          <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className={styles.body}>
          {done ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 10l5 5 9-9" stroke="#E8B400" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </div>
              <h3 className={styles.successTitle}>WhatsApp Opening…</h3>
              <p className={styles.successBody}>
                Your full request has been pre-filled. Just hit send in WhatsApp —
                we&apos;ll reply with matched options as soon as possible.
              </p>
              <button className={styles.btnClose} onClick={onClose}>Close</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: `${(step / 4) * 100}%` }} />
              </div>
              <span className={styles.stepLabel}>Step {step} of 4</span>

              {/* Step 1 — Machine & Timeline */}
              {step === 1 && (
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label className={styles.label}>What machine do you need? *</label>
                    <Chips value={form.machineType} onSelect={v => set("machineType", v)}
                      options={["Excavator","Wheel Loader","Motor Grader","Dozer","Tipper Truck","Tractor Head","Other"]} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>When do you need it on site? *</label>
                    <Chips value={form.timeline} onSelect={v => set("timeline", v)}
                      options={["0–7 days (urgent)","1–2 weeks","3–4 weeks","Just comparing"]} />
                  </div>
                  <button type="button" className={styles.btnNext} onClick={() => setStep(2)}
                    disabled={!form.machineType || !form.timeline}>
                    Next — Location &amp; Budget
                  </button>
                </div>
              )}

              {/* Step 2 — Location & Budget */}
              {step === 2 && (
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="wa-location">Project location *</label>
                    <input id="wa-location" name="location" type="text" className={styles.input}
                      placeholder="e.g. Thika, Kiambu, Kenya" value={form.location} onChange={txt} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Budget range (KES)? *</label>
                    <Chips value={form.budget} onSelect={v => set("budget", v)}
                      options={["Below KES 2M","KES 2M – 3M","KES 3M – 5M","KES 5M – 8M","KES 8M+"]} />
                  </div>
                  <div className={styles.navRow}>
                    <button type="button" className={styles.btnBack} onClick={() => setStep(1)}>← Back</button>
                    <button type="button" className={styles.btnNext} onClick={() => setStep(3)}
                      disabled={!form.location || !form.budget}>
                      Next — Preferences
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 — Brand, Condition & Payment */}
              {step === 3 && (
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="wa-brand">Brand preference <span style={{opacity:.5,textTransform:"none",letterSpacing:0}}>(optional)</span></label>
                    <input id="wa-brand" name="brand" type="text" className={styles.input}
                      placeholder="e.g. Caterpillar, Komatsu, Any" value={form.brand} onChange={txt} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Condition? *</label>
                    <Chips value={form.condition} onSelect={v => set("condition", v)}
                      options={["Ready to work","Minor service OK","Refurb OK"]} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>How will you pay? *</label>
                    <Chips value={form.payment} onSelect={v => set("payment", v)}
                      options={["Cash / full payment","Part payment","Financing"]} />
                  </div>
                  <div className={styles.navRow}>
                    <button type="button" className={styles.btnBack} onClick={() => setStep(2)}>← Back</button>
                    <button type="button" className={styles.btnNext} onClick={() => setStep(4)}
                      disabled={!form.condition || !form.payment}>
                      Next — About You
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4 — Role & Contact */}
              {step === 4 && (
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label className={styles.label}>Your role in this purchase? *</label>
                    <Chips value={form.decisionMaker} onSelect={v => set("decisionMaker", v)}
                      options={["I decide","I recommend","Company approval needed"]} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="wa-name">Your name *</label>
                    <input id="wa-name" name="name" type="text" className={styles.input}
                      placeholder="Full name" value={form.name} onChange={txt} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="wa-phone">Phone / WhatsApp *</label>
                    <input id="wa-phone" name="phone" type="tel" className={styles.input}
                      placeholder="+254 7XX XXX XXX" value={form.phone} onChange={txt} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="wa-email">Email <span style={{opacity:.5,textTransform:"none",letterSpacing:0}}>(optional)</span></label>
                    <input id="wa-email" name="email" type="email" className={styles.input}
                      placeholder="you@company.com" value={form.email} onChange={txt} />
                  </div>
                  <div className={styles.navRow}>
                    <button type="button" className={styles.btnBack} onClick={() => setStep(3)}>← Back</button>
                    <button type="submit" className={styles.btnSubmit}
                      disabled={!form.decisionMaker || !form.name || !form.phone}>
                      Send via WhatsApp →
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
