"use client"
import { Header } from "@/pages/home/sections/header"
import { Footer } from "@/pages/home/sections/footer"
import { CoursesHero } from "@/pages/courses/sections/hero"
import { CoursesCatalog } from "@/pages/courses/sections/catalog"

export default function CoursesCatalogPage() {
  return (
    <div className="min-h-screen bg-[#FCF8F1]">
      <Header />
      <main>
        <CoursesHero />
        <CoursesCatalog />
      </main>
      <Footer />
    </div>
  )
}
