export interface Course {
  id: string
  title: string
  description: string
  level: string
  duration: string
  students: string
  rating: number
  price: string
  originalPrice?: string | null
  image?: string
  imageAlt?: string
  category: string
  badge?: string | null
  badgeType?: "new" | "sale" | "popular" | null
}

export const allCourses: Course[] = [
  {
    id: "quran-tajweed",
    title: "Quran Reading & Tajweed",
    description: "Master proper Quran recitation with correct pronunciation and advanced Tajweed rules.",
    level: "Beginner → Advanced",
    duration: "6 months",
    students: "850+",
    rating: 4.9,
    price: "Free",
    originalPrice: null,
    category: "Quran",
    badge: "Popular",
    badgeType: "popular",
    image: "/quran-with-tajweed-marks.jpg",
    imageAlt: "Quran with tajweed marks",
  },
  {
    id: "arabic-master",
    title: "Arabic Language Mastery",
    description: "Modern Standard Arabic from alphabet to fluent comprehension & expression.",
    level: "Beginner",
    duration: "8 months",
    students: "650+",
    rating: 4.8,
    price: "$99",
    category: "Arabic",
    badge: "New",
    badgeType: "new",
    image: "/arabic-language.jpg",
    imageAlt: "Arabic learning materials",
  },
  {
    id: "hifz-program",
    title: "Quran Memorization (Hifz)",
    description: "Systematic memorization with coaching, retention cycles & accountability.",
    level: "All Levels",
    duration: "2–4 years",
    students: "420+",
    rating: 4.9,
    price: "$149",
    originalPrice: "$199",
    category: "Quran",
    badge: "Sale",
    badgeType: "sale",
    image: "/quran-memorization.jpg",
    imageAlt: "Student memorizing Quran",
  },
  {
    id: "islamic-studies-foundation",
    title: "Islamic Studies Foundation",
    description: "Core beliefs, practices, seerah & contemporary applications in a structured path.",
    level: "Beginner",
    duration: "4 months",
    students: "380+",
    rating: 4.7,
    price: "$79",
    category: "Islamic Studies",
    image: "/islamic-studies.jpg",
    imageAlt: "Islamic studies resources",
  },
  {
    id: "hadith-intro",
    title: "Introduction to Hadith Sciences",
    description: "Classification, authenticity principles & key collections overview.",
    level: "Intermediate",
    duration: "3 months",
    students: "210+",
    rating: 4.8,
    price: "$59",
    category: "Islamic Studies",
    image: "/islamic-books-and-mosque.jpg",
    imageAlt: "Islamic books",
  },
  {
    id: "arabic-conversation",
    title: "Arabic Conversation Lab",
    description: "Live speaking sessions focused on real-life situations & vocabulary expansion.",
    level: "Intermediate",
    duration: "10 weeks",
    students: "290+",
    rating: 4.6,
    price: "$69",
    category: "Arabic",
    image: "/arabic-calligraphy-and-books.jpg",
    imageAlt: "Arabic calligraphy and books",
  },
  {
    id: "fiqh-essentials",
    title: "Fiqh Essentials",
    description: "Foundational rulings of worship with practical application & evidences.",
    level: "Beginner",
    duration: "6 weeks",
    students: "340+",
    rating: 4.7,
    price: "$49",
    category: "Islamic Studies",
    image: "/islamic-books-and-mosque-architecture.jpg",
    imageAlt: "Mosque architecture books",
  },
  {
    id: "tajweed-masterclass",
    title: "Advanced Tajweed Masterclass",
    description: "Refinement of articulation, advanced rules & recitation style polishing.",
    level: "Advanced",
    duration: "12 weeks",
    students: "120+",
    rating: 5.0,
    price: "$129",
    category: "Quran",
    image: "/quran-with-tajweed-marks.jpg",
    imageAlt: "Quran tajweed close up",
  },
]

export const categoryOrder = ["All", "Quran", "Arabic", "Islamic Studies"]
