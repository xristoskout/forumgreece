import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, website_url } = await request.json();

    // Honeypot check: If 'website_url' is filled, it's likely a bot.
    if (website_url) {
      console.log('Bot detected, ignoring request.');
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    }

    // Configure the transporter for Papaki SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"GoGreeceNow Promotion" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER, // Where you want to receive the inquiries
      replyTo: email, // This allows you to reply directly to the sender
      subject: `New Promotion Inquiry from ${name}`,
      text: `Business Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #4f46e5;">New Promotion Inquiry</h2>
          <p><strong>Business Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
