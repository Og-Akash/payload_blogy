import { NextRequest, NextResponse } from 'next/server';
import { payload } from '@/lib/payload';

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const result = await payload.create({
      collection: 'feedbacks',
      data: body,
    });

    return NextResponse.json({ success: true, data: result });
  } catch (err) {
    console.error('Feedback submission error:', err);
    return NextResponse.json({ success: false, error: 'Submission failed' }, { status: 500 });
  }
}
