# مكتبة النور — Maktabat Al-Nour
## Islamic E-Books Store — Full Setup Guide

---

## 📁 Project Structure

```
maktabat-alnour/
├── app/
│   ├── page.tsx                    ← Main store (books, cart, modal)
│   ├── layout.tsx                  ← HTML head, fonts, metadata
│   ├── globals.css                 ← CSS variables (gold, ink, parchment)
│   ├── success/
│   │   └── page.tsx                ← Post-payment confirmation page
│   └── api/
│       ├── create-checkout/
│       │   └── route.ts            ← Creates Stripe Checkout session
│       ├── webhook/
│       │   └── route.ts            ← Stripe webhook → sends email
│       └── verify-payment/
│           └── route.ts            ← Confirms payment on success page
├── data/
│   └── books.ts                    ← ✏️ Edit this to add/change books
├── lib/
│   ├── stripe.ts                   ← Stripe client
│   └── mailer.ts                   ← Gmail email sender
├── public/
│   └── books/                      ← Put your cover images here
│       ├── talha-ibn-ubaydallah/
│       │   ├── cover.jpg
│       │   └── preview-1.jpg
│       └── [other-book-slugs]/
├── .env.local                      ← ✏️ Fill in your secrets (never commit!)
├── package.json
└── README.md
```

---

## 🚀 Setup in 4 steps

### Step 1 — Install & run locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Step 2 — Set up Stripe

1. Create account at https://stripe.com
2. Go to **Developers → API keys**
3. Copy your **Secret key** (`sk_test_...`) → paste in `.env.local` as `STRIPE_SECRET_KEY`
4. Install Stripe CLI: https://stripe.com/docs/stripe-cli
5. Run in a separate terminal:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```
6. Copy the webhook signing secret (`whsec_...`) → paste in `.env.local` as `STRIPE_WEBHOOK_SECRET`

### Step 3 — Set up Gmail

1. Enable 2-Factor Authentication on your Gmail
2. Go to: **Google Account → Security → App Passwords**
3. Create a password for "Mail"
4. Copy the 16-character code → paste in `.env.local` as `EMAIL_PASSWORD`
5. Set `EMAIL_FROM` to your Gmail address

### Step 4 — Upload PDFs to Google Drive

1. Upload each PDF to Google Drive
2. Right-click → Share → **"Anyone with the link can view"**
3. Copy the file ID from the URL:
   `https://drive.google.com/file/d/**THIS_IS_THE_ID**/view`
4. Paste each ID in `.env.local`:
   ```
   BOOK_1_DRIVE_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms
   ```

---

## ✏️ How to add a new book

1. Open `data/books.ts`
2. Copy an existing book object
3. Change: `id`, `slug`, `titleAr`, `titleEn`, `subtitle`, `price`, `description`, `images`, `driveEnvKey`
4. Add your Drive file ID to `.env.local`:
   ```
   BOOK_9_DRIVE_ID=your_drive_file_id_here
   ```
5. Add cover image to `/public/books/your-slug/cover.jpg`
6. Done! The book appears automatically on the store.

---

## 🌐 Deploy to Vercel (free)

1. Push your code to GitHub (make sure `.env.local` is in `.gitignore`)
2. Go to https://vercel.com → New Project → Import from GitHub
3. Add all your `.env.local` variables in Vercel's **Environment Variables** settings
4. Deploy!
5. Update `NEXT_PUBLIC_SITE_URL` in Vercel env to your real URL
6. In Stripe Dashboard: add your production webhook URL:
   `https://your-site.vercel.app/api/webhook`

---

## 💳 Promo codes

Edit the `promoCodes` object in `data/books.ts`:

```typescript
export const promoCodes = {
  RAMADAN2025: { discountPercent: 33, description: "Ramadan Special — 33% off" },
  WELCOME10:   { discountPercent: 10, description: "Welcome discount — 10% off" },
  // Add your own:
  EID2025:     { discountPercent: 25, description: "Eid Special — 25% off" },
};
```

---

## 📧 Payment flow

```
Customer clicks Pay
    → Enters email
    → Redirected to Stripe Checkout (real card payment)
    → Stripe charges card
    → Stripe calls /api/webhook
    → Webhook reads book metadata
    → Sends email with Google Drive download link
    → Customer redirected to /success page
```

---

## 🆘 Support

- Stripe docs: https://stripe.com/docs
- Vercel docs: https://vercel.com/docs
- Gmail App Passwords: https://support.google.com/accounts/answer/185833
