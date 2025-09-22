"use client"
import { Header } from "@/pages/home/sections/header"
import { Footer } from "@/pages/home/sections/footer"
import { CoursesHero } from "@/pages/courses/sections/hero"
import { CoursesCatalog } from "@/pages/courses/sections/catalog"
import { motion } from 'framer-motion'
import { StandardCTA } from '@/components/standard-cta'

export default function CoursesCatalogPage() {
  return (
    <div className="min-h-screen bg-[#FCF8F1]">
      <Header />
      <main>
        <CoursesHero />
        <CoursesCatalog />

        {/* FAQ Block (SEO structured content) */}
        <section className="py-20 bg-white/60 backdrop-blur-xl border-y border-white/40 mt-10">
          <div className="max-w-6xl mx-auto w-[90%]">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Frequently Asked Questions</h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-base">Quick clarity about how our structured Qur'an, Arabic and Islamic Studies programs function. This section helps both learners and search engines understand our delivery model.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { q: 'How are the live classes delivered?', a: 'Interactive virtual sessions with certified instructors. Recitation correction, Arabic drills and concept explanation happen live—not pre-recorded videos.' },
                { q: 'Can I combine Qur\'an, Arabic and Islamic Studies?', a: 'Yes. Many learners pursue a blended path. Advisory support helps balance memorization, language development and conceptual learning without overload.' },
                { q: 'Do you offer placement or leveling?', a: 'We assess reading fluency, tajwīd accuracy and Arabic familiarity to recommend a starting track and weekly rhythm matched to your retention capacity.' },
                { q: 'What if I miss a class?', a: 'Sessions have structured continuity. You receive catch-up guidance and prioritized review tasks so momentum isn\'t lost.' },
                { q: 'Is there memorization accountability?', a: 'Yes. Hifz & revision tracks use repetition cycles, milestone check points and consistency metrics visible to both student and instructor.' },
                { q: 'Do you support adults and youth?', a: 'We run age-appropriate pacing. Youth tracks emphasize engagement & habit formation; adult tracks emphasize mastery depth and autonomy.' },
              ].map((item,i)=>(
                <motion.div key={item.q} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.55, delay:i*0.04, ease:[0.23,0.68,0.32,0.97] }} className="rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all p-6">
                  <h3 className="font-semibold text-gray-900 tracking-tight mb-2 text-sm">{item.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <StandardCTA
          badge="Start Your Journey"
          titlePrefix="Master the"
          titleHighlight="Qur'an & Arabic"
          paragraph="Join thousands of motivated learners building fluent recitation, Arabic comprehension and applied Islamic understanding with certified teachers and structured accountability."
          primaryLabel="Start Free Trial Lesson"
          primaryHref="#trial"
        />
      </main>
      <Footer />
    </div>
  )
}
