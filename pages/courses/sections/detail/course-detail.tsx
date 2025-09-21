"use client"
import { allCourses } from '@/pages/courses/data/courses'
import { ArrowLeft, CheckCircle2, BookOpen, Clock, Users, Star, Quote, HelpCircle, ArrowRight, Target, Award, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '@/pages/home/sections/header'
import { Footer } from '@/pages/home/sections/footer'
import { useEffect } from 'react'

export function CourseDetailView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const course = allCourses.find(c=>c.id===id)

  useEffect(()=> { window.scrollTo({ top:0, behavior:'instant' as ScrollBehavior }) }, [id])

  if(!course) {
    return (
      <div className="min-h-screen bg-[#FCF8F1]">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you are looking for does not exist or was removed.</p>
          <button onClick={()=>navigate('/courses')} className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#245E51] to-[#1a4a3e] text-white font-semibold shadow hover:shadow-md transition">Back to Courses</button>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FCF8F1]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent)]" style={{background:"radial-gradient(circle at 30% 40%, #A8FF51 0%, transparent 60%)"}} />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <button onClick={()=>navigate(-1)} className="group inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </button>
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-gray-200 shadow-sm">{course.category}</span>
                  {course.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-900 text-white shadow-sm">{course.badge}</span>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">{course.title}</h1>
                <p className="text-lg text-gray-700 max-w-2xl mb-8 leading-relaxed">{course.description}</p>
                <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-10">
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#245E51]" /> <strong className="font-semibold">Duration:</strong> {course.duration}</div>
                  {course.sessions && <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-[#245E51]" /> <strong className="font-semibold">Sessions:</strong> {course.sessions}</div>}
                  <div className="flex items-center gap-2"><Users className="w-4 h-4 text-[#245E51]" /> <strong className="font-semibold">Students:</strong> {course.students}</div>
                  <div className="flex items-center gap-2"><Star className="w-4 h-4 text-[#245E51]" /> <strong className="font-semibold">Rating:</strong> {course.rating}</div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 font-medium mb-1">Enrollment</div>
                    <div className="flex items-end gap-3">
                      <span className="text-3xl font-extrabold text-gray-900">{course.price}</span>
                      {course.originalPrice && <span className="text-lg font-medium text-gray-400 line-through">{course.originalPrice}</span>}
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#245E51] to-[#1a4a3e] shadow-lg hover:shadow-xl transition">Request Free Trial</button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-lg ring-1 ring-gray-200/60 bg-white">
                  <div className="aspect-[4/3] bg-gray-100">
                    <img src={course.image || '/placeholder.jpg'} alt={course.imageAlt || course.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes + Timeline */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {course.outcomes && course.outcomes.length>0 && (
              <div className="mb-20 overflow-x-auto scrollbar-none">
                <ul className="flex gap-6 min-w-max py-4 px-1">
                  {course.outcomes.map((o,idx)=> {
                    const icons = [Target, Award, TrendingUp, CheckCircle2, Star]
                    const Icon = icons[idx % icons.length]
                    return (
                      <li key={o} className="group relative flex-shrink-0">
                        <div className="w-60 rounded-2xl bg-white border border-gray-200 p-5 shadow-sm hover:shadow-lg transition flex flex-col gap-4">
                          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#245E51] to-[#1a4a3e] text-white flex items-center justify-center shadow-inner">
                            <Icon className="w-6 h-6" />
                          </div>
                          <p className="text-xs font-medium text-gray-700 leading-relaxed group-hover:text-gray-900 transition">{o}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">Structured Learning Timeline</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Follow a clear sequence of phases designed to build mastery step by step with measurable milestones.</p>
            </div>
            {course.syllabus && course.syllabus.length>0 && (
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#245E51] via-[#A8FF51] to-transparent" />
                <ul className="space-y-16">
                  {course.syllabus.map((s,i)=> (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.6, ease: [0.23,0.68,0.32,0.97] }}
                      className="relative"
                    >
                      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 items-start">
                        {i % 2 === 0 && <div className="order-2 md:order-1 md:pr-16 md:text-right mt-6 md:mt-0"></div>}
                        <div className={`order-1 ${i % 2 === 0 ? 'md:order-2 md:pl-16' : 'md:order-1 md:pr-16'} w-full`}> 
                          <div className="relative">
                            <div className="absolute -left-9 md:-left-11 top-1 w-8 h-8 rounded-full bg-white border-2 border-[#245E51] flex items-center justify-center font-semibold text-xs text-[#245E51] shadow-sm">{i+1}</div>
                            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
                              <h3 className="text-sm font-semibold text-gray-900 mb-2">Phase {i+1}</h3>
                              <p className="text-sm text-gray-700 leading-relaxed mb-4">{s}</p>
                              <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-[#245E51]/10 text-[#245E51] border border-[#245E51]/20">Milestone</span>
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-gray-900/5 text-gray-700 border border-gray-200">Progressive</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
            {course.prerequisites && course.prerequisites.length>0 && (
              <motion.div
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.4 }}
                transition={{ duration:0.6, delay:0.1 }}
                className="mt-20 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Prerequisites</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {course.prerequisites.map(p=> (
                    <span key={p} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-700 shadow-sm">{p}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#245E51] to-[#1a4a3e] p-10 sm:p-14 text-white shadow-lg">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Start Your Learning Journey</h2>
                <p className="text-white/90 mb-8 text-sm sm:text-base leading-relaxed">Request a free trial lesson now and experience our teaching methodology before committing.</p>
                <button className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold bg-white text-gray-900 shadow hover:shadow-md transition text-sm sm:text-base">Request Free Trial</button>
              </div>
              <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -left-14 -bottom-14 w-72 h-72 bg-black/10 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        {/* Instructors */}
        <section className="py-14 sm:py-20 border-t border-gray-200/70 bg-white/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your Instructors</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1,2,3].map(i => (
                <div key={i} className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img src={`/placeholder-user.jpg`} alt="Instructor" className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 mb-1">Instructor {i}</h3>
                    <p className="text-sm text-gray-600 mb-3">Specialist in {course.category}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1"><Star className="w-3.5 h-3.5 text-[#245E51]" />4.{8-i}</span>
                      <span>•</span>
                      <span>120+ students</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 bg-[#F9F6EF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Student Reviews</h2>
              <div className="text-sm text-gray-600">Overall Rating <span className="font-semibold text-gray-900">{course.rating} / 5</span></div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {name:'Aisha', text:'This course transformed my recitation confidence and structure.'},
                {name:'Yusuf', text:'Clear methodology and engaging instructors.'},
                {name:'Maryam', text:'Loved the pacing and practical feedback sessions.'},
              ].map(r => (
                <div key={r.name} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <Quote className="w-6 h-6 text-[#245E51] mb-4" />
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">{r.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">{r.name}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Star className="w-3.5 h-3.5 text-[#245E51]" />5.0</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[{
                q:'How are live sessions conducted?',
                a:'Sessions take place via secure video classroom with interactive whiteboard and recitation feedback.'
              },{
                q:'Can I pause or extend enrollment?',
                a:'Yes, you can request schedule adjustments; memorization programs include structured revision breaks.'
              },{
                q:'Do I get completion certification?',
                a:'Yes, a digital certificate is issued upon successfully meeting assessment criteria.'
              }].map(item => (
                <div key={item.q} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="mt-1"><HelpCircle className="w-5 h-5 text-[#245E51]" /></div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-[#245E51] transition-colors">{item.q}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Courses */}
        <section className="py-16 border-t border-gray-200 bg-white/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Related Courses</h2>
              <button onClick={()=>navigate('/courses')} className="inline-flex items-center text-sm font-medium text-[#245E51] hover:underline">View All <ArrowRight className="w-4 h-4 ml-1" /></button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {allCourses.filter(c=>c.category===course.category && c.id!==course.id).slice(0,4).map(rc => (
                <div key={rc.id} onClick={()=>navigate(`/courses/${rc.id}`)} className="cursor-pointer group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                    <img src={rc.image || '/placeholder.jpg'} alt={rc.imageAlt || rc.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-[#245E51] transition-colors">{rc.title}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{rc.level}</span>
                      <span className="font-semibold text-gray-900">{rc.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
