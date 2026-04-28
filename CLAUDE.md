# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

## Stack

- **React 18** (JSX, hooks) + **Vite 4** (bundler, dev server)
- **Tailwind CSS 3** for all styling — no external UI component libraries
- Node 18 is the runtime; `"type": "module"` is set in package.json so all configs use ESM `export default`

## Architecture

Single-page landing for OptiWealth (AI-powered predictive finance app by EFN Corp, targeting Indonesian professionals 20–40).

```
src/
  App.jsx                      # Root — imports and orders all page sections
  main.jsx                     # ReactDOM.createRoot entry
  index.css                    # Tailwind directives + .fade-in-up / .visible animation classes
  hooks/
    useScrollAnimation.js      # IntersectionObserver hook; adds .visible to .fade-in-up elements
  components/
    Navbar.jsx                 # Sticky navbar, mobile hamburger menu
    Hero.jsx                   # Headline + circular gauge + mini bar chart mockup
    Problem.jsx                # 3-card problem section (green left-border accent cards)
    Features.jsx               # 2×2 feature grid (green top-bar cards + tier badges)
    HowItWorks.jsx             # 3-step horizontal flow with connecting line
    Stats.jsx                  # Dark green stats strip (#1B5E20 bg)
    Pricing.jsx                # Free vs Premium cards; Premium uses dark green bg
    Timeline.jsx               # 10-month horizontal roadmap (scrollable on mobile)
    CTABanner.jsx              # Email waitlist form with local submitted state
    Footer.jsx                 # Logo, nav links, social icons, copyright
    MobileFloatingCTA.jsx      # Fixed bottom bar (md:hidden) — "Get Early Access"
```

## Scroll animations

All animated elements use the pattern:
```jsx
const ref = useScrollAnimation()
<div ref={ref} className="fade-in-up" style={{ transitionDelay: '100ms' }}>
```
`useScrollAnimation` attaches an `IntersectionObserver` that adds the `.visible` class once the element enters the viewport. The CSS transition is defined in `index.css`. **Never call hooks inside `.map()` — always extract a named sub-component when each list item needs its own ref.**

## Brand tokens

| Token | Value |
|---|---|
| Primary green | `#4CAF50` (Tailwind `green-500`) |
| Dark green | `#2E7D32` (Tailwind `green-800`) |
| Heading green | `#1B5E20` (Tailwind `green-900`) |
| Light bg tint | `#F1F8E9` (Tailwind `green-50`) |

All colors are extended in `tailwind.config.js` so standard Tailwind `green-*` utilities map to the brand palette.
