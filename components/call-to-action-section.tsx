"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, ArrowRight, Sparkles, Star } from "lucide-react"
import { motion } from "framer-motion"

export function CallToActionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-secondary rounded-full"
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full"
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-2 h-2 bg-secondary rounded-full"
          animate={{
            y: [0, -60, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground border-0 shadow-2xl overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-secondary/10 to-secondary/20" />

            <CardContent className="p-16 text-center relative z-10">
              <motion.div
                className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-secondary/30 to-secondary/20 mb-8 backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                }}
                transition={{ duration: 0.3 }}
              >
                <BookOpen className="h-12 w-12 text-secondary" />
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="h-6 w-6 text-secondary" />
                </motion.div>
              </motion.div>

              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-8 text-balance leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Ready to Begin Your{" "}
                <span className="relative">
                  Sacred Learning Journey?
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Join thousands of students worldwide who have chosen our academy for their transformative Quranic and
                Arabic education. Start with a personalized free trial lesson today.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border-0"
                >
                  Start Free Trial Lesson
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-10 py-4 rounded-xl bg-transparent backdrop-blur-sm transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center justify-center space-x-8 text-primary-foreground/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium">No commitment required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium">Meet your teacher</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium">Personalized learning plan</span>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
