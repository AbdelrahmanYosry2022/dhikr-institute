"use client";
import { Header } from '@/pages/home/sections/header';
import { Footer } from '@/pages/home/sections/footer';
import { motion } from 'framer-motion';
import { StandardCTA } from '@/components/standard-cta';

// Simple local data blocks
const stats = [
  { label: 'Active Students', value: '2,300+' },
  { label: 'Certified Teachers', value: '45+' },
  { label: 'Countries Reached', value: '28' },
  { label: 'Avg Rating', value: '4.9/5' }
];

const values = [
  { title: 'Authenticity', desc: 'Rooted in Qur’an and Sunnah with scholarly oversight ensuring textual integrity.' },
  { title: 'Excellence', desc: 'High standards in pedagogy, curriculum structure and student support.' },
  { title: 'Personalization', desc: 'Adaptive learning pathways and mentorship aligned with each learner’s goals.' },
  { title: 'Barakah-Driven', desc: 'Spiritual growth, character refinement and intention precede mere information.' }
];

const timeline = [
  { year: '2021', title: 'Foundation', text: 'Started as a small Qur’an circle focused on tajweed precision and memorization discipline.' },
  { year: '2022', title: 'Structured Curriculum', text: 'Introduced multi-track Arabic & Islamic Studies programs with progress analytics.' },
  { year: '2023', title: 'Global Expansion', text: 'Scaled teacher onboarding, added virtual classrooms and certification framework.' },
  { year: '2024', title: 'Technology Layer', text: 'Launched adaptive review engine, scheduling intelligence and progress milestones.' },
  { year: '2025', title: 'Next Horizon', text: 'Integrating AI-assisted recitation feedback & deeper mastery mapping.' }
];

export default function AboutPage(){
  return (
    <div className="min-h-screen bg-[#FCF8F1]">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 bg-[#FCF8F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#245E51] bg-[#A8FF51]/20 rounded-full border border-[#A8FF51]/30">
                About Us
              </div>
              <motion.h1 initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:.75, ease:[0.23,0.68,0.32,0.97] }} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
                Empowering A Global <span className="text-transparent bg-gradient-to-r from-[#245E51] to-[#A8FF51] bg-clip-text">Ummah of Learners</span>
              </motion.h1>
              <motion.p initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:.8, delay:.06, ease:[0.23,0.68,0.32,0.97] }} className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Dhikr Institute delivers structured Qur’an, Arabic and Islamic Studies education—bridging traditional authenticity with modern learning design, mentorship and measurable progress.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-[90%] max-w-7xl mx-auto -mt-10 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s,i)=> (
              <motion.div key={s.label} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.55, delay:i*0.05, ease:[0.23,0.68,0.32,0.97] }} className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl px-6 py-8 flex flex-col items-start">
                <span className="text-3xl font-bold bg-gradient-to-r from-[#245E51] to-[#A8FF51] text-transparent bg-clip-text tracking-tight">{s.value}</span>
                <span className="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-700">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission + Vision */}
        <section className="py-28">
          <div className="w-[90%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.7, ease:[0.23,0.68,0.32,0.97] }} className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg max-w-xl">To cultivate lifelong students of the Qur’an and Islamic knowledge through structured methodology, spiritual intentionality and guided mentorship—so learning transforms into lived character.</p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {values.map(v => (
                  <div key={v.title} className="rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all p-6 group">
                    <h3 className="font-semibold text-gray-900 tracking-tight mb-2 group-hover:text-[#245E51]">{v.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.8, ease:[0.23,0.68,0.32,0.97] }} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-gradient-to-br from-[#245E51] to-[#0f362d] p-10 text-white">
                <div className="max-w-md space-y-6">
                  <h3 className="text-2xl font-bold">A Learning Experience Anchored in Impact</h3>
                  <p className="text-white/85 leading-relaxed text-sm sm:text-base">We blend recitation precision, language acquisition, applied understanding and spiritual refinement—supported by certified teachers, adaptive review and accountability rhythms.</p>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#A8FF51] mt-2" /> Guided memorization pathways</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#A8FF51] mt-2" /> Recitation feedback & mastery checkpoints</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#A8FF51] mt-2" /> Multi-track Arabic progression</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#A8FF51] mt-2" /> Structured Islamic Studies foundations</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#A8FF51] mt-2" /> Mentorship & consistency systems</li>
                  </ul>
                </div>
                <div className="absolute -right-24 -top-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white/60 backdrop-blur-xl border-y border-white/40">
          <div className="w-[90%] max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Our Journey</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">From a small focused circle to a structured global learning ecosystem built around mastery, mentorship and spiritual growth.</p>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#245E51] via-[#245E51]/40 to-transparent" />
              <ul className="space-y-10 pl-10">
                {timeline.map((t,i)=> (
                  <motion.li key={t.year} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.5 }} transition={{ duration:.6, delay:i*0.05, ease:[0.23,0.68,0.32,0.97] }} className="relative">
                    <div className="absolute -left-6 top-2 w-4 h-4 rounded-full bg-[#A8FF51] border-2 border-white shadow" />
                    <div className="rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all p-6">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#245E51] mb-1">{t.year}</div>
                      <h3 className="font-semibold text-gray-900 tracking-tight mb-2">{t.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{t.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <StandardCTA
          badge="Aligned & Purposeful"
          titlePrefix="Start Your"
          titleHighlight="Structured Path"
          titleSuffix=""
          paragraph="Experience mentorship, mastery mapping and transformative Qur’an-centered progress across recitation, Arabic and applied understanding."
          primaryLabel="Explore Programs"
          points={[
            { icon: 'assessment', label: 'Free placement review' },
            { icon: 'plan', label: 'Adaptive study pathways' },
            { icon: 'rating', label: 'High retention outcomes' }
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
