'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import type { Destination } from '@/utils/destinations';

const SLIDER_INTERVAL_MS = 4000;
const MAX_SLIDER_IMAGES = 5;

type DestinationCardProps = {
  destination: Destination;
  images: { title: string; src: string; alt: string }[];
};

export function DestinationCard({ destination, images }: DestinationCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderImages = images.slice(0, MAX_SLIDER_IMAGES);
  const hasMultiple = sliderImages.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, SLIDER_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [hasMultiple, sliderImages.length]);

  const current = sliderImages[currentIndex];

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 dark:bg-slate-700">
        {current && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.alt}
              className="h-full w-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
        {hasMultiple && (
          <>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/50 px-2 py-1">
              {sliderImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to image ${i + 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentIndex(i);
                  }}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
          </>
        )}
      </div>
      <CardContent className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-semibold text-slate-900 dark:text-white">{destination.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">
          {destination.shortDescription}
        </p>
        <Link
          href={`/destinations/${destination.slug}`}
          className="mt-4 inline-flex w-fit items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Show details
        </Link>
      </CardContent>
    </Card>
  );
}
