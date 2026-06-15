"use client";
// app/success/page.tsx — Shown after Stripe redirects back
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");
  const [order, setOrder] = useState<{
    email?: string; name?: string; bookTitle?: string;
    isBundle?: boolean; amountPaid?: number;
  } | null>(null);

  useEffect(() => {
    if (!sessionId) { setStatus("error"); return; }
    fetch(`/api/verify-payment?session_id=${sessionId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) setStatus("error");
        else { setOrder(data); setStatus("ok"); }
      })
      .catch(() => setStatus("error"));
  }, [sessionId]);

  const gold = "#C9943A";
  const ink = "#1A1408";

  if (status === "loading") return (
    <div style={{ minHeight: "100vh", background: ink, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
      <div style={{ width: 46, height: 46, border: "3px solid rgba(201,148,58,.2)", borderTopColor: gold, borderRadius: "50%", animation: "spin .85s linear infinite" }} />
      <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: "1.2rem", color: gold }}>جارٍ التحقق…</div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );

  if (status === "error") return (
    <div style={{ minHeight: "100vh", background: "#F8F0DC", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
      <div>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>❌</div>
        <h1 style={{ fontFamily: "'Amiri',serif", fontSize: "1.8rem", color: ink, marginBottom: ".5rem" }}>Payment not found</h1>
        <p style={{ color: "#3D2E0A", opacity: .7, marginBottom: "1.5rem" }}>
          If you believe this is an error, please contact us at support@maktabat-alnour.com
        </p>
        <a href="/" style={{ background: gold, color: ink, padding: "12px 28px", borderRadius: 3, fontWeight: 700, textDecoration: "none" }}>← Return to Store</a>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#F8F0DC", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Scheherazade+New:wght@400;700&display=swap" rel="stylesheet" />
      <div style={{ background: "#FFFEF8", maxWidth: 560, width: "100%", borderRadius: 3, border: `1px solid ${gold}`, overflow: "hidden" }}>
        {/* Header */}
        <div style={{ background: ink, padding: "1.5rem 2rem", textAlign: "center", borderBottom: `1px solid ${gold}` }}>
          <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: 22, fontWeight: 700, color: "#E8C47A" }}>مكتبة النور</div>
          <div style={{ fontSize: 10, color: "#F5E6C8", letterSpacing: ".15em", opacity: .6, textTransform: "uppercase" }}>MAKTABAT AL-NOUR</div>
        </div>
        {/* Body */}
        <div style={{ padding: "2.5rem 2rem", textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".9rem" }}>✅</div>
          <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: "1.6rem", color: gold, marginBottom: ".4rem" }}>جزاك الله خيراً</div>
          <h1 style={{ fontFamily: "'Amiri',serif", fontSize: "1.6rem", color: ink, marginBottom: ".5rem" }}>Your order is confirmed!</h1>

          <div style={{ background: "#F8F0DC", border: "1px solid #D4C4A0", borderLeft: `4px solid ${gold}`, padding: "12px 16px", margin: "1.2rem 0", textAlign: "left", borderRadius: 2 }}>
            {order?.bookTitle && <div style={{ fontWeight: 700, color: ink, fontSize: 15, marginBottom: 2 }}>{order.bookTitle}</div>}
            {order?.amountPaid && <div style={{ fontSize: 13, color: "#3D2E0A", opacity: .7 }}>Paid: ${order.amountPaid.toFixed(2)} USD</div>}
          </div>

          <p style={{ fontSize: 14, color: "#3D2E0A", lineHeight: 1.75, opacity: .75, marginBottom: "1.5rem" }}>
            A download link has been sent to <strong>{order?.email}</strong>.<br />
            Check your inbox (and spam folder) — it should arrive within 1–2 minutes.<br /><br />
            The email contains a direct download link from Google Drive.
          </p>

          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ink, color: "#E8C47A", padding: "12px 28px", borderRadius: 3, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
            ← Return to Store
          </a>
          <div style={{ marginTop: "1.5rem", fontSize: 11, color: "#3D2E0A", opacity: .45 }}>
            Questions? Email us at support@maktabat-alnour.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#1A1408" }} />}>
      <SuccessContent />
    </Suspense>
  );
}
