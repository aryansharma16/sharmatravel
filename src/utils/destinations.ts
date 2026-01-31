import { imageCdn } from './imageCdn';

export type DestinationImageKey = keyof typeof imageCdn;

export type Destination = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  imageKey: DestinationImageKey;
  highlights: string[];
  region: string;
};

/** Control display order: first slug appears first. Add or reorder to change listing. */
export const DESTINATION_DISPLAY_ORDER: string[] = [
  'dalhousie-khajjiar',
  'dharamshala',
  'kangra',
  'amritsar',
  'shimla',
  'manali',
  'kasol',
  'jammu',
  'kashmir',
];

export const destinations: Destination[] = [
  {
    slug: 'manali',
    name: 'Manali',
    shortDescription: 'Gateway to the Himalayas with snow-capped peaks, adventure sports, and apple orchards. Perfect for trekking, paragliding, and scenic drives.',
    longDescription: 'Manali is one of India\'s most popular hill stations, nestled in the Kullu Valley of Himachal Pradesh. From the iconic Rohtang Pass and Atal Tunnel to Solang Valley and Hidimba Temple, the region offers stunning landscapes, adventure activities, and rich culture. Our taxi services cover Manali sightseeing, airport transfers, and multi-day tours to nearby Sissu, Keylong, and Leh.',
    imageKey: 'manali',
    region: 'Himachal Pradesh',
    highlights: ['Solang Valley', 'Rohtang Pass', 'Atal Tunnel', 'Hidimba Temple', 'Paragliding', 'Sissu'],
  },
  {
    slug: 'dharamshala',
    name: 'Dharamshala',
    shortDescription: 'Home of the Dalai Lama, cricket stadium, and serene monasteries. Ideal for spiritual retreats and mountain views.',
    longDescription: 'Dharamshala (including McLeod Ganj) is the seat of the Tibetan government-in-exile and offers a unique blend of Himalayan beauty and Buddhist culture. Visit the cricket stadium, Norbulingka Institute, and nearby Triund for trekking. We provide Dharamshala taxi services for sightseeing, airport drops, and Kangra Valley tours.',
    imageKey: 'dharamshala',
    region: 'Himachal Pradesh',
    highlights: ['McLeod Ganj', 'Cricket Stadium', 'Norbulingka Institute', 'Triund Trek', 'Dalai Lama Temple'],
  },
  {
    slug: 'shimla',
    name: 'Shimla',
    shortDescription: 'Queen of Hills with colonial charm, toy train, and Jakhu Temple. Great for family trips and heritage walks.',
    longDescription: 'Shimla, the former summer capital of British India, is famous for its colonial architecture, the UNESCO-listed Kalka–Shimla toy train, and the Jakhu Temple. The Ridge and Mall Road are popular for strolls. Our cabs serve Shimla sightseeing, transfers from Chandigarh/Delhi, and routes to Manali and Kufri.',
    imageKey: 'shimla',
    region: 'Himachal Pradesh',
    highlights: ['Ridge', 'Mall Road', 'Jakhu Temple', 'Toy Train', 'Kufri'],
  },
  {
    slug: 'kangra',
    name: 'Kangra',
    shortDescription: 'Historic Kangra Fort, ancient temples, and tea gardens. A peaceful base for Dharamshala and Bir-Billing.',
    longDescription: 'Kangra Valley is known for the majestic Kangra Fort, the revered Kangra Devi Temple, and lush tea estates. It connects easily to Dharamshala, McLeod Ganj, and Bir-Billing for paragliding. We offer Kangra taxi services for fort and temple tours, and longer trips across the valley.',
    imageKey: 'kangra',
    region: 'Himachal Pradesh',
    highlights: ['Kangra Fort', 'Kangra Devi Temple', 'Tea Gardens', 'Bir-Billing'],
  },
  {
    slug: 'amritsar',
    name: 'Amritsar',
    shortDescription: 'Golden Temple, Wagah Border ceremony, and Punjabi culture. A must-visit for spirituality and history.',
    longDescription: 'Amritsar is the spiritual and cultural heart of Punjab, home to the Golden Temple (Harmandir Sahib), Jallianwala Bagh, and the Wagah Border ceremony. We provide Amritsar taxi services for temple visits, border tours, and airport or railway station transfers.',
    imageKey: 'amritsar',
    region: 'Punjab',
    highlights: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Partition Museum'],
  },
  {
    slug: 'dalhousie-khajjiar',
    name: 'Dalhousie & Khajjiar',
    shortDescription: 'Colonial hill station and the "Mini Switzerland" of India. Khajjiar, Kalatop, and waterfalls await.',
    longDescription: 'Dalhousie is a quiet hill station with colonial bungalows and panoramic views. Nearby Khajjiar is often called India\'s Mini Switzerland for its meadows and lake. Kalatop Wildlife Sanctuary and Panjpulla waterfall are popular. Our cabs cover Dalhousie–Khajjiar sightseeing and connections from Pathankot or Jammu.',
    imageKey: 'dalhousieKhajjiar',
    region: 'Himachal Pradesh',
    highlights: ['Khajjiar', 'Kalatop', 'Panjpulla', 'Dainkund Peak'],
  },
  {
    slug: 'jammu',
    name: 'Jammu',
    shortDescription: 'City of temples and gateway to Vaishno Devi. Ideal for pilgrimage and onward travel to Kashmir.',
    longDescription: 'Jammu is the winter capital of Jammu & Kashmir and the starting point for the Vaishno Devi pilgrimage. The city has historic temples, markets, and good connectivity. We offer Jammu taxi services for Vaishno Devi (Katra), local sightseeing, and trips to Srinagar or Dalhousie.',
    imageKey: 'jammu',
    region: 'Jammu & Kashmir',
    highlights: ['Vaishno Devi', 'Raghunath Temple', 'Bahu Fort', 'Katra'],
  },
  {
    slug: 'kashmir',
    name: 'Kashmir',
    shortDescription: 'Paradise on earth: Dal Lake, Gulmarg, Sonmarg, and houseboats. Perfect for honeymoons and family tours.',
    longDescription: 'Kashmir Valley offers iconic experiences: houseboats on Dal Lake, gondola rides in Gulmarg, and the meadows of Sonmarg and Pahalgam. Srinagar serves as the base for most tours. We provide Kashmir taxi packages for Gulmarg, Sonmarg, Pahalgam, and airport or city transfers.',
    imageKey: 'kashmir',
    region: 'Jammu & Kashmir',
    highlights: ['Gulmarg', 'Sonmarg', 'Dal Lake', 'Pahalgam', 'Houseboats'],
  },
  {
    slug: 'kasol',
    name: 'Kasol',
    shortDescription: 'Parvati Valley hub for treks, riverside cafés, and backpacker vibes. Gateway to Kheerganga, Tosh, and Malana.',
    longDescription: 'Kasol, in the Parvati Valley of Himachal Pradesh, is a popular base for trekkers and backpackers. The riverside village offers cafés, guesthouses, and easy access to Kheerganga, Tosh, Malana, and Manikaran. Our taxi services cover Kasol transfers from Bhuntar or Delhi, and trips to nearby villages and trek points.',
    imageKey: 'kasol',
    region: 'Himachal Pradesh',
    highlights: ['Parvati Valley', 'Kheerganga Trek', 'Tosh', 'Malana', 'Manikaran', 'Riverside Cafés'],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationImages(imageKey: DestinationImageKey) {
  return imageCdn[imageKey] ?? [];
}

/** Destinations sorted by DESTINATION_DISPLAY_ORDER (then by array index for any missing). */
export function getDestinationsSorted(): Destination[] {
  const order = DESTINATION_DISPLAY_ORDER;
  return [...destinations].sort((a, b) => {
    const i = order.indexOf(a.slug);
    const j = order.indexOf(b.slug);
    if (i === -1 && j === -1) return 0;
    if (i === -1) return 1;
    if (j === -1) return -1;
    return i - j;
  });
}
