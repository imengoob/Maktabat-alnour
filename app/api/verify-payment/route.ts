// app/api/verify-payment/route.ts
// The success page calls this to confirm the payment really happened
import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");

  if (!sessionId)
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 402 }
      );
    }

    return NextResponse.json({
      email:
        session.customer_email || session.customer_details?.email,
      name: session.customer_details?.name,
      bookTitle:
        session.metadata?.isBundle === "true"
          ? "Complete Bundle (8 books)"
          : session.metadata?.itemSlug,
      isBundle: session.metadata?.isBundle === "true",
      amountPaid: (session.amount_total || 0) / 100,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
