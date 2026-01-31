import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Sharma Himalayan Cabs | Taxi & Tour Services in Himachal',
    template: '%s | Sharma Himalayan Cabs',
  },
  description:
    'Reliable taxi and tour services in Himachal Pradesh. Dalhousie taxi, Dharamshala cab, Manali tours. Book your cab or enquire about tour packages.',
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
    'Manali car rental',
    'Shimla taxi',
    'Shimla cab',
    'Khajjiar taxi',
    'Khajjiar tour',
    'Kalatop',
    'Dainkund tour',
    'Himachal taxi',
    'Himachal taxi service',
    'Himachal cab',
    'Himachal car rental',
    'Himachal tours',
    'Himachal travels',
    'North India taxi',
    'North India cab',
    'taxi rental',
    'cab rental',
    'car rental Himachal',
    'taxi booking',
    'cab booking',
    'outstation cab',
    'one way taxi',
    'round trip taxi',
    'sightseeing tour',
    'tour packages Himachal',
    'rides Himachal',
    'airport taxi',
    'local taxi Himachal',
    'Innova hire',
    'SUV taxi',
    'tempo traveller Himachal',
    'Jalandhar to Dalhousie',
    'Amritsar to Dharamshala',
    'Delhi to Manali',
    'Delhi to Dharamshala',
    'Jammu to Dalhousie',
    'Shimla to Manali',
    'Sharma Himalayan Cabs',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sharmahimlayancabs.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
