import { allTourPackages, getImageKeyForPackage } from '@/utils/tourPackages';
import { imageCdn } from '@/utils/imageCdn';
import { PackageCard } from './PackageCard';
import { Button } from '@/components/ui/Button';

export function TourPackagesSection() {
  return (
    <section
      id="tour-packages"
      className="bg-slate-100 py-10 dark:bg-slate-900/50 xs:py-12 sm:py-16 sm:px-0"
      aria-labelledby="tour-packages-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 xs:flex-row xs:flex-wrap xs:items-center xs:justify-between xs:gap-3 sm:gap-4">
          <h2
            id="tour-packages-heading"
            className="text-xl font-bold text-slate-900 dark:text-white xs:text-2xl sm:text-3xl"
          >
            Tour Packages
          </h2>
          <Button
            href="/contact"
            variant="primary"
            className="w-full shrink-0 bg-amber-500 text-white hover:bg-amber-600 xs:w-auto dark:bg-amber-500 dark:hover:bg-amber-600"
          >
            Book Now
          </Button>
        </div>
        <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2.5 dark:border-sky-800 dark:bg-sky-900/30 xs:mt-3 xs:px-4 xs:py-3">
          <p className="text-sm font-medium text-sky-800 dark:text-sky-200">
            Enquire for packages. No online booking — we&apos;ll confirm by call or WhatsApp.
          </p>
          <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
            Every package is fully customizable — duration, itinerary, and inclusions can be adjusted to suit your group and budget. Packages can be combined, or you can create and discuss your own package with us.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 xs:mt-6 sm:grid-cols-2 lg:grid-cols-3">
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
