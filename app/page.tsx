"use client";
import { useState } from "react";
import books, { bundle, promoCodes } from "@/data/books";
import type { Book } from "@/data/books";

type Lang = "en" | "ar" | "fr" | "tr";

const t = {
  en: {
    promo: "Ramadan Special — 3 Books for the price of 2 · Code:",
    books: "Books", about: "About", reviews: "Reviews", bundles: "Bundles", cart: "Cart",
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    heroTitle1: "Illuminate Your Mind with", heroTitle2: "Premium Islamic Knowledge ✦",
    heroSub: "Premium multilingual Islamic e-books — biographies, Quranic reflections, and more, crafted for the modern Muslim reader.",
    heroCta: "✦ Browse the Library",
    collectionEye: "Our Collection", collectionTitle: "The Library of Light",
    whyEye: "Why choose us", whyTitle: "Crafted with care for the Ummah",
    feat1T: "Multilingual PDFs", feat1D: "Books available in Arabic, English, Turkish and more — accessible to a global Muslim audience.",
    feat2T: "Instant Delivery", feat2D: "After payment, Shopier sends your PDF automatically by email.",
    feat3T: "Secure Payment", feat3D: "Powered by Shopier — trusted, encrypted. Your card is never stored.",
    feat4T: "Scholarly Content", feat4D: "Written with accuracy and respect for the Sunnah.",
    bundleTag: "🌟 Best Value", bundleTitle: "Companions of the Prophet — The Ten Promised Jannah",
    bundleSub: "All 10 Companions in one book — Arabic & English. Perfect for study, gifts, or the whole family.",
    bundleBtn: "Get the Bundle →",
    reviewsEye: "Reader Reviews", reviewsTitle: "Words from our readers",
    nlAr: "اشترك في نشرتنا", nlTitle: "Get notified on new releases",
    nlSub: "New biographies added regularly. Be the first to know.",
    nlBtn: "Subscribe", nlPlaceholder: "your@email.com",
    buyNow: "Buy Now →",
    modalOrder: "You will be redirected to Shopier to pay securely.",
    payBtn: "🔒 Buy on Shopier",
    secure: "Secure payment · PDF sent automatically by email",
    invalidEmail: "Please enter a valid email address.",
    oneTime: "One-time · No subscription",
    includes: ["Arabic PDF", "English PDF", "Instant delivery by email"],
  },
  ar: {
    promo: "عرض رمضان — 3 كتب بسعر 2 · الكود:",
    books: "الكتب", about: "عن المكتبة", reviews: "التقييمات", bundles: "الحزم", cart: "السلة",
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    heroTitle1: "أنِر عقلك بـ", heroTitle2: "المعرفة الإسلامية الراقية ✦",
    heroSub: "كتب إلكترونية إسلامية متعددة اللغات — سير، تأملات قرآنية، وأكثر — صُممت للقارئ المسلم المعاصر.",
    heroCta: "✦ تصفح المكتبة",
    collectionEye: "مجموعتنا", collectionTitle: "مكتبة النور",
    whyEye: "لماذا تختارنا", whyTitle: "صُنع بعناية للأمة",
    feat1T: "كتب متعددة اللغات", feat1D: "كتب متاحة بالعربية والإنجليزية والتركية وأكثر.",
    feat2T: "توصيل فوري", feat2D: "بعد الدفع، Shopier يرسل PDF تلقائيًا على بريدك.",
    feat3T: "دفع آمن", feat3D: "مدعوم بـ Shopier — مشفر وموثوق. بطاقتك لن تُحفظ أبدًا.",
    feat4T: "محتوى موثوق", feat4D: "كُتب بدقة واحترام للسنة النبوية.",
    bundleTag: "🌟 أفضل قيمة", bundleTitle: "صحابة النبي — العشرة المبشرون بالجنة",
    bundleSub: "10 صحابة في كتاب واحد — عربي وإنجليزي. مثالي للدراسة والهدايا.",
    bundleBtn: "احصل على الحزمة ←",
    reviewsEye: "آراء القراء", reviewsTitle: "كلمات من قرائنا",
    nlAr: "اشترك في نشرتنا", nlTitle: "كن أول من يعلم بالإصدارات الجديدة",
    nlSub: "سير جديدة تُضاف باستمرار.",
    nlBtn: "اشترك", nlPlaceholder: "بريدك الإلكتروني",
    buyNow: "اشتر الآن ←",
    modalOrder: "ستُحال إلى Shopier للدفع بأمان.",
    payBtn: "🔒 اشتر عبر Shopier",
    secure: "دفع آمن · PDF يُرسل تلقائيًا على بريدك",
    invalidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
    oneTime: "دفعة واحدة · بدون اشتراك",
    includes: ["PDF عربي", "PDF إنجليزي", "توصيل فوري بالبريد"],
  },
  fr: {
    promo: "Spécial Ramadan — 3 livres pour le prix de 2 · Code :",
    books: "Livres", about: "À propos", reviews: "Avis", bundles: "Packs", cart: "Panier",
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    heroTitle1: "Éclairez votre esprit avec", heroTitle2: "la Connaissance Islamique ✦",
    heroSub: "E-books multilingues premium sur les vies des Sahabah — conçus pour le lecteur musulman moderne.",
    heroCta: "✦ Explorer la Bibliothèque",
    collectionEye: "Notre Collection", collectionTitle: "La Bibliothèque de la Lumière",
    whyEye: "Pourquoi nous choisir", whyTitle: "Conçu avec soin pour l'Oumma",
    feat1T: "PDFs multilingues", feat1D: "Livres disponibles en arabe, anglais, turc et plus.",
    feat2T: "Livraison instantanée", feat2D: "Après paiement, Shopier envoie votre PDF automatiquement par email.",
    feat3T: "Paiement sécurisé", feat3D: "Propulsé par Shopier — chiffré, fiable. Votre carte n'est jamais stockée.",
    feat4T: "Contenu sérieux", feat4D: "Écrit avec précision et respect de la Sunnah.",
    bundleTag: "🌟 Meilleure valeur", bundleTitle: "Compagnons du Prophète — Les Dix Promis au Paradis",
    bundleSub: "10 Compagnons en un livre — arabe & anglais. Idéal pour étudier, offrir.",
    bundleBtn: "Obtenir le Pack →",
    reviewsEye: "Avis des lecteurs", reviewsTitle: "Ce que disent nos lecteurs",
    nlAr: "اشترك في نشرتنا", nlTitle: "Soyez notifié des nouvelles sorties",
    nlSub: "De nouvelles biographies ajoutées régulièrement.",
    nlBtn: "S'abonner", nlPlaceholder: "votre@email.com",
    buyNow: "Acheter →",
    modalOrder: "Vous serez redirigé vers Shopier pour payer en toute sécurité.",
    payBtn: "🔒 Acheter sur Shopier",
    secure: "Paiement sécurisé · PDF envoyé automatiquement par email",
    invalidEmail: "Veuillez saisir une adresse email valide.",
    oneTime: "Achat unique · Sans abonnement",
    includes: ["PDF arabe", "PDF anglais", "Livraison instantanée par email"],
  },
  tr: {
    promo: "Ramazan Özel — 2 kitap alana 1 bedava · Kod:",
    books: "Kitaplar", about: "Hakkında", reviews: "Yorumlar", bundles: "Paketler", cart: "Sepet",
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    heroTitle1: "Zihninizi Aydınlatın", heroTitle2: "Yüksek İslami Bilgi ile ✦",
    heroSub: "Sahabenin hayatlarına dair çok dilli e-kitaplar — modern Müslüman okuyucu için tasarlandı.",
    heroCta: "✦ Kütüphaneyi Keşfet",
    collectionEye: "Koleksiyonumuz", collectionTitle: "Nur Kütüphanesi",
    whyEye: "Neden bizi seçmelisiniz", whyTitle: "Ümmet için özenle hazırlandı",
    feat1T: "Çok Dilli PDF'ler", feat1D: "Kitaplar Arapça, İngilizce, Türkçe ve daha fazlasında mevcut.",
    feat2T: "Anında Teslimat", feat2D: "Ödeme sonrası Shopier PDF'nizi otomatik olarak e-postanıza gönderir.",
    feat3T: "Güvenli Ödeme", feat3D: "Shopier güvencesiyle — şifreli ve güvenilir. Kartınız asla saklanmaz.",
    feat4T: "Güvenilir İçerik", feat4D: "Sünnete saygı ve doğrulukla yazılmıştır.",
    bundleTag: "🌟 En İyi Değer", bundleTitle: "Peygamberin Ashabı — Cennetle Müjdelenen On Kişi",
    bundleSub: "10 Sahabe tek kitapta — Arapça ve İngilizce PDF. Eğitim ve hediye için mükemmel.",
    bundleBtn: "Paketi Al →",
    reviewsEye: "Okuyucu Yorumları", reviewsTitle: "Okuyucularımızdan",
    nlAr: "اشترك في نشرتنا", nlTitle: "Yeni çıkışlardan haberdar olun",
    nlSub: "Yeni biyografiler düzenli olarak ekleniyor.",
    nlBtn: "Abone Ol", nlPlaceholder: "e-posta@adresiniz.com",
    buyNow: "Satın Al →",
    modalOrder: "Güvenli ödeme için Shopier'a yönlendirileceksiniz.",
    payBtn: "🔒 Shopier'da Satın Al",
    secure: "Güvenli ödeme · PDF e-postanıza otomatik gönderilir",
    invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
    oneTime: "Tek seferlik · Abonelik yok",
    includes: ["Arapça PDF", "İngilizce PDF", "E-posta ile anında teslimat"],
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [modalBook, setModalBook] = useState<Book | null>(null);
  const [isBundle, setIsBundle] = useState(false);
  const [cart, setCart] = useState<number[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [nlEmail, setNlEmail] = useState("");
  const [userReviews, setUserReviews] = useState<Record<number, { author: string; location: string; rating: number; text: string; date: string }[]>>({});
  const [reviewForm, setReviewForm] = useState({ author: "", location: "", rating: 5, text: "" });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const tx = t[lang];
  const isRtl = lang === "ar";

  function goToShopier() {
    const url = isBundle ? bundle.shopierUrl : modalBook?.shopierUrl;
    if (url) window.open(url, "_blank");
  }

  function openBook(book: Book) {
    setModalBook(book);
    setIsBundle(false);
    setReviewForm({ author: "", location: "", rating: 5, text: "" });
    setReviewSubmitted(false);
    setShowReviewForm(false);
  }

  function closeModal() {
    setModalBook(null);
    setIsBundle(false);
  }

  function openBundleModal() {
    setModalBook(null);
    setIsBundle(true);
  }

  function addToCart(bookId: number) {
    setCart((c) => c.includes(bookId) ? c : [...c, bookId]);
  }

  function submitReview(bookId: number) {
    if (!reviewForm.author.trim() || !reviewForm.text.trim()) return;
    const newReview = {
      author: reviewForm.author.trim(),
      location: reviewForm.location.trim() || "Anonymous",
      rating: reviewForm.rating,
      text: reviewForm.text.trim(),
      date: new Date().toISOString().split("T")[0],
    };
    setUserReviews((prev) => ({
      ...prev,
      [bookId]: [...(prev[bookId] || []), newReview],
    }));
    setReviewForm({ author: "", location: "", rating: 5, text: "" });
    setReviewSubmitted(true);
    setShowReviewForm(false);
    setTimeout(() => setReviewSubmitted(false), 4000);
  }

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>

     

      {/* ── HEADER ── */}
      <header style={{ background: "var(--ink)", borderBottom: "2px solid var(--gold)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, padding: "0 1.2rem" }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: 20, fontWeight: 700, color: "var(--gold-light)", lineHeight: 1 }}>مكتبة النور</div>
            <div style={{ fontSize: 9, color: "var(--gold-pale)", letterSpacing: ".15em", textTransform: "uppercase", opacity: .65 }}>MAKTABAT AL-NOUR</div>
          </div>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }} className="desktop-nav">
            <style>{`
              @media(max-width:700px){.desktop-nav{display:none!important}.mobile-controls{display:flex!important}}
              @media(min-width:701px){.mobile-controls{display:none!important}.mobile-menu{display:none!important}}
            `}</style>
            {(["en","ar","fr","tr"] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)}
                style={{ background: lang===l?"var(--gold)":"transparent", color: lang===l?"var(--ink)":"var(--parchment-dark)", border: "1px solid "+(lang===l?"var(--gold)":"rgba(255,255,255,.15)"), padding: "4px 9px", borderRadius: 2, fontSize: 11, fontWeight: 700, cursor: "pointer", textTransform: "uppercase" }}>
                {l.toUpperCase()}
              </button>
            ))}
            {(["books","about","reviews","bundle"] as const).map((id) => (
              <a key={id} href={`#${id}`} style={{ color: "var(--parchment-dark)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
                {id==="books"?tx.books:id==="about"?tx.about:id==="reviews"?tx.reviews:tx.bundles}
              </a>
            ))}
            <button onClick={() => setCartOpen(true)}
              style={{ background: "var(--gold)", color: "var(--ink)", border: "none", padding: "8px 16px", borderRadius: 3, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              🛒 {tx.cart}{cart.length>0&&<span style={{ background:"var(--ink)",color:"var(--gold)",borderRadius:"50%",width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,marginLeft:4 }}>{cart.length}</span>}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="mobile-controls" style={{ display: "none", alignItems: "center", gap: 10 }}>
            <button onClick={() => setCartOpen(true)}
              style={{ background: "var(--gold)", color: "var(--ink)", border: "none", padding: "8px 12px", borderRadius: 3, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              🛒{cart.length>0&&<span style={{ background:"var(--ink)",color:"var(--gold)",borderRadius:"50%",width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,marginLeft:2 }}>{cart.length}</span>}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "transparent", border: "1px solid rgba(255,255,255,.2)", color: "var(--gold-light)", padding: "8px 12px", borderRadius: 3, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>
              {menuOpen?"✕":"☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-menu" style={{ background: "var(--ink-mid)", borderTop: "1px solid rgba(201,148,58,.2)", padding: "1rem 1.2rem", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 8 }}>
              {(["en","ar","fr","tr"] as Lang[]).map((l) => (
                <button key={l} onClick={() => { setLang(l); setMenuOpen(false); }}
                  style={{ background: lang===l?"var(--gold)":"transparent", color: lang===l?"var(--ink)":"var(--parchment-dark)", border: "1px solid "+(lang===l?"var(--gold)":"rgba(255,255,255,.2)"), padding: "6px 14px", borderRadius: 3, fontSize: 12, fontWeight: 700, cursor: "pointer", textTransform: "uppercase", flex: 1 }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            {(["books","about","reviews","bundle"] as const).map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}
                style={{ color: "var(--parchment-dark)", textDecoration: "none", fontSize: 15, fontWeight: 500, padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                {id==="books"?tx.books:id==="about"?tx.about:id==="reviews"?tx.reviews:tx.bundles}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "var(--ink)", minHeight: 560, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "4rem 2rem" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 100%,rgba(201,148,58,.13) 0%,transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 720 }}>
          <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: 28, color: "var(--gold)", marginBottom: "1.2rem" }}>{tx.bismillah}</div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: 380, margin: ".8rem auto 1.4rem" }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,var(--gold),transparent)" }} />
            <div style={{ width: 8, height: 8, background: "var(--gold)", transform: "rotate(45deg)" }} />
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,var(--gold),transparent)" }} />
          </div>
          <h1 style={{ fontFamily: "'Amiri',serif", fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 700, color: "var(--white)", lineHeight: 1.15, marginBottom: ".6rem" }}>
            {tx.heroTitle1}<br /><span style={{ color: "var(--gold)" }}>{tx.heroTitle2}</span>
          </h1>
          <p style={{ fontFamily: "'Amiri',serif", fontSize: "1.1rem", color: "var(--parchment-dark)", marginBottom: "2rem", lineHeight: 1.75, opacity: .82 }}>{tx.heroSub}</p>
          <a href="#books" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--gold)", color: "var(--ink)", padding: "14px 34px", fontSize: 15, fontWeight: 700, borderRadius: 3, textDecoration: "none" }}>{tx.heroCta}</a>
        </div>
      </section>

      {/* ── BOOKS GRID ── */}
      <section style={{ padding: "5rem 2rem" }} id="books">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: ".6rem" }}>{tx.collectionEye}</div>
          <h2 style={{ fontFamily: "'Amiri',serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.2 }}>
            {tx.collectionTitle}
            <span style={{ fontFamily: "'Scheherazade New',serif", fontSize: "1.2rem", color: "var(--gold)", display: "block", marginTop: 4 }}>مكتبة النور</span>
          </h2>
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(245px,1fr))", gap: "1.75rem" }}>
          {books.map((book) => (
            <div key={book.id} onClick={() => openBook(book)}
              style={{ background: "var(--white)", border: "1px solid var(--parchment-deep)", borderRadius: 3, overflow: "hidden", cursor: "pointer", position: "relative", transition: "all .25s" }}
              onMouseEnter={(e) => { const d=e.currentTarget as HTMLDivElement; d.style.transform="translateY(-5px)"; d.style.borderColor="var(--gold)"; d.style.boxShadow="0 18px 44px var(--shadow)"; }}
              onMouseLeave={(e) => { const d=e.currentTarget as HTMLDivElement; d.style.transform=""; d.style.borderColor="var(--parchment-deep)"; d.style.boxShadow=""; }}
            >
              {book.badge && (
                <div style={{ position: "absolute", top: 10, right: 10, background: "var(--gold)", color: "var(--ink)", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 2, textTransform: "uppercase", zIndex: 2 }}>{book.badge}</div>
              )}
              <div style={{ width: "100%", height: 260, background: "var(--ink)", overflow: "hidden", position: "relative" }}>
                <img src={book.images[0]} alt={book.subtitle}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", transition: "transform .35s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform="scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform="scale(1)")} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 48, background: "linear-gradient(transparent,rgba(26,20,8,.55))" }} />
              </div>
              <div style={{ padding: "1.2rem" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--gold-dark)", marginBottom: 5 }}>{book.category}</div>
                <div style={{ fontFamily: "'Amiri',serif", fontSize: 15, fontWeight: 700, color: "var(--ink)", lineHeight: 1.3, marginBottom: 3 }}>{book.subtitle}</div>
                <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: 13, color: "var(--ink-mid)", opacity: .65, marginBottom: 8, direction: "rtl" }}>{book.titleAr}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ color: "var(--gold)", fontSize: 12, letterSpacing: 1 }}>{"★".repeat(book.stars)}</span>
                  <span style={{ fontSize: 10, color: "var(--ink-mid)", background: "var(--parchment-dark)", padding: "2px 7px", borderRadius: 2, opacity: .85, fontWeight: 700 }}>{book.lang}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid var(--parchment-dark)" }}>
                  <div style={{ fontFamily: "'Amiri',serif", fontSize: 18, fontWeight: 700, color: "var(--ink)" }}>
                    ${book.price.toFixed(2)} <small style={{ fontSize: 12, fontWeight: 400, opacity: .5, fontFamily: "Inter" }}>USD</small>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={(e) => { e.stopPropagation(); addToCart(book.id); setCartOpen(true); }}
                      style={{ background: cart.includes(book.id)?"var(--parchment-dark)":"transparent", color: "var(--gold-dark)", border: "1px solid var(--gold)", padding: "7px 10px", fontSize: 11, fontWeight: 700, borderRadius: 3, cursor: "pointer" }}>
                      {cart.includes(book.id)?"✓":"+"}
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); window.open(book.shopierUrl,"_blank"); }}
                      style={{ background: "var(--gold)", color: "var(--ink)", border: "none", padding: "9px 14px", fontSize: 12, fontWeight: 700, borderRadius: 3, cursor: "pointer" }}>
                      {tx.buyNow}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: "5rem 2rem", background: "var(--parchment-dark)" }} id="about">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: ".6rem" }}>{tx.whyEye}</div>
          <h2 style={{ fontFamily: "'Amiri',serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, color: "var(--ink)" }}>{tx.whyTitle}</h2>
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "1.75rem" }}>
          {([[tx.feat1T,tx.feat1D,"📖"],[tx.feat2T,tx.feat2D,"⚡"],[tx.feat3T,tx.feat3D,"🔒"],[tx.feat4T,tx.feat4D,"✦"]] as [string,string,string][]).map(([title,desc,icon]) => (
            <div key={title} style={{ textAlign: "center", padding: "2.5rem 1.5rem", background: "var(--white)", border: "1px solid var(--parchment-deep)", borderRadius: 3, position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 48, height: 3, background: "var(--gold)" }} />
              <span style={{ fontSize: "2.2rem", marginBottom: ".9rem", display: "block" }}>{icon}</span>
              <div style={{ fontFamily: "'Amiri',serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--ink)", marginBottom: ".4rem" }}>{title}</div>
              <div style={{ fontSize: 13, color: "var(--ink-mid)", opacity: .7, lineHeight: 1.7 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BUNDLE ── */}
      <section style={{ padding: "3rem 2rem" }} id="bundle">
        <div style={{ maxWidth: 920, margin: "0 auto", background: "var(--ink)", border: "1px solid var(--gold)", borderRadius: 3, padding: "2.5rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <span style={{ display: "inline-block", background: "var(--gold)", color: "var(--ink)", fontSize: 10, fontWeight: 700, letterSpacing: ".15em", padding: "3px 10px", borderRadius: 2, textTransform: "uppercase", marginBottom: ".6rem" }}>{tx.bundleTag}</span>
            <div style={{ fontFamily: "'Amiri',serif", fontSize: "1.5rem", color: "var(--white)", marginBottom: ".4rem" }}>{tx.bundleTitle}</div>
            <div style={{ fontSize: 13, color: "var(--parchment-deep)", opacity: .65, lineHeight: 1.6 }}>{tx.bundleSub}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 14, color: "var(--parchment-deep)", textDecoration: "line-through", opacity: .45 }}>${bundle.originalPrice}</div>
            <div style={{ fontFamily: "'Amiri',serif", fontSize: "2.4rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1, marginBottom: 8 }}>${bundle.price}</div>
            <button onClick={() => window.open(bundle.shopierUrl,"_blank")}
              style={{ background: "var(--gold)", color: "var(--ink)", border: "none", padding: "11px 26px", fontSize: 13, fontWeight: 700, borderRadius: 3, cursor: "pointer" }}>{tx.bundleBtn}</button>
          </div>
        </div>
      </section>

      {/* ── REVIEWS SECTION ── */}
      <section style={{ padding: "5rem 2rem", background: "var(--ink-mid)" }} id="reviews">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: ".6rem" }}>{tx.reviewsEye}</div>
          <h2 style={{ fontFamily: "'Amiri',serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, color: "var(--white)" }}>
            {tx.reviewsTitle}
            <span style={{ fontFamily: "'Scheherazade New',serif", fontSize: "1.2rem", color: "var(--gold)", display: "block", marginTop: 4 }}>آراء القراء</span>
          </h2>
        </div>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
          {[
            { stars:"★★★★★", text:"\"The biography of Talha ibn Ubayd-Allah moved me deeply. The layout and calligraphy are beautiful. A gift for the soul.\"", ar:"ما شاء الله، جزاكم الله خيراً", author:"Ahmed M.", loc:"Cairo, Egypt" },
            { stars:"★★★★★", text:"\"I bought the Ali ibn Abi Talib book for my son learning Arabic. The bilingual format is perfect for young students.\"", ar:"بارك الله فيكم على هذا العمل الجميل", author:"Fatima K.", loc:"London, UK" },
            { stars:"★★★★★", text:"\"Downloaded in seconds after payment. The Ten Promised Jannah book is incredible value. My whole family is reading it.\"", ar:"اللهم بارك لنا في علمنا", author:"Yusuf B.", loc:"Toronto, Canada" },
          ].map((r, i) => (
            <div key={i} style={{ background: "rgba(201,148,58,.06)", border: "1px solid rgba(201,148,58,.18)", borderRadius: 3, padding: "1.75rem" }}>
              <div style={{ color: "var(--gold)", fontSize: 13, letterSpacing: 2, marginBottom: ".7rem" }}>{r.stars}</div>
              <div style={{ fontFamily: "'Amiri',serif", fontSize: 15, color: "var(--parchment)", lineHeight: 1.75, marginBottom: ".9rem", fontStyle: "italic" }}>{r.text}</div>
              <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: 13, color: "var(--gold-pale)", direction: "rtl", opacity: .65, marginBottom: ".9rem" }}>{r.ar}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--gold)" }}>{r.author}</div>
              <div style={{ fontSize: 11, color: "var(--parchment-deep)", opacity: .45 }}>{r.loc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <div style={{ background: "var(--ink)", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: "1.3rem", color: "var(--gold)", marginBottom: ".4rem" }}>{tx.nlAr}</div>
        <div style={{ fontFamily: "'Amiri',serif", fontSize: "1.8rem", color: "var(--white)", marginBottom: ".4rem" }}>{tx.nlTitle}</div>
        <div style={{ fontSize: 13, color: "var(--parchment-deep)", opacity: .55, marginBottom: "1.4rem" }}>{tx.nlSub}</div>
        <div style={{ display: "flex", maxWidth: 400, margin: "0 auto", border: "1.5px solid var(--gold)", borderRadius: 3, overflow: "hidden" }}>
          <input value={nlEmail} onChange={(e) => setNlEmail(e.target.value)} placeholder={tx.nlPlaceholder}
            style={{ flex: 1, padding: "12px 16px", border: "none", background: "rgba(255,255,255,.05)", color: "var(--white)", fontSize: 13, fontFamily: "Inter" }} />
          <button onClick={() => { if (nlEmail.includes("@")) { alert("JazakAllahu Khayran! You're subscribed."); setNlEmail(""); } else alert(tx.invalidEmail); }}
            style={{ background: "var(--gold)", color: "var(--ink)", border: "none", padding: "12px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{tx.nlBtn}</button>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#100D05", padding: "3rem 2rem 1.5rem", borderTop: "1px solid rgba(201,148,58,.18)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "2rem" }}>
          <div>
            <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: 22, fontWeight: 700, color: "var(--gold-light)" }}>مكتبة النور</div>
            <div style={{ fontSize: 10, color: "var(--parchment-deep)", opacity: .35, letterSpacing: ".15em" }}>MAKTABAT AL-NOUR</div>
            <div style={{ fontSize: 12, color: "var(--parchment-deep)", opacity: .45, lineHeight: 1.7, marginTop: 8 }}>Premium Islamic e-books in Arabic & English. Bringing the stories of the Sahabah to the modern Muslim world.</div>
            <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: 15, color: "var(--gold)", opacity: .55, marginTop: 10 }}>وَقُل رَّبِّ زِدْنِي عِلْمًا</div>
          </div>
          {([
            ["Library",["All Books","Bundle Deal","New Releases","Gift Cards"]],
            ["Support",["Contact Us","FAQ","Refund Policy","Download Help"]],
          ] as [string,string[]][]).map(([h,links]) => (
            <div key={h as string}>
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: ".9rem" }}>{h as string}</h4>
              {(links as string[]).map((l) => <a key={l} href="#" style={{ display: "block", fontSize: 12, color: "var(--parchment-deep)", opacity: .45, textDecoration: "none", marginBottom: 6 }}>{l}</a>)}
            </div>
          ))}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: ".9rem" }}>Follow</h4>
            <a href="https://www.instagram.com/aamhpublishing?igsh=ZDdmcm43bTgya2k3&utm_source=qr" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--gold-light)", opacity: .85, textDecoration: "none", marginBottom: 8, fontWeight: 600 }}>
              📸 Instagram
            </a>
            <a href="https://www.facebook.com/share/1ZFn5a3jwE/" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--gold-light)", opacity: .85, textDecoration: "none", marginBottom: 8, fontWeight: 600 }}>
              📘 Facebook
            </a>
            {["Twitter / X","YouTube"].map((l) => (
              <a key={l} href="#" style={{ display: "block", fontSize: 12, color: "var(--parchment-deep)", opacity: .45, textDecoration: "none", marginBottom: 6 }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", paddingTop: "1.2rem", borderTop: "1px solid rgba(201,148,58,.08)", display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--parchment-deep)", opacity: .35 }}>
          <span>© 2025 Maktabat Al-Nour · All rights reserved</span>
          <span>Secured by Shopier · SSL Encrypted</span>
        </div>
      </footer>

      {/* ── MODAL ── */}
      {(modalBook || isBundle) && (
        <div onClick={(e) => { if (e.target===e.currentTarget) closeModal(); }}
          style={{ position: "fixed", inset: 0, background: "rgba(26,20,8,.88)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
          <div style={{ background: "var(--white)", maxWidth: 600, width: "100%", borderRadius: 3, border: "1px solid var(--gold)", overflow: "hidden", maxHeight: "92vh", overflowY: "auto" }}>

            {/* Modal header */}
            <div style={{ background: "var(--ink)", padding: "1.4rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--gold)" }}>
              <div style={{ fontFamily: "'Amiri',serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--gold-light)" }}>
                {isBundle ? bundle.title : modalBook?.subtitle}
              </div>
              <button onClick={closeModal} style={{ background: "none", border: "none", color: "var(--parchment-dark)", fontSize: 22, cursor: "pointer" }}>✕</button>
            </div>

            <div style={{ padding: "2rem" }}>

              {/* Book info */}
              {modalBook && (
                <div style={{ display: "flex", gap: "1.4rem", marginBottom: "1.4rem", flexWrap: "wrap" }}>
                  <div style={{ width: 120, height: 168, flexShrink: 0, border: "2px solid var(--gold)", borderRadius: 2, overflow: "hidden", boxShadow: "0 4px 18px rgba(26,20,8,.25)" }}>
                    <img src={modalBook.images[0]} alt={modalBook.subtitle} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <h2 style={{ fontFamily: "'Amiri',serif", fontSize: "1.25rem", marginBottom: 3, color: "var(--ink)" }}>{modalBook.subtitle}</h2>
                    <div style={{ fontFamily: "'Scheherazade New',serif", color: "var(--gold-dark)", marginBottom: 8, direction: "rtl" }}>{modalBook.titleAr}</div>
                    <div style={{ color: "var(--gold)", fontSize: 12, letterSpacing: 1, marginBottom: 10 }}>
                      {"★".repeat(modalBook.stars)} <span style={{ fontSize: 11, color: "var(--ink-mid)", opacity: .5, fontFamily: "Inter" }}>{modalBook.reviewCount} reviews</span>
                    </div>
                    <div style={{ fontSize: 13, color: "var(--ink-mid)", lineHeight: 1.75, opacity: .8 }}>
                      {(modalBook.description as Record<string, string>)[lang] ?? modalBook.description.en}
                    </div>
                  </div>
                </div>
              )}

              {/* Price row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0", borderTop: "1px solid var(--parchment-dark)", borderBottom: "1px solid var(--parchment-dark)", marginBottom: "1.4rem" }}>
                <div>
                  <div style={{ fontFamily: "'Amiri',serif", fontSize: "2.1rem", fontWeight: 700, color: "var(--ink)" }}>
                    ${(isBundle ? bundle.price : modalBook?.price || 0).toFixed(2)} <span style={{ fontSize: 14, fontWeight: 400, opacity: .45, fontFamily: "Inter" }}>USD</span>
                  </div>
                  <div style={{ fontSize: 11, color: "var(--ink-mid)", opacity: .45, marginTop: 3 }}>{tx.oneTime}</div>
                </div>
                <div style={{ textAlign: "right", fontSize: 11, color: "var(--ink-mid)", opacity: .55, lineHeight: 1.7 }}>
                  {tx.includes.map((inc) => <div key={inc}>✦ {inc}</div>)}
                </div>
              </div>

              {/* Info box */}
              <div style={{ background: "var(--parchment)", border: "1px solid var(--parchment-deep)", borderLeft: "4px solid var(--gold)", borderRadius: 3, padding: "12px 16px", marginBottom: "1.2rem", fontSize: 13, color: "var(--ink-mid)", lineHeight: 1.7 }}>
                📧 {tx.modalOrder}<br />
                <span style={{ fontSize: 11, opacity: .6 }}>Shopier sends the PDF automatically to your email after payment.</span>
              </div>

              {/* Shopier button */}
              <button onClick={goToShopier}
                style={{ width: "100%", padding: 16, background: "var(--gold)", color: "var(--ink)", border: "none", borderRadius: 3, fontSize: 16, fontWeight: 700, cursor: "pointer", letterSpacing: ".05em", fontFamily: "Inter" }}>
                {tx.payBtn}
              </button>
              <div style={{ textAlign: "center", fontSize: 11, color: "var(--ink-mid)", opacity: .5, marginTop: 8 }}>
                🔒 {tx.secure}
              </div>

              {/* ── REVIEWS SECTION inside modal ── */}
              {modalBook && (
                <div style={{ marginTop: "2rem", borderTop: "2px solid var(--parchment-dark)", paddingTop: "1.5rem" }}>

                  {/* Header row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2rem" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--gold)" }}>
                      ✦ Reader Reviews ({(modalBook.reviews?.length||0)+(userReviews[modalBook.id]?.length||0)})
                    </div>
                    <button
                      onClick={() => { setShowReviewForm(!showReviewForm); setReviewSubmitted(false); }}
                      style={{ background: showReviewForm?"var(--parchment-dark)":"var(--ink)", color: showReviewForm?"var(--ink)":"var(--gold-light)", border: "none", padding: "7px 14px", borderRadius: 3, fontSize: 12, fontWeight: 700, cursor: "pointer", letterSpacing: ".04em" }}>
                      {showReviewForm?"✕ Cancel":"✍ Write a Review"}
                    </button>
                  </div>

                  {/* Success message */}
                  {reviewSubmitted && (
                    <div style={{ background: "rgba(201,148,58,.12)", border: "1px solid var(--gold)", borderRadius: 3, padding: "12px 16px", marginBottom: "1rem", fontSize: 13, color: "var(--gold-dark)", fontWeight: 600, textAlign: "center" }}>
                      ✦ JazakAllahu Khayran! Your review has been published.
                    </div>
                  )}

                  {/* Review form */}
                  {showReviewForm && (
                    <div style={{ background: "var(--parchment)", border: "1px solid var(--parchment-deep)", borderLeft: "4px solid var(--gold)", borderRadius: 3, padding: "1.2rem", marginBottom: "1.2rem" }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--ink)", marginBottom: "1rem", letterSpacing: ".05em", textTransform: "uppercase" }}>Your Review</div>

                      {/* Stars */}
                      <div style={{ marginBottom: ".8rem" }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-mid)", marginBottom: 4, textTransform: "uppercase", letterSpacing: ".05em" }}>Rating</div>
                        <div style={{ display: "flex", gap: 4 }}>
                          {[1,2,3,4,5].map((star) => (
                            <button key={star} onClick={() => setReviewForm(f=>({...f,rating:star}))}
                              style={{ background: "none", border: "none", fontSize: 26, cursor: "pointer", color: star<=reviewForm.rating?"var(--gold)":"var(--parchment-deep)", padding: "0 2px", lineHeight: 1, transition: "color .15s" }}>
                              ★
                            </button>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".7rem", marginBottom: ".7rem" }}>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-mid)", marginBottom: 4, textTransform: "uppercase", letterSpacing: ".05em" }}>Your Name *</div>
                          <input value={reviewForm.author} onChange={(e) => setReviewForm(f=>({...f,author:e.target.value}))} placeholder="Ahmed M."
                            style={{ width: "100%", padding: "9px 11px", border: "1.5px solid var(--parchment-deep)", borderRadius: 3, fontSize: 13, color: "var(--ink)", background: "var(--white)", fontFamily: "Inter" }} />
                        </div>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-mid)", marginBottom: 4, textTransform: "uppercase", letterSpacing: ".05em" }}>Location</div>
                          <input value={reviewForm.location} onChange={(e) => setReviewForm(f=>({...f,location:e.target.value}))} placeholder="Cairo, Egypt"
                            style={{ width: "100%", padding: "9px 11px", border: "1.5px solid var(--parchment-deep)", borderRadius: 3, fontSize: 13, color: "var(--ink)", background: "var(--white)", fontFamily: "Inter" }} />
                        </div>
                      </div>

                      <div style={{ marginBottom: ".9rem" }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-mid)", marginBottom: 4, textTransform: "uppercase", letterSpacing: ".05em" }}>Your Review *</div>
                        <textarea value={reviewForm.text} onChange={(e) => setReviewForm(f=>({...f,text:e.target.value}))}
                          placeholder="Share your thoughts about this book..." rows={3}
                          style={{ width: "100%", padding: "9px 11px", border: "1.5px solid var(--parchment-deep)", borderRadius: 3, fontSize: 13, color: "var(--ink)", background: "var(--white)", fontFamily: "'Amiri',serif", lineHeight: 1.7, resize: "vertical" }} />
                      </div>

                      <button onClick={() => submitReview(modalBook.id)}
                        disabled={!reviewForm.author.trim()||!reviewForm.text.trim()}
                        style={{ background: reviewForm.author.trim()&&reviewForm.text.trim()?"var(--gold)":"var(--parchment-deep)", color: "var(--ink)", border: "none", padding: "10px 22px", borderRadius: 3, fontSize: 13, fontWeight: 700, cursor: reviewForm.author.trim()&&reviewForm.text.trim()?"pointer":"not-allowed", letterSpacing: ".04em" }}>
                        ✦ Publish Review
                      </button>
                    </div>
                  )}

                  {/* Static reviews from data */}
                  {modalBook.reviews?.map((review, i) => (
                    <div key={`s-${i}`} style={{ background: "var(--parchment)", border: "1px solid var(--parchment-deep)", borderRadius: 3, padding: "1rem 1.2rem", marginBottom: ".75rem" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: ".5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "var(--ink)", flexShrink: 0 }}>
                            {review.author.charAt(0)}
                          </div>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>{review.author}</div>
                            <div style={{ fontSize: 10, color: "var(--ink-mid)", opacity: .55 }}>{review.location}</div>
                          </div>
                        </div>
                        <div style={{ color: "var(--gold)", fontSize: 13, letterSpacing: 1 }}>{"★".repeat(review.rating)}</div>
                      </div>
                      <div style={{ fontFamily: "'Amiri',serif", fontSize: 14, color: "var(--ink-mid)", lineHeight: 1.7, fontStyle: "italic" }}>"{review.text}"</div>
                      {review.textAr && (
                        <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: 13, color: "var(--gold-dark)", direction: "rtl", marginTop: 6, opacity: .75 }}>{review.textAr}</div>
                      )}
                      <div style={{ fontSize: 10, color: "var(--ink-mid)", opacity: .4, marginTop: 6 }}>{review.date}</div>
                    </div>
                  ))}

                  {/* User-submitted reviews */}
                  {(userReviews[modalBook.id]||[]).map((review, i) => (
                    <div key={`u-${i}`} style={{ background: "rgba(201,148,58,.07)", border: "1px solid rgba(201,148,58,.3)", borderRadius: 3, padding: "1rem 1.2rem", marginBottom: ".75rem" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: ".5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "var(--ink)", flexShrink: 0 }}>
                            {review.author.charAt(0)}
                          </div>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>{review.author}</div>
                            <div style={{ fontSize: 10, color: "var(--ink-mid)", opacity: .55 }}>{review.location}</div>
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ color: "var(--gold)", fontSize: 13, letterSpacing: 1 }}>{"★".repeat(review.rating)}</div>
                          <span style={{ fontSize: 9, background: "var(--gold)", color: "var(--ink)", padding: "2px 6px", borderRadius: 2, fontWeight: 700 }}>NEW</span>
                        </div>
                      </div>
                      <div style={{ fontFamily: "'Amiri',serif", fontSize: 14, color: "var(--ink-mid)", lineHeight: 1.7, fontStyle: "italic" }}>"{review.text}"</div>
                      <div style={{ fontSize: 10, color: "var(--ink-mid)", opacity: .4, marginTop: 6 }}>{review.date}</div>
                    </div>
                  ))}

                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── CART DRAWER ── */}
      {cartOpen && (
        <div onClick={(e) => { if (e.target===e.currentTarget) setCartOpen(false); }}
          style={{ position: "fixed", inset: 0, background: "rgba(26,20,8,.75)", zIndex: 2000, display: "flex", justifyContent: "flex-end" }}>
          <div style={{ background: "var(--white)", width: "100%", maxWidth: 380, height: "100%", overflowY: "auto", display: "flex", flexDirection: "column", boxShadow: "-8px 0 32px rgba(0,0,0,.3)" }}>
            <div style={{ background: "var(--ink)", padding: "1.2rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid var(--gold)", flexShrink: 0 }}>
              <div style={{ fontFamily: "'Amiri',serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--gold-light)" }}>🛒 {tx.cart} ({cart.length})</div>
              <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", color: "var(--parchment-dark)", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>✕</button>
            </div>
            <div style={{ flex: 1, padding: "1rem 1.5rem", overflowY: "auto" }}>
              {cart.length===0 ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📚</div>
                  <div style={{ fontFamily: "'Amiri',serif", fontSize: "1.1rem", color: "var(--ink)", marginBottom: ".4rem" }}>Your cart is empty</div>
                  <div style={{ fontSize: 12, color: "var(--ink-mid)", opacity: .6 }}>Browse the library and add books to your cart</div>
                  <button onClick={() => setCartOpen(false)}
                    style={{ marginTop: "1.5rem", background: "var(--gold)", color: "var(--ink)", border: "none", padding: "10px 24px", borderRadius: 3, fontWeight: 700, cursor: "pointer", fontSize: 13 }}>
                    ✦ Browse Books
                  </button>
                </div>
              ) : (
                <>
                  {cart.map((bookId) => {
                    const book = books.find((b) => b.id===bookId);
                    if (!book) return null;
                    return (
                      <div key={bookId} style={{ display: "flex", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid var(--parchment-dark)", alignItems: "center" }}>
                        <div style={{ width: 52, height: 72, flexShrink: 0, border: "1px solid var(--gold)", borderRadius: 2, overflow: "hidden" }}>
                          <img src={book.images[0]} alt={book.subtitle} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", lineHeight: 1.3, marginBottom: 3 }}>{book.subtitle}</div>
                          <div style={{ fontFamily: "'Scheherazade New',serif", fontSize: 12, color: "var(--gold-dark)", direction: "rtl", marginBottom: 4 }}>{book.titleAr}</div>
                          <div style={{ fontFamily: "'Amiri',serif", fontSize: 15, fontWeight: 700, color: "var(--ink)" }}>${book.price.toFixed(2)}</div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }}>
                          <button onClick={() => window.open(book.shopierUrl,"_blank")}
                            style={{ background: "var(--gold)", color: "var(--ink)", border: "none", padding: "6px 12px", borderRadius: 3, fontWeight: 700, fontSize: 11, cursor: "pointer", whiteSpace: "nowrap" }}>
                            Buy →
                          </button>
                          <button onClick={() => setCart((c) => c.filter((id) => id!==bookId))}
                            style={{ background: "transparent", color: "var(--ink-mid)", border: "1px solid var(--parchment-deep)", padding: "5px 10px", borderRadius: 3, fontSize: 11, cursor: "pointer", opacity: .6 }}>
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  <div style={{ padding: "1rem 0", borderTop: "2px solid var(--parchment-dark)", marginTop: ".5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>Total ({cart.length} book{cart.length>1?"s":""})</div>
                      <div style={{ fontFamily: "'Amiri',serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--ink)" }}>
                        ${cart.reduce((sum,id) => sum+(books.find(b=>b.id===id)?.price||0),0).toFixed(2)}
                      </div>
                    </div>
                    <div style={{ fontSize: 11, color: "var(--ink-mid)", opacity: .55, marginBottom: "1rem", lineHeight: 1.6 }}>
                      📧 Each book is purchased individually on Shopier. Click "Buy →" on each book to receive your PDF by email.
                    </div>
                    <button onClick={() => setCart([])}
                      style={{ width: "100%", padding: "10px", background: "transparent", color: "var(--ink-mid)", border: "1px solid var(--parchment-deep)", borderRadius: 3, fontSize: 13, cursor: "pointer", opacity: .7 }}>
                      🗑 Clear cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}