import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardImage, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Taxi hire, outstation cabs, and tour packages in Himachal. Dalhousie taxi, Dharamshala cab, Manali tours. One-way, round-trip, and multi-day packages.',
  keywords: [
    'Himachal taxi service',
    'Dalhousie taxi',
    'Dharamshala cab',
    'Manali tour',
    'outstation cab Himachal',
  ],
};

const services = [
  {
    title: 'Point-to-Point Taxi',
    description:
      'One-way or round-trip taxi between cities. Jalandhar–Dalhousie, Amritsar–Dharamshala, Delhi–Manali, Shimla–Manali, and more.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
    alt: 'Taxi on mountain road',
  },
  {
    title: 'Local & City Rides',
    description:
      'Local drops, airport/station transfers, and day trips within Dalhousie, Dharamshala, Manali, and Shimla.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
    alt: 'City taxi',
  },
  {
    title: 'Tour Packages',
    description:
      'Multi-day tours: Dalhousie–Khajjiar–Kalatop–Dainkund and custom itineraries. Enquire for price and availability.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    alt: 'Tour in hills',
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        Our Services
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Taxi hire and tour packages across Himachal and North India. No online booking — call or WhatsApp to book or get a quote.
      </p>

      <section className="mt-10 space-y-10" aria-labelledby="services-list">
        <h2 id="services-list" className="sr-only">
          Service list
        </h2>
        {services.map((service, i) => (
          <Card key={i} className="overflow-hidden sm:flex sm:flex-row">
            <div className="relative h-48 w-full shrink-0 sm:h-auto sm:w-80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <CardContent className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{service.description}</p>
              <div className="mt-4">
                <Button href="/contact" variant="outline">
                  Enquire / Book
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          How to book
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Call or WhatsApp us with your route, date, and number of passengers. We&apos;ll confirm availability and send you the fare. You can also use the &quot;Request a Cab&quot; form on the <Link href="/#request-cab" className="text-primary-600 hover:underline dark:text-primary-400">home page</Link>.
        </p>
      </div>
    </div>
  );
}
