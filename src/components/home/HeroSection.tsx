'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { imageCdn } from '@/utils/imageCdn';
import { LOGO_URL, SITE_NAME } from '@/lib/brand';

const PHONE_PLACEHOLDER = '9317670639';
const WHATSAPP_PLACEHOLDER = '9317670639';

// Hero slides from our places / imageCdn utils
const slides = [
  imageCdn.dalhousieKhajjiar[0],           // Khajjiar
  imageCdn.manali[5],                      // Solang Valley
  imageCdn.kashmir[0],                     // Gulmarg Meadows
  imageCdn.shimla[2],                      // Shimla Ridge
  imageCdn.dalhousieKhajjiar[1],          // Kalatop
].map(({ src, alt }) => ({ src, alt }));

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[75vh] overflow-hidden xs:min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh]" aria-label="Hero">
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.alt}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
              unoptimized
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
              aria-hidden
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex min-h-[75vh] flex-col justify-center px-4 py-12 text-white xs:min-h-[80vh] xs:py-16 sm:min-h-[85vh] sm:px-6 sm:py-20 md:min-h-[90vh] lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src={LOGO_URL}
            alt=""
            width={240}
            height={240}
            className="mx-auto h-32 w-32 shrink-0 rounded-xl object-contain drop-shadow-2xl xs:h-36 xs:w-36 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-56 xl:w-56"
            unoptimized
            priority
          />
          <h1 className="mt-4 text-2xl font-bold tracking-tight xs:mt-5 xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {SITE_NAME}
          </h1>
          <p className="mt-3 text-base text-white/90 xs:mt-4 xs:text-lg sm:text-xl">
            Reliable taxi & tour services in Dalhousie, Dharamshala, Manali & beyond. Experienced drivers, clean cars, on-time pickups.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 xs:mt-6 sm:gap-2.5">
            <Button
              href="/tour-packages"
              variant="primary"
              className="gap-1.5 px-3 py-1.5 text-xs font-medium xs:text-sm sm:px-3.5 sm:py-2 sm:text-sm bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-600"
            >
              Book Now
            </Button>
            <Button
              href={`tel:${PHONE_PLACEHOLDER.replace(/\D/g, '')}`}
              external
              variant="primary"
              className="gap-1.5 px-3 py-1.5 text-xs font-medium xs:text-sm sm:px-3.5 sm:py-2 sm:text-sm bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
            >
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </Button>
            <Button
              href={`https://wa.me/${WHATSAPP_PLACEHOLDER.replace(/\D/g, '')}`}
              external
              variant="whatsapp"
              className="gap-1.5 px-3 py-1.5 text-xs font-medium xs:text-sm sm:px-3.5 sm:py-2 sm:text-sm"
            >
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Now
            </Button>
            <a
              href="#request-cab"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white bg-transparent px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent xs:text-sm sm:px-3.5 sm:py-2 sm:text-sm"
            >
              Request a Cab
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-1.5 xs:bottom-6 xs:gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-1.5 w-1.5 rounded-full transition-colors xs:h-2 xs:w-2 sm:h-2.5 sm:w-2.5 ${
              i === current ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
