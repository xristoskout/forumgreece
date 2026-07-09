import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { checkRateLimit, getIP } from '../../../lib/rate-limit';

const contactSchema = z.object({
  business_name: z.string().min(1).max(200).trim(),
  contact_name: z.string().min(1).max(200).trim(),
  email: z.string().email().max(320).trim(),
  phone: z.string().max(50).optional().default(''),
  business_type: z.string().max(100).optional().default(''),
  location: z.string().min(1).max(200).trim(),
  website: z.string().max(500).optional().default(''),
  preferred_plan: z.string().max(100).optional().default(''),
  message: z.string().min(1).max(5000).trim(),
  website_url: z.string().max(0).optional().default(''),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    const ip = getIP(request);
    const limit = await checkRateLimit(`contact:${ip}`, 5, 15 * 60 * 1000);

    if (!limit.allowed) {
      return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 });
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const { business_name, contact_name, email, phone, business_type, location, website, preferred_plan, message, website_url } = parsed.data;

    // Honeypot: bots fill this hidden field
    if (website_url) {
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeBusinessName = escapeHtml(business_name);
    const safeContactName = escapeHtml(contact_name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeBusinessType = escapeHtml(business_type);
    const safeLocation = escapeHtml(location);
    const safeWebsite = escapeHtml(website);
    const safePlan = escapeHtml(preferred_plan);
    const safeMessage = escapeHtml(message);

    const mailOptions = {
      from: `"GoGreeceNow Promotion" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Promotion Inquiry from ${safeBusinessName}`,
      text: `Business Name: ${business_name}\nContact: ${contact_name}\nEmail: ${email}\nPhone: ${phone}\nType: ${business_type}\nLocation: ${location}\nWebsite: ${website}\nPlan: ${preferred_plan}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #4f46e5;">New Promotion Inquiry</h2>
          <table style="width:100%; border-collapse: collapse; margin: 16px 0;">
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Business</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${safeBusinessName}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Contact</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${safeContactName}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${safeEmail}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${safePhone || '—'}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Type</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${safeBusinessType}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Location</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${safeLocation}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Website</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${safeWebsite || '—'}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Plan</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${safePlan || 'Not specified'}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${safeMessage}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
