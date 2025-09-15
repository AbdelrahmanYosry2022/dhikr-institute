"use client"

import { Button } from "../../../../components/ui/button"
import { Card, CardContent } from "../../../../components/ui/card"
import { BookOpen, ArrowRight, Sparkles, Star } from "lucide-react"
import { motion } from "framer-motion"
// TextPressure is a JS component; TS is allowed via allowJs
import TextPressure from "@/components/TextPressure"
import { ShimmerButton } from "@/components/reactbits/shimmer-button"
import "../../../../styles/learn-more-button.css"

export function CallToActionSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative max-w-6xl mx-auto">
            {/* Background TextPressure effect */}
            <div className="pointer-events-none absolute inset-x-0 top-0 bottom-30 z-20 -translate-y-1/2">
              <div className="mx-auto mt-16 w-full max-w-5xl" style={{ height: 200 }}>
                <TextPressure
                  text="JOIN DHIKR"
                  textColor="#eafbe0"
                  stroke
                  strokeColor="#A8FF51"
                  flex={false}
                  scale={false}
                  minFontSize={72}
                />
              </div>
            </div>
            <Card className="relative bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden z-10 mt-8">
              <CardContent className="p-10 md:p-14 lg:p-16 text-center relative z-10">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#245E51] bg-[#A8FF51]/20 rounded-full border border-[#A8FF51]/30">
                Start Your Journey
              </div>

              <motion.h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
                Master the <span className="text-transparent bg-gradient-to-r from-[#245E51] to-[#A8FF51] bg-clip-text">Quran & Arabic</span> Online
              </motion.h2>

              <motion.p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}>
                Join thousands of students learning with certified teachers and personalized plans. Try a free lesson and see the difference.
              </motion.p>


              

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
                <div className="flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#245E51]" />
                  <span>Free placement assessment</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#245E51]" />
                  <span>Personalized study plan</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 text-[#245E51]" />
                  <span>4.9/5 average rating</span>
                </div>
              </div>
              <motion.div
                className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <button className="learn-more">Start Free Trial Lesson</button>
              </motion.div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
