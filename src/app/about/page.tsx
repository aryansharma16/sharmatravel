import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getVehiclesSorted } from '@/utils/vehicles';
import { YOUTUBE_URL, INSTAGRAM_URL } from '@/lib/social';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Sharma Himalayan Cabs is run by Pankaj Sharma. Experienced taxi and tour services in Himachal Pradesh — Dalhousie, Dharamshala, Manali, and North India.',
  keywords: [
    'Sharma Himalayan Cabs',
    'Pankaj Sharma',
    'about Sharma Himalayan Cabs',
    'Himachal taxi',
    'Himachal cab',
    'Dalhousie taxi',
    'Dharamshala cab',
    'Manali taxi',
    'taxi company Himachal',
    'tour operator Himachal',
    'North India taxi',
    'reliable taxi service',
    'local drivers Himachal',
    'hotel assistance Himachal',
    'about us',
  ],
};

const values = [
  'Experienced, local drivers with deep knowledge of the terrain, weather, and routes',
  'Strong links with hotel and shop owners — we can assist with stays at the best prices',
  'Cooperative and supportive service — we help with luggage and route suggestions',
  'Flexible trips — adjustable itineraries and timings',
  'Clean, well-maintained vehicles',
  'On-time, reliable pickups and drop-offs',
];

export default function AboutPage() {
  const vehicles = getVehiclesSorted().slice(0, 6);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900/30">
      {/* Hero — gradient only for reliability */}
      <section className="bg-gradient-to-br from-slate-800 to-primary-800 px-4 py-14 text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Sharma Himalayan Cabs
          </h1>
          <p className="mt-4 text-slate-200">
            Reliable taxi and tour services across Himachal Pradesh and North
            India. We specialise in point-to-point taxi hire and tour packages
            to Dalhousie, Dharamshala, Manali, Shimla, and beyond.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        {/* Owner */}
        <section aria-labelledby="owner-heading" id="owner">
          <Card className="border-slate-200 dark:border-slate-700">
            <CardContent className="p-6 sm:p-7">
              <h2
                id="owner-heading"
                className="text-lg font-semibold text-slate-900 dark:text-white"
              >
                Owner
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                The business is owned and operated by{' '}
                <strong className="text-slate-900 dark:text-white">
                  Pankaj Sharma
                </strong>
                , who is from Dalhousie. With local knowledge and a focus on
                customer satisfaction, we aim to make your journey safe,
                comfortable, and on time.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Where We Operate — Dalhousie base, North India service */}
        <section
          className="mt-10"
          aria-labelledby="location-heading"
          id="location"
        >
          <h2
            id="location-heading"
            className="text-lg font-semibold text-slate-900 dark:text-white"
          >
            Where We Operate
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            We are based in <strong className="text-slate-900 dark:text-white">Dalhousie</strong> — our
            main location and the place from where we operate. The owner is from
            Dalhousie, so you get genuine local expertise. We can provide taxi
            and tour services anywhere in North India, especially:
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-slate-600 dark:text-slate-400 sm:gap-x-6">
            <li>Delhi</li>
            <li>Himachal Pradesh (HP)</li>
            <li>Jammu &amp; Kashmir (J&amp;K)</li>
            <li>Uttarakhand (UK)</li>
            <li>Punjab</li>
            <li>Chandigarh</li>
            <li>Haryana</li>
          </ul>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Whether you need a cab from Delhi to Dalhousie, Manali to Dharamshala,
            or anywhere in between, we&apos;re here to help.
          </p>
        </section>
      </div>

      {/* Dalhousie map — full width, like reference with location overlay */}
      <section className="mt-4 w-full px-4 sm:px-6 lg:px-8" aria-label="Map: Dalhousie location">
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="relative aspect-[16/9] w-full bg-slate-200 dark:bg-slate-700 min-h-[280px] sm:aspect-[2/1] sm:min-h-[360px]">
              <iframe
                title="Dalhousie, Himachal Pradesh — our base location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27261.5!2d75.9462!3d32.532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDalhousie%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
              {/* Location overlay — like reference (Jalandhar / Punjab box) */}
              <div className="absolute left-4 top-4 z-10 rounded-lg border border-slate-200/90 bg-white/95 px-4 py-3 shadow-md backdrop-blur dark:border-slate-600 dark:bg-slate-800/95">
                <p className="text-base font-semibold text-slate-900 dark:text-white">Dalhousie</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Himachal Pradesh</p>
                <div className="mt-3 flex flex-col gap-1.5 text-sm">
                  <a
                    href="https://www.google.com/maps/dir//Dalhousie,+Himachal+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary-600 hover:underline dark:text-primary-400"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Directions
                  </a>
                  <a
                    href="https://www.google.com/maps/search/Dalhousie,+Himachal+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-700 hover:underline dark:text-slate-300"
                  >
                    View larger map
                  </a>
                </div>
              </div>
            </div>
          </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        {/* Hotels & Stays */}
        <section
          className="mt-10"
          aria-labelledby="hotels-heading"
          id="hotels"
        >
          <Card className="border-slate-200 dark:border-slate-700">
            <CardContent className="p-6 sm:p-7">
              <h2
                id="hotels-heading"
                className="text-lg font-semibold text-slate-900 dark:text-white"
              >
                Hotels & Stays
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Our drivers have strong links with hotel and shop owners across
                Himachal and North India. We can assist you with stays at the
                best prices possible because of these connections — whether you
                need a night in Dalhousie, Dharamshala, Manali, or elsewhere,
                just ask and we&apos;ll help you find a good deal.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What We Stand For */}
        <section
          className="mt-10"
          aria-labelledby="values-heading"
          id="values"
        >
          <h2
            id="values-heading"
            className="text-lg font-semibold text-slate-900 dark:text-white"
          >
            What We Stand For
          </h2>
          <ul className="mt-4 space-y-2">
            {values.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-slate-600 dark:text-slate-400"
              >
                <span
                  className="mt-1.5 h-4 w-4 shrink-0 rounded-full bg-primary-500"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Our Fleet — grid, Next/Image for reliable loading */}
        <section
          className="mt-12"
          id="our-fleet"
          aria-labelledby="fleet-heading"
        >
          <h2
            id="fleet-heading"
            className="text-lg font-semibold text-slate-900 dark:text-white"
          >
            Our Fleet
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Sedans, SUVs, Innova, and Tempo Traveller. See all on our Services
            page.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {vehicles.map((v) => (
              <Link
                key={v.id}
                href="/services#our-fleet"
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.image}
                    alt={v.alt}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <span className="text-sm font-medium text-slate-900 dark:text-white line-clamp-2">
                    {v.shortName ?? v.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">
                    {v.capacity}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-5">
            <Button href="/services#our-fleet" variant="outline" className="text-sm">
              View all vehicles
            </Button>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
            <Button href="/services" variant="outline">
              Our Services
            </Button>
            <Button href={INSTAGRAM_URL} external variant="outline">
              Instagram
            </Button>
            <Button href={YOUTUBE_URL} external variant="outline">
              YouTube
            </Button>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Follow us on{' '}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-primary-600 hover:underline dark:text-primary-400">Instagram</a>
            {' '}and{' '}
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-primary-600 hover:underline dark:text-primary-400">YouTube</a>
            {' '}for travel updates and videos.
          </p>
        </div>
      </div>
    </div>
  );
}
