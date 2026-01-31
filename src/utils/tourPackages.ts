// Package key → imageCdn key for photos (must match keys in imageCdn.ts)
export const PACKAGE_IMAGE_KEY: Record<string, string> = {
  dalhousie: 'dalhousieKhajjiar',
  dharamshala: 'dharamshala',
  amritsar: 'amritsar',
  shimla: 'shimla',
  manali: 'manali',
  kasol: 'kasol',
  jammu: 'jammu',
  kashmir: 'kashmir',
};

export type ItineraryDay = {
  day: string;
  title: string;
  details: string[];
};

export type TourPackage = {
  id: string;
  slug: string;
  title: string;
  duration: string;
  priceRange: string;
  famousFor: string[];
  bestTimeToVisit: string[];
  idealFor: string[];
  activityLevel: string;
  locationsCovered: string[];
  itinerary: ItineraryDay[];
  whyChooseThisPackage?: string[];
  travelTips?: string[];
  importantNotes?: string[];
};

export type TourPackageWithKey = TourPackage & { packageKey: string };

const rawPackages = {
  dalhousie: [
    {
      id: 'dalhousie-2n-3d',
      slug: 'dalhousie-tour-package',
      title: 'Dalhousie Sightseeing Tour Package',
      duration: '2 Nights / 3 Days',
      priceRange: '₹2000 – ₹2500',
      famousFor: [
        'Mini Switzerland of India (Khajjiar)',
        'Colonial hill station charm',
        'High-altitude viewpoints',
        'Peaceful lakes & forests',
      ],
      bestTimeToVisit: ['March to June', 'September to November'],
      idealFor: ['Family', 'Couples', 'Senior Citizens'],
      activityLevel: 'Easy',
      locationsCovered: [
        'Dalhousie',
        'Khajjiar',
        'Kalatop',
        'Dainkund Peak',
        'Green Valley',
        'Panjpula',
        'Subhash Baoli',
        'Satdhara Falls',
        'Bhagwati Park',
        'Chamera Lake',
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Dalhousie Local Sightseeing',
          details: [
            'Subhash Baoli – peaceful natural spring',
            'Satdhara Falls – scenic water streams',
            'Panjpula waterfall & bridge',
            'Bhagwati Park (BG Park)',
            'Evening Mall Road walk & shopping',
          ],
        },
        {
          day: 'Day 2',
          title: 'Khajjiar – Kalatop – Dainkund – Green Valley',
          details: [
            'Khajjiar meadows & Khajji Nag Temple',
            'Kalatop Wildlife Sanctuary forest drive',
            'Dainkund Peak – highest point of Dalhousie',
            'Green Valley scenic viewpoint',
          ],
        },
        {
          day: 'Day 3',
          title: 'Chamera Lake & Departure',
          details: ['Chamera Lake boating & photography', 'Return / drop'],
        },
      ],
      whyChooseThisPackage: [
        'Perfect short hill station escape',
        'Balanced sightseeing without rush',
        'Senior-friendly & family-friendly',
        'Most demanded Dalhousie taxi circuit',
      ],
      travelTips: [
        'Carry light jackets even in summer',
        'Wear comfortable walking shoes',
        'Start early for Khajjiar & Dainkund day',
      ],
      importantNotes: [
        'Dainkund visit subject to weather conditions',
        'Adventure activities at Khajjiar are optional & chargeable',
      ],
    },
  ],
  dharamshala: [
    {
      id: 'dharamshala-2n-3d',
      slug: 'dharamshala-tour-package',
      title: 'Dharamshala & McLeod Ganj Tour',
      duration: '2 Nights / 3 Days',
      priceRange: '₹2500 – ₹3000',
      famousFor: ['Dalai Lama & Tibetan culture', 'Spiritual monasteries', 'Mountain cafés & views'],
      bestTimeToVisit: ['February to June', 'September to November'],
      idealFor: ['Solo Travelers', 'Couples', 'Spiritual Tourists'],
      activityLevel: 'Moderate',
      locationsCovered: [
        'Dharamshala',
        'McLeod Ganj',
        'Bhagsu Waterfall',
        'Naddi',
        'Dal Lake',
        'Norbulingka',
        'Kangra Fort',
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Dharamshala – McLeod Ganj',
          details: [
            'Dalai Lama Temple',
            'Bhagsu Waterfall',
            'Dal Lake',
            'McLeod Ganj market & cafés',
          ],
        },
        {
          day: 'Day 2',
          title: 'Kangra Side Sightseeing',
          details: [
            'Kangra Fort',
            'Masrur Rock Cut Temple',
            'Norbulingka Institute',
            'Tea Gardens',
          ],
        },
        {
          day: 'Day 3',
          title: 'Naddi View Point & Departure',
          details: ['Naddi sunset view', 'Departure'],
        },
      ],
      travelTips: ['Expect light rain in monsoon', 'Local cafés open late in McLeod Ganj'],
    },
  ],
  amritsar: [
    {
      id: 'amritsar-1n-2d',
      slug: 'amritsar-tour-package',
      title: 'Amritsar Golden Temple Tour',
      duration: '1 Night / 2 Days',
      priceRange: '₹1500 – ₹2000',
      famousFor: ['Golden Temple', 'Punjabi food', 'Patriotic Wagah Border ceremony'],
      bestTimeToVisit: ['October to March'],
      idealFor: ['Family', 'Religious Tourists'],
      activityLevel: 'Easy',
      locationsCovered: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border'],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Amritsar Sightseeing',
          details: [
            'Golden Temple darshan',
            'Jallianwala Bagh',
            'Local Amritsari food walk',
          ],
        },
        {
          day: 'Day 2',
          title: 'Wagah Border & Departure',
          details: ['Wagah Border ceremony', 'Departure'],
        },
      ],
      importantNotes: ['Carry ID for Wagah Border', 'Reach early for ceremony seating'],
    },
  ],
  shimla: [
    {
      id: 'shimla-2n-3d',
      slug: 'shimla-tour-package',
      title: 'Shimla – Kufri – Chail Tour',
      duration: '2 Nights / 3 Days',
      priceRange: '₹3000 – ₹3500',
      famousFor: ['Colonial architecture', 'Snow views in winter', 'Mall Road & Ridge'],
      bestTimeToVisit: ['March to June', 'December to January'],
      idealFor: ['Couples', 'Families'],
      activityLevel: 'Moderate',
      locationsCovered: ['Shimla', 'Mall Road', 'Jakhu Temple', 'Kufri', 'Chail'],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Shimla Local',
          details: ['Mall Road', 'Ridge', 'Christ Church', 'Jakhu Temple'],
        },
        {
          day: 'Day 2',
          title: 'Kufri – Chail',
          details: ['Kufri Fun World', 'Himalayan Zoo', 'Chail Palace'],
        },
        {
          day: 'Day 3',
          title: 'Departure',
          details: ['Local shopping', 'Drop'],
        },
      ],
    },
  ],
  manali: [
    {
      id: 'manali-3n-4d',
      slug: 'manali-tour-package',
      title: 'Manali – Solang – Atal Tunnel Tour',
      duration: '3 Nights / 4 Days',
      priceRange: '₹4000 – ₹5000',
      famousFor: [
        'Snow activities',
        'Adventure sports',
        'High-altitude mountain roads',
      ],
      bestTimeToVisit: ['March to June', 'December to February'],
      idealFor: ['Adventure Lovers', 'Couples'],
      activityLevel: 'High',
      locationsCovered: ['Manali', 'Hadimba Temple', 'Solang Valley', 'Atal Tunnel', 'Sissu'],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Manali Local',
          details: ['Hadimba Temple', 'Vashisht Kund', 'Mall Road'],
        },
        {
          day: 'Day 2',
          title: 'Solang Valley',
          details: ['Snow activities', 'Paragliding', 'ATV ride'],
        },
        {
          day: 'Day 3',
          title: 'Atal Tunnel – Sissu',
          details: ['Atal Tunnel', 'Sissu Lake'],
        },
        {
          day: 'Day 4',
          title: 'Departure',
          details: ['Return / drop'],
        },
      ],
    },
  ],
  kasol: [
    {
      id: 'kasol-2n-3d',
      slug: 'kasol-tour-package',
      title: 'Kasol & Parvati Valley Tour',
      duration: '2 Nights / 3 Days',
      priceRange: '₹2500 – ₹3000',
      famousFor: ['Parvati Valley', 'Backpacker cafés', 'Village treks'],
      bestTimeToVisit: ['March to June', 'September to November'],
      idealFor: ['Backpackers', 'Friends'],
      activityLevel: 'Relaxed',
      locationsCovered: ['Kasol', 'Parvati River', 'Chalal Village', 'Tosh (optional)'],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Kasol Local',
          details: ['Parvati River walk', 'Kasol market', 'Cafe hopping'],
        },
        {
          day: 'Day 2',
          title: 'Chalal / Tosh',
          details: ['Chalal Village trek', 'Optional Tosh visit'],
        },
        {
          day: 'Day 3',
          title: 'Departure',
          details: ['Return'],
        },
      ],
    },
  ],
  jammu: [
    {
      id: 'jammu-1n-2d',
      slug: 'jammu-tour-package',
      title: 'Jammu Pilgrimage Tour',
      duration: '1 Night / 2 Days',
      priceRange: '₹1500 – ₹2000',
      famousFor: ['Temple city', 'Gateway to Vaishno Devi'],
      bestTimeToVisit: ['October to March'],
      idealFor: ['Pilgrims'],
      activityLevel: 'Easy',
      locationsCovered: ['Jammu City', 'Raghunath Temple', 'Local Markets'],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Jammu Sightseeing',
          details: ['Raghunath Temple', 'Local markets'],
        },
        {
          day: 'Day 2',
          title: 'Departure',
          details: ['Drop / Katra transfer'],
        },
      ],
    },
  ],
  kashmir: [
    {
      id: 'kashmir-4n-5d',
      slug: 'kashmir-tour-package',
      title: 'Kashmir Valley Tour',
      duration: '4 Nights / 5 Days',
      priceRange: '₹7000 – ₹9000',
      famousFor: [
        'Heaven on Earth landscapes',
        'Snow valleys & lakes',
        'Houseboats & gondola rides',
      ],
      bestTimeToVisit: ['April to October'],
      idealFor: ['Families', 'Couples'],
      activityLevel: 'Moderate',
      locationsCovered: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Srinagar',
          details: ['Dal Lake Shikara', 'Mughal Gardens'],
        },
        {
          day: 'Day 2',
          title: 'Gulmarg',
          details: ['Gondola ride', 'Snow activities'],
        },
        {
          day: 'Day 3',
          title: 'Pahalgam',
          details: ['Betaab Valley', 'Aru Valley'],
        },
        {
          day: 'Day 4',
          title: 'Sonmarg',
          details: ['Thajiwas Glacier'],
        },
        {
          day: 'Day 5',
          title: 'Departure',
          details: ['Return / drop'],
        },
      ],
      importantNotes: [
        'Weather & security conditions apply',
        'Some areas may require local union taxi',
      ],
    },
  ],
} as const;

/** Flatten packages with packageKey for image lookup */
function flattenPackages(): TourPackageWithKey[] {
  const order: (keyof typeof rawPackages)[] = [
    'dalhousie',
    'dharamshala',
    'amritsar',
    'shimla',
    'manali',
    'kasol',
    'jammu',
    'kashmir',
  ];
  const list: TourPackageWithKey[] = [];
  for (const key of order) {
    const arr = rawPackages[key];
    for (const pkg of arr) {
      list.push({ ...pkg, packageKey: key });
    }
  }
  return list;
}

export const allTourPackages = flattenPackages();

export function getTourPackageBySlug(slug: string): TourPackageWithKey | undefined {
  return allTourPackages.find((p) => p.slug === slug);
}

export function getImageKeyForPackage(packageKey: string): string | undefined {
  return PACKAGE_IMAGE_KEY[packageKey];
}
