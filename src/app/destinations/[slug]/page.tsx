import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDestinationBySlug, getDestinationImages, destinations } from '@/utils/destinations';
import { YOUTUBE_URL, INSTAGRAM_URL } from '@/lib/social';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return { title: 'Destination not found' };
  const title = `${destination.name} | Taxi & Tour`;
  const description = destination.shortDescription;
  return {
    title,
    description,
    openGraph: {
      title: `${destination.name} | Taxi & Tour | Dalhousie Northern Cabs`,
      description,
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const images = getDestinationImages(destination.imageKey);
  const firstImage = images[0];

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] overflow-hidden bg-slate-800">
        {firstImage && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={firstImage.src}
              alt={firstImage.alt}
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </>
        )}
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-wide text-white/90">
              {destination.region}
            </p>
            <h1 className="mt-1 text-3xl font-bold text-white sm:text-4xl">
              {destination.name}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Description */}
        <section className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {destination.longDescription}
          </p>
        </section>

        {/* Highlights */}
        {destination.highlights.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Highlights
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {destination.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full bg-slate-200 px-4 py-1.5 text-sm text-slate-700 dark:bg-slate-600 dark:text-slate-200"
                >
                  {h}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Photo gallery */}
        {images.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Photos
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="p-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {img.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Book a cab or tour
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Request a taxi for {destination.name} sightseeing, transfers, or multi-day tours. Follow us on{' '}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-primary-600 hover:underline dark:text-primary-400">Instagram</a>
            {' '}and{' '}
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-primary-600 hover:underline dark:text-primary-400">YouTube</a>.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Get a quote
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Instagram
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              YouTube
            </a>
            <Link
              href="/"
              className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Back to home
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
