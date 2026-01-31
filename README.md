# Sharma Himalayan Cabs

Production-ready Next.js (App Router) frontend for taxi & tour services in Himachal and North India.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Pages

- `/` — Home (Hero, Request Cab, Popular Routes, Tour Packages, Reviews, Why Choose Us)
- `/services` — Services
- `/about` — About
- `/contact` — Contact
- `/privacy-policy` — Privacy Policy

## Config

- Replace phone/WhatsApp placeholders in `Footer`, `HeroSection`, `RequestCabSection`, and `ContactForm` (or add a shared `lib/constants.ts`).
- Replace Google review URL in `ReviewsSection` with your Google Business Place ID.
- Set `NEXT_PUBLIC_SITE_URL` for production metadata/OG.

## Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS, dark/light theme.
