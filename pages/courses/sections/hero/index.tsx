"use client"
import { allCourses } from "@/pages/courses/data/courses"
import React, { useEffect, useState } from "react"

export function CoursesHero() {
  const total = allCourses.length
  const free = allCourses.filter(c=>c.price.toLowerCase()==="free").length
  const beginner = allCourses.filter(c=>c.level.toLowerCase().includes("beginner")).length
  const [showLottie, setShowLottie] = useState(false)
  const [LottieComp, setLottieComp] = useState<null | ((props: any) => JSX.Element)>(null)

  useEffect(() => {
    const run = async () => {
      setShowLottie(true)
      try {
        const mod = await import("@lottiefiles/dotlottie-react")
        setLottieComp(() => mod.DotLottieReact as unknown as (props: any) => JSX.Element)
      } catch {
        // ignore
      }
    }
    // @ts-ignore
    const ric = typeof requestIdleCallback !== "undefined" ? requestIdleCallback(run) : setTimeout(run, 150)
    return () => {
      // @ts-ignore
      if (typeof cancelIdleCallback !== "undefined") cancelIdleCallback(ric as any)
      else clearTimeout(ric as any)
    }
  }, [])

  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 bg-[#FCF8F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#245E51] bg-[#A8FF51]/20 rounded-full border border-[#A8FF51]/30">
              Course Catalog
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 flex items-center gap-4">
              <span>
                Explore Our <span className="text-transparent bg-gradient-to-r from-[#245E51] to-[#A8FF51] bg-clip-text">Learning Paths</span>
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
              A structured collection of Quran, Arabic and Islamic Studies courses designed to elevate your knowledge and spiritual growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200">
                <span className="font-semibold text-[#245E51]">{total}</span> total courses
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200">
                <span className="font-semibold text-[#245E51]">{free}</span> free
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200">
                <span className="font-semibold text-[#245E51]">{beginner}</span> beginner friendly
              </div>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl [transform:scaleX(-1)]">
              {showLottie && LottieComp ? (
                <LottieComp
                  src="/animations/girl reciting Holy Quran.lottie"
                  loop
                  autoplay
                  style={{ width: "100%", height: "100%", background: "transparent", minHeight: "500px" }}
                />
              ) : (
                <div className="w-full aspect-square bg-transparent rounded-2xl" style={{ minHeight: "500px" }} />
              )}
              <noscript>
                <img src="/quran-with-tajweed-marks.jpg" alt="Girl reciting Holy Quran" />
              </noscript>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
