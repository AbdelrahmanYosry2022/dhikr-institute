"use client"
import { ArrowRight } from "lucide-react"
import React, { useEffect, useState } from "react"
// Defer loading Lottie to avoid blocking initial animations

import { motion } from "motion/react"
import RotatingText from "@/components/RotatingText.jsx"

export function HeroSection() {
  const [showLottie, setShowLottie] = useState(false)
  const [LottieComp, setLottieComp] = useState<null | ((props: any) => JSX.Element)>(null)

  useEffect(() => {
    const run = async () => {
      setShowLottie(true)
      try {
        const mod = await import("@lottiefiles/dotlottie-react")
        setLottieComp(() => mod.DotLottieReact as unknown as (props: any) => JSX.Element)
      } catch {
        // ignore load failures
      }
    }
    // Mount after idle or short timeout to avoid blocking first paint
    // @ts-ignore
    const ric = typeof requestIdleCallback !== "undefined" ? requestIdleCallback(run) : setTimeout(run, 150)
    return () => {
      // @ts-ignore
      if (typeof cancelIdleCallback !== "undefined") cancelIdleCallback(ric as any)
      else clearTimeout(ric as any)
    }
  }, [])

  return (
    <section className="bg-[#fcf9f2] pt-24 pb-10 sm:pt-28 sm:pb-16 lg:pt-48 lg:pb-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#245E51] bg-[#A8FF51]/20 rounded-full border border-[#A8FF51]/30">
                Learn Quran & Arabic Online
              </div>

              <h1 className="text-5xl font-bold text-gray-900 leading-tight lg:text-6xl xl:text-7xl">
                Master the Sacred{" "}
                <motion.span
                  layout
                  initial={false}
                  transition={{ layout: { type: "spring", stiffness: 400, damping: 30 } }}
                  className="inline-flex items-baseline rounded-lg px-3 py-1 bg-gradient-to-r from-[#245E51] to-[#A8FF51]"
                  aria-hidden="false"
                >
                  <span className="text-white leading-none">

                    <RotatingText
                      texts={['Quran', 'Arabic', 'Islam']}
                      mainClassName="px-2 sm:px-2 md:px-3 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                      staggerFrom={"last"}
                      initial={false}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.02}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 28, stiffness: 380 }}
                      rotationInterval={2200}
                    />
                  </span>
                  
                </motion.span>{" "}
                with Expert Teachers
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Begin your spiritual journey with personalized Quran and Arabic lessons from certified instructors worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#245E51] to-[#1a4a3e] rounded-xl hover:from-[#1a4a3e] hover:to-[#245E51] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                role="button"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                role="button"
              >
                Watch Demo
              </a>
            </div>


            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#245E51] to-[#1a4a3e] rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-[#A8FF51] to-[#8ee642] rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-[#245E51]/70 to-[#A8FF51]/70 rounded-full border-2 border-white"></div>
                </div>
                <span>1000+ students</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div>⭐ 4.9/5 rating</div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full">
              {showLottie && LottieComp ? (
                <LottieComp
                  src="https://lottie.host/7b795c4a-181d-4dab-b71d-6db9c66ba740/PYY2O37pZ6.lottie"
                  loop
                  autoplay
                  style={{ width: "800px", height: "600px", maxWidth: "none" }}
                />
              ) : (
                <div style={{ width: "800px", height: "600px", maxWidth: "none" }} />
              )}
              {/* Noscript / fallback image */}
              <noscript>
                <img src="/quran-with-tajweed-marks.jpg" alt="Quran with tajweed marks" />
              </noscript>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
