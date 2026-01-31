import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

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
    'about us',
  ],
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        About Sharma Himalayan Cabs
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Sharma Himalayan Cabs offers reliable taxi and tour services across Himachal Pradesh and North India. We specialise in point-to-point taxi hire and tour packages to popular destinations like Dalhousie, Dharamshala, Manali, Shimla, and beyond.
      </p>

      <section className="mt-8" aria-labelledby="owner-heading">
        <h2 id="owner-heading" className="text-xl font-semibold text-slate-900 dark:text-white">
          Owner
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          The business is owned and operated by <strong>Pankaj Sharma</strong>. With local knowledge and a focus on customer satisfaction, we aim to make your journey safe, comfortable, and on time.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="values-heading">
        <h2 id="values-heading" className="text-xl font-semibold text-slate-900 dark:text-white">
          What We Stand For
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-slate-600 dark:text-slate-400">
          <li>Experienced, local drivers who know the terrain and weather</li>
          <li>Cooperative and supportive service — we help with luggage and route suggestions</li>
          <li>Flexible trips — adjustable itineraries and timings</li>
          <li>Clean, well-maintained vehicles</li>
          <li>On-time, reliable pickups and drop-offs</li>
        </ul>
      </section>

      <div className="mt-10">
        <Button href="/contact" variant="primary">
          Get in Touch
        </Button>
      </div>
    </div>
  );
}
