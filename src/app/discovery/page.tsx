"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const WEBHOOK_URL = "https://hook.eu2.make.com/k977ngweu043lscj32x6rpnkbrl9pt8s";
const STORAGE_KEY = "wfk_discovery_v1";

// ─── Types ────────────────────────────────────────────────────────────────────
type QType = "textarea" | "text" | "number" | "url" | "email" | "radio" | "checkboxes";

interface Q {
  id: string;
  label: string;
  type: QType;
  required?: boolean;
  placeholder?: string;
  tip?: string;
  highlight?: string;
  options?: string[];
  rows?: number;
  maxLength?: number;
}

interface Section {
  letter: string;
  title: string;
  description: string;
  est: string;
  questions: Q[];
}

// ─── Section data ─────────────────────────────────────────────────────────────
const SECTIONS: Section[] = [
  {
    letter: "A",
    title: "About Windsor",
    description:
      "We need a real human story for the landing page and the cold outreach — something a buyer can trust. The more detail here, the better.",
    est: "~10 min",
    questions: [
      {
        id: "q1",
        label: "When was Windsor Fu Kai Jixie Equipment established, and who founded it?",
        type: "textarea",
        required: true,
        placeholder: "e.g. Founded in 2019 by…",
        rows: 3,
      },
      {
        id: "q2",
        label: 'What does the name "Fu Kai Jixie" mean, and is there a story behind it?',
        type: "textarea",
        placeholder: "The meaning and any story behind the name…",
        rows: 3,
      },
      {
        id: "q3",
        label: "What makes Windsor different from other used construction equipment dealers in Kenya?",
        type: "textarea",
        required: true,
        tip: 'Think about sourcing, pricing, service, trust, network — not just "we sell good machines".',
        placeholder: "What genuinely sets Windsor apart…",
        rows: 5,
        maxLength: 1000,
      },
      {
        id: "q4",
        label: "Where do your machines come from?",
        type: "textarea",
        required: true,
        placeholder: "China direct? Japan auctions? UK? Local resales? A mix?",
        rows: 3,
      },
      {
        id: "q5",
        label: "How many machines have you sold in the last 12 months?",
        type: "number",
        required: true,
        placeholder: "0",
      },
      {
        id: "q6",
        label: "How many in the last 36 months?",
        type: "number",
        placeholder: "0",
      },
      {
        id: "q7",
        label: "List 3–5 satisfied past buyers we can request testimonials or case-study permission from.",
        type: "textarea",
        required: true,
        tip: "Include: full name, phone, machine type and model, and the project / site they used it on. One buyer per line.",
        placeholder: "Name — 07XX — CAT D6H — Kiambu county road, 2024",
        rows: 7,
      },
      {
        id: "q8",
        label: "How big is your yard, and how often does stock rotate?",
        type: "textarea",
        placeholder: "e.g. 2 acres, we stock 8–12 units at a time and rotate every 6–8 weeks…",
        rows: 3,
      },
    ],
  },
  {
    letter: "B",
    title: "The Equipment",
    description:
      "Tick what you stock, then answer the questions below. We will repeat the per-model detail during onboarding if needed.",
    est: "~8 min",
    questions: [
      {
        id: "equipment_categories",
        label: "Categories you currently stock or have stocked in the last 12 months",
        type: "checkboxes",
        required: true,
        options: [
          "Dozers (e.g. CAT D6H)",
          "Excavators (e.g. Zoomlion 7.8 ton)",
          "Motor graders (e.g. CAT 160G)",
          "Wheel loaders",
          "Prime movers / tractor heads (e.g. Isuzu EXZ 3339)",
          "Tipper trucks",
          "Backhoe loaders (e.g. JCB 3CX)",
          "Compactors / rollers",
          "Cranes",
          "Forklifts",
        ],
      },
      {
        id: "q9",
        label: "Other equipment categories not listed above",
        type: "text",
        placeholder: "Any other types you carry…",
      },
      {
        id: "q10",
        label:
          "For each category you stock, what models do you typically carry and what is the usual price range?",
        type: "textarea",
        required: true,
        tip: 'Example: "CAT D6H — KSh 5M–6M. Zoomlion 7.8t excavator — KSh 1.5M–2M…"',
        placeholder:
          "CAT D6H — KSh 5M–6M\nZoomlion 7.8t excavator — KSh 1.5M–2M\n…",
        rows: 6,
      },
      {
        id: "q11",
        label: "What are the 3 most common questions buyers ask before committing?",
        type: "textarea",
        required: true,
        tip: "These will become the FAQ section of the landing page.",
        placeholder: "1.\n2.\n3.",
        rows: 4,
      },
      {
        id: "q12",
        label: "What are the 3 most common objections or reasons deals fall through?",
        type: "textarea",
        required: true,
        tip: "Examples: price too high, no trust in second-hand, can't find financing, parts availability, transport cost to upcountry.",
        placeholder: "1.\n2.\n3.",
        rows: 4,
      },
      {
        id: "q13",
        label: "What service, warranty, or after-sale support do you offer?",
        type: "textarea",
        required: true,
        tip: "Be specific — number of days, what is covered, who pays.",
        placeholder: "e.g. 7-day mechanical guarantee, buyer pays parts cost, we provide labour…",
        rows: 4,
      },
      {
        id: "q14",
        label:
          "Do you have mechanics on standby for post-sale issues? Do you train the buyer's operators?",
        type: "textarea",
        placeholder: "e.g. Two mechanics on call. Basic operator training included on request…",
        rows: 3,
      },
      {
        id: "q15",
        label:
          "Can you arrange transport / delivery to a site upcountry? What is the typical cost?",
        type: "textarea",
        placeholder:
          "Yes / No. If yes — typical cost, how far, how it's arranged…",
        rows: 3,
      },
      {
        id: "q16",
        label: "Do you accept trade-ins of old equipment?",
        type: "radio",
        options: ["Yes", "No", "Case by case"],
      },
      {
        id: "q16_detail",
        label: "Trade-in details (how it works, what types you accept)",
        type: "textarea",
        placeholder: "If yes or case by case — describe your process…",
        rows: 2,
      },
      {
        id: "q17",
        label:
          "Do you offer or facilitate financing? Which banks, SACCOs, or asset-finance partners have you worked with successfully?",
        type: "textarea",
        tip: "Examples: Stanbic asset finance, KCB, Equity, Mwalimu SACCO, Stima SACCO.",
        placeholder: "We work with…",
        rows: 3,
      },
    ],
  },
  {
    letter: "C",
    title: "The Buyers",
    description:
      "This is the most important section. The better you describe your buyers, the better Fanisi can find more of them and speak their language.",
    est: "~8 min",
    questions: [
      {
        id: "q18",
        label:
          "Describe your typical buyer in detail: age range, role, region, project size they usually run.",
        type: "textarea",
        required: true,
        placeholder:
          "e.g. 35–55 year old site engineer or contractor, based in Nairobi/Kiambu/Nakuru, running county road or private construction projects worth KSh 5M–50M…",
        rows: 5,
      },
      {
        id: "q19",
        label: "Who actually makes the buying decision, and who influences it?",
        type: "textarea",
        required: true,
        tip: '"The director signs the cheque, but the clerk of works or site engineer tells him which machine to buy."',
        placeholder: "e.g. The director signs…",
        rows: 3,
      },
      {
        id: "buyer_languages",
        label: "Languages your decision-makers and influencers commonly use",
        type: "checkboxes",
        options: [
          "English (formal)",
          "Swahili (formal / standard)",
          "Sheng / street Swahili",
          "Mix of English and Swahili",
          "Kikuyu",
          "Kalenjin",
          "Luo",
          "Mandarin / Chinese (for Chinese contractor subsidiaries)",
        ],
      },
      {
        id: "q20",
        label: "What time of day do buyers usually call or message?",
        type: "text",
        tip: "This drives our send-window settings.",
        placeholder: "e.g. Mostly 7–9am and after 5pm. Rarely midday.",
      },
      {
        id: "q21",
        label: "What triggers a buyer to start looking?",
        type: "textarea",
        placeholder:
          "Won a tender? Existing machine broke down? Rainy season ending? Project mobilisation?",
        rows: 3,
      },
      {
        id: "q22",
        label: "How long is a typical sales cycle from first WhatsApp message to deposit?",
        type: "text",
        placeholder: "e.g. 3–7 days for urgent buyers, 2–4 weeks for careful ones",
      },
      {
        id: "q23",
        label: "How long from deposit to full payment and machine collection?",
        type: "text",
        placeholder: "e.g. Usually within 5 business days",
      },
      {
        id: "q24",
        label:
          "What percentage of buyers visit the yard before paying? What percentage buy based on photos and videos alone?",
        type: "textarea",
        placeholder: "e.g. 70% visit yard, 30% buy remotely based on video + photos",
        rows: 2,
      },
      {
        id: "q25",
        label: "What payment methods do buyers prefer?",
        type: "textarea",
        placeholder:
          "Bank transfer, M-Pesa for deposit, cheque, LPO, asset finance?",
        rows: 3,
      },
      {
        id: "q26",
        label: "What is the typical deposit size, and what are the balance terms?",
        type: "textarea",
        placeholder: "e.g. 30% deposit, balance within 7 days of inspection",
        rows: 2,
      },
    ],
  },
  {
    letter: "D",
    title: "Current Marketing",
    description:
      "Where do your sales come from today, and what is working or not working?",
    est: "~8 min",
    questions: [
      {
        id: "q27",
        label:
          "Where do your current buyers come from? Give a rough percentage split.",
        type: "textarea",
        required: true,
        tip: "Example: Meta boost ads 50%, referrals 25%, drive-bys 10%, repeat customers 10%, brokers 5%.",
        placeholder: "Meta boost ads — %, referrals — %, …",
        rows: 3,
      },
      {
        id: "q28",
        label:
          "What is your monthly Meta ad spend, and what is your cost per WhatsApp lead?",
        type: "textarea",
        placeholder: "e.g. KSh 15,000/month, roughly KSh 800 per lead…",
        rows: 2,
      },
      {
        id: "q29",
        label:
          "How many WhatsApp inquiries do you get per week? How many become serious conversations? How many close?",
        type: "textarea",
        required: true,
        placeholder: "e.g. ~20 inquiries / week, 8 serious, 1–2 close",
        rows: 3,
      },
      {
        id: "q30",
        label: "Who currently handles WhatsApp replies, and how fast?",
        type: "textarea",
        placeholder:
          "e.g. Owner handles personally, usually within 1–2 hours during business hours",
        rows: 2,
      },
      {
        id: "whatsapp_setup",
        label: "Current WhatsApp setup",
        type: "radio",
        options: [
          "Single personal WhatsApp number",
          "Single WhatsApp Business account",
          "Multiple WhatsApp Business accounts",
          "WhatsApp Business API (Cloud API or BSP like 360dialog / Wassenger)",
          "Not sure",
        ],
      },
      {
        id: "q31",
        label:
          "Can you share 5–10 actual WhatsApp conversations that ended in a sale, and 5–10 that did not? (Redact buyer phone numbers.)",
        type: "textarea",
        required: true,
        highlight:
          "This is the most valuable data point in the entire questionnaire. It teaches Claude how Windsor's real buyers talk, so the automated system sounds like Windsor, not a robot. Please prioritise this above all other questions.",
        tip: "Paste excerpts here, or describe where you will send them. Redact phone numbers — names are fine.",
        placeholder:
          "Paste sample conversations here, or write: 'Will send via WhatsApp to Fanisi'…",
        rows: 6,
      },
      {
        id: "q32",
        label:
          "What is the role of brokers and middlemen in your current sales? How do you handle them?",
        type: "textarea",
        placeholder:
          "e.g. Brokers bring 20% of leads, we pay 2% commission on close…",
        rows: 3,
      },
    ],
  },
  {
    letter: "E",
    title: "Assets & Access",
    description:
      "These are the raw materials Fanisi will use to build the landing page, outreach messages, and the inbound reply system.",
    est: "~5 min",
    questions: [
      {
        id: "assets_ready",
        label: "Tick what you already have ready",
        type: "checkboxes",
        options: [
          "Professional photos of each current machine (10+ angles per machine)",
          "60–90 second walk-around videos (engine start, hydraulics, hours meter, undercarriage)",
          "Logbook history / inspection reports / service records per machine",
          "Company logo in high resolution",
          "Brand colours and fonts documented",
          "Verified Google Business Profile",
          "Meta Business Manager access (Fanisi will need partner access)",
          "Domain name (windsorfukai.co.ke) with admin access",
          "Customer testimonials in writing or video",
          "Past project photos showing machines on real client sites",
        ],
      },
      {
        id: "q33",
        label: "Existing landing page or website URL (if any)",
        type: "url",
        placeholder: "https://",
      },
      {
        id: "q34",
        label:
          "Who controls the Meta ad account, and can they grant Fanisi partner access?",
        type: "textarea",
        placeholder:
          "Name / role of the person who controls it, and whether partner access is possible…",
        rows: 2,
      },
      {
        id: "q35",
        label: "Preferred email address for the automated outreach system",
        type: "email",
        tip: "We may also set up a dedicated outreach inbox. Example: sales@windsorfukai.co.ke",
        placeholder: "sales@windsorfukai.co.ke",
      },
    ],
  },
  {
    letter: "F",
    title: "Goals & Boundaries",
    description:
      "What does success look like for Windsor, and what should Fanisi never do?",
    est: "~8 min",
    questions: [
      {
        id: "q36",
        label:
          "What is your sales target in units per month for the next 12 months?",
        type: "textarea",
        required: true,
        placeholder:
          "e.g. We want to go from 3 units/month to 8 units/month by December…",
        rows: 3,
      },
      {
        id: "q37",
        label:
          "Is there a deal or client cluster you absolutely cannot afford to miss?",
        type: "textarea",
        tip: '"A specific Chinese contractor mobilising for Phase 2 of a road project in October", or "County road works tenders awarded in Q1".',
        placeholder:
          "Describe any time-sensitive opportunity or buyer cluster…",
        rows: 3,
      },
      {
        id: "q38",
        label:
          "What would make this Fanisi engagement an obvious success in your eyes, 90 days in?",
        type: "textarea",
        required: true,
        placeholder:
          "e.g. 5+ qualified leads per week, 1 extra unit sold per month, WhatsApp no longer overwhelming…",
        rows: 4,
        maxLength: 800,
      },
      {
        id: "q39",
        label:
          "Are there competitors whose marketing or sales tactics you admire or want to beat?",
        type: "textarea",
        placeholder: "Name them and what you admire about their approach…",
        rows: 3,
      },
      {
        id: "q40",
        label: "What are you NOT willing to do?",
        type: "textarea",
        required: true,
        tip: "Examples: undercut on price, sell to brokers, ship outside Nairobi, share buyer data, run ads that overstate machine condition.",
        placeholder: "Hard limits for the engagement…",
        rows: 4,
      },
    ],
  },
  {
    letter: "✓",
    title: "Sign Off",
    description:
      "Thank you for taking the time to fill this in. Once Fanisi has this back, we will book a 60-minute follow-up call to clarify anything that needs more depth, and then begin building. Tutaweza.",
    est: "~1 min",
    questions: [
      {
        id: "signoff_name",
        label: "Your full name",
        type: "text",
        required: true,
        placeholder: "Full name",
      },
      {
        id: "signoff_title",
        label: "Your title / role at Windsor",
        type: "text",
        required: true,
        placeholder: "e.g. Director, Sales Manager",
      },
      {
        id: "signoff_date",
        label: "Today's date",
        type: "text",
        placeholder: "DD / MM / YYYY",
      },
    ],
  },
];

const TOTAL = SECTIONS.length;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function buildPayload(answers: Record<string, string | string[]>) {
  const summaryLines: string[] = [];

  for (const section of SECTIONS) {
    const answeredQs = section.questions.filter(q => {
      const v = answers[q.id];
      return v && !(Array.isArray(v) && !v.length) && !(typeof v === "string" && !v.trim());
    });
    if (!answeredQs.length) continue;

    summaryLines.push(`\n── ${section.letter}: ${section.title} ──\n`);

    for (const q of answeredQs) {
      const v = answers[q.id];
      const text = Array.isArray(v) ? v.join(" | ") : v;
      summaryLines.push(q.label);
      summaryLines.push(text);
      summaryLines.push("");
    }
  }

  return {
    form: "Windsor Fanisi Discovery Questionnaire",
    submitted_at: new Date().toISOString(),
    summary: summaryLines.join("\n"),
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DiscoveryPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [dir, setDir] = useState<"fwd" | "back">("fwd");
  const [animKey, setAnimKey] = useState(0);

  // Restore progress
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const { s, a } = JSON.parse(raw);
        setStep(s ?? 0);
        setAnswers(a ?? {});
      }
    } catch {}
  }, []);

  // Auto-save
  useEffect(() => {
    if (!Object.keys(answers).length) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ s: step, a: answers }));
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      } catch {}
    }, 1200);
    return () => clearTimeout(t);
  }, [answers, step]);

  const set = (id: string, val: string) => {
    setAnswers(p => ({ ...p, [id]: val }));
    setErrors(p => ({ ...p, [id]: false }));
  };

  const toggle = (id: string, opt: string) => {
    setAnswers(p => {
      const cur = Array.isArray(p[id]) ? (p[id] as string[]) : [];
      const next = cur.includes(opt) ? cur.filter(o => o !== opt) : [...cur, opt];
      return { ...p, [id]: next };
    });
    setErrors(p => ({ ...p, [id]: false }));
  };

  const validate = () => {
    const sec = SECTIONS[step];
    const errs: Record<string, boolean> = {};
    for (const q of sec.questions) {
      if (!q.required) continue;
      const v = answers[q.id];
      if (!v || (Array.isArray(v) && !v.length) || (typeof v === "string" && !v.trim())) {
        errs[q.id] = true;
      }
    }
    setErrors(errs);
    return !Object.keys(errs).length;
  };

  const goNext = () => {
    if (!validate()) return;
    setDir("fwd");
    setAnimKey(k => k + 1);
    setStep(s => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setDir("back");
    setAnimKey(k => k + 1);
    setStep(s => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload(answers)),
      });
    } catch {}
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (done) {
    return (
      <div className={styles.page}>
        <div className={styles.fanisiHeader}>
          <img src="/fanisi-logo.png" alt="Fanisi" className={styles.fanisiLogo} />
          <div className={styles.colorStripe} />
        </div>
        <div className={styles.success}>
          <div className={styles.successIcon}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="42" height="42" stroke="#F7941D" strokeWidth="1.5" />
              <path d="M11 22l8 8 14-14" stroke="#F7941D" strokeWidth="2" strokeLinecap="square" />
            </svg>
          </div>
          <h1 className={styles.successTitle}>Questionnaire Received</h1>
          <p className={styles.successBody}>
            Thank you. Once Fanisi has this back, we will book a 60-minute follow-up call to clarify anything that needs more depth — and then begin building.
          </p>
          <p className={styles.successTagline}>Tutaweza.</p>
          <a href="/" className={styles.successLink}>← Back to Windsor</a>
        </div>
      </div>
    );
  }

  const sec = SECTIONS[step];
  const isLast = step === TOTAL - 1;
  const progress = (step / (TOTAL - 1)) * 100;

  return (
    <div className={styles.page}>
      {/* Fanisi branding header */}
      <div className={styles.fanisiHeader}>
        <img src="/fanisi-logo.png" alt="Fanisi" className={styles.fanisiLogo} />
        <div className={styles.colorStripe} />
      </div>

      {/* Progress bar */}
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      {/* Meta row */}
      <div className={styles.meta}>
        <span className={styles.metaTag}>Fanisi × Windsor — Discovery Questionnaire</span>
        <span className={styles.metaStep}>
          {step + 1} <span className={styles.metaOf}>of</span> {TOTAL}
        </span>
      </div>

      {/* Animated section */}
      <div
        key={animKey}
        className={`${styles.section} ${dir === "fwd" ? styles.animFwd : styles.animBack}`}
      >
        {/* Section head */}
        <div className={styles.sHead}>
          <div className={styles.sLetter} aria-hidden="true">{sec.letter}</div>
          <div className={styles.sHeadText}>
            <h1 className={styles.sTitle}>{sec.title}</h1>
            <p className={styles.sDesc}>{sec.description}</p>
            <span className={styles.sEst}>{sec.est}</span>
          </div>
        </div>

        {/* Questions */}
        <div className={styles.qList}>
          {sec.questions.map((q, i) => (
            <QuestionBlock
              key={q.id}
              q={q}
              value={answers[q.id]}
              error={!!errors[q.id]}
              index={i}
              onChange={set}
              onToggle={toggle}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className={styles.navRow}>
          {step > 0 && (
            <button onClick={goBack} className={styles.btnBack}>← Back</button>
          )}
          <div className={styles.navRight}>
            {!isLast ? (
              <button onClick={goNext} className={styles.btnNext}>
                Continue <span aria-hidden="true">→</span>
              </button>
            ) : (
              <button onClick={submit} className={styles.btnSubmit} disabled={submitting}>
                {submitting ? "Submitting…" : "Submit Questionnaire"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Autosave toast */}
      <div className={`${styles.toast} ${saved ? styles.toastVisible : ""}`} aria-live="polite">
        Progress saved
      </div>
    </div>
  );
}

// ─── Question block ───────────────────────────────────────────────────────────
function QuestionBlock({
  q,
  value,
  error,
  index,
  onChange,
  onToggle,
}: {
  q: Q;
  value: string | string[] | undefined;
  error: boolean;
  index: number;
  onChange: (id: string, val: string) => void;
  onToggle: (id: string, opt: string) => void;
}) {
  const str = typeof value === "string" ? value : "";
  const arr = Array.isArray(value) ? value : [];

  return (
    <div
      className={`${styles.qBlock} ${error ? styles.qBlockError : ""}`}
      style={{ animationDelay: `${index * 55}ms` }}
    >
      {/* Label */}
      <label className={styles.qLabel} htmlFor={q.id}>
        {q.label}
        {q.required && <span className={styles.qRequired} aria-label="required"> *</span>}
      </label>

      {/* Highlight banner for priority questions */}
      {q.highlight && (
        <div className={styles.qHighlight}>
          <span className={styles.qHighlightDot} aria-hidden="true" />
          {q.highlight}
        </div>
      )}

      {/* Tip */}
      {q.tip && <p className={styles.qTip}>{q.tip}</p>}

      {/* Textarea */}
      {q.type === "textarea" && (
        <div className={styles.inputWrap}>
          <textarea
            id={q.id}
            className={`${styles.textarea} ${error ? styles.inputError : ""}`}
            rows={q.rows ?? 4}
            placeholder={q.placeholder}
            value={str}
            onChange={e => onChange(q.id, e.target.value)}
            maxLength={q.maxLength}
          />
          {q.maxLength && (
            <span className={styles.charCount}>
              {str.length} / {q.maxLength}
            </span>
          )}
        </div>
      )}

      {/* Text / number / url / email */}
      {(q.type === "text" || q.type === "number" || q.type === "url" || q.type === "email") && (
        <input
          id={q.id}
          type={q.type}
          className={`${styles.input} ${error ? styles.inputError : ""}`}
          placeholder={q.placeholder}
          value={str}
          onChange={e => onChange(q.id, e.target.value)}
        />
      )}

      {/* Radio */}
      {q.type === "radio" && q.options && (
        <div className={styles.radioGroup}>
          {q.options.map(opt => {
            const checked = str === opt;
            return (
              <label key={opt} className={`${styles.radioOption} ${checked ? styles.radioChecked : ""}`}>
                <input
                  type="radio"
                  name={q.id}
                  value={opt}
                  checked={checked}
                  onChange={() => onChange(q.id, opt)}
                  className={styles.hiddenInput}
                />
                <span className={styles.radioDot} aria-hidden="true" />
                {opt}
              </label>
            );
          })}
        </div>
      )}

      {/* Checkboxes */}
      {q.type === "checkboxes" && q.options && (
        <div className={`${styles.checkboxGrid} ${error ? styles.inputError : ""}`}>
          {q.options.map(opt => {
            const checked = arr.includes(opt);
            return (
              <label key={opt} className={`${styles.checkboxOption} ${checked ? styles.checkboxChecked : ""}`}>
                <input
                  type="checkbox"
                  value={opt}
                  checked={checked}
                  onChange={() => onToggle(q.id, opt)}
                  className={styles.hiddenInput}
                />
                <span className={styles.checkBox} aria-hidden="true">
                  {checked && (
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1 4.5L3.5 7 8 1.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  )}
                </span>
                {opt}
              </label>
            );
          })}
        </div>
      )}

      {/* Error message */}
      {error && (
        <p className={styles.qErrorMsg} role="alert">This field is required.</p>
      )}
    </div>
  );
}
