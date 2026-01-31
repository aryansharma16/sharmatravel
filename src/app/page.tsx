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
    'Reliable taxi and tour services in Himachal Pradesh. Dalhousie taxi service, Dharamshala cab, Manali tour package. Amritsar to Dharamshala taxi, Delhi to Manali cab. Book or enquire now.',
  keywords: [
    'Dalhousie taxi service',
    'Dharamshala cab service',
    'Manali tour package',
    'Amritsar to Dharamshala taxi',
    'Delhi to Manali cab',
    'Himachal taxi service',
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
      <PopularRoutesSection />
      <TourPackagesSection />
      <ReviewsSection />
      <WhyChooseUsSection />
    </>
  );
}
