"use client";
import { Header } from '@/pages/home/sections/header';
import { Footer } from '@/pages/home/sections/footer';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Amina K.', tag: 'Qur\'an Track', text: 'The structured memorization plan and weekly feedback transformed my consistency. I finally feel real momentum.', country: 'UK' },
  { name: 'Omar H.', tag: 'Arabic Foundations', text: 'Clear progression, spaced review and engaging teachers. I went from zero script reading to short passages confidently.', country: 'Canada' },
  { name: 'Fatimah S.', tag: 'Tajweed Focus', text: 'Personalized correction and intentional pacing fixed mistakes I repeated for years.', country: 'USA' },
  { name: 'Yusuf A.', tag: 'Islamic Studies', text: 'Balanced between academic rigor and spiritual takeaways. Notes, summaries and live Q&A helped me retain core concepts.', country: 'UAE' },
  { name: 'Khalid R.', tag: 'Recitation Coaching', text: 'AI-assisted feedback + instructor review = massive leap in makharij accuracy.', country: 'KSA' },
  { name: 'Sara M.', tag: 'Arabic Morphology', text: 'The layered approach to roots, patterns and reading practice made everything click.', country: 'Australia' },
  { name: 'Huda L.', tag: 'Memorization Support', text: 'Accountability circles kept me on track after so many failed solo attempts.', country: 'Germany' },
  { name: 'Ali T.', tag: 'Comprehensive Path', text: 'Integration of Qur\'an + Arabic + studies kept my motivation high and purpose clear.', country: 'Malaysia' }
];

export default function ReviewsPage(){
  return (
    <div className="min-h-screen bg-[#FCF8F1]">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 bg-[#FCF8F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#245E51] bg-[#A8FF51]/20 rounded-full border border-[#A8FF51]/30">
                Student Reviews
              </div>
              <motion.h1 initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:.75, ease:[0.23,0.68,0.32,0.97] }} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
                Real Progress, <span className="text-transparent bg-gradient-to-r from-[#245E51] to-[#A8FF51] bg-clip-text">Real Outcomes</span>
              </motion.h1>
              <motion.p initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:.8, delay:.06, ease:[0.23,0.68,0.32,0.97] }} className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Stories of transformation across Qur'an retention, Arabic comprehension and applied understanding—built through structure, mentorship and intentional learning environments.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Aggregate & Highlights */}
        <section className="w-[90%] max-w-7xl mx-auto -mt-10 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl p-10 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-2">
                  {Array.from({length:5}).map((_,i)=>(<Star key={i} className="h-8 w-8 text-yellow-400 fill-yellow-400" />))}
                </div>
              </div>
              <div className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#245E51] to-[#A8FF51] text-transparent bg-clip-text">4.9<span className="text-gray-400 text-3xl align-super">/5</span></div>
              <p className="mt-6 text-gray-600 leading-relaxed text-base">Based on 2,000+ verified learner feedback submissions across program tracks, coaching sessions and progression milestones.</p>
              <ul className="mt-8 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#245E51] mt-2" /> 92% report improved consistency within 6 weeks</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#245E51] mt-2" /> 88% increased recitation accuracy scores</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#245E51] mt-2" /> 76% accelerated Arabic decoding speed</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#245E51] mt-2" /> 81% deepened reflective understanding</li>
              </ul>
              <div className="mt-auto pt-8">
                <button className="px-6 py-4 rounded-xl font-semibold bg-[#245E51] text-white text-sm shadow hover:shadow-md transition w-full">Read More Stories</button>
              </div>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {testimonials.map((t,i)=>(
                <motion.div key={t.name} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.6, delay:i*0.04, ease:[0.23,0.68,0.32,0.97] }} className="rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#245E51] to-[#123329] flex items-center justify-center text-white font-semibold text-sm">
                        {t.name.split(' ').map(p=>p[0]).slice(0,2).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm tracking-tight">{t.name}</div>
                        <div className="text-[10px] uppercase tracking-wider font-semibold text-[#245E51]">{t.tag}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium bg-[#A8FF51]/30 text-[#245E51] px-2 py-1 rounded-full">{t.country}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{t.text}</p>
                  <div className="mt-4 flex gap-1">
                    {Array.from({length:5}).map((_,j)=>(<Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.8, ease:[0.23,0.68,0.32,0.97] }} className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#245E51] to-[#1a4a3e] p-12 sm:p-20 text-white shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-5">Write Your Story Next</h2>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-8">Structured paths, real accountability and meaningful guidance make the difference.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-7 py-4 rounded-xl font-semibold bg-white text-gray-900 text-sm sm:text-base shadow hover:shadow-md transition">Start Free Trial</button>
                  <button className="px-7 py-4 rounded-xl font-semibold bg-[#0c332a] text-white text-sm sm:text-base shadow hover:shadow-md transition">Browse Programs</button>
                </div>
              </div>
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
