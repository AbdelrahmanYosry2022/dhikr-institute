"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "../../../../components/ui/button"
import styles from "./team-card-carousel.module.css"

export function TeamCardCarousel() {
  const teamMembers = [
    { name: "Emily Kim", role: "Founder" },
    { name: "Michael Steward", role: "Creative Director" },
    { name: "Emma Rodriguez", role: "Lead Developer" },
    { name: "Julia Gimmel", role: "UX Designer" },
    { name: "Lisa Anderson", role: "Marketing Manager" },
    { name: "James Wilson", role: "Product Manager" },
    { name: "Aisha Khan", role: "Community Lead" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const cardsRef = useRef<Array<HTMLDivElement | null>>([])
  const dotsRef = useRef<Array<HTMLDivElement | null>>([])
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, teamMembers.length)
    dotsRef.current = dotsRef.current.slice(0, teamMembers.length)
    updateCarousel(0, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

    setTimeout(() => { if (!skipLock) setIsAnimating(false) }, 800)
  }

  function prev() { updateCarousel(currentIndex - 1) }
  function next() { updateCarousel(currentIndex + 1) }

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "ArrowLeft") prev(); else if (e.key === "ArrowRight") next() }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isAnimating])

  useEffect(() => {
    function onTouchStart(e: TouchEvent) { touchStartX.current = e.changedTouches[0].screenX }
    function onTouchEnd(e: TouchEvent) {
      touchEndX.current = e.changedTouches[0].screenX
      const diff = touchStartX.current - touchEndX.current
      const swipeThreshold = 50
      if (Math.abs(diff) > swipeThreshold) { if (diff > 0) updateCarousel(currentIndex + 1); else updateCarousel(currentIndex - 1) }
    }
    document.addEventListener("touchstart", onTouchStart)
    document.addEventListener("touchend", onTouchEnd)
    return () => { document.removeEventListener("touchstart", onTouchStart); document.removeEventListener("touchend", onTouchEnd) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isAnimating])

  return (
    <div className={styles.teamCarousel}>
      <h1 className={styles.aboutTitle}>OUR TEAM</h1>
      <div className={styles.carouselContainer}>
        <Button className={`${styles.navArrow} ${styles.left}`} aria-label="previous" onClick={() => prev()} variant="default" size="icon">‹</Button>
        <div className={styles.carouselTrack}>
          {Array(teamMembers.length)
            .fill("https://img.freepik.com/free-photo/smiling-muslim-man-applauding_482257-103227.jpg?semt=ais_incoming&w=740&q=80")
            .map((src, i) => (
              <div key={i} data-index={i} className={styles.card} ref={(el) => { cardsRef.current[i] = el }} onClick={() => updateCarousel(i)}>
                <img src={src} alt={`Member ${i + 1}`} />
              </div>
            ))}
        </div>
        <Button className={`${styles.navArrow} ${styles.right}`} aria-label="next" onClick={() => next()} variant="default" size="icon">›</Button>
      </div>

      <div className={styles.memberInfo}>
        <h2 className={styles.memberName} style={{ opacity: 1 }}>{teamMembers[currentIndex].name}</h2>
        <p className={styles.memberRole} style={{ opacity: 1 }}>{teamMembers[currentIndex].role}</p>
      </div>

      <div className={styles.dots} role="tablist" aria-label="carousel dots">
        {teamMembers.map((_, i) => (
          <div key={i} data-index={i} role="tab" ref={(el) => { dotsRef.current[i] = el }} className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`} aria-selected={i === currentIndex ? "true" : "false"} onClick={() => updateCarousel(i)} />
        ))}
      </div>
    </div>
  )
}
