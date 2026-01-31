import Link from 'next/link';
import { Card, CardImage, CardContent } from '@/components/ui/Card';

const routes = [
  {
    from: 'Jalandhar',
    to: 'Dalhousie',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    alt: 'Scenic road to Dalhousie',
  },
  {
    from: 'Amritsar',
    to: 'Dharamshala',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
    alt: 'Amritsar to Dharamshala route',
  },
  {
    from: 'Delhi',
    to: 'Manali',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
    alt: 'Delhi to Manali highway',
  },
  {
    from: 'Delhi',
    to: 'Dharamshala',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    alt: 'Delhi to Dharamshala',
  },
  {
    from: 'Shimla',
    to: 'Manali',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    alt: 'Shimla to Manali',
  },
  {
    from: 'Jammu',
    to: 'Dalhousie',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
    alt: 'Jammu to Dalhousie',
  },
];

export function PopularRoutesSection() {
  return (
    <section className="py-16" aria-labelledby="popular-routes-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="popular-routes-heading" className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Popular Routes
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Taxi services on these routes. Request a cab or call for a quote.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <Link key={`${route.from}-${route.to}`} href="/contact" className="group">
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <CardImage src={route.image} alt={route.alt} />
                <CardContent>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {route.from} → {route.to}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Get a quote or book a cab
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
