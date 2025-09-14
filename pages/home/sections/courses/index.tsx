"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const courses = [
  {
    title: "Quran Reading & Tajweed",
    description:
      "Master proper Quran recitation with correct pronunciation and advanced Tajweed rules for beautiful recitation",
    level: "Beginner to Advanced",
    duration: "6 months",
    students: "850+",
    rating: 4.9,
    price: "Free",
    originalPrice: null,
    gradient: "from-primary/80 via-primary to-primary/90",
    badge: "Popular",
    badgeType: "popular",
    image: "https://seekersguidance.org/wp-content/uploads/2022/01/Kid-Child-Quran-Read-Reading-Mosque-Shutterstock-scaled.jpg",
    imageAlt: "Quran with tajweed marks close-up",
  },
  {
    title: "Arabic Language Mastery",
    description: "Complete Modern Standard Arabic course from fundamentals to fluency with interactive lessons",
    level: "Beginner",
    duration: "8 months",
    students: "650+",
    rating: 4.8,
    price: "$99",
    originalPrice: null,
    gradient: "from-primary via-primary/90 to-primary/80",
    badge: "New",
    badgeType: "new",
    image: "https://blog.globalsadaqah.com/wp-content/uploads/2022/02/561-1024x536.png",
    imageAlt: "Arabic language study materials and books",
  },
  {
    title: "Quran Memorization (Hifz)",
    description: "Systematic Quran memorization program with proven techniques and personalized support system",
    level: "All Levels",
    duration: "2-4 years",
    students: "420+",
    rating: 4.9,
    price: "$149",
    originalPrice: "$199",
    gradient: "from-primary/80 via-primary to-primary/90",
    badge: "Sale",
    badgeType: "sale",
    image: "https://dcok7u9o4gc10.cloudfront.net/uploads/ckeditor/pictures/1430/content_shutterstock_144203029.jpg",
    imageAlt: "Student memorizing Quran (Hifz)",
  },
  {
    title: "Islamic Studies Foundation",
    description: "Comprehensive introduction to Islamic beliefs, practices, history and contemporary applications",
    level: "Beginner",
    duration: "4 months",
    students: "380+",
    rating: 4.7,
    price: "$79",
    originalPrice: null,
    gradient: "from-emerald-400 via-emerald-500 to-emerald-600",
    badge: null,
    badgeType: null,
    image: "https://images.pexels.com/photos/4521947/pexels-photo-4521947.jpeg?cs=srgb&dl=pexels-nadim-shaikh-2923533-4521947.jpg&fm=jpg",
    imageAlt: "Islamic studies resources and mosque architecture",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function CoursesOverview() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#245E51] bg-[#A8FF51]/20 rounded-full border border-[#A8FF51]/30">
            Popular Programs
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
            Our Featured <span className="text-transparent bg-gradient-to-r from-[#245E51] to-[#A8FF51] bg-clip-text">Courses</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Discover expertly designed courses to elevate your Quranic and Arabic learning journey.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:mt-16 lg:gap-6 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course, index) => {
            const imageSrc =
              (course as any).image ||
              (index === 0
                ? "/quran-with-tajweed-marks.jpg"
                : index === 1
                  ? "/arabic-language.jpg"
                  : index === 2
                    ? "/quran-memorization.jpg"
                    : "/islamic-studies.jpg")
            const imageAlt =
              (course as any).imageAlt ||
              (index === 0
                ? "Quran with tajweed marks"
                : index === 1
                  ? "Arabic language study materials"
                  : index === 2
                    ? "Quran memorization (Hifz)"
                    : "Islamic studies resources")

            return (
              <motion.div
                key={index}
                className="relative group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#A8FF51]"
                variants={cardVariants}
              >
                <div className="relative p-4">
                  <div className="relative aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden">
                    <img src={imageSrc} alt={imageAlt} loading="lazy" className="w-full h-full object-cover" />

                    {course.badge && (
                      <div className="absolute left-3 top-3">
                        <span
                          className={`px-3 py-1 text-xs font-semibold tracking-wide rounded-full backdrop-blur-sm border ${
                            course.badgeType === "new"
                              ? "text-gray-900 bg-white/70 border-white/60"
                              : course.badgeType === "sale"
                                ? "text-white bg-gray-900/90 border-gray-900"
                                : course.badgeType === "popular"
                                  ? "text-[#245E51] bg-[#A8FF51]/90 border-[#A8FF51]"
                                  : "text-gray-900 bg-white/70 border-white/60"
                          }`}
                        >
                          {course.badge}
                        </span>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#245E51] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 border border-gray-100">{course.level}</span>
                    <span>•</span>
                    <span>{course.students} students</span>
                    <span>•</span>
                    <span>⭐ {course.rating}</span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Duration</div>
                      <div className="text-sm font-semibold text-gray-900">{course.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Price</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">{course.price}</span>
                        {course.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="px-8 py-3 inline-flex items-center justify-center text-white bg-gradient-to-r from-[#245E51] to-[#1a4a3e] hover:from-[#1a4a3e] hover:to-[#245E51] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
