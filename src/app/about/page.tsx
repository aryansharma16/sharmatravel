import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getVehiclesSorted } from '@/utils/vehicles';

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
                . With local knowledge and a focus on customer satisfaction, we
                aim to make your journey safe, comfortable, and on time.
              </p>
            </CardContent>
          </Card>
        </section>

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
        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
          <Button href="/services" variant="outline">
            Our Services
          </Button>
        </div>
      </div>
    </div>
  );
}
