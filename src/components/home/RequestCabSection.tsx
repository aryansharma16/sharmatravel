'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

const PHONE_PLACEHOLDER = '+91XXXXXXXXXX';
const WHATSAPP_PLACEHOLDER = '+91XXXXXXXXXX';

const TIME_SLOTS = [
  { value: '06:00', label: '6:00 AM' },
  { value: '07:00', label: '7:00 AM' },
  { value: '08:00', label: '8:00 AM' },
  { value: '09:00', label: '9:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '13:00', label: '1:00 PM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '16:00', label: '4:00 PM' },
  { value: '17:00', label: '5:00 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '19:00', label: '7:00 PM' },
  { value: '20:00', label: '8:00 PM' },
];

const CAR_TYPES = [
  { value: 'sedan', label: 'Sedan' },
  { value: 'suv', label: 'SUV' },
  { value: 'innova', label: 'Innova' },
  { value: 'tempo-traveller', label: 'Tempo Traveller' },
  { value: 'other', label: 'Other' },
];

export function RequestCabSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call – replace with actual endpoint later
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="request-cab" className="bg-slate-100 py-16 dark:bg-slate-900/50">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 dark:border-green-800 dark:bg-green-900/20">
            <p className="text-lg font-medium text-green-800 dark:text-green-200">
              We&apos;ll call you shortly to confirm.
            </p>
            <p className="mt-2 text-sm text-green-700 dark:text-green-300">
              Keep your phone handy. For immediate help, call or WhatsApp us.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href={`tel:${PHONE_PLACEHOLDER.replace(/\D/g, '')}`} external variant="primary">
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
        </div>
      </section>
    );
  }

  return (
    <section id="request-cab" className="bg-slate-100 py-16 dark:bg-slate-900/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Request a Cab
        </h2>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-400">
          Fill the form and we&apos;ll call you to confirm. No online booking.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
              label="Route"
              id="route"
              name="route"
              required
              placeholder="e.g. Delhi to Manali"
              className="sm:col-span-2"
            />
            <Input label="Date" id="date" name="date" type="date" required />
            <Select label="Time Slot" id="time_slot" name="time_slot" options={TIME_SLOTS} required />
            <Select
              label="Car Type"
              id="car_type"
              name="car_type"
              options={CAR_TYPES}
              required
              className="sm:col-span-2"
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Sending...' : 'Submit Request'}
            </Button>
            <Button
              href={`https://wa.me/${WHATSAPP_PLACEHOLDER.replace(/\D/g, '')}`}
              external
              variant="outline"
            >
              WhatsApp Instead
            </Button>
            <a
              href={`tel:${PHONE_PLACEHOLDER.replace(/\D/g, '')}`}
              className="text-sm text-primary-600 hover:underline dark:text-primary-400"
            >
              Call us directly
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
