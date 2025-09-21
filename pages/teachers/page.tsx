"use client";
import { TeachersGrid } from './sections/grid/teachers-grid';
import { Header } from '@/pages/home/sections/header';
import { Footer } from '@/pages/home/sections/footer';
import { motion } from 'framer-motion';

export default function TeachersPage(){
  return (
    <div className="min-h-screen bg-[#FCF8F1]">
      <Header />
      <main>
        {/* Hero section matching courses page style exactly */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 bg-[#FCF8F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#245E51] bg-[#A8FF51]/20 rounded-full border border-[#A8FF51]/30">
                Our Teachers
              </div>
              <motion.h1
                initial={{ opacity:0, y:28 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:.75, ease:[0.23,0.68,0.32,0.97] }}
                className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 flex items-center gap-4"
              >
                <span>
                  Meet Our <span className="text-transparent bg-gradient-to-r from-[#245E51] to-[#A8FF51] bg-clip-text">Expert Teachers</span>
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity:0, y:30 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:.8, delay:.08, ease:[0.23,0.68,0.32,0.97] }}
                className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed"
              >
                Dedicated Qur'an, Arabic and Islamic Studies mentors committed to structured progress and authentic transmission.
              </motion.p>
            </div>
          </div>
        </section>
        {/* Grid constrained to same width as header (90% max-w-7xl) */}
        <section className="w-[90%] max-w-7xl mx-auto">
          <TeachersGrid />
        </section>
        <section className="py-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.8, ease:[0.23,0.68,0.32,0.97] }} className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#245E51] to-[#1a4a3e] p-12 sm:p-20 text-white shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-5">Join Our Mission</h2>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-8">We occasionally onboard specialist instructors, success coaches and curriculum contributors.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-7 py-4 rounded-xl font-semibold bg-white text-gray-900 text-sm sm:text-base shadow hover:shadow-md transition">Apply As Instructor</button>
                  <button className="px-7 py-4 rounded-xl font-semibold bg-[#0c332a] text-white text-sm sm:text-base shadow hover:shadow-md transition">Partner With Us</button>
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
