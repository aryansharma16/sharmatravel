import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { RequestCabSection } from '@/components/home/RequestCabSection';
import { PopularRoutesSection } from '@/components/home/PopularRoutesSection';
import { TourPackagesSection } from '@/components/home/TourPackagesSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';

export const metadata: Metadata = {
  title: 'Dalhousie Northern Cabs | Taxi & Tour Services in Dalhousie & Himachal',
  description:
    'Reliable taxi and tour services from Dalhousie. Dalhousie Northern Cabs — Dalhousie taxi, Dharamshala cab, Manali tours. Amritsar to Dharamshala, Delhi to Manali. Rides, sightseeing, packages. Book or enquire now.',
  keywords: [
    'Dalhousie Northern Cabs',
    'Northern cabs Dalhousie',
    'Dalhousie taxi',
    'Dalhousie taxi service',
    'Dalhousie cab',
    'Dalhousie car rental',
    'Dharamshala taxi',
    'Dharamshala cab',
    'Manali taxi',
    'Manali tour',
    'Manali cab',
    'Shimla taxi',
    'Shimla cab',
    'Khajjiar tour',
    'Kalatop Dainkund',
    'Amritsar to Dharamshala taxi',
    'Delhi to Manali cab',
    'Jalandhar to Dalhousie taxi',
    'Jammu to Dalhousie cab',
    'Himachal taxi',
    'Himachal cab',
    'Himachal tours',
    'North India taxi',
    'taxi rental Himachal',
    'cab rental',
    'cab booking',
    'outstation cab',
    'sightseeing tour Himachal',
    'tour packages',
    'request a cab',
    'book taxi Himachal',
  ],
  openGraph: {
    title: 'Dalhousie Northern Cabs | Taxi & Tour in Dalhousie & Himachal',
    description:
      'Reliable taxi and tour services from Dalhousie. Dalhousie taxi, Dharamshala cab, Manali tours. Call or WhatsApp to book.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RequestCabSection />
      <TourPackagesSection />
      <PopularRoutesSection />
      <ReviewsSection />
      <WhyChooseUsSection />
    </>
  );
}
