'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const PHONE_PLACEHOLDER = '+91 9317670639';
const PHONE_PLACEHOLDER2 = '+91 8278709365';
const WHATSAPP_PLACEHOLDER = '+91 9317670639';

const PHONE_REGEX = /^[6-9]\d{9}$/;

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  form?: string;
};

function validateForm(data: { name: string; phone: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {};
  const name = data.name.trim();
  if (!name) errors.name = 'Name is required.';
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.';

  const phone = data.phone.replace(/\D/g, '');
  if (!phone) errors.phone = 'Phone number is required.';
  else if (!PHONE_REGEX.test(phone)) errors.phone = 'Enter a valid 10-digit Indian mobile number.';

  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  const message = data.message.trim();
  if (!message) errors.message = 'Message is required.';
  else if (message.length < 10) errors.message = 'Message must be at least 10 characters.';

  return errors;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = { name, phone, email, message };
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.replace(/\D/g, ''),
          email: formData.email.trim() || null,
          message: formData.message.trim(),
        }),
      });
      const json = await res.json();

      if (!res.ok) {
        if (json.errors && typeof json.errors === 'object') {
          setErrors(json.errors as FormErrors);
        } else {
          setErrors({ form: json.errors?.form || 'Something went wrong. Please try again.' });
        }
        setLoading(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setErrors({ form: 'Network error. Please try again or call us.' });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
        <p className="text-lg font-medium text-green-800 dark:text-green-200">
          Thank you. We&apos;ll get back to you shortly.
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
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Button href={`tel:${PHONE_PLACEHOLDER.replace(/\D/g, '')}`} external variant="primary">
          Call {PHONE_PLACEHOLDER}
        </Button>
        <Button href={`tel:${PHONE_PLACEHOLDER2.replace(/\D/g, '')}`} external variant="primary">
          Call {PHONE_PLACEHOLDER2}
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
          {errors.form && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200">
              {errors.form}
            </div>
          )}
          <div className="space-y-4">
            <Input
              label="Name"
              id="name"
              name="name"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
            />
            <Input
              label="Phone"
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={errors.phone}
            />
            <Input
              label="Email (optional)"
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            <div className="w-full">
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Route, date, number of passengers, or tour enquiry..."
                className={`w-full rounded-lg border bg-white px-3 py-2 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-1 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-400 ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-500'
                    : 'border-slate-300 focus:border-primary-500 focus:ring-primary-500 dark:border-slate-600 dark:focus:border-primary-400 dark:focus:ring-primary-400'
                }`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
              )}
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
