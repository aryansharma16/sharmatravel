import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getTourPackageBySlug,
  getImageKeyForPackage,
  allTourPackages,
} from '@/utils/tourPackages';
import { imageCdn } from '@/utils/imageCdn';
import { YOUTUBE_URL, INSTAGRAM_URL } from '@/lib/social';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allTourPackages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const pkg = getTourPackageBySlug(slug);
  if (!pkg) return { title: 'Package not found' };
  const title = `${pkg.title} | Tour Package`;
  const description = `${pkg.duration}. ${pkg.famousFor.slice(0, 2).join(', ')}. Contact Dalhousie Northern Cabs for best prices.`;
  return {
    title,
    description,
    openGraph: {
      title: `${pkg.title} | Tour Package | Dalhousie Northern Cabs`,
      description,
    },
  };
}

export default async function TourPackagePage({ params }: Props) {
  const { slug } = await params;
  const pkg = getTourPackageBySlug(slug);
  if (!pkg) notFound();

  const imageKey = getImageKeyForPackage(pkg.packageKey);
  const images = imageKey ? imageCdn[imageKey as keyof typeof imageCdn] ?? [] : [];
  const firstImage = images[0];

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[36vh] min-h-[240px] overflow-hidden bg-slate-800">
        {firstImage && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={firstImage.src}
              alt={firstImage.alt}
              className="h-full w-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
          </>
        )}
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-4xl">
            <p className="text-sm font-medium text-white/90">{pkg.duration}</p>
            <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              {pkg.title}
            </h1>
            <p className="mt-2 text-sm font-medium text-sky-200">
              For best prices contact us
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Quick info */}
        <section className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50 sm:p-5">
          <div className="flex flex-wrap gap-4 text-sm">
            <div>
              <span className="font-medium text-slate-500 dark:text-slate-400">
                Best time
              </span>
              <p className="mt-0.5 text-slate-800 dark:text-slate-200">
                {pkg.bestTimeToVisit.join(', ')}
              </p>
            </div>
            <div>
              <span className="font-medium text-slate-500 dark:text-slate-400">
                Ideal for
              </span>
              <p className="mt-0.5 text-slate-800 dark:text-slate-200">
                {pkg.idealFor.join(', ')}
              </p>
            </div>
            <div>
              <span className="font-medium text-slate-500 dark:text-slate-400">
                Activity level
              </span>
              <p className="mt-0.5 text-slate-800 dark:text-slate-200">
                {pkg.activityLevel}
              </p>
            </div>
          </div>
        </section>

        {/* Famous for */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Famous for
          </h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {pkg.famousFor.map((item) => (
              <li
                key={item}
                className="rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-800 dark:bg-sky-900/50 dark:text-sky-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Itinerary */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Itinerary
          </h2>
          <div className="mt-4 space-y-4">
            {pkg.itinerary.map((day) => (
              <div
                key={day.day}
                className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/50"
              >
                <h3 className="font-medium text-slate-900 dark:text-white">
                  {day.day} — {day.title}
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  {day.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Locations covered */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Locations covered
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            {pkg.locationsCovered.join(', ')}
          </p>
        </section>

        {/* Why choose (optional) */}
        {pkg.whyChooseThisPackage && pkg.whyChooseThisPackage.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Why choose this package
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600 dark:text-slate-400">
              {pkg.whyChooseThisPackage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Travel tips (optional) */}
        {pkg.travelTips && pkg.travelTips.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Travel tips
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600 dark:text-slate-400">
              {pkg.travelTips.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Important notes (optional) */}
        {pkg.importantNotes && pkg.importantNotes.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Important notes
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-amber-700 dark:text-amber-300">
              {pkg.importantNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Photo gallery */}
        {images.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Photos
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((img) => (
                <figure
                  key={img.src}
                  className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="p-2 text-sm text-slate-600 dark:text-slate-400">
                    {img.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Book or enquire
          </h2>
          <p className="mt-2 font-medium text-sky-700 dark:text-sky-300">
            Enquire for packages. No online booking — we&apos;ll confirm by call or WhatsApp.
          </p>
          <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
            This package is fully customizable — duration, itinerary, and inclusions can be adjusted to suit your group and budget. Packages can be combined, or you can create and discuss your own package with us. Follow us on{' '}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-primary-600 hover:underline dark:text-primary-400">Instagram</a>
            {' '}and{' '}
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-primary-600 hover:underline dark:text-primary-400">YouTube</a>.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600"
            >
              Enquire Now
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Instagram
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              YouTube
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Back to home
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
