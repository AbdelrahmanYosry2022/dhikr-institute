import { Header } from "@/pages/home/sections/header"
import { HeroSection } from "@/pages/home/sections/hero/index"
import { FeaturesSection } from "@/pages/home/sections/features/index"
import { CoursesOverview } from "@/pages/home/sections/courses"
// removed PopularCategories
import { TestimonialsSection } from "@/pages/home/sections/testimonials"
import { StatisticsSection } from "@/pages/home/sections/statistics"
import { CallToActionSection } from "@/pages/home/sections/cta/component"
import { Footer } from "@/pages/home/sections/footer"
import { DotsGridSection } from "@/pages/home/sections/dots-grid"
// removed MomentumGallerySection
import { TeamCardCarousel } from "@/pages/home/sections/team"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
  <CoursesOverview />
  <TeamCardCarousel />
        <TestimonialsSection />
        <StatisticsSection />
        <CallToActionSection />
    <DotsGridSection />
      </main>
      <Footer />
    </div>
  )
}
