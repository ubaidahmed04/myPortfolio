# Ubaid Ahmed — Portfolio (Redesigned)

A modernized, production-ready rebuild of the original Next.js portfolio. All
original content (bio, experience, education, projects, socials, resume) is
preserved — only the design system, component architecture, and code quality
have changed.

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Formik + Yup (contact form validation)
- react-github-calendar (GitHub activity)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What changed

- **Design system**: new palette (`#19183B` primary, `#708993` secondary,
  `#A1C2BD` accent, `#E7F2EF` paper), dark theme by default, Space Grotesk +
  Inter + JetBrains Mono type system, glassmorphism cards, soft glows.
- **Signature element**: an animated "terminal" card in the hero that types
  out your identity and stats — a nod to the developer subject matter instead
  of a generic gradient blob.
- **Architecture**: content extracted into `src/data/portfolio.js` (single
  source of truth), one component per section, no duplicate/dead code, no
  inline styles, no unused state.
- **Removed**: the Redux theme-toggle store, Material Tailwind, the
  react-three-fiber 3D computer model, and MagicUI marquee — all replaced
  with lighter, purpose-built components using Tailwind + Framer Motion. This
  cuts the dependency footprint significantly and removes render-blocking 3D
  work from the contact section.
- **Accessibility**: semantic sectioning, visible focus rings, reduced-motion
  support, alt text on all images, keyboard-operable nav and menu.
- **Performance**: `next/image` everywhere, no unnecessary client components
  (only interactive pieces are `"use client"`).

## Content notes

Two placeholder/education entries from the original codebase (`Experience.jsx`,
which wasn't actually rendered on the live site) contained generic filler text
unrelated to your real education. Those were replaced with clean entries using
only the real institution names and degree levels you provided (SMIU —
Graduation, Adamjee Govt. Science College — Intermediate). Everything else —
your bio, your four NubitSoft roles and their responsibilities, your four
projects, and your contact/social links — is carried over verbatim.
