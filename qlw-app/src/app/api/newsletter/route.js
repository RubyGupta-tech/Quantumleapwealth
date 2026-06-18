import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, email } = body;

    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'First name and email are required' },
        { status: 400 }
      );
    }

    // Check if subscriber already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      // If already subscribed, just return success so the user doesn't get confused
      return NextResponse.json({ message: 'Already subscribed!' }, { status: 200 });
    }

    // Save new subscriber
    const newSubscriber = await prisma.subscriber.create({
      data: {
        firstName,
        email,
      },
    });

    return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 201 });
  } catch (error) {
    console.error('Error in newsletter subscription API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
