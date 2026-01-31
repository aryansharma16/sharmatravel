# Sharma Himalayan Cabs

Production-ready Next.js (App Router) frontend for taxi & tour services in Himachal and North India.

## Setup

```bash
npm install
cp .env.example .env
npm run db:push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Database & API

- **Stack:** Prisma + SQLite (file: `prisma/dev.db`).
- **Schema:** `prisma/schema.prisma` — `CabRequest` (Request a Cab), `ContactEnquiry` (Contact form).
- **APIs:**
  - `POST /api/request-cab` — name, phone (required), route, date, serviceType, carTypes, query. Validates and saves to DB.
  - `POST /api/contact` — name, phone (required), message (required), email (optional). Validates and saves to DB.
- **Env:** `DATABASE_URL` in `.env` (see `.env.example`).
- **Commands:** `npm run db:push` (create/migrate DB), `npm run db:studio` (Prisma Studio).

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

- Next.js 14 (App Router), TypeScript, Tailwind CSS, Prisma + SQLite, dark/light theme.
