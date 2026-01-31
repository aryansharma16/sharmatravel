import { getDestinationsSorted } from '@/utils/destinations';
import { imageCdn } from '@/utils/imageCdn';
import { DestinationCard } from './DestinationCard';

export function PopularRoutesSection() {
  const destinations = getDestinationsSorted();
  return (
    <section className="py-16" aria-labelledby="popular-routes-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="popular-routes-heading" className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Popular Destinations
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Explore these tour destinations. Each card shows a glimpse of the place—click &quot;Show details&quot; for the full guide and photos.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.slug}
              destination={destination}
              images={imageCdn[destination.imageKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
