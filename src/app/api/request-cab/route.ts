import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const PHONE_REGEX = /^[6-9]\d{9}$/; // Indian mobile: 10 digits, starts with 6-9

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

  const route = typeof b.route === 'string' ? b.route.trim() : null;
  const date = typeof b.date === 'string' ? b.date.trim() || null : null;
  const serviceType = typeof b.serviceType === 'string' ? b.serviceType.trim() || null : null;
  const query = typeof b.query === 'string' ? b.query.trim() || null : null;

  let carTypes: string[] = [];
  if (Array.isArray(b.carTypes)) {
    carTypes = b.carTypes.filter((c): c is string => typeof c === 'string');
  } else if (typeof b.carTypes === 'string') {
    try {
      const parsed = JSON.parse(b.carTypes) as unknown;
      carTypes = Array.isArray(parsed) ? parsed.filter((c): c is string => typeof c === 'string') : [];
    } catch {
      carTypes = [];
    }
  }
  if (carTypes.length === 0) errors.carType = 'Select at least one car type.';

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      phone,
      route: route || null,
      date: date || null,
      serviceType: serviceType || null,
      carTypes: JSON.stringify(carTypes),
      query: query || null,
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
    const { name, phone, route, date, serviceType, carTypes, query } = result.data as {
      name: string;
      phone: string;
      route: string | null;
      date: string | null;
      serviceType: string | null;
      carTypes: string;
      query: string | null;
    };

    await prisma.cabRequest.create({
      data: {
        name,
        phone,
        route,
        date,
        serviceType,
        carTypes,
        query,
      },
    });

    return NextResponse.json({ success: true, message: 'Request received. We\'ll call you shortly.' });
  } catch (e) {
    console.error('request-cab API error:', e);
    return NextResponse.json(
      { success: false, errors: { form: 'Something went wrong. Please try again or call us.' } },
      { status: 500 }
    );
  }
}
