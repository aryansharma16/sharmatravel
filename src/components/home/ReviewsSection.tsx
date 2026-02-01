'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

// Direct write-review link when Place ID is set in env
const GOOGLE_REVIEW_DIRECT_URL =
  typeof process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID === 'string' &&
  process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID
    ? `https://search.google.com/local/writereview?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`
    : null;

// Fallback: search Google for the business so users can find and leave a review
const GOOGLE_REVIEW_SEARCH_QUERY = 'Dalhousie Northern Cabs';
const GOOGLE_REVIEW_SEARCH_URL = `https://www.google.com/search?q=${encodeURIComponent(GOOGLE_REVIEW_SEARCH_QUERY)}`;

const AVATAR_COLORS = [
  'bg-orange-500',
  'bg-pink-500',
  'bg-blue-500',
  'bg-emerald-500',
  'bg-violet-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-cyan-500',
] as const;

function getAvatarStyle(name: string, index: number) {
  const initial = name.trim().charAt(0).toUpperCase() || '?';
  const colorIndex = index % AVATAR_COLORS.length;
  return { initial, className: AVATAR_COLORS[colorIndex] };
}

const reviews = [
  {
    id: 'review-gauri-gholkar',
    name: 'Gauri Gholkar',
    text: "helpful, trustworthy, caring, understanding, humble and respectful.... can't stop describing Pahadi people. Nd yes Pankaj Sharma is exactly like this!!! A perfect pahadi who is there to help you with anything and everything. 👍 We explored Dharamshala and Dalhousie with Pankaj Awesome experience 💕 Highly recommended 👍👍👍",
    rating: 5,
  },
  {
    id: 'review-rohit-kapse',
    name: 'Rohit Kapse',
    text: "We had this wonderful experience of travelling with Sharma tour and travels in Dalhousie and Dharamshala. Pankaj is an experienced driver. He is very polite and knows the places quite well. We felt very comfortable in our entire journey. For anyone who is travelling to Dalhousie and need a taxi, I would highly recommend you to contact them.",
    rating: 5,
  },
  {
    id: 'review-ashish-saini',
    name: 'Ashish Saini',
    text: "It was an unplanned trip to Dalhousie and Dharamshala but Pankaj, Vinod and Vicky made it easy for us. It was an amazing experience and they had well-mannered behaviour. Thank you 'Sharma Ji'",
    rating: 5,
  },
];

export function ReviewsSection() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-16" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="reviews-heading" className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Reviews from Google Business Profile
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => {
            const { initial, className: avatarBg } = getAvatarStyle(review.name, i);
            const isExpanded = expanded[review.id];
            const isLong = review.text.length > 120;

            return (
              <blockquote
                key={review.id}
                className="flex min-h-[220px] flex-col rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800 sm:p-6"
              >
                <div className="flex flex-1 min-h-0 gap-3 sm:gap-4">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white sm:h-10 sm:w-10 sm:text-lg ${avatarBg}`}
                    aria-hidden
                  >
                    {initial}
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col">
                    <div
                      className="flex gap-1 text-amber-500"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: review.rating }, (_, j) => (
                        <span key={j} aria-hidden>
                          ★
                        </span>
                      ))}
                    </div>
                    <p
                      className={`mt-2 flex-1 text-sm text-slate-700 dark:text-slate-300 ${
                        isExpanded ? 'line-clamp-none' : 'line-clamp-3'
                      }`}
                    >
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                      <cite className="block not-italic text-sm font-medium text-slate-900 dark:text-white">
                        — {review.name}
                      </cite>
                      {isLong && (
                        <button
                          type="button"
                          onClick={() => toggleExpanded(review.id)}
                          className="text-xs font-medium text-sky-600 hover:underline dark:text-sky-400"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </blockquote>
            );
          })}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {GOOGLE_REVIEW_DIRECT_URL ? (
            <Button href={GOOGLE_REVIEW_DIRECT_URL} external variant="outline">
              Leave a Review on Google
            </Button>
          ) : null}
          <Button href={GOOGLE_REVIEW_SEARCH_URL} external variant="outline">
            Search &quot;{GOOGLE_REVIEW_SEARCH_QUERY}&quot; to leave a review
          </Button>
        </div>
      </div>
    </section>
  );
}
