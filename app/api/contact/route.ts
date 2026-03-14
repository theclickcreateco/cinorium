import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, studio, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail', // or use host/port depending on configuration
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'cinoriumadmin@gmail.com', // Explicit instruction from user
            subject: `New Contact Form Submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Studio of Interest: ${studio || 'Not specified'}
Message: ${message}
            `,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Studio of Interest:</strong> ${studio || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Nodemailer error:', error);
        return NextResponse.json({ error: 'Oops! Something went wrong. Please try again later.' }, { status: 500 });
    }
}
