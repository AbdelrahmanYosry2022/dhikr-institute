"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = [
  {
    title: "تحفيظ القرآن",
    subtitle: "Quran Memorization",
    count: "12 كورس",
    image: "/quran-memorization.jpg",
    gradient: "from-emerald-600/80 to-emerald-800/80",
  },
  {
    title: "تجويد القرآن",
    subtitle: "Quran Recitation",
    count: "8 كورسات",
    image: "/quran-recitation.jpg",
    gradient: "from-blue-600/80 to-blue-800/80",
  },
  {
    title: "اللغة العربية",
    subtitle: "Arabic Language",
    count: "15 كورس",
    image: "/arabic-language.jpg",
    gradient: "from-purple-600/80 to-purple-800/80",
  },
  {
    title: "الدراسات الإسلامية",
    subtitle: "Islamic Studies",
    count: "10 كورسات",
    image: "/islamic-studies.jpg",
    gradient: "from-amber-600/80 to-amber-800/80",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function PopularCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">الفئات الشائعة</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعة متنوعة من الكورسات المصممة خصيصاً لتلبية احتياجاتك التعليمية
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-64"
              variants={cardVariants}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient}`} />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{category.subtitle}</p>
                  <p className="text-sm opacity-80">{category.count}</p>
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm w-fit"
                >
                  تصفح الآن
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
