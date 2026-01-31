import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { TourPackageWithKey } from '@/utils/tourPackages';

type PackageCardProps = {
  package: TourPackageWithKey;
  imageSrc: string;
  imageAlt: string;
};

export function PackageCard({ package: pkg, imageSrc, imageAlt }: PackageCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-700">
        {imageSrc ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400 text-slate-600 dark:from-slate-600 dark:to-slate-700 dark:text-slate-400">
            <span className="text-sm font-medium">Tour package</span>
          </div>
        )}
        <div className="absolute left-2 top-2 rounded-md bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
          {pkg.duration}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-tight text-slate-900 dark:text-white sm:text-lg">
          {pkg.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-sky-600 dark:text-sky-400">
          For best prices contact us
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button href="/contact" variant="outline" className="text-xs sm:text-sm">
            Enquire Now
          </Button>
          <Link
            href={`/tour-packages/${pkg.slug}`}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 sm:text-sm"
          >
            Show Details
          </Link>
        </div>
      </div>
    </article>
  );
}
