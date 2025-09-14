"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import styles from "./team-carousel-section.module.css"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
  specialties: string[]
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Emily Kim",
    role: "Founder",
    bio: "Visionary leader with a passion for Islamic education and community building.",
    image: "/middle-eastern-female-teacher-with-hijab.jpg",
    specialties: ["Leadership", "Vision", "Community"]
  },
  {
    id: 2,
    name: "Michael Steward",
    role: "Creative Director",
    bio: "Creative mind behind our innovative educational content and visual design.",
    image: "/middle-eastern-male-islamic-scholar.jpg",
    specialties: ["Design", "Content", "Innovation"]
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Lead Developer",
    bio: "Technical expert ensuring our platform delivers the best learning experience.",
    image: "/southeast-asian-female-teacher-with-hijab.jpg",
    specialties: ["Development", "Technology", "UX"]
  },
  {
    id: 4,
    name: "Julia Gimmel",
    role: "UX Designer",
    bio: "User experience specialist focused on creating intuitive learning interfaces.",
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["UX Design", "Research", "Prototyping"]
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Marketing Manager",
    bio: "Strategic marketer connecting our mission with the global community.",
    image: "/middle-eastern-male-teacher-with-beard.jpg",
    specialties: ["Marketing", "Strategy", "Outreach"]
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Product Manager",
    bio: "Product strategist ensuring our offerings meet student and educator needs.",
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Product Strategy", "Analytics", "Planning"]
  }
]

export function TeamCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [memberName, setMemberName] = useState(teamMembers[0].name)
  const [memberRole, setMemberRole] = useState(teamMembers[0].role)
  const [nameOpacity, setNameOpacity] = useState(1)
  const [roleOpacity, setRoleOpacity] = useState(1)
  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const updateCarousel = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const actualIndex = (newIndex + teamMembers.length) % teamMembers.length;
    setCurrentIndex(actualIndex);

    // Fade out current name & role
    setNameOpacity(0);
    setRoleOpacity(0);

    setTimeout(() => {
      setMemberName(teamMembers[actualIndex].name);
      setMemberRole(teamMembers[actualIndex].role);
      setNameOpacity(1);
      setRoleOpacity(1);
    }, 300);

    // After animation ends, allow new
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const nextSlide = () => {
    updateCarousel(currentIndex + 1)
  }

  const prevSlide = () => {
    updateCarousel(currentIndex - 1)
  }

  const goToSlide = (index: number) => {
    updateCarousel(index)
  }

  // Touch/Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        updateCarousel(currentIndex + 1)
      } else {
        updateCarousel(currentIndex - 1)
      }
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        updateCarousel(currentIndex - 1)
      } else if (e.key === 'ArrowRight') {
        updateCarousel(currentIndex + 1)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  // Initialize carousel
  useEffect(() => {
    updateCarousel(0)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Meet our dedicated team of expert instructors who are passionate about teaching the Quran and Arabic language
          </p>
          
          {/* Member Name and Role Display */}
          <div className="mb-8">
            <h3 
              className="text-2xl font-bold text-gray-900 mb-2 transition-opacity duration-300"
              style={{ opacity: nameOpacity }}
            >
              {memberName}
            </h3>
            <p 
              className="text-lg text-primary font-semibold transition-opacity duration-300"
              style={{ opacity: roleOpacity }}
            >
              {memberRole}
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-7xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button
            className={`${styles.navigationButton} ${styles.navPrev}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            className={`${styles.navigationButton} ${styles.navNext}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Carousel Track */}
          <div className={styles.carouselContainer}>
            <div ref={carouselRef} className={styles.carouselTrack}>
              {teamMembers.map((member, index) => {
                const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;
                let positionClass = styles.hidden;
                
                if (offset === 0) {
                  positionClass = styles.center;
                } else if (offset === 1) {
                  positionClass = styles.right1;
                } else if (offset === 2) {
                  positionClass = styles.right2;
                } else if (offset === teamMembers.length - 1) {
                  positionClass = styles.left1;
                } else if (offset === teamMembers.length - 2) {
                  positionClass = styles.left2;
                }

                return (
                  <div 
                    key={member.id} 
                    className={`${styles.card} ${positionClass}`}
                    onClick={() => updateCarousel(index)}
                  >
                    <div className={`${styles.teamCard} group`}>
                      {/* Image Container */}
                      <div className={styles.cardImageContainer}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className={styles.cardImage}
                        />
                        <div className={`${styles.imageOverlay} group-hover:opacity-100`} />
                      </div>
                      
                      {/* Content */}
                      <div className={styles.cardContent}>
                        <p className={styles.memberBio}>
                          {member.bio}
                        </p>
                        
                        {/* Specialties */}
                        <div className={styles.specialtiesContainer}>
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className={styles.specialtyTag}
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className={styles.dotsContainer}>
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}