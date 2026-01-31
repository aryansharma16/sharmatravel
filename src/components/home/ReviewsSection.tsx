import { Button } from '@/components/ui/Button';

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=PLACE_ID';

const reviews = [
  {
    name: 'Rahul K.',
    text: 'Very cooperative driver and on-time pickup. Car was clean. Would recommend for Dalhousie trips.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    text: 'Booked Delhi to Manali. Smooth ride, professional service. Will use again for Dharamshala.',
    rating: 5,
  },
  {
    name: 'Amit M.',
    text: 'Family trip to Khajjiar. Driver was supportive and knew the routes well. Good value.',
    rating: 5,
  },
];

export function ReviewsSection() {
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
          {reviews.map((review, i) => (
            <blockquote
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex gap-1 text-amber-500" aria-hidden>
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} aria-hidden>★</span>
                ))}
              </div>
              <p className="mt-3 text-slate-700 dark:text-slate-300">&ldquo;{review.text}&rdquo;</p>
              <cite className="mt-3 block not-italic text-sm font-medium text-slate-900 dark:text-white">
                — {review.name}
              </cite>
            </blockquote>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button
            href={GOOGLE_REVIEW_URL}
            external
            variant="outline"
          >
            Leave a Review on Google
          </Button>
        </div>
      </div>
    </section>
  );
}
