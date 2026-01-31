import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { RequestCabSection } from '@/components/home/RequestCabSection';
import { PopularRoutesSection } from '@/components/home/PopularRoutesSection';
import { TourPackagesSection } from '@/components/home/TourPackagesSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';

export const metadata: Metadata = {
  title: 'Sharma Himalayan Cabs | Taxi & Tour Services in Himachal',
  description:
    'Reliable taxi, cab rental and tour services in Himachal. Dalhousie taxi, Dharamshala cab, Manali tours. Amritsar to Dharamshala taxi, Delhi to Manali cab. Rides, sightseeing, packages. Book or enquire now.',
  keywords: [
    'Dalhousie taxi',
    'Dalhousie taxi service',
    'Dalhousie cab',
    'Dalhousie car rental',
    'Dharamshala taxi',
    'Dharamshala cab service',
    'Dharamshala cab',
    'Manali taxi',
    'Manali tour package',
    'Manali cab',
    'Shimla taxi',
    'Shimla cab',
    'Khajjiar tour',
    'Kalatop Dainkund',
    'Amritsar to Dharamshala taxi',
    'Delhi to Manali cab',
    'Delhi to Dharamshala cab',
    'Jalandhar to Dalhousie taxi',
    'Jammu to Dalhousie cab',
    'Shimla to Manali taxi',
    'Himachal taxi',
    'Himachal taxi service',
    'Himachal cab',
    'Himachal car rental',
    'Himachal tours',
    'Himachal travels',
    'North India taxi',
    'taxi rental Himachal',
    'cab rental',
    'cab booking',
    'taxi booking',
    'outstation cab',
    'one way cab',
    'round trip taxi',
    'sightseeing tour Himachal',
    'tour packages',
    'rides',
    'local cab',
    'airport taxi Himachal',
    'request a cab',
    'book taxi Himachal',
    'Sharma Himalayan Cabs',
  ],
  openGraph: {
    title: 'Sharma Himalayan Cabs | Taxi & Tour Services in Himachal',
    description:
      'Reliable taxi and tour services in Himachal Pradesh. Dalhousie, Dharamshala, Manali. Call or WhatsApp to book.',
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
