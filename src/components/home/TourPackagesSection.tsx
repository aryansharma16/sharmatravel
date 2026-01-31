import { allTourPackages, getImageKeyForPackage } from '@/utils/tourPackages';
import { imageCdn } from '@/utils/imageCdn';
import { PackageCard } from './PackageCard';

export function TourPackagesSection() {
  return (
    <section
      className="bg-slate-100 py-16 dark:bg-slate-900/50"
      aria-labelledby="tour-packages-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="tour-packages-heading"
          className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl"
        >
          Tour Packages
        </h2>
        <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 dark:border-sky-800 dark:bg-sky-900/30">
          <p className="text-sm font-medium text-sky-800 dark:text-sky-200">
            Enquire for packages. No online booking — we&apos;ll confirm by call or WhatsApp.
          </p>
          <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
            Every package is fully customizable — duration, itinerary, and inclusions can be adjusted to suit your group and budget. Packages can be combined, or you can create and discuss your own package with us.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allTourPackages.map((pkg) => {
            const imageKey = getImageKeyForPackage(pkg.packageKey);
            const images = imageKey ? imageCdn[imageKey as keyof typeof imageCdn] ?? [] : [];
            const firstImage = images[0];
            const imageSrc = firstImage?.src ?? '';
            const imageAlt = firstImage?.alt ?? pkg.title;
            return (
              <PackageCard
                key={pkg.id}
                package={pkg}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
