"use client"

// استيراد الأدوات اللازمة من React وزر الواجهة
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import styles from "./team-card-carousel.module.css"

// المكون الرئيسي لقسم سلايدر فريق العمل
export default function TeamCardCarousel() {
  // Team members data with Islamic names and roles
  const teamMembers = [
    { name: "Dr. Ahmed Hassan", role: "Quran Scholar" },
    { name: "Ustadha Fatima Al-Zahra", role: "Arabic Teacher" },
    { name: "Sheikh Omar Abdullah", role: "Tajweed Expert" },
    { name: "Ustadha Khadija Rahman", role: "Islamic Studies" },
    { name: "Dr. Yusuf Ibrahim", role: "Hadith Scholar" },
    { name: "Ustadha Aisha Malik", role: "Quran Memorization" },
    { name: "Sheikh Ali Mahmoud", role: "Fiqh Specialist" },
  ]

  // حالات التحكم: الفهرس الحالي وحالة التحريك لمنع النقرات أثناء الأنيميشن
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  // مراجع لعناصر البطاقات والنقاط للتحكم في الأصناف CSS مباشرة
  const cardsRef = useRef<Array<HTMLDivElement | null>>([])
  const dotsRef = useRef<Array<HTMLButtonElement | null>>([])
  // مراجع لتتبع إيماءات اللمس (البداية والنهاية)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // تهيئة المراجع وتحديث الحالة المبدئية للكاروسيل عند التركيب
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, teamMembers.length)
    dotsRef.current = dotsRef.current.slice(0, teamMembers.length)
    updateCarousel(0, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // دالة أساسية: تحديث مواضع البطاقات والنقاط بناءً على الفهرس الجديد
  function updateCarousel(newIndex: number, skipLock = false) {
    if (!skipLock && isAnimating) return
    if (!skipLock) setIsAnimating(true)

    const len = teamMembers.length
    const normalized = ((newIndex % len) + len) % len
    setCurrentIndex(normalized)

    cardsRef.current.forEach((card, i) => {
      if (!card) return
      card.classList.remove(
        styles.cardCenter,
        styles.cardLeft1,
        styles.cardLeft2,
        styles.cardRight1,
        styles.cardRight2,
        styles.cardHidden
      )
      const offset = (i - normalized + len) % len
      if (offset === 0) card.classList.add(styles.cardCenter)
      else if (offset === 1) card.classList.add(styles.cardRight1)
      else if (offset === 2) card.classList.add(styles.cardRight2)
      else if (offset === len - 1) card.classList.add(styles.cardLeft1)
      else if (offset === len - 2) card.classList.add(styles.cardLeft2)
      else card.classList.add(styles.cardHidden)
    })

    // يتم تحديث مظهر النقاط وخصائص ARIA بواسطة حالة React أثناء إعادة التصيير

    setTimeout(() => {
      if (!skipLock) setIsAnimating(false)
    }, 800)
  }

  // انتقال للعنصر السابق
  function prev() {
    updateCarousel(currentIndex - 1)
  }
  // انتقال للعنصر التالي
  function next() {
    updateCarousel(currentIndex + 1)
  }

  // دعم التنقل عبر لوحة المفاتيح (الأسهم يمين/يسار)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev()
      else if (e.key === "ArrowRight") next()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isAnimating])

  // دعم اللمس: التمرير أفقياً للتنقل بين البطاقات على الأجهزة اللمسية
  useEffect(() => {
    function onTouchStart(e: TouchEvent) {
      touchStartX.current = e.changedTouches[0].screenX
    }
    function onTouchEnd(e: TouchEvent) {
      touchEndX.current = e.changedTouches[0].screenX
      const diff = touchStartX.current - touchEndX.current
      const swipeThreshold = 50
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) updateCarousel(currentIndex + 1)
        else updateCarousel(currentIndex - 1)
      }
    }
    document.addEventListener("touchstart", onTouchStart)
    document.addEventListener("touchend", onTouchEnd)
    return () => {
      document.removeEventListener("touchstart", onTouchStart)
      document.removeEventListener("touchend", onTouchEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isAnimating])

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 rounded-3xl w-7/8 mx-auto border border-gray-100">
      <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#245E51] bg-[#A8FF51]/20 rounded-full border border-[#A8FF51]/30">
            Meet Our Expert Teachers
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-[#245E51] to-[#A8FF51] bg-clip-text">
              Islamic
            </span>{" "}
            Scholars
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Learn from certified Islamic scholars and Arabic teachers with years of experience in Quran education.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className={styles.carouselContainer}>
            {/* Navigation Buttons */}
            <Button 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 text-[#245E51] hover:text-[#1a4a3e]" 
              aria-label="previous" 
              onClick={() => prev()} 
              variant="ghost" 
              size="icon"
            >
              ‹
            </Button>
            
            {/* Carousel Track */}
            <div className={styles.carouselTrack}>
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  data-index={i}
                  className={`${styles.card} bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100`}
                  ref={(el) => {
                    cardsRef.current[i] = el
                  }}
                  onClick={() => updateCarousel(i)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://img.freepik.com/free-photo/smiling-muslim-man-applauding_482257-103227.jpg?semt=ais_incoming&w=740&q=80" 
                      alt={`${member.name}`} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 text-[#245E51] hover:text-[#1a4a3e]" 
              aria-label="next" 
              onClick={() => next()} 
              variant="ghost" 
              size="icon"
            >
              ›
            </Button>
          </div>

          {/* Member Info */}
          <div className="text-center mt-12 space-y-3">
            <h3 className="text-3xl font-bold text-gray-900">
              {teamMembers[currentIndex].name}
            </h3>
            <p className="text-lg text-[#245E51] font-medium">
              {teamMembers[currentIndex].role}
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#245E51] to-[#A8FF51] mx-auto rounded-full"></div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="carousel dots">
            {teamMembers.map((_, i) => (
              <button
                key={i}
                data-index={i}
                role="tab"
                ref={(el) => {
                  dotsRef.current[i] = el
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  i === currentIndex 
                    ? 'bg-gradient-to-r from-[#245E51] to-[#A8FF51] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-selected={i === currentIndex ? "true" : "false"}
                onClick={() => updateCarousel(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
