# CLAUDE.md — Windsor Fu Kai Machinery Landing Page

## Always Do First
Read `.claude/skills/frontend-design/SKILL.md` before writing any frontend code. No exceptions.

---

## Tech Stack
- Next.js (App Router)
- CSS Modules
- Fonts via `next/font/google`
- Images via `next/image`
- One `layout.tsx` for nav + footer — never repeat per page

---

## This Project
Used heavy machinery dealer targeting Kenyan contractors. The customer is a procurement manager or site contractor spending KES 2m–8m+ on equipment. They are skeptical. They've been burned before. The entire page must make them feel: safe, confident, and in control.

This is not a luxury fashion brand. The aesthetic is **industrial authority** — think Caterpillar, not a startup. Dark, heavy, trustworthy. The frontend-design skill handles all visual decisions — commit to a bold direction and execute it with craft.

---

## Page 1: Landing Page (`/`)

Build one section per prompt. Screenshot before moving on. Never regenerate an approved section.

**Sections in order:**
1. Nav — logo left, one CTA right ("Book a Call"), no other links
2. Hero — headline, 3 trust bullets, primary CTA + WhatsApp CTA
3. Current High-Demand Machines — 3 placeholder machine cards (brand / model / year / hours / location / price range)
4. How Buying Works — 4 steps: Call → Inspection → Deposit → Delivery
5. Inspection & Verification Checklist — what gets checked (engine, hydraulics, undercarriage, hours, paperwork)
6. Delivery Coverage — Kenya + East Africa regions (text-based, no map API)
7. FAQ accordion — answers to the 5 objections below
8. Final CTA — headline + WhatsApp button + Book Call button
9. Footer — company name, location, phone, email

---

## Page 2: Equipment Match Form (`/match`)

Build after landing page is fully approved.

1. Minimal header — logo only
2. One-line intro explaining what happens after submission
3. The 8-question form (see below)
4. Submit → inline thank-you + WhatsApp follow-up link (no separate page)

---

## Copy — Use This Verbatim

**Headline options:**
- "Contractor-Grade Used Equipment — Verified Condition, Fair Pricing, Fast Delivery"

**Subheadline:**
"We help contractors choose the right machine, verify condition, and deliver quickly — so you finish projects on time."

**Primary CTA:** "Book a 15-Minute Equipment Match Call"
**Secondary CTA:** "Request Current Stock + Prices on WhatsApp"

---

## FAQ — Answer These 5 Objections
1. "How do I know it's not a bad machine?"
2. "Can you prove hours and condition?"
3. "What if I need parts after buying?"
4. "Can you deliver upcountry or cross-border?"
5. "Why is your price higher than Facebook?"

---

## WhatsApp
Must appear in: hero, final CTA section, and sticky on mobile. Replace `[NUMBER]` with the real number when provided: `https://wa.me/[+1 4385287342]`

---

## Interactions
These are non-negotiable. A static page will not convert contractors — every interaction should feel considered and purposeful, not decorative.

**Scroll behaviour**
- Every section fades in and translates up slightly as it enters the viewport (IntersectionObserver, not a library)
- The 4-step process animates each step sequentially with a short delay between them
- Machine cards stagger in one by one, not all at once

**Navigation**
- Nav becomes solid/darker on scroll — transparent at the top
- The "Book a Call" CTA in the nav subtly highlights after the user scrolls past the hero

**FAQ accordion**
- Smooth open/close with height transition
- Only one item open at a time
- Chevron rotates on open — CSS transform only

**Machine cards**
- Subtle lift on hover (transform: translateY only, no box-shadow change)
- "View Details" or "Enquire" button slides into view on hover

**WhatsApp button**
- Sticky on mobile, always in bottom-right corner
- Single subtle pulse animation on page load to draw attention, then stops — never loops continuously

**Form (page 2)**
- Each field has a clear focus state — visible border change, no default browser outline
- Inline validation — fields show a subtle error state if left empty on submit attempt
- Submit button shows a loading state while "submitting" then transitions to thank-you message
- Thank-you state slides in smoothly, does not cause a page jump

**General rules for all animations**
- Only animate `transform` and `opacity` — never `width`, `height`, or `margin`
- Never use `transition-all`
- Duration: 400–600ms for reveals, 200ms for hover states
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` — smooth and professional, never bouncy
- No animation should loop unless it serves a clear purpose (the WhatsApp pulse is a one-shot)

---

## Hard Rules
- One section per prompt
- Screenshot and approve before next section
- Never use `transition-all`
- Never center-align body text
- The form is sacred — never simplify or replace it