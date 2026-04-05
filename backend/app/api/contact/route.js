import { NextResponse } from 'next/server';

// Email validation helper
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simulated database - in production, use a real database
const contacts = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create contact record
    const contactData = {
      id: Date.now(),
      name,
      email,
      phone: phone || '',
      company: company || '',
      subject,
      message,
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    // Save to in-memory store (in production, save to database)
    contacts.push(contactData);

    // TODO: Send email notification to admin
    console.log('New contact submission:', contactData);

    // TODO: Send confirmation email to user
    console.log(`Sent confirmation email to ${email}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.',
        id: contactData.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return recent contacts (admin only in production)
    return NextResponse.json(
      {
        success: true,
        count: contacts.length,
        contacts: contacts.slice(-10), // Last 10 contacts
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
