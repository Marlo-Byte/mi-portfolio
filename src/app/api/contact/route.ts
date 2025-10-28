import { NextRequest, NextResponse } from 'next/server';
import { ContactForm } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Nodemailer, etc.
    // 2. Save to a database
    // 3. Send to a webhook service

    // For now, we'll just log the message and return success
    console.log('New contact form submission:', {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending (replace with actual email service)
    await simulateEmailSending(body);

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Simulate email sending function
async function simulateEmailSending(data: ContactForm): Promise<void> {
  // This is a simulation - replace with actual email service
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Email would be sent to: contact@example.com`);
      console.log(`Subject: ${data.subject}`);
      console.log(`From: ${data.name} <${data.email}>`);
      console.log(`Message: ${data.message}`);
      resolve();
    }, 1000);
  });
}

// Optional: Add GET method for testing
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is working' },
    { status: 200 }
  );
}
