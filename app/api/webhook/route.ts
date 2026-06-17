// app/api/webhook/route.ts
// Stripe calls this automatically after a successful payment.
// It reads the metadata, finds the Google Drive link, and emails the customer.
import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import { sendDownloadEmail } from "@/lib/mailer";
import books, { bundle } from "@/data/books";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Webhook error";
    console.error("Webhook signature failed:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  // ── Handle successful payment ────────────────────────────
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const meta = session.metadata;
    const customerEmail =
      session.customer_email || session.customer_details?.email;

    if (!customerEmail || !meta) {
      console.error("Missing email or metadata in session", session.id);
      return NextResponse.json({ received: true });
    }

    // Find the right Drive file ID from env
    let driveFileId: string | undefined;
    let bookTitle = "";
    let bookTitleAr = "";

    if (meta.isBundle === "true") {
      driveFileId = process.env[bundle.driveEnvKey];
      bookTitle = bundle.title;
      bookTitleAr = bundle.titleAr;
    } else {
      const book = books.find((b) => b.id === Number(meta.bookId));
      if (book) {
        driveFileId = process.env[book.driveEnvKey];
        bookTitle = book.subtitle;
        bookTitleAr = book.titleAr;
      }
    }

    if (!driveFileId) {
      console.error("No Drive file ID found for", meta.itemSlug);
      return NextResponse.json({ received: true });
    }

    // Send the email with download link
    try {
      await sendDownloadEmail({
        to: customerEmail,
        customerName: session.customer_details?.name || "",
        bookTitle,
        bookTitleAr,
        driveFileId,
      });
      console.log(
        `✅ Download email sent to ${customerEmail} for "${bookTitle}"`
      );
    } catch (emailErr) {
      console.error("Failed to send email:", emailErr);
    }
  }

  return NextResponse.json({ received: true });
}

// Stripe needs the raw body — disable Next.js body parsing
export const config = {
  api: { bodyParser: false },
};
