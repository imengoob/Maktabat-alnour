// app/api/create-checkout/route.ts
// Called when user clicks "Pay" — creates a Stripe Checkout session
import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import books, { bundle, promoCodes } from "@/data/books";

export async function POST(req: NextRequest) {
  try {
    const { bookId, isBundle, promoCode, customerEmail } = await req.json();

    // ── Find the item ──────────────────────────────────────
    let unitAmount: number;
    let productName: string;
    let productNameAr: string;
    let itemSlug: string;

    if (isBundle) {
      unitAmount = Math.round(bundle.price * 100); // Stripe uses cents
      productName = bundle.title;
      productNameAr = bundle.titleAr;
      itemSlug = "bundle";
    } else {
      const book = books.find((b) => b.id === bookId);
      if (!book)
        return NextResponse.json({ error: "Book not found" }, { status: 404 });
      unitAmount = Math.round(book.price * 100);
      productName = book.subtitle;
      productNameAr = book.titleAr;
      itemSlug = book.slug;
    }

    // ── Apply promo code ───────────────────────────────────
    let discountPercent = 0;
    if (promoCode && promoCodes[promoCode.toUpperCase()]) {
      discountPercent = promoCodes[promoCode.toUpperCase()].discountPercent;
      unitAmount = Math.round(unitAmount * (1 - discountPercent / 100));
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    // ── Create Stripe Checkout Session ────────────────────
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: customerEmail || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${productName} — ${productNameAr}`,
              description:
                "Bilingual PDF (Arabic & English) · Instant delivery by email",
              images: [`${siteUrl}/og-image.jpg`],
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        itemSlug,
        bookId: bookId ? String(bookId) : "bundle",
        isBundle: isBundle ? "true" : "false",
        promoCode: promoCode || "",
        discountPercent: String(discountPercent),
      },
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("Stripe error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
