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
    'Dalhousie taxi service',
    'Dharamshala cab service',
    'Manali tour package',
    'Himachal taxi service',
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
