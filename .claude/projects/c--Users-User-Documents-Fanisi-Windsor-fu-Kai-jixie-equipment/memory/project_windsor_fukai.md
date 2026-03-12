---
name: Windsor Fu Kai Website Project
description: Next.js landing page for Windsor Fu Kai Jixie Equipment — used heavy machinery dealer Kenya
type: project
---

## Project: Windsor Fu Kai Jixie Equipment Website

**Status**: Landing page built and running on localhost:3002 (port 3000 taken by Marshalls Security project)

**Project location**: `C:\Users\User\Documents\Fanisi\Windsor fu Kai jixie equipment\`
- Next.js App Router project at root (not in subfolder)
- `windsor-fukai-temp/` subfolder exists but is not the active project — ignore it
- Dev server runs on port 3002 (3000 taken by another project)
- Start: `cd` to project root, `npm run dev`

**Business context**:
- Client: Windsor Fu Kai Jixie Equipment (Kevin, director)
- Business: Used heavy machinery dealer — Kenya & East Africa
- Target: Contractors, quarry companies, road works firms, plant hire businesses
- Core promise: "Verified used heavy machinery — inspection + paperwork support + after-sale guidance"
- Primary CTA: "Book a 15-Min Equipment Match Call"
- Secondary CTA: WhatsApp

**What's been built**:
- Full single-page landing page with 7 sections (all from LAPS strategy PDF)
- Sections: Hero, Trust bar, Current Stock (6 machines), How It Works (4 steps), Verification checklist, Coverage map, FAQ accordion, 3-step qualification form (8 questions), Final CTA strip, Footer
- Custom SVG logo (W mark + "WINDSOR FU KAI" / "JIXIE EQUIPMENT")
- Qualification form routes hot/warm/cold leads
- WhatsApp CTAs throughout

**Design tokens in use**:
- color-primary: #1C1612, color-accent: #8B6B5E, color-surface: #F5F2EE
- font-display: Cormorant Garamond, font-body: DM Sans
- border-radius: 0px, dark moody luxury aesthetic

**Key files**:
- `src/app/page.tsx` — main landing page (all sections)
- `src/app/page.module.css` — all page CSS
- `src/app/layout.tsx` — root layout with Nav + Footer
- `src/app/globals.css` — CSS variables, grain texture
- `src/components/Nav.tsx` + `Nav.module.css`
- `src/components/Footer.tsx` + `Footer.module.css`
- `next.config.ts` — allows placehold.co remote images
- `screenshot.mjs` — Puppeteer screenshot tool
- `temporary screenshots/` — screenshot outputs

**Strategy reference**: `CUSTOM LAPS STRATEGY FOR Windsor fu Kai jixie equipment.pdf`
