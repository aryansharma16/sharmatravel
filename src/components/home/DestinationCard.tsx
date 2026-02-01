'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import type { Destination } from '@/utils/destinations';

const SLIDER_INTERVAL_MS = 4000;
const MAX_SLIDER_IMAGES = 5;
const SWIPE_THRESHOLD_PX = 50;

type DestinationCardProps = {
  destination: Destination;
  images: { title: string; src: string; alt: string }[];
};

export function DestinationCard({ destination, images }: DestinationCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderImages = images.slice(0, MAX_SLIDER_IMAGES);
  const hasMultiple = sliderImages.length > 1;
  const startX = useRef<number>(0);
  const lastSwipeAt = useRef<number>(0);

  useEffect(() => {
    if (!hasMultiple) return;
    const timer = setInterval(() => {
      if (Date.now() - lastSwipeAt.current < SLIDER_INTERVAL_MS) return;
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, SLIDER_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [hasMultiple, sliderImages.length]);

  const goTo = (direction: -1 | 1) => {
    lastSwipeAt.current = Date.now();
    setCurrentIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return sliderImages.length - 1;
      if (next >= sliderImages.length) return 0;
      return next;
    });
  };

  const handleSwipeEnd = (endX: number) => {
    const delta = startX.current - endX;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    goTo(delta > 0 ? 1 : -1);
  };

  const current = sliderImages[currentIndex];

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block h-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900"
    >
      <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
        <div
          className="relative aspect-[4/3] touch-pan-y cursor-grab select-none overflow-hidden bg-slate-200 active:cursor-grabbing dark:bg-slate-700"
          onTouchStart={(e) => {
            startX.current = e.targetTouches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (e.changedTouches[0]) handleSwipeEnd(e.changedTouches[0].clientX);
          }}
          onMouseDown={(e) => {
            startX.current = e.clientX;
          }}
          onMouseUp={(e) => {
            handleSwipeEnd(e.clientX);
          }}
        >
          {current && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.src}
                alt={current.alt}
                className="pointer-events-none h-full w-full object-cover transition-opacity duration-300"
                loading="lazy"
                draggable={false}
              />
              {hasMultiple && (
                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/50 px-2 py-1">
                  {sliderImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to image ${i + 1}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        lastSwipeAt.current = Date.now();
                        setCurrentIndex(i);
                      }}
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        i === currentIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        <CardContent className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="font-semibold text-slate-900 dark:text-white">{destination.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400 transition-[line-clamp] group-hover:line-clamp-none sm:line-clamp-3">
            {destination.shortDescription}
          </p>
          <span className="mt-4 inline-flex w-fit items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors group-hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:group-hover:bg-slate-200">
            Show details
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
