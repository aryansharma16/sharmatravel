'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { CustomMultiSelectDropdown } from '@/components/ui/CustomMultiSelectDropdown';

const PHONE_PLACEHOLDER = '9317670639';
const WHATSAPP_PLACEHOLDER = '9317670639';

const SERVICE_TYPES = [
  { value: 'pic-drop', label: 'Pic drop only' },
  { value: 'package', label: 'Package' },
  { value: 'destination', label: 'Destination' },
  { value: 'sightseeing', label: 'Sightseeing' },
  { value: 'airport-pickup', label: 'Airport Pickup' },
  { value: 'airport-drop', label: 'Airport Drop' },
  { value: 'hotel-pickup', label: 'Hotel Pickup' },
  { value: 'hotel-drop', label: 'Hotel Drop' },
  { value: 'city-tour', label: 'City Tour' },
  { value: 'other', label: 'Other' },
];

const CARS: { value: string; label: string }[] = [
  { value: 'swift-dzire-new', label: 'Swift Dzire New' },
  { value: 'brezza', label: 'Brezza' },
  { value: 'honda-amaze', label: 'Honda Amaze' },
  { value: 'swift-desire', label: 'Swift Desire' },
  { value: 'innova-crysta', label: 'Innova Crysta' },
  { value: 'innova-hycross', label: 'Innova Hycross' },
  { value: 'jimny', label: 'Jimny' },
  { value: 'kia-carens', label: 'Kia Carens' },
  { value: 'ertiga', label: 'Ertiga' },
  { value: 'force-armania', label: 'Force Armania' },
  { value: 'hyundai-aura', label: 'Hyundai Aura' },
  { value: 'scorpio-n', label: 'Scorpio N' },
  { value: 'tempo-traveller', label: 'Tempo Traveller' },
  { value: 'alto', label: 'Alto' },
  { value: 'etios', label: 'Etios' },
  { value: 'baleno', label: 'Baleno' },
  { value: 'glanza', label: 'Glanza' },
  { value: 'force-gurkha', label: 'Force Gurkha' },
  { value: 'bus', label: 'Bus' },
  { value: 'other', label: 'Other' },
];

const PHONE_REGEX = /^[6-9]\d{9}$/;

type FormErrors = {
  name?: string;
  phone?: string;
  route?: string;
  date?: string;
  serviceType?: string;
  carType?: string;
  query?: string;
  form?: string;
};

function validateForm(data: {
  name: string;
  phone: string;
  route: string;
  date: string;
  serviceType: string;
  carTypes: string[];
  query: string;
}): FormErrors {
  const errors: FormErrors = {};
  const name = data.name.trim();
  if (!name) errors.name = 'Name is required.';
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.';

  const phone = data.phone.replace(/\D/g, '');
  if (!phone) errors.phone = 'Phone number is required.';
  else if (!PHONE_REGEX.test(phone)) errors.phone = 'Enter a valid 10-digit Indian mobile number.';

  if (data.carTypes.length === 0) errors.carType = 'Select at least one car type.';

  return errors;
}

export function RequestCabSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [route, setRoute] = useState('');
  const [date, setDate] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [selectedCars, setSelectedCars] = useState<string[]>([]);
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = {
      name,
      phone,
      route,
      date,
      serviceType,
      carTypes: selectedCars,
      query,
    };
    const validationErrors = validateForm({
      ...formData,
      route: route || '',
      date: date || '',
      serviceType: serviceType || '',
      query: query || '',
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/request-cab', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.replace(/\D/g, ''),
          route: formData.route.trim() || null,
          date: formData.date || null,
          serviceType: formData.serviceType || null,
          carTypes: formData.carTypes,
          query: formData.query.trim() || null,
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
          {errors.form && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200">
              {errors.form}
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
              label="Route"
              id="route"
              name="route"
              placeholder="e.g. Delhi to Manali"
              className="sm:col-span-2"
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              error={errors.route}
            />
            <div className="w-full sm:col-span-1">
              <Input
                label="Date"
                id="date"
                name="date"
                type="date"
                className="min-h-[42px] w-full"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                error={errors.date}
              />
            </div>
            <Select
              label="Service Type"
              id="service_type"
              name="service_type"
              options={SERVICE_TYPES}
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              error={errors.serviceType}
            />
            <div>
              <CustomMultiSelectDropdown
                label="Car Type"
                name="car_type"
                options={CARS}
                value={selectedCars}
                onChange={setSelectedCars}
                required
                placeholder="Search and select cars..."
                error={errors.carType}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="query" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Query / Message
              </label>
              <textarea
                id="query"
                name="query"
                rows={4}
                placeholder="Any special requests, pickup time, or details..."
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-primary-400 dark:focus:ring-primary-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {errors.query && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.query}</p>
              )}
            </div>
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
              className="text-sm font-medium text-red-600 hover:underline hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              Call us directly
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
