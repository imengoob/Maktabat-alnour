import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مكتبة النور | Maktabat Al-Nour — Islamic E-Books",
  description:
    "Premium bilingual Islamic e-books (Arabic & English) on the lives of the Companions of the Prophet ﷺ. Instant PDF delivery after secure payment.",
  openGraph: {
    title: "مكتبة النور | Maktabat Al-Nour",
    description: "Premium Islamic e-books — Companions of the Prophet ﷺ",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Scheherazade+New:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
