const points = [
  {
    title: 'Experienced local drivers',
    description: 'Drivers who know Himachal roads and weather conditions.',
    icon: 'driver',
  },
  {
    title: 'Very cooperative & supportive',
    description: 'We help with luggage, stops, and route suggestions.',
    icon: 'support',
  },
  {
    title: 'Adjustable trips',
    description: 'Flexible itineraries and timings to suit your plan.',
    icon: 'flex',
  },
  {
    title: 'Clean & well-maintained cars',
    description: 'Regular servicing and clean interiors for a comfortable ride.',
    icon: 'car',
  },
  {
    title: 'On-time & reliable service',
    description: 'Punctual pickups and drop-offs so you stay on schedule.',
    icon: 'clock',
  },
];

const iconPaths: Record<string, React.ReactNode> = {
  driver: (
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  ),
  support: (
    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 4 4 0 01-4 4 8 8 0 00-8 8v1a2 2 0 002 2h.5z" />
  ),
  flex: (
    <path
      fillRule="evenodd"
      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
      clipRule="evenodd"
    />
  ),
  car: (
    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  ),
  clock: (
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
      clipRule="evenodd"
    />
  ),
};

export function WhyChooseUsSection() {
  return (
    <section className="bg-slate-100 py-16 dark:bg-slate-900/50" aria-labelledby="why-choose-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="why-choose-heading" className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Why Choose Us
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          What makes Sharma Himalayan Cabs your best choice for Himachal travel.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((item, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  {iconPaths[item.icon] ?? iconPaths.clock}
                </svg>
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
