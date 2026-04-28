# OptiWealth

**From expense tracking to predictive financial strategy.**

OptiWealth is an AI-powered predictive financial strategy app by EFN Corp, built for Indonesian professionals aged 20–40 who want to know what's coming — not just what happened.

---

## Overview

This repository contains the marketing landing page for OptiWealth. It is a fully static, single-page React application with no backend dependency.

**Live sections:**
- Hero with a Financial Health Score dashboard mockup
- Problem statement (why standard finance apps fail)
- Feature overview — Opti-Sync, Forecast Copilot, Nudge Engine, Wealth Advisory Pro
- 3-step onboarding flow
- Stats / social proof strip
- Pricing (Free vs Premium)
- 10-month implementation roadmap
- Email waitlist CTA
- Footer with social links

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 |
| Bundler | Vite 4 |
| Styling | Tailwind CSS 3 |
| Animations | IntersectionObserver (custom hook) |
| Fonts | Inter via Google Fonts |

No external UI component libraries are used. All components are built from scratch with Tailwind utility classes.

---

## Getting Started

**Requirements:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Production build → dist/
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
src/
├── App.jsx                     # Root component — section order
├── main.jsx                    # ReactDOM entry point
├── index.css                   # Tailwind directives + fade-in-up animation
├── hooks/
│   └── useScrollAnimation.js   # IntersectionObserver scroll fade hook
└── components/
    ├── Navbar.jsx              # Sticky navbar with mobile hamburger
    ├── Hero.jsx                # Headline + dashboard mockup card
    ├── Problem.jsx             # 3-card problem section
    ├── Features.jsx            # 2×2 feature grid with tier badges
    ├── HowItWorks.jsx          # 3-step horizontal flow
    ├── Stats.jsx               # Dark green statistics strip
    ├── Pricing.jsx             # Free vs Premium pricing cards
    ├── Timeline.jsx            # 10-month roadmap
    ├── CTABanner.jsx           # Email waitlist form
    ├── Footer.jsx              # Links, social icons, copyright
    └── MobileFloatingCTA.jsx   # Fixed bottom bar (mobile only)
```

---

## Brand

| Token | Hex | Tailwind |
|---|---|---|
| Primary green | `#4CAF50` | `green-500` |
| Dark green | `#2E7D32` | `green-800` |
| Heading / dark bg | `#1B5E20` | `green-900` |
| Light background tint | `#F1F8E9` | `green-50` |

---

## Features

### Opti-Sync Dashboard — Free
Connects BCA, Mandiri, GoPay, and OVO into a single view via Open Finance APIs.

### Forecast Copilot — AI-powered
Predicts upcoming cash flow shortages before they happen using behavioral spending analysis.

### The Nudge Engine — Smart alerts
Gamified alerts to prevent impulse spending and auto-routes spare change into savings.

### Wealth Advisory Pro — Premium
Personalized investment recommendations in SBN and local mutual funds based on predicted monthly surplus.

---

## Pricing

| Plan | Price | Key Features |
|---|---|---|
| Free | Rp 0 / month | Opti-Sync Dashboard, basic analytics, limited forecasting |
| Premium | Rp 89,000 / month | Everything in Free + advanced scenario modeling, Nudge Engine, Wealth Advisory Pro |

---

## Roadmap

| Period | Milestone |
|---|---|
| Month 1–2 | Secure Data Foundation |
| Month 2–3 | Behavioral Financial Twin |
| Month 3–5 | Predictive Engine |
| Month 5–6 | UX Integration |
| Month 6–7 | Beta Launch |
| Month 7–8 | Commercialization |
| Month 8–10 | Autonomous Orchestration |

---

## License

© 2026 EFN Corp. All rights reserved.
