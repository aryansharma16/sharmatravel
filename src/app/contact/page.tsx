import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { YOUTUBE_URL, INSTAGRAM_URL } from '@/lib/social';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Dalhousie Northern Cabs for taxi and tour bookings. Call, WhatsApp, or send an enquiry. Dalhousie, Dharamshala, Manali taxi services.',
  keywords: [
    'contact Dalhousie Northern Cabs',
    'Dalhousie Northern Cabs contact',
    'Himachal taxi booking',
    'cab enquiry',
    'taxi enquiry',
    'book cab Dalhousie',
    'book taxi Dalhousie',
    'book taxi Dharamshala',
    'book taxi Manali',
    'cab booking contact',
    'WhatsApp taxi booking',
    'call for cab',
    'taxi quote Himachal',
    'tour enquiry',
  ],
  openGraph: {
    title: 'Contact | Dalhousie Northern Cabs',
    description: 'Contact Dalhousie Northern Cabs for taxi and tour bookings. Call, WhatsApp, or send an enquiry.',
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Call, WhatsApp, or send an enquiry. We&apos;ll respond as soon as possible.
      </p>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Follow us on{' '}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary-600 hover:underline dark:text-primary-400"
        >
          Instagram
        </a>
        {' '}and{' '}
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary-600 hover:underline dark:text-primary-400"
        >
          YouTube
        </a>
        .
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
