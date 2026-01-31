import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Sharma Himalayan Cabs for taxi and tour bookings. Call, WhatsApp, or send an enquiry. Dalhousie, Dharamshala, Manali taxi services.',
  keywords: [
    'contact Sharma Himalayan Cabs',
    'Sharma Himalayan Cabs contact',
    'Himachal taxi booking',
    'cab enquiry',
    'taxi enquiry',
    'book cab Himachal',
    'book taxi Dalhousie',
    'book taxi Dharamshala',
    'book taxi Manali',
    'cab booking contact',
    'WhatsApp taxi booking',
    'call for cab',
    'taxi quote Himachal',
    'tour enquiry',
  ],
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
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
