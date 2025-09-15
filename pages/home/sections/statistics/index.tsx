"use client"

import { Card, CardContent } from "../../../../components/ui/card"
import { Users, BookOpen, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  {
    icon: Users,
    number: "2,500+",
    label: "Active Students",
    description: "From 50+ countries worldwide",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    number: "25+",
    label: "Expert Teachers",
    description: "Qualified & experienced instructors",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Clock,
    number: "50,000+",
    label: "Teaching Hours",
    description: "Delivered with excellence",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Award,
    number: "1,800+",
    label: "Certificates Issued",
    description: "Course completions & achievements",
    color: "from-amber-500 to-orange-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
}

export function StatisticsSection() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#245E51] bg-[#A8FF51]/20 rounded-full border border-[#A8FF51]/30">
            Our Impact in Numbers
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
            Trusted by <span className="text-transparent bg-gradient-to-r from-[#245E51] to-[#A8FF51] bg-clip-text">Learners Worldwide</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            A growing community learning Quran and Arabic with certified teachers and structured programs.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#A8FF51]/25 text-[#245E51] mb-5 border border-[#A8FF51]/40">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <motion.h3
                    className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1">{stat.label}</h4>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
