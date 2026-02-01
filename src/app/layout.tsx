import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FixedContactBar } from '@/components/FixedContactBar';
import { SITE_NAME, LOGO_URL } from '@/lib/brand';
const DEFAULT_DESCRIPTION =
  'Taxi and tour services in the Indian Himalayas — Himachal Pradesh and North India. We operate in the Himalayan region: Dalhousie, Dharamshala, Manali, Shimla, Kashmir. Reliable cabs, sightseeing and tour packages. Book or enquire now.';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Taxi & Tour Services in Dalhousie & Himachal`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'Dalhousie Northern Cabs',
    'DNC',
    'DNC taxi',
    'DNC cab',
    'Northern Cabs',
    'Northern Cabs Dalhousie',
    'Northern cabs Dalhousie',
    'Dalhousie Northern Cabs taxi',
    'Dalhousie Northern Cabs tour',
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
    'Himalayan taxi',
    'Himalayan cab',
    'taxi Himalayan region',
    'Himachal taxi',
    'Himachal taxi service',
    'Himachal cab',
    'Himachal car rental',
    'Himachal tours',
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
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dalhousienortherncabs.com'),
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: LOGO_URL, sizes: 'any', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: LOGO_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Taxi & Tour in Dalhousie & Himachal`,
    description: DEFAULT_DESCRIPTION,
    url: '/',
    images: [
      {
        url: LOGO_URL,
        width: 512,
        height: 512,
        alt: SITE_NAME,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Taxi & Tour in Dalhousie & Himachal`,
    description: DEFAULT_DESCRIPTION,
    images: [LOGO_URL],
  },
  manifest: '/site.webmanifest',
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dalhousienortherncabs.com';

function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    description: DEFAULT_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dalhousie',
      addressRegion: 'Himachal Pradesh',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'Place', name: 'Dalhousie' },
      { '@type': 'Place', name: 'Dharamshala' },
      { '@type': 'Place', name: 'Manali' },
      { '@type': 'Place', name: 'Shimla' },
      { '@type': 'Place', name: 'Himachal Pradesh' },
      { '@type': 'Place', name: 'North India' },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans min-h-screen flex flex-col`}>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FixedContactBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
