import { NextResponse } from 'next/server';

// Email validation helper
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simulated newsletter subscribers database
const subscribers = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    if (subscribers.some(sub => sub.email === email)) {
      return NextResponse.json(
        { error: 'Already subscribed to newsletter' },
        { status: 409 }
      );
    }

    // Create subscriber record
    const subscriberData = {
      id: Date.now(),
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active',
    };

    // Save to in-memory store (in production, use database)
    subscribers.push(subscriberData);

    // TODO: Send welcome email
    console.log('New newsletter subscriber:', email);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing to our newsletter!',
        id: subscriberData.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return subscriber count
    return NextResponse.json(
      {
        success: true,
        count: subscribers.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}
