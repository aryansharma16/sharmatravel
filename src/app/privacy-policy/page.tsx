import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Sharma Himalayan Cabs. How we collect, use, and protect your information when you use our taxi and tour services.',
  keywords: [
    'Sharma Himalayan Cabs privacy',
    'privacy policy',
    'taxi booking privacy',
    'cab booking data',
    'Pankaj Sharma',
    'Himachal taxi privacy',
    'data protection',
    'personal information taxi',
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="prose prose-slate mt-8 dark:prose-invert max-w-none">
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Introduction
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Sharma Himalayan Cabs (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is operated by <strong>Pankaj Sharma</strong>. This Privacy Policy explains how we collect, use, and protect your information when you use our website or contact us for taxi and tour services.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Information We Collect
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            We may collect information that you provide when you:
          </p>
          <ul className="mt-2 list-inside list-disc text-slate-600 dark:text-slate-400">
            <li>Fill out the &quot;Request a Cab&quot; or contact form (name, phone, route, date, time, car type, message)</li>
            <li>Call or WhatsApp us</li>
            <li>Use our website (e.g. device type, IP address, pages visited — if we use analytics)</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            How We Use Your Information
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            We use your information to:
          </p>
          <ul className="mt-2 list-inside list-disc text-slate-600 dark:text-slate-400">
            <li>Respond to your cab or tour enquiries and confirm bookings</li>
            <li>Contact you by phone or WhatsApp regarding your trip</li>
            <li>Improve our services and website</li>
            <li>Comply with applicable laws</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Sharing of Information
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            We do not sell your personal information. We may share your contact and trip details with our drivers or partners only to fulfil your booking. We may disclose information if required by law.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Data Security
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            We take reasonable steps to protect your data. Communication over the internet is not fully secure; we encourage you to use secure channels when sharing sensitive details.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Your Rights
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            You may ask us what data we hold about you and request correction or deletion, subject to legal and operational requirements. Contact us via the details on our Contact page.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Changes to This Policy
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will reflect the latest version. Continued use of our services after changes constitutes acceptance.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Contact
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            For privacy-related queries, contact Sharma Himalayan Cabs, owner Pankaj Sharma, via the <a href="/contact" className="text-primary-600 hover:underline dark:text-primary-400">Contact</a> page.
          </p>
        </section>
      </div>
    </div>
  );
}
