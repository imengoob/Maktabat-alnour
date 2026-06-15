// ============================================================
// data/books.ts — UPDATED with Shopier URLs
// ============================================================

export type Book = {
  id: number;
  slug: string;
  titleAr: string;
  titleEn: string;
  subtitle: string;
  category: string;
  price: number;
  stars: number;
  reviewCount: number;
  badge: string | null;
  description: {
    en: string;
    ar: string;
    fr: string;
  };
  images: string[];
  shopierUrl: string; // ← Shopier product URL (replaces driveEnvKey)
};

const books: Book[] = [
  {
    id: 1,
    slug: "talha-ibn-ubaydallah",
    titleAr: "طلحة الخير",
    titleEn: "The Generous Knight",
    subtitle: "Biography of Talha ibn Ubayd-Allah",
    category: "Companions Biography",
    price: 3.33,
    stars: 5,
    reviewCount: 48,
    badge: "Bestseller",
    description: {
      en: "A moving biography of Talha ibn Ubayd-Allah, one of the ten Companions promised Paradise. Known for his extraordinary generosity and courage at Uhud, where he shielded the Prophet ﷺ with his own body.",
      ar: "سيرة مؤثرة لطلحة بن عبيد الله، أحد العشرة المبشرين بالجنة. عُرف بكرمه الاستثنائي وشجاعته في أُحد، حيث دافع عن النبي ﷺ بجسده.",
      fr: "Une biographie émouvante de Talha ibn Ubayd-Allah, l'un des dix Compagnons promis au Paradis. Connu pour sa générosité extraordinaire et son courage à Uhud.",
    },
    images: ["/books/talha-ibn-ubaydallah/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054804",
  },
  {
    id: 2,
    slug: "zubayr-ibn-awwam",
    titleAr: "الزبير بن العوام",
    titleEn: "The Disciple of the Prophet",
    subtitle: "Biography of Az-Zubayr ibn Al-Awwam",
    category: "Companions Biography",
    price: 3.33,
    stars: 5,
    reviewCount: 31,
    badge: null,
    description: {
      en: "Az-Zubayr ibn Al-Awwam — the Disciple (Hawari) of the Prophet ﷺ, the first to unsheathe a sword for Islam. A bilingual biography exploring his life, battles, and unwavering faith.",
      ar: "الزبير بن العوام — حواري النبي ﷺ، أول من سلّ سيفًا في سبيل الإسلام. سيرة ثنائية اللغة تستعرض حياته ومعاركه وإيمانه الراسخ.",
      fr: "Az-Zubayr ibn Al-Awwam — le Disciple du Prophète ﷺ, le premier à dégainer une épée pour l'Islam.",
    },
    images: ["/books/zubayr-ibn-awwam/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054750",
  },
  {
    id: 3,
    slug: "ali-ibn-abi-talib",
    titleAr: "باب مدينة العلم",
    titleEn: "The Gateway to Knowledge",
    subtitle: "The Legacy of Ali ibn Abi Talib",
    category: "Companions Biography",
    price: 3.33,
    stars: 5,
    reviewCount: 55,
    badge: null,
    description: {
      en: "Ali ibn Abi Talib — cousin and son-in-law of the Prophet ﷺ, the fourth Caliph. Explore his wisdom, battles, and profound spiritual legacy in this beautifully formatted bilingual book.",
      ar: "علي بن أبي طالب — ابن عم النبي ﷺ وصهره، الخليفة الرابع. اكتشف حكمته ومعاركه وإرثه الروحي العميق.",
      fr: "Ali ibn Abi Talib — cousin et gendre du Prophète ﷺ, quatrième Calife. Explorez sa sagesse, ses batailles et son héritage spirituel profond.",
    },
    images: ["/books/ali-ibn-abi-talib/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054552",
  },
  {
    id: 4,
    slug: "uthman-ibn-affan",
    titleAr: "ذو النورين",
    titleEn: "Zun-Nurayn — The Wealthy Believer",
    subtitle: "The Architect of Generosity — Uthman ibn Affan",
    category: "Companions Biography",
    price: 3.33,
    stars: 5,
    reviewCount: 44,
    badge: null,
    description: {
      en: "Uthman ibn Affan (RA), the third Caliph of Islam — the embodiment of modesty, the pillar of generosity, and the leader who compiled the Quran for all generations.",
      ar: "عثمان بن عفان رضي الله عنه، الخليفة الثالث — تجسيد التواضع وركيزة الكرم والقائد الذي جمع القرآن لكل الأجيال.",
      fr: "Uthman ibn Affan (RA), le troisième Calife de l'Islam — l'incarnation de la modestie, le pilier de la générosité.",
    },
    images: ["/books/uthman-ibn-affan/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054437",
  },
  {
    id: 5,
    slug: "umar-ibn-khattab",
    titleAr: "الفاروق",
    titleEn: "Al-Faruq — The Architect of Justice",
    subtitle: "Biography of Umar ibn Al-Khattab",
    category: "Companions Biography",
    price: 3.33,
    stars: 5,
    reviewCount: 87,
    badge: "Popular",
    description: {
      en: "The second Caliph whose conversion shook Mecca to its core. His justice, strength, and simplicity transformed the early Muslim state. Our most requested biography.",
      ar: "الخليفة الثاني الذي هزّ إسلامه مكة. عدله وقوته وبساطته غيّرت الدولة الإسلامية الناشئة. أكثر سيرة مطلوبة.",
      fr: "Le deuxième Calife dont la conversion secoua La Mecque. Sa justice, force et simplicité transformèrent l'État musulman naissant.",
    },
    images: ["/books/umar-ibn-khattab/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054350",
  },
  {
    id: 6,
    slug: "abu-bakr-siddiq",
    titleAr: "الصدّيق",
    titleEn: "As-Siddiq — The Truthful One",
    subtitle: "Biography of Abu Bakr As-Siddiq",
    category: "Companions Biography",
    price: 3.33,
    stars: 5,
    reviewCount: 62,
    badge: "New",
    description: {
      en: "The closest Companion of the Prophet ﷺ, the first Caliph of Islam. A premium digital experience at the intersection of Islamic history and artistic refinement.",
      ar: "أقرب صحابة النبي ﷺ وأول خليفة للمسلمين. تجربة رقمية راقية عند تقاطع التاريخ الإسلامي والرقي الفني.",
      fr: "Le Compagnon le plus proche du Prophète ﷺ, le premier Calife de l'Islam. Une expérience numérique premium.",
    },
    images: ["/books/abu-bakr-siddiq/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054206",
  },
  {
    id: 7,
    slug: "companions-ten-jannah",
    titleAr: "العشرة المبشرون بالجنة",
    titleEn: "Companions of the Prophet",
    subtitle: "The Ten Promised Jannah",
    category: "Companions Biography",
    price: 2.78, // 100 TL bundle price
    stars: 5,
    reviewCount: 73,
    badge: "Bestseller",
    description: {
      en: "The stories of the 10 heroes who laid the foundations of Islam and left their mark on the golden pages of history. A special guide presenting all ten companions.",
      ar: "قصص العشرة الأبطال الذين أرسوا دعائم الإسلام وتركوا بصمتهم في الصفحات الذهبية من التاريخ.",
      fr: "Les histoires des 10 héros qui ont posé les fondations de l'Islam et laissé leur empreinte dans les pages dorées de l'histoire.",
    },
    images: ["/books/companions-ten-jannah/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48053944",
  },
  {
    id: 8,
    slug: "en-buyuk-ogretmen",
    titleAr: "رحلة أعظم معلم",
    titleEn: "Journey of the Greatest Teacher",
    subtitle: "En Büyük Öğretmen'in Yolculuğu",
    category: "Prophet's Biography",
    price: 4.17, // 150 TL
    stars: 5,
    reviewCount: 29,
    badge: null,
    description: {
      en: "Timeless lessons from the life of Prophet Muhammad ﷺ — presented in Turkish and Arabic side by side. A book that will nourish your heart and develop your language.",
      ar: "دروس خالدة من حياة النبي محمد ﷺ — مقدّمة بالتركية والعربية جنبًا إلى جنب. كتاب يغذي قلبك ويطور لغتك.",
      fr: "Des leçons intemporelles de la vie du Prophète Muhammad ﷺ — présentées en turc et en arabe côte à côte.",
    },
    images: ["/books/en-buyuk-ogretmen/cover.png"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48047165",
  },
];

export default books;

// ── PROMO CODES ─────────────────────────────────────────────
export const promoCodes: Record<string, { discountPercent: number; description: string }> = {
  RAMADAN2025: { discountPercent: 33, description: "Ramadan Special — 33% off" },
  WELCOME10:   { discountPercent: 10, description: "Welcome discount — 10% off" },
  UMMAH20:     { discountPercent: 20, description: "Ummah discount — 20% off" },
};

// ── BUNDLE (Ten Promised Jannah = already a bundle on Shopier) ──
export const bundle = {
  title: "Companions of the Prophet — The Ten Promised Jannah",
  titleAr: "العشرة المبشرون بالجنة",
  price: 2.78,
  originalPrice: 26.64,
  shopierUrl: "https://www.shopier.com/AAMHPublishing/48053944",
};
