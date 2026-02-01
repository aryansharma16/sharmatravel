/**
 * Fleet / vehicles data for Dalhousie Northern Cabs.
 * Used on Services and About pages.
 */

export type VehicleCategory = 'sedan' | 'hatchback' | 'suv' | 'mpv' | 'tempo';

export type Vehicle = {
  id: string;
  name: string;
  shortName?: string;
  image: string;
  alt: string;
  category: VehicleCategory;
  capacity: string;
  description?: string;
};

const BASE = 'https://res.cloudinary.com/aryan2002cloud/image/upload';

export const vehicles: Vehicle[] = [
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    shortName: 'Innova Crysta',
    image: `${BASE}/v1769928980/innova_crysta_jov7wk.jpg`,
    alt: 'Toyota Innova Crysta taxi for Himachal tours',
    category: 'mpv',
    capacity: '6–7 passengers',
    description: 'Spacious, comfortable MPV ideal for families and group tours.',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    shortName: 'Tempo Traveller',
    image: `${BASE}/v1769928979/temp_traveler_rcv2uj.webp`,
    alt: 'Tempo Traveller for group tours Himachal',
    category: 'tempo',
    capacity: '12+ passengers',
    description: 'Ideal for large groups, weddings, and corporate trips.',
  },
  {
    id: 'jimny',
    name: 'Maruti Jimny',
    shortName: 'Jimny',
    image: `${BASE}/v1769928980/jimmny_tk3zhl.avif`,
    alt: 'Maruti Jimny SUV for hill roads',
    category: 'suv',
    capacity: '4 passengers',
    description: 'Compact SUV built for mountain terrain and narrow roads.',
  },
  {
    id: 'brezza-new',
    name: 'Maruti Brezza (2022)',
    shortName: 'Brezza 2022',
    image: `${BASE}/v1769928982/brezzanew_2022_xc2gwc.png`,
    alt: 'Maruti Brezza 2022 SUV taxi',
    category: 'suv',
    capacity: '4–5 passengers',
    description: 'Reliable SUV for city and outstation trips.',
  },
  {
    id: 'brezza-old',
    name: 'Maruti Brezza',
    shortName: 'Brezza',
    image: `${BASE}/v1769928980/brezza_old_suxloz.jpg`,
    alt: 'Maruti Brezza SUV cab',
    category: 'suv',
    capacity: '4–5 passengers',
    description: 'Comfortable SUV for local and outstation rides.',
  },
  {
    id: 'dzire-new',
    name: 'Maruti Dzire (New)',
    shortName: 'Dzire',
    image: `${BASE}/v1769928985/deizre_new_jycoko.jpg`,
    alt: 'Maruti Dzire sedan taxi',
    category: 'sedan',
    capacity: '4 passengers',
    description: 'Fuel-efficient sedan for point-to-point and city rides.',
  },
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    shortName: 'Swift Dzire',
    image: `${BASE}/v1769928980/dezire_swift1_kl3rvz.jpg`,
    alt: 'Swift Dzire sedan cab',
    category: 'sedan',
    capacity: '4 passengers',
    description: 'Compact sedan for economical travel.',
  },
  {
    id: 'etios',
    name: 'Toyota Etios',
    shortName: 'Etios',
    image: `${BASE}/v1769928980/etios_zzxqeg.jpg`,
    alt: 'Toyota Etios sedan taxi',
    category: 'sedan',
    capacity: '4 passengers',
    description: 'Dependable sedan for long-distance and city trips.',
  },
  {
    id: 'amaze',
    name: 'Honda Amaze',
    shortName: 'Amaze',
    image: `${BASE}/v1769928979/amaze_honda_j0cngj.jpg`,
    alt: 'Honda Amaze sedan cab',
    category: 'sedan',
    capacity: '4 passengers',
    description: 'Comfortable sedan with good cabin space.',
  },
  {
    id: 'amaze-2',
    name: 'Honda Amaze (2nd Gen)',
    shortName: 'Amaze 2',
    image: `${BASE}/v1769928982/amaze2_honda_mz9zpr.jpg`,
    alt: 'Honda Amaze second generation sedan',
    category: 'sedan',
    capacity: '4 passengers',
    description: 'Latest Amaze for a smooth, comfortable ride.',
  },
];

/** Display order for fleet sections (prefer MPV/Tempo first, then SUV, sedan). */
export const VEHICLE_DISPLAY_ORDER: string[] = [
  'innova-crysta',
  'tempo-traveller',
  'jimny',
  'brezza-new',
  'brezza-old',
  'dzire-new',
  'swift-dzire',
  'etios',
  'amaze',
  'amaze-2',
];

export function getVehiclesSorted(): Vehicle[] {
  const order = VEHICLE_DISPLAY_ORDER;
  return [...vehicles].sort((a, b) => {
    const i = order.indexOf(a.id);
    const j = order.indexOf(b.id);
    if (i === -1 && j === -1) return 0;
    if (i === -1) return 1;
    if (j === -1) return -1;
    return i - j;
  });
}

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}

export function getVehiclesByCategory(category: VehicleCategory): Vehicle[] {
  return vehicles.filter((v) => v.category === category);
}
