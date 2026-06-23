This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact Form Anti-Spam (added June 2026)

The contact form (`src/components/contact/ContactForm.tsx` →
`src/app/api/contact/route.ts`, Resend → `burt@purlieu.us`) uses the standard
BurlinPro anti-spam stack:

- **Honeypot** — off-screen `website` field (the visible `company` field is
  real, so the trap uses a different name); a non-empty value ⇒ bot. Tripped
  submissions return silent success, no email sent.
- **Time-trap** — client sends `elapsedMs` (time since form mount); submissions
  under 3s are silently dropped.
- **Validation** — required name/email, valid email format, length caps
  (name 100 / email 200 / company 150 / message 5000), and messages with >2
  links are dropped.
- **HTML escaping** — all user values are HTML-entity-escaped (`escapeHtml`)
  before interpolation into the email; subject is plain-text sanitized. Closed a
  pre-existing HTML-injection hole.

Not yet added (escalation levers if spam persists): IP rate-limiting, Cloudflare
Turnstile.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
