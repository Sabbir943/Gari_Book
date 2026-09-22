# Garibook — Landing Page

Responsive marketing/landing page for **Garibook**, an intercity car rental service for Bangladesh. Built with React 19, Vite 8, Tailwind CSS v4, and GSAP.

> **Repo layout:** the app lives in `my-react-app/`. Run every npm command from inside that folder — there is no `package.json` at the repository root.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Page Sections](#page-sections)
- [Animations & Reduced Motion](#animations--reduced-motion)
- [Data Layer](#data-layer)
- [Conventions](#conventions)
- [Functional QA Checklist](#functional-qa-checklist)
- [Deployment](#deployment)

---

## Tech Stack

| Layer | Choice |
| --- | --- |
| UI | React 19 (plain JSX, no TypeScript) |
| Build | Vite 8 (`@vitejs/plugin-react`) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Animation | GSAP 3 + `ScrollTrigger` |
| Icons | lucide-react |
| Linting | ESLint 10 (flat config: `eslint.config.js`) |
| Package manager | npm (`package-lock.json` — do not switch to pnpm/yarn) |

---

## Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm 10+

### Install & run

```bash
cd my-react-app
npm install
npm run dev
```

Dev server starts with HMR at **http://localhost:5173** (Vite default).

### Production build

```bash
npm run build     # outputs to dist/
npm run preview   # serves the production build locally
```

---

## Scripts

All commands run from `my-react-app/`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start dev server with HMR |
| `npm run lint` | ESLint check — **the only verification step; run before finishing** |
| `npm run build` | Production bundle to `dist/` |
| `npm run preview` | Serve the production build locally |

There is **no** test runner, typecheck, formatter, or CI workflow — don't invent one.

---

## Project Structure

```
my-react-app/
├── index.html                 # HTML shell + favicon + meta
├── package.json
├── eslint.config.js           # Flat ESLint config
├── vite.config.js             # React + Tailwind plugins
├── public/                    # Static assets (favicon.svg, icons.svg)
└── src/
    ├── main.jsx               # Entry → mounts <App />
    ├── App.jsx                # Composes all page sections
    ├── App.css                # @import "tailwindcss";
    ├── index.css              # Global rules (reduced-motion query)
    ├── assets/                # Local images (hero.svg fallback, …)
    ├── data/
    │   └── homeData.js        # All copy, links, images (single source)
    ├── utils/
    │   └── motion.js          # prefersReducedMotion() helper
    └── component/
        ├── Header/NavBar.jsx
        ├── Hero/Hero.jsx
        ├── BookingForm/BookingForm.jsx
        ├── Stats/Stats.jsx
        ├── Services/Services.jsx
        ├── PromoSection/      # PromoSection, AppPromo, DriverPromo
        ├── JourneySteps/
        ├── UseCases/
        ├── Testimonials/
        ├── Blogs/
        └── Footer/Footer.jsx
```

---

## Page Sections

Rendered in order by `App.jsx`:

1. **Navbar** — sticky header, desktop links + animated mobile menu (GSAP open/close, scroll lock, Escape to close)
2. **Hero** — headline, trust badges, floating stat cards, booking form
3. **Stats** — animated count-up figures (ScrollTrigger)
4. **Services** — 4 service cards
5. **PromoSection** — alternating Corporate / Garibook Club / VMS blocks (`#business`, `#club`, `#vms`)
6. **JourneySteps** — 3-step “how it works”
7. **UseCases** — Airport / Family / Long-tour cards
8. **AppPromo** — dark app-download section (App Store / Google Play)
9. **DriverPromo** — driver recruitment CTA (`#driver-signup`)
10. **Testimonials** — passenger reviews
11. **Blogs** — 3 article cards (`#blog`)
12. **Footer** — links, contact (`#contact`), newsletter, back-to-top

---

## Animations & Reduced Motion

### The two core GSAP patterns

1. **Hero entrance** (`src/component/Hero/Hero.jsx`)
   Timeline reveals badge → heading → subtext → trust tags → booking panel → floating cards (staggered). Runs once on mount inside `gsap.context()` so it cleans up on unmount.

2. **Scroll reveals** (Services, Stats, UseCases, JourneySteps, Promo blocks, AppPromo, DriverPromo, Testimonials, Blogs, Footer)
   `gsap.from(...)` with `ScrollTrigger` (`start: "top 75%"`–`"top 85%"`) and `stagger`, scoped via `gsap.context(ref)`. Tweens use `clearProps: "all"` so hover/CSS transitions still work afterward. Completed triggers do not replay.

### Reduced motion

Both layers are required — CSS alone cannot stop JS-driven GSAP:

- **CSS:** `src/index.css` contains the `@media (prefers-reduced-motion: reduce)` block (kills CSS animations/transitions/smooth-scroll).
- **JS:** `src/utils/motion.js` → `prefersReducedMotion()` guards every GSAP effect with an early return. Content renders fully visible; Stats show final numbers without counting; the mobile menu opens/closes instantly but stays functional.

---

## Data Layer

All user-facing copy, links, and images live in **`src/data/homeData.js`**:

```js
export const statsData = [...];
export const servicesData = [...];
export const promoSectionsData = [...];
export const journeyStepsData = [...];
export const useCasesData = [...];
export const appPromoData = {...};
export const driverPromoData = {...};
export const testimonialsData = [...];
export const blogsData = [...];
```

Edit content there — not inside components.

**Images:** remote URLs (Unsplash) with a local `onError` fallback to `src/assets/hero.svg` on every `<img>`, so a failed network image never renders broken.

---

## Conventions

- **No TypeScript** — plain JS/JSX only; React Compiler intentionally disabled (see Vite template notes).
- **Lint before you finish:** `npm run lint` (unused imports and `react-hooks` rules are errors).
- **Buttons:** always `type="button"` unless the button is a form submitter; forms call `e.preventDefault()` — nothing should reload the page.
- **Sticky-header anchors:** sections that are nav targets carry `id` + `scroll-mt-24`.
- **GSAP:** register `ScrollTrigger` once per component; scope selectors inside `gsap.context(..., ref)`; return `ctx.revert()`; guard with `prefersReducedMotion()`.
- **Styling:** Tailwind utility classes inline; emerald/teal palette; shared patterns — eyebrow badge, gradient headings, `max-w-[1200px]` container, background glow blobs, top accent hover bar on cards.
- **Git:** the repo root is the home directory (`C:\Users\TECH MOON`), not the project folder. Never `git add .` from the root — stage explicit paths under `Desktop/gari_book/` only.

---

## Functional QA Checklist

Use before submitting/reviewing:

- [ ] Page loads with **no console errors**
- [ ] Header navigation scrolls to real sections; mobile menu opens, closes (toggle/link/Escape), and locks body scroll
- [ ] Booking form controls are interactive (trip tabs, inputs, date/time); submit shows inline status — **no alert, no reload**
- [ ] Buttons/links do not accidentally submit or reload the page (`type="button"`, `preventDefault`)
- [ ] Both GSAP animations (hero entrance + scroll reveals) run once and do not replay strangely on scroll-back
- [ ] `prefers-reduced-motion: reduce` disables motion but leaves all content/interactions usable
- [ ] No missing images or broken asset paths (favicon, local assets, `onError` fallbacks)

**Verification commands:**

```bash
npm run lint
npm run build
```

---

## Deployment

```bash
cd my-react-app
npm run build
```

Upload the contents of **`dist/`** to any static host:

- [Vercel](https://vercel.com) — build command `npm run build`, output `dist`, root directory `my-react-app`
- [Netlify](https://netlify.com) — build `npm run build`, publish `my-react-app/dist`
- GitHub Pages / any static file server

---

## Author

**ENDOW TECH** — Frontend Intern Assessment

---

## License

All rights reserved — assessment/portfolio project.
