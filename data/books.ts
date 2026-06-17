// ============================================================
// data/books.ts
// ============================================================

export type Review = {
  author: string;
  location: string;
  rating: number; // 1-5
  text: string;
  textAr?: string;
  date: string;
};

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
  lang: string; // e.g. "AR · EN" or "AR · TR"
  description: {
    en: string;
    ar: string;
    fr: string;
    tr: string;
  };
  images: string[];
  shopierUrl: string;
  reviews: Review[];
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
    lang: "AR · EN",
    description: {
      en: "A moving biography of Talha ibn Ubayd-Allah, one of the ten Companions promised Paradise. Known for his extraordinary generosity and courage at Uhud, where he shielded the Prophet ﷺ with his own body.",
      ar: "سيرة مؤثرة لطلحة بن عبيد الله، أحد العشرة المبشرين بالجنة. عُرف بكرمه الاستثنائي وشجاعته في أُحد، حيث دافع عن النبي ﷺ بجسده.",
      fr: "Une biographie émouvante de Talha ibn Ubayd-Allah, l'un des dix Compagnons promis au Paradis. Connu pour sa générosité extraordinaire et son courage à Uhud.",
      tr: "Talha ibn Ubayd-Allah'ın dokunaklı biyografisi — cennete gireceği müjdelenen on sahabeden biri. Uhud'da Peygamber ﷺ'i korumasıyla tanınır.",
    },
    images: ["/books/talha-ibn-ubaydallah/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054804",
    reviews: [
      { author: "Ahmed M.", location: "Cairo, Egypt", rating: 5, text: "The biography of Talha moved me deeply. The layout is beautiful. A gift for the soul.", textAr: "ما شاء الله، جزاكم الله خيراً على هذا العمل الرائع", date: "2025-03-12" },
      { author: "Sara K.", location: "London, UK", rating: 5, text: "Beautifully written. I learned so much about this great Companion. Highly recommend!", date: "2025-02-28" },
      { author: "Omar T.", location: "Toronto, Canada", rating: 5, text: "Downloaded instantly. The Arabic and English side by side is perfect for my kids.", date: "2025-01-15" },
    ],
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
    lang: "AR · EN",
    description: {
      en: "Az-Zubayr ibn Al-Awwam — the Disciple (Hawari) of the Prophet ﷺ, the first to unsheathe a sword for Islam. A bilingual biography exploring his life, battles, and unwavering faith.",
      ar: "الزبير بن العوام — حواري النبي ﷺ، أول من سلّ سيفًا في سبيل الإسلام. سيرة ثنائية اللغة تستعرض حياته ومعاركه وإيمانه الراسخ.",
      fr: "Az-Zubayr ibn Al-Awwam — le Disciple du Prophète ﷺ, le premier à dégainer une épée pour l'Islam.",
      tr: "Az-Zubayr ibn Al-Awwam — Peygamber ﷺ'in havarisi, İslam için ilk kılıç çeken sahabi.",
    },
    images: ["/books/zubayr-ibn-awwam/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054750",
    reviews: [
      { author: "Fatima R.", location: "Paris, France", rating: 5, text: "A gripping account of one of Islam's greatest warriors. Couldn't put it down.", date: "2025-04-02" },
      { author: "Yusuf B.", location: "Riyadh, KSA", rating: 5, text: "Excellent research and beautiful presentation. JazakAllah khayran.", textAr: "بارك الله فيكم، عمل رائع", date: "2025-03-18" },
    ],
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
    lang: "AR · EN",
    description: {
      en: "Ali ibn Abi Talib — cousin and son-in-law of the Prophet ﷺ, the fourth Caliph. Explore his wisdom, battles, and profound spiritual legacy in this beautifully formatted bilingual book.",
      ar: "علي بن أبي طالب — ابن عم النبي ﷺ وصهره، الخليفة الرابع. اكتشف حكمته ومعاركه وإرثه الروحي العميق.",
      fr: "Ali ibn Abi Talib — cousin et gendre du Prophète ﷺ, quatrième Calife. Explorez sa sagesse, ses batailles et son héritage spirituel profond.",
      tr: "Ali ibn Ebu Talib — Peygamber ﷺ'in amcasının oğlu ve dördüncü halife. Bilgeliğini ve derin ruhani mirasını keşfedin.",
    },
    images: ["/books/ali-ibn-abi-talib/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054552",
    reviews: [
      { author: "Hassan A.", location: "Dubai, UAE", rating: 5, text: "I bought this for my son learning Arabic. The bilingual format is perfect for students.", date: "2025-05-01" },
      { author: "Maryam S.", location: "Istanbul, Turkey", rating: 5, text: "The depth of knowledge in this book is remarkable. Ali RA's wisdom shines through.", date: "2025-04-14" },
      { author: "Ibrahim L.", location: "Berlin, Germany", rating: 5, text: "Outstanding quality. The PDF formatting is professional and easy to read.", date: "2025-03-22" },
    ],
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
    lang: "AR · EN",
    description: {
      en: "Uthman ibn Affan (RA), the third Caliph of Islam — the embodiment of modesty, the pillar of generosity, and the leader who compiled the Quran for all generations.",
      ar: "عثمان بن عفان رضي الله عنه، الخليفة الثالث — تجسيد التواضع وركيزة الكرم والقائد الذي جمع القرآن لكل الأجيال.",
      fr: "Uthman ibn Affan (RA), le troisième Calife de l'Islam — l'incarnation de la modestie, le pilier de la générosité.",
      tr: "Osman ibn Affan (RA) — İslam'ın üçüncü halifesi, Kuran'ı derleyen lider.",
    },
    images: ["/books/uthman-ibn-affan/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054437",
    reviews: [
      { author: "Nour H.", location: "Casablanca, Morocco", rating: 5, text: "Uthman RA is often overlooked but this book does him justice. Beautifully done.", textAr: "جزاكم الله خيراً على هذا العمل المتميز", date: "2025-04-08" },
      { author: "Tariq M.", location: "Birmingham, UK", rating: 5, text: "The best account of Uthman ibn Affan I have ever read. Highly recommended.", date: "2025-03-30" },
    ],
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
    lang: "AR · EN",
    description: {
      en: "The second Caliph whose conversion shook Mecca to its core. His justice, strength, and simplicity transformed the early Muslim state. Our most requested biography.",
      ar: "الخليفة الثاني الذي هزّ إسلامه مكة. عدله وقوته وبساطته غيّرت الدولة الإسلامية الناشئة. أكثر سيرة مطلوبة.",
      fr: "Le deuxième Calife dont la conversion secoua La Mecque. Sa justice, force et simplicité transformèrent l'État musulman naissant.",
      tr: "Müslüman olmasıyla Mekke'yi sarsan ikinci halife. Adaleti ve sadeliği erken İslam devletini dönüştürdü.",
    },
    images: ["/books/umar-ibn-khattab/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054350",
    reviews: [
      { author: "Khalid R.", location: "Amman, Jordan", rating: 5, text: "Umar RA's story never gets old. This version is the best I've read — clear, inspiring, and detailed.", textAr: "أفضل سيرة لعمر رضي الله عنه قرأتها", date: "2025-05-10" },
      { author: "Zainab F.", location: "Amsterdam, Netherlands", rating: 5, text: "Bought this as a gift for my husband. He read it in one sitting. Amazing.", date: "2025-04-25" },
      { author: "Salim O.", location: "Lagos, Nigeria", rating: 5, text: "The way justice is portrayed in this biography is deeply moving. 10/10.", date: "2025-04-03" },
    ],
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
    lang: "AR · EN",
    description: {
      en: "The closest Companion of the Prophet ﷺ, the first Caliph of Islam. His story traces the journey from Meccan merchant to leader of the Ummah — trust, sacrifice, and steadfast faith.",
      ar: "أقرب صحابة النبي ﷺ وأول خليفة للمسلمين. قصته من تاجر مكي إلى قائد الأمة — ثقة وتضحية وإيمان راسخ.",
      fr: "Le Compagnon le plus proche du Prophète ﷺ, le premier Calife de l'Islam. Son parcours du marchand mecquois au chef de l'Oumma.",
      tr: "Peygamber ﷺ'in en yakın sahabesi ve İslam'ın ilk halifesi. Mekke tüccarından ümmetin liderine uzanan yolculuk.",
    },
    images: ["/books/abu-bakr-siddiq/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48054206",
    reviews: [
      { author: "Aisha M.", location: "Tunis, Tunisia", rating: 5, text: "Abu Bakr RA is my favourite Companion and this book captures his essence perfectly.", textAr: "سبحان الله، سيرة رائعة تليق بالصدّيق رضي الله عنه", date: "2025-05-05" },
      { author: "Bilal T.", location: "Ankara, Turkey", rating: 5, text: "The illustrations and formatting make this a premium reading experience.", date: "2025-04-20" },
    ],
  },
  {
    id: 7,
    slug: "companions-ten-jannah",
    titleAr: "العشرة المبشرون بالجنة",
    titleEn: "Companions of the Prophet",
    subtitle: "The Ten Promised Jannah",
    category: "Companions Biography",
    price: 2.78,
    stars: 5,
    reviewCount: 73,
    badge: "Bestseller",
    lang: "AR · EN",
    description: {
      en: "The stories of the 10 heroes who laid the foundations of Islam and left their mark on the golden pages of history. A special guide presenting all ten companions promised Paradise.",
      ar: "قصص العشرة الأبطال الذين أرسوا دعائم الإسلام وتركوا بصمتهم في الصفحات الذهبية من التاريخ.",
      fr: "Les histoires des 10 héros qui ont posé les fondations de l'Islam et laissé leur empreinte dans les pages dorées de l'histoire.",
      tr: "İslam'ın temelini atan ve cennete gireceği müjdelenen 10 sahabenin hikayeleri.",
    },
    images: ["/books/companions-ten-jannah/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48053944",
    reviews: [
      { author: "Yusuf B.", location: "Toronto, Canada", rating: 5, text: "Downloaded in seconds after payment. My whole family is reading it. Incredible value.", textAr: "اللهم بارك لنا في علمنا", date: "2025-03-14" },
      { author: "Rahma D.", location: "Nairobi, Kenya", rating: 5, text: "Having all ten companions in one book is perfect. Great for family study circles.", date: "2025-02-20" },
    ],
  },
  {
    id: 8,
    slug: "turkbook1",
    titleAr: "رحلة أعظم معلم",
    titleEn: "Journey of the Greatest Teacher",
    subtitle: "En Büyük Öğretmen'in Yolculuğu",
    category: "Prophet's Biography",
    price: 4.17,
    stars: 5,
    reviewCount: 29,
    badge: null,
    lang: "AR · TR",
    description: {
      en: "Timeless lessons from the life of Prophet Muhammad ﷺ — presented in Turkish and Arabic side by side. A book that will nourish your heart and develop your language.",
      ar: "دروس خالدة من حياة النبي محمد ﷺ — مقدّمة بالتركية والعربية جنبًا إلى جنب. كتاب يغذي قلبك ويطور لغتك.",
      fr: "Des leçons intemporelles de la vie du Prophète Muhammad ﷺ — présentées en turc et en arabe côte à côte.",
      tr: "Hz. Muhammed ﷺ'in hayatından zamansız dersler — Türkçe ve Arapça yan yana. Kalbinizi besleyecek ve dilinizi geliştirecek bir rehber.",
    },
    images: ["/books/turkbook1/cover.jpg"],
    shopierUrl: "https://www.shopier.com/AAMHPublishing/48047165",
    reviews: [
      { author: "Mehmet K.", location: "Istanbul, Turkey", rating: 5, text: "Türkçe ve Arapça bir arada — dil öğrenmek için mükemmel bir yöntem. Teşekkürler!", date: "2025-04-18" },
      { author: "Ayşe N.", location: "Ankara, Turkey", rating: 5, text: "Hz. Muhammed'in hayatını bu kadar güzel anlatan bir kitap görmedim. Çok etkileyici.", date: "2025-03-08" },
    ],
  },
];

export default books;

// ── PROMO CODES ─────────────────────────────────────────────
export const promoCodes: Record<string, { discountPercent: number; description: string }> = {
  RAMADAN2025: { discountPercent: 33, description: "Ramadan Special — 33% off" },
  WELCOME10:   { discountPercent: 10, description: "Welcome discount — 10% off" },
  UMMAH20:     { discountPercent: 20, description: "Ummah discount — 20% off" },
};

// ── BUNDLE ──────────────────────────────────────────────────
export const bundle = {
  title: "Companions of the Prophet — The Ten Promised Jannah",
  titleAr: "العشرة المبشرون بالجنة",
  price: 2.78,
  originalPrice: 26.64,
  shopierUrl: "https://www.shopier.com/AAMHPublishing/48053944",
};
