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
  sessions?: string
  hoursPerWeek?: string
  outcomes?: string[]
  syllabus?: string[]
  prerequisites?: string[]
}

export const allCourses: Course[] = [
  // Quran Courses
  {
    id: "quran-reading-tajweed",
    title: "Quran Reading & Tajweed",
    description: "Master accurate Quran recitation with proper articulation (makharij) and progressive Tajweed rules.",
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
    sessions: "2–3 / week",
    hoursPerWeek: "2–4h",
    outcomes: [
      "Correct pronunciation & articulation",
      "Apply core & advanced Tajweed rules",
      "Fluent recitation with confidence"
    ],
    prerequisites: ["Ability to read basic Arabic letters (optional)"] ,
    syllabus: [
      "Arabic letters refinement & articulation",
      "Noon/Meem rules, elongations (madd)",
      "Stopping & pausing rules",
      "Advanced characteristics (sifaat) & polishing"
    ]
  },
  {
    id: "quran-memorization-hifz",
    title: "Quran Memorization (Hifz)",
    description: "Structured Hifz journey with retention cycles, accountability, memorization tracking & coaching.",
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
    sessions: "5 / week",
    hoursPerWeek: "5–7h",
    outcomes: ["Consistent memorization habit","Retention & revision cycles","Certified recitation standards"],
    prerequisites: ["Basic fluency in reading Quran"],
    syllabus: [
      "Short Surahs & Juz Amma",
      "Progressive Juz sequencing",
      "Weekly & monthly revision loops",
      "Pre-final consolidation phase"
    ]
  },
  {
    id: "quran-translation-tafsir",
    title: "Quran Translation & Tafsir",
    description: "Understand Quranic meanings through thematic translation, key vocabulary & classical explanations.",
    level: "Intermediate",
    duration: "5 months",
    students: "260+",
    rating: 4.8,
    price: "$119",
    category: "Quran",
    image: "/elegant-arabic-calligraphy-with-modern-books.jpg",
    imageAlt: "Tafsir books",
    sessions: "2 / week",
    hoursPerWeek: "3h",
    outcomes: ["Contextual understanding","Key thematic insights","Applied reflection"],
    prerequisites: ["Basic Tajweed & reading ability"],
    syllabus: ["Selected Surah themes","Linguistic insights","Classical commentary survey","Applied reflection sessions"]
  },
  {
    id: "quran-for-beginners",
    title: "Quran for Beginners",
    description: "Foundational reading course for absolute beginners: letters, short vowels, joining & basic fluency.",
    level: "Absolute Beginner",
    duration: "10 weeks",
    students: "510+",
    rating: 4.9,
    price: "$59",
    category: "Quran",
    image: "/quran-reading-hands.gif",
    imageAlt: "Hands reading Quran",
    sessions: "3 / week",
    hoursPerWeek: "3–4h",
    outcomes: ["Read basic words","Recognize letters in all forms","Build recitation confidence"],
    prerequisites: ["No prior knowledge required"],
    syllabus: ["Alphabet & forms","Harakat & sukoon","Word joining","Short Surah practice"]
  },

  // Arabic Language
  {
    id: "modern-standard-arabic",
    title: "Modern Standard Arabic",
    description: "Structured MSA path: vocabulary, grammar, sentence formation & comprehension for daily and academic use.",
    level: "Beginner → Intermediate",
    duration: "8 months",
    students: "650+",
    rating: 4.8,
    price: "$99",
    category: "Arabic",
    badge: "New",
    badgeType: "new",
    image: "/arabic-language.jpg",
    imageAlt: "Arabic learning materials",
    sessions: "2 / week",
    hoursPerWeek: "3h",
    outcomes: ["Core grammar foundation","Reading short texts","Oral expression basics"],
    prerequisites: ["Basic alphabet recognition"],
    syllabus: ["Core nouns & verbs","Simple sentences","Verb patterns","Short paragraph reading"]
  },
  {
    id: "quranic-arabic",
    title: "Quranic Arabic",
    description: "Unlock classical vocabulary & morphology for direct Quran comprehension.",
    level: "Intermediate",
    duration: "6 months",
    students: "420+",
    rating: 4.7,
    price: "$109",
    category: "Arabic",
    image: "/modern-islamic-teacher-with-quran-in-elegant-class.jpg",
    imageAlt: "Teacher with Quran",
    sessions: "2 / week",
    hoursPerWeek: "3h",
    outcomes: ["Recognize root patterns","Understand common Quranic phrases","Translate selected verses"],
    prerequisites: ["Basic MSA foundations"],
    syllabus: ["Common Quranic roots","Morphology patterns","Contextual translation","Verse analysis"]
  },
  {
    id: "egyptian-dialect",
    title: "Egyptian Arabic Dialect",
    description: "Practical spoken Egyptian Arabic for daily life, media & conversation.",
    level: "Beginner",
    duration: "12 weeks",
    students: "300+",
    rating: 4.6,
    price: "$79",
    category: "Arabic",
    image: "/student-memorizing-quran-in-peaceful-environment.jpg",
    imageAlt: "Student studying",
    sessions: "2 / week",
    hoursPerWeek: "2–3h",
    outcomes: ["Basic conversational phrases","Listening familiarity","Introduce yourself & needs"],
    prerequisites: ["Alphabet & basic sounds"],
    syllabus: ["Greetings & core verbs","Daily routines","Questions & responses","Media phrases"]
  },
  {
    id: "arabic-for-kids",
    title: "Arabic for Kids",
    description: "Engaging foundational Arabic learning for young learners through stories & activities.",
    level: "Beginner",
    duration: "5 months",
    students: "180+",
    rating: 4.9,
    price: "$89",
    category: "Arabic",
    image: "/muslim-student-1.jpg",
    imageAlt: "Young student",
    sessions: "2 / week",
    hoursPerWeek: "2h",
    outcomes: ["Letter mastery","Basic vocabulary","Short sentence recognition"],
    prerequisites: ["Ages 6–12"],
    syllabus: ["Alphabet games","Color & object vocab","Simple sentences","Story-based practice"]
  },

  // Islamic Studies
  {
    id: "islamic-studies-foundation",
    title: "Islamic Studies Foundation",
    description: "Structured overview of beliefs (aqeedah), worship, seerah & daily practice.",
    level: "Beginner",
    duration: "4 months",
    students: "380+",
    rating: 4.7,
    price: "$79",
    category: "Islamic Studies",
    image: "/islamic-studies.jpg",
    imageAlt: "Islamic studies resources",
    sessions: "2 / week",
    hoursPerWeek: "2–3h",
    outcomes: ["Understand pillars","Apply daily rulings","Seerah timeline basics"],
    prerequisites: ["General interest"],
    syllabus: ["Belief essentials","Prayer essentials","Seerah overview","Character & conduct"]
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
    sessions: "2 / week",
    hoursPerWeek: "2h",
    outcomes: ["Prayer correctness","Purification mastery","Confidence in daily worship"],
    prerequisites: ["Basic Islamic awareness"],
    syllabus: ["Purification principles","Prayer structure","Fasting overview","Everyday rulings"]
  },
  {
    id: "hadith-studies-intro",
    title: "Introduction to Hadith Studies",
    description: "Classification, authenticity principles & key canonical collections.",
    level: "Intermediate",
    duration: "3 months",
    students: "210+",
    rating: 4.8,
    price: "$59",
    category: "Islamic Studies",
    image: "/islamic-books-and-mosque.jpg",
    imageAlt: "Islamic books",
    sessions: "2 / week",
    hoursPerWeek: "2–3h",
    outcomes: ["Know isnad basics","Recognize hadith grading terms","Navigate primary collections"],
    prerequisites: ["General Islamic foundation"],
    syllabus: ["Terminology","Classification","Collection overview","Authenticity principles"]
  },
  {
    id: "islamic-history-seerah",
    title: "Islamic History & Seerah",
    description: "Chronological journey of the Prophet’s life and early Islamic development.",
    level: "Beginner → Intermediate",
    duration: "5 months",
    students: "260+",
    rating: 4.8,
    price: "$89",
    category: "Islamic Studies",
    image: "/islamic-books-and-mosque.jpg",
    imageAlt: "Seerah study books",
    sessions: "2 / week",
    hoursPerWeek: "2–3h",
    outcomes: ["Timeline comprehension","Context for revelation","Role model lessons"],
    prerequisites: ["General interest"],
    syllabus: ["Pre-revelation context","Makkan phase","Madinan expansion","Legacy & lessons"]
  },
]

export const categoryOrder = ["All", "Quran", "Arabic", "Islamic Studies"]
