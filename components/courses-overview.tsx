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
      ease: "easeOut",
    },
  },
}

export function CoursesOverview() {
  return (
    <section className="py-12 bg-background sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our Featured Courses</h2>
          <p className="mt-4 text-base font-normal leading-7 text-muted-foreground">
            Discover our comprehensive range of expertly designed courses that will transform your Quranic and Arabic
            learning journey.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:mt-16 lg:gap-4 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="relative group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
            >
              <div className="relative p-4">
                <div className="relative h-40 bg-muted rounded-xl overflow-hidden">
                  <img
                    src={`/abstract-geometric-shapes.png?key=tnq5k&height=160&width=280&query=${
                      index === 0
                        ? "open quran book with arabic calligraphy"
                        : index === 1
                          ? "arabic letters and calligraphy design"
                          : index === 2
                            ? "geometric islamic pattern with crescents"
                            : "mosque dome and minaret silhouette"
                    }`}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />

                  {course.badge && (
                    <div className="absolute left-3 top-3">
                      <span
                        className={`px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full ${
                          course.badgeType === "new"
                            ? "text-foreground bg-background"
                            : course.badgeType === "sale"
                              ? "text-background bg-foreground"
                              : course.badgeType === "popular"
                                ? "text-foreground bg-primary"
                                : "text-foreground bg-background"
                        }`}
                      >
                        {course.badge}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>

                <div className="text-xs text-muted-foreground mb-4">{course.students} students enrolled</div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Duration</div>
                    <div className="text-sm font-semibold text-foreground">{course.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Price</div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-foreground">{course.price}</span>
                      {course.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
            className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border-0"
          >
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
