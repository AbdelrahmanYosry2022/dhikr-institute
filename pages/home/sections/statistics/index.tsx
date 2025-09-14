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
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-secondary rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-xl"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-balance">Our Impact in Numbers</h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto text-pretty leading-relaxed">
            Join thousands of students worldwide who have chosen us for their transformative Quranic and Arabic learning
            journey.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center group hover:bg-primary-foreground/20 transition-all duration-500 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-8">
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="h-10 w-10 text-white" />
                  </motion.div>

                  <motion.h3
                    className="text-4xl font-bold mb-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  >
                    {stat.number}
                  </motion.h3>

                  <h4 className="text-xl font-semibold mb-3 text-primary-foreground">{stat.label}</h4>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
