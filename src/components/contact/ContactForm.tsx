'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const PHONE_PLACEHOLDER = '+91 XXXXX XXXXX';
const WHATSAPP_PLACEHOLDER = '+91XXXXXXXXXX';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
        <p className="text-lg font-medium text-green-800 dark:text-green-200">
          Thank you. We&apos;ll get back to you shortly.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={`tel:${PHONE_PLACEHOLDER.replace(/\s/g, '')}`} external variant="primary">
            Call Now
          </Button>
          <Button
            href={`https://wa.me/${WHATSAPP_PLACEHOLDER.replace(/\D/g, '')}`}
            external
            variant="whatsapp"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Button href={`tel:${PHONE_PLACEHOLDER.replace(/\s/g, '')}`} external variant="primary">
          Call {PHONE_PLACEHOLDER}
        </Button>
        <Button
          href={`https://wa.me/${WHATSAPP_PLACEHOLDER.replace(/\D/g, '')}`}
          external
          variant="whatsapp"
        >
          WhatsApp
        </Button>
      </div>

      <section className="mt-10" aria-labelledby="enquiry-form">
        <h2 id="enquiry-form" className="text-xl font-semibold text-slate-900 dark:text-white">
          Send an Enquiry
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800 sm:p-8"
        >
          <div className="space-y-4">
            <Input label="Name" id="name" name="name" required placeholder="Your name" />
            <Input
              label="Phone"
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="10-digit mobile number"
            />
            <Input
              label="Email (optional)"
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
            />
            <div className="w-full">
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Route, date, number of passengers, or tour enquiry..."
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-primary-400 dark:focus:ring-primary-400"
              />
            </div>
          </div>
          <Button type="submit" variant="primary" className="mt-6" disabled={loading}>
            {loading ? 'Sending...' : 'Send Enquiry'}
          </Button>
        </form>
      </section>
    </>
  );
}
