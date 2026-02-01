import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getVehiclesSorted, getVehicleById } from '@/utils/vehicles';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Taxi hire, outstation cabs, and tour packages in Himachal. Dalhousie taxi, Dharamshala cab, Manali tours. One-way, round-trip, and multi-day packages.',
  keywords: [
    'Himachal taxi',
    'Himachal taxi service',
    'Himachal cab',
    'Dalhousie taxi',
    'Dalhousie cab',
    'Dharamshala taxi',
    'Dharamshala cab',
    'Manali taxi',
    'Manali tour',
    'Manali cab',
    'Shimla taxi',
    'Shimla cab',
    'cab rental Himachal',
    'taxi rental',
    'cab rental',
    'outstation cab',
    'point to point taxi',
    'one way taxi',
    'round trip cab',
    'local taxi',
    'city rides',
    'sightseeing tour',
    'sightseeing tour Himachal',
    'tour packages',
    'tour packages Himachal',
    'multi-day tour',
    'rides',
    'travels Himachal',
    'airport transfer',
    'station pickup',
    'Innova taxi',
    'SUV cab',
    'tempo traveller',
    'Sharma Himalayan Cabs services',
  ],
};

const services = [
  {
    title: 'Point-to-Point Taxi',
    description:
      'One-way or round-trip taxi between cities. Jalandhar–Dalhousie, Amritsar–Dharamshala, Delhi–Manali, Shimla–Manali, and more.',
    vehicleId: 'innova-crysta',
    alt: 'Point-to-point taxi on mountain road',
  },
  {
    title: 'Local & City Rides',
    description:
      'Local drops, airport/station transfers, and day trips within Dalhousie, Dharamshala, Manali, and Shimla.',
    vehicleId: 'dzire-new',
    alt: 'Local city taxi',
  },
  {
    title: 'Tour Packages',
    description:
      'Multi-day tours: Dalhousie–Khajjiar–Kalatop–Dainkund and custom itineraries. Enquire for price and availability.',
    vehicleId: 'tempo-traveller',
    alt: 'Tour in hills',
  },
];

function ServiceCard({
  title,
  description,
  image,
  alt,
  index,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
  index: number;
}) {
  const isReversed = index % 2 === 1;
  return (
    <Card
      className={`overflow-hidden transition-shadow hover:shadow-lg sm:flex sm:flex-row ${
        isReversed ? 'sm:flex-row-reverse' : ''
      }`}
    >
      <div className="relative h-56 w-full shrink-0 sm:h-auto sm:w-96">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent sm:from-transparent sm:via-transparent sm:to-transparent sm:hover:from-black/20" />
      </div>
      <CardContent className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{description}</p>
        <div className="mt-4">
          <Button href="/contact" variant="outline">
            Enquire / Book
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function VehicleCard({
  name,
  image,
  alt,
  capacity,
  description,
}: {
  name: string;
  image: string;
  alt: string;
  capacity: string;
  description?: string;
}) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 dark:bg-slate-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
          <span className="text-sm font-medium text-white">{capacity}</span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-slate-900 dark:text-white">{name}</h3>
        {description && (
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default function ServicesPage() {
  const sortedVehicles = getVehiclesSorted();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
        <div className="relative mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Taxi hire and tour packages across Himachal and North India. No
            online booking — call or WhatsApp to book or get a quote.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Services list */}
        <section className="space-y-10" aria-labelledby="services-list">
          <h2 id="services-list" className="sr-only">
            Service list
          </h2>
          {services.map((service, i) => {
            const vehicle = getVehicleById(service.vehicleId);
            return (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={vehicle?.image ?? ''}
                alt={service.alt}
                index={i}
              />
            );
          })}
        </section>

        {/* Our Fleet */}
        <section
          className="mt-20 scroll-mt-8"
          id="our-fleet"
          aria-labelledby="fleet-heading"
        >
          <div className="text-center">
            <h2
              id="fleet-heading"
              className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl"
            >
              Our Fleet
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              Well-maintained sedans, SUVs, Innova, and Tempo Traveller for
              every group size and trip type.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {sortedVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                name={vehicle.name}
                image={vehicle.image}
                alt={vehicle.alt}
                capacity={vehicle.capacity}
                description={vehicle.description}
              />
            ))}
          </div>
        </section>

        {/* How to book */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-primary-50/30 p-6 shadow-sm dark:border-slate-700 dark:from-slate-800/50 dark:to-primary-900/20 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            How to book
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Call or WhatsApp us with your route, date, and number of
            passengers. We&apos;ll confirm availability and send you the fare.
            You can also use the &quot;Request a Cab&quot; form on the{' '}
            <Link
              href="/#request-cab"
              className="font-medium text-primary-600 underline decoration-primary-500/50 underline-offset-2 hover:decoration-primary-500 dark:text-primary-400"
            >
              home page
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
            <Button href="/#request-cab" variant="outline">
              Request a Cab
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
