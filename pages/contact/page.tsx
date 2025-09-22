"use client";
import { Header } from '@/pages/home/sections/header';
import { Footer } from '@/pages/home/sections/footer';
import { motion } from 'framer-motion';
import { StandardCTA } from '@/components/standard-cta';
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle } from 'lucide-react';

const contactChannels = [
  { icon: Mail, title: 'Email Support', desc: 'General inquiries & program guidance', value: 'support@dhikrinstitute.com', action: 'mailto:support@dhikrinstitute.com' },
  { icon: MessageSquare, title: 'Student Success', desc: 'Current learner help & scheduling', value: 'success@dhikrinstitute.com', action: 'mailto:success@dhikrinstitute.com' },
  { icon: Phone, title: 'Advising Call', desc: 'Speak to an enrollment advisor', value: '+1 (555) 123-4567', action: 'tel:+15551234567' }
];

const faqs = [
  { q: 'How are classes delivered?', a: 'Live virtual sessions + recorded recaps, supplemented by structured assignments and adaptive review prompts.' },
  { q: 'Do you offer trial access?', a: 'Yes, selected tracks include a guided trial to evaluate pacing and format before committing.' },
  { q: 'What is required from students?', a: 'Consistency (weekly attendance), intentionality (clear goals) and engagement (submitting practice & feedback loops).'} ,
  { q: 'Can I switch tracks later?', a: 'Path transitions are supported with advisor review ensuring alignment with retention and mastery.' }
];

export default function ContactPage(){
  return (
    <div className="min-h-screen bg-[#FCF8F1]">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 bg-[#FCF8F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#245E51] bg-[#A8FF51]/20 rounded-full border border-[#A8FF51]/30">
                Contact Us
              </div>
              <motion.h1 initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:.75, ease:[0.23,0.68,0.32,0.97] }} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
                We Are Here To <span className="text-transparent bg-gradient-to-r from-[#245E51] to-[#A8FF51] bg-clip-text">Support Your Journey</span>
              </motion.h1>
              <motion.p initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:.8, delay:.06, ease:[0.23,0.68,0.32,0.97] }} className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Reach out for enrollment guidance, program switching, technical help or learning strategy adjustments.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Channels */}
        <section className="w-[90%] max-w-7xl mx-auto -mt-10 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {contactChannels.map((c,i)=>(
              <motion.a key={c.title} href={c.action} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.55, delay:i*0.05, ease:[0.23,0.68,0.32,0.97] }} className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl p-8 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#245E51]/10 flex items-center justify-center mb-5">
                  <c.icon className="h-6 w-6 text-[#245E51]" />
                </div>
                <h3 className="font-semibold text-gray-900 tracking-tight mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{c.desc}</p>
                <span className="text-sm font-medium text-[#245E51] break-all">{c.value}</span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Form & Info */}
        <section className="py-28">
          <div className="w-[90%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.7, ease:[0.23,0.68,0.32,0.97] }} className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Send A Message</h2>
              <form onSubmit={(e)=> e.preventDefault()} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-gray-700">Name</label>
                    <input required className="h-12 rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#245E51]/40" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-gray-700">Email</label>
                    <input type="email" required className="h-12 rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#245E51]/40" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-gray-700">Subject</label>
                  <input required className="h-12 rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#245E51]/40" placeholder="How can we help?" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-gray-700">Message</label>
                  <textarea required rows={6} className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#245E51]/40 resize-none" placeholder="Share details so we can assist effectively." />
                </div>
                <button className="w-full h-12 rounded-xl bg-gradient-to-r from-[#245E51] to-[#1a4a3e] text-white font-semibold text-sm shadow hover:shadow-md transition">Send Message</button>
                <p className="text-[11px] text-gray-500 leading-relaxed">By submitting you agree to limited data processing for support resolution and quality improvement.</p>
              </form>
            </motion.div>
            <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.8, ease:[0.23,0.68,0.32,0.97] }} className="space-y-12">
              <div className="rounded-3xl bg-white border border-gray-100 shadow-md p-8">
                <h3 className="font-semibold text-gray-900 tracking-tight mb-4 flex items-center gap-2"><Clock className="h-4 w-4 text-[#245E51]" /> Response Window</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Average response within 12 business hours. Weekends may vary.</p>
              </div>
              <div className="rounded-3xl bg-white border border-gray-100 shadow-md p-8">
                <h3 className="font-semibold text-gray-900 tracking-tight mb-4 flex items-center gap-2"><HelpCircle className="h-4 w-4 text-[#245E51]" /> Common Topics</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#245E51] mt-2" /> Track placement & leveling</li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#245E51] mt-2" /> Recitation feedback integration</li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#245E51] mt-2" /> Arabic curriculum pathways</li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#245E51] mt-2" /> Scheduling & pacing adjustments</li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#245E51] mt-2" /> Technical access issues</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-[#245E51] to-[#0f362d] text-white p-10 shadow-xl relative overflow-hidden">
                <div className="relative z-10 space-y-5">
                  <h3 className="text-xl font-bold">Prefer Direct Advisory?</h3>
                  <p className="text-white/85 text-sm leading-relaxed">Schedule a 1:1 call to map your optimal entry point and progression horizon.</p>
                  <button className="px-6 py-4 rounded-xl font-semibold bg-white text-gray-900 text-sm shadow hover:shadow-md transition">Book Advising Call</button>
                </div>
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white/60 backdrop-blur-xl border-y border-white/40">
          <div className="w-[90%] max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Frequently Asked</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">Quick clarity for common queries. Still unsure? Send us a message and we\'ll guide you.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {faqs.map((f,i)=>(
                <motion.div key={f.q} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.5 }} transition={{ duration:.6, delay:i*0.04, ease:[0.23,0.68,0.32,0.97] }} className="rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all p-6">
                  <h3 className="font-semibold text-gray-900 tracking-tight mb-2 text-sm">{f.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <StandardCTA
          badge="Need Clarity?"
          titlePrefix="Need Personalized"
          titleHighlight="Guidance?"
          titleSuffix=""
          paragraph="Advisors help map the most strategic path based on retention, time capacity and progression goals."
          primaryLabel="Ask A Question"
          points={[
            { icon: 'assessment', label: 'Placement & leveling help' },
            { icon: 'plan', label: 'Goal-aligned pathways' },
            { icon: 'rating', label: 'High satisfaction support' }
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
