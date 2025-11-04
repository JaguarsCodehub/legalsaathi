# Email Setup Guide for Contact Form

## Overview
The contact form is now set up to send emails using Resend. When a user submits the form, you'll receive an email with their details.

## Setup Steps

### 1. Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Navigate to **API Keys** section
4. Click **Create API Key**
5. Copy your API key (starts with `re_`)

### 2. Configure Environment Variables

Create a `.env.local` file in the root of your project with:

```env
# Resend API Key
RESEND_API_KEY=re_your_api_key_here

# Contact Email Address (where you want to receive form submissions)
CONTACT_EMAIL=techbrains21@gmail.com
```

**Important**: 
- Replace `re_your_api_key_here` with your actual Resend API key
- The `.env.local` file is already in `.gitignore`, so it won't be committed to git

### 3. Update Email Address (Production)

When you're ready to switch to production email, simply update the `CONTACT_EMAIL` in `.env.local`:

```env
CONTACT_EMAIL=legalsaathi2002@gmail.com
```

### 4. Domain Verification (Optional - for Production)

For production, you'll want to verify your domain with Resend to use a custom "from" address:
- Currently using: `onboarding@resend.dev` (temporary, works for testing)
- After domain verification, you can use: `noreply@legalsaathi.com` or similar

## How It Works

1. User fills out the contact form on your website
2. Form data is sent to `/api/contact` endpoint
3. API validates the data and sends an email via Resend
4. Email is delivered to the address specified in `CONTACT_EMAIL`
5. User sees a success message on the form

## Email Format

The email you receive will include:
- **Name**: Customer's name
- **Email**: Customer's email (you can reply directly)
- **Phone**: Customer's phone number
- **Message**: Customer's message (if provided)
- **Timestamp**: When the form was submitted

## Testing

1. Make sure `.env.local` is set up with your Resend API key
2. Restart your development server: `npm run dev`
3. Fill out the contact form on your website
4. Check your email inbox (techbrains21@gmail.com)

## Troubleshooting

### Emails not sending?
- Check that `RESEND_API_KEY` is set correctly in `.env.local`
- Verify the API key is active in Resend dashboard
- Check server console for error messages
- Make sure you've restarted the dev server after adding env variables

### Getting rate limit errors?
- Free tier: 100 emails/day
- Upgrade to paid plan for more emails

### Want to change the email template?
- Edit `app/api/contact/route.ts`
- Modify the HTML template in the `html` field

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):
1. Add the same environment variables in your hosting platform's dashboard
2. Set `CONTACT_EMAIL=legalsaathi2002@gmail.com`
3. Verify your domain with Resend for better deliverability
4. Update the `from` address in the API route after domain verification

