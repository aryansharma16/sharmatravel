import Link from 'next/link';
import { Card, CardImage, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const packageItem = {
  name: 'Dalhousie – Khajjiar – Kalatop – Dainkund',
  priceRange: '₹2,000 – ₹2,500',
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  alt: 'Dalhousie Khajjiar tour',
};

export function TourPackagesSection() {
  return (
    <section className="bg-slate-100 py-16 dark:bg-slate-900/50" aria-labelledby="tour-packages-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="tour-packages-heading" className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Tour Packages
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Enquire for packages. No online booking — we&apos;ll confirm by call or WhatsApp.
        </p>
        <div className="mt-8 max-w-2xl">
          <Card>
            <CardImage src={packageItem.image} alt={packageItem.alt} />
            <CardContent>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {packageItem.name}
              </h3>
              <p className="mt-2 text-primary-600 dark:text-primary-400 font-medium">
                {packageItem.priceRange}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Price range per person/trip. Final rate depends on group size and itinerary.
              </p>
              <div className="mt-4">
                <Button href="/contact" variant="outline">
                  Enquire Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
