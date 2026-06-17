// lib/mailer.ts
// Sends the download email after a successful Stripe payment
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD, // Gmail App Password (16 chars, no spaces)
  },
});

type SendDownloadEmailParams = {
  to: string;
  customerName: string;
  bookTitle: string;
  bookTitleAr: string;
  driveFileId: string;
};

export async function sendDownloadEmail({
  to,
  customerName,
  bookTitle,
  bookTitleAr,
  driveFileId,
}: SendDownloadEmailParams) {
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
  const viewUrl = `https://drive.google.com/file/d/${driveFileId}/view`;

  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  body { font-family: Georgia, serif; background: #F8F0DC; margin: 0; padding: 0; }
  .wrapper { max-width: 560px; margin: 40px auto; background: #FFFEF8; border: 1px solid #D4C4A0; border-top: 4px solid #C9943A; }
  .header { background: #1A1408; padding: 32px 40px; text-align: center; }
  .logo-ar { font-size: 28px; color: #E8C47A; margin-bottom: 4px; }
  .logo-en { font-size: 11px; color: #F5E6C8; letter-spacing: 3px; opacity: .6; text-transform: uppercase; }
  .body { padding: 36px 40px; }
  .bismillah { text-align: center; font-size: 22px; color: #C9943A; margin-bottom: 24px; }
  h1 { font-size: 22px; color: #1A1408; margin: 0 0 8px; }
  p { color: #3D2E0A; font-size: 15px; line-height: 1.75; margin: 0 0 16px; }
  .book-box { background: #F8F0DC; border: 1px solid #D4C4A0; border-left: 4px solid #C9943A; padding: 16px 20px; margin: 20px 0; }
  .book-title { font-size: 17px; font-weight: bold; color: #1A1408; }
  .book-ar { font-size: 20px; color: #8B6520; margin-top: 4px; direction: rtl; }
  .btn { display: block; background: #C9943A; color: #1A1408 !important; text-decoration: none; text-align: center; padding: 14px 32px; font-size: 15px; font-weight: bold; letter-spacing: .04em; margin: 24px 0 8px; border-radius: 3px; }
  .btn-secondary { display: block; text-align: center; color: #8B6520; font-size: 13px; text-decoration: underline; margin-bottom: 20px; }
  .note { font-size: 12px; color: #8B6520; opacity: .7; border-top: 1px solid #EDE0C4; padding-top: 16px; margin-top: 24px; }
  .footer { background: #100D05; padding: 20px 40px; text-align: center; }
  .footer p { color: #D4C4A0; font-size: 11px; opacity: .45; margin: 0; }
  .verse { font-size: 16px; color: #C9943A; opacity: .6; margin-bottom: 6px; }
</style>
</head>
<body>
<div class="wrapper">
  <div class="header">
    <div class="logo-ar">مكتبة النور</div>
    <div class="logo-en">Maktabat Al-Nour</div>
  </div>
  <div class="body">
    <div class="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
    <h1>Assalamu Alaikum${customerName ? ", " + customerName : ""}!</h1>
    <p>جزاك الله خيراً — Thank you for your purchase. Your e-book is ready to download below.</p>

    <div class="book-box">
      <div class="book-title">${bookTitle}</div>
      <div class="book-ar">${bookTitleAr}</div>
    </div>

    <a href="${downloadUrl}" class="btn">⬇ Download Your Book (PDF)</a>
    <a href="${viewUrl}" class="btn-secondary">Or view in Google Drive</a>

    <div class="note">
      <p>• If the download doesn't start, use the "View in Google Drive" link above.<br>
      • This is a digital product — no physical item will be shipped.<br>
      • Questions? Reply to this email or contact us at support@maktabat-alnour.com</p>
    </div>
  </div>
  <div class="footer">
    <div class="verse">وَقُل رَّبِّ زِدْنِي عِلْمًا</div>
    <p>© 2025 Maktabat Al-Nour · All rights reserved</p>
  </div>
</div>
</body>
</html>`;

  await transporter.sendMail({
    from: `"مكتبة النور — Maktabat Al-Nour" <${process.env.EMAIL_FROM}>`,
    to,
    subject: `📖 Your download is ready — ${bookTitle} | مكتبة النور`,
    html,
  });
}
