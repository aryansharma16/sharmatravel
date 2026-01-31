import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const PHONE_REGEX = /^[6-9]\d{9}$/;

function validate(body: unknown): { ok: true; data: Record<string, unknown> } | { ok: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  const b = body as Record<string, unknown> | null;
  if (!b || typeof b !== 'object') {
    return { ok: false, errors: { form: 'Invalid request body.' } };
  }

  const name = typeof b.name === 'string' ? b.name.trim() : '';
  if (!name) errors.name = 'Name is required.';
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.';

  const phone = typeof b.phone === 'string' ? b.phone.replace(/\D/g, '') : '';
  if (!phone) errors.phone = 'Phone number is required.';
  else if (!PHONE_REGEX.test(phone)) errors.phone = 'Enter a valid 10-digit Indian mobile number.';

  const message = typeof b.message === 'string' ? b.message.trim() : '';
  if (!message) errors.message = 'Message is required.';
  else if (message.length < 10) errors.message = 'Message must be at least 10 characters.';

  const email = typeof b.email === 'string' ? b.email.trim() || null : null;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      phone,
      email,
      message,
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = validate(body);
    if (!result.ok) {
      return NextResponse.json({ success: false, errors: result.errors }, { status: 400 });
    }
    const { name, phone, email, message } = result.data as {
      name: string;
      phone: string;
      email: string | null;
      message: string;
    };

    await prisma.contactEnquiry.create({
      data: {
        name,
        phone,
        ...(email ? { email } : {}),
        message,
      },
    });

    return NextResponse.json({ success: true, message: 'Enquiry received. We\'ll get back to you shortly.' });
  } catch (e) {
    console.error('contact API error:', e);
    return NextResponse.json(
      { success: false, errors: { form: 'Something went wrong. Please try again or call us.' } },
      { status: 500 }
    );
  }
}
