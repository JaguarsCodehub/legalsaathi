import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: "LegalSaathi Contact Form <onboarding@resend.dev>", // You'll need to verify your domain with Resend
      to: [process.env.CONTACT_EMAIL || "techbrains21@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #f97316;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #374151;
                padding: 10px;
                background: white;
                border-left: 3px solid #f97316;
                border-radius: 4px;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                text-align: center;
                color: #6b7280;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0;">LegalSaathi Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value">${phone}</div>
              </div>
              ${message ? `
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              <div class="footer">
                <p>This email was sent from the LegalSaathi contact form.</p>
                <p>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: email, // This allows you to reply directly to the customer
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Email sent successfully",
        id: emailData.data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

