import { Card, CardContent } from "../../../../components/ui/card"
import { Quote } from "lucide-react"
import "../../../../styles/shiny-button.css"
import "../../../../styles/learn-more-button.css"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "United States",
    course: "Quran Reading & Tajweed",
    rating: 5,
    text: "The teachers are incredibly patient and knowledgeable. I've learned more in 3 months than I thought possible. The online format works perfectly for my schedule.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Thompson",
    location: "United Kingdom",
    course: "Arabic Language",
    rating: 5,
    text: "Excellent structured curriculum and supportive instructors. The Arabic lessons are well-paced and the cultural context provided is invaluable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Maria Rodriguez",
    location: "Spain",
    course: "Islamic Studies",
    rating: 5,
    text: "As a new Muslim, this academy has been a blessing. The teachers explain everything clearly and create a welcoming environment for learning.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "James Wilson",
    location: "Australia",
    course: "Quran Memorization",
    rating: 5,
    text: "The memorization techniques taught here are amazing. My 10-year-old son has memorized 5 chapters already with their systematic approach.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Lisa Chen",
    location: "Canada",
    course: "Quran & Arabic",
    rating: 5,
    text: "Professional, flexible, and results-oriented. The combination of Quran and Arabic studies has deepened my understanding significantly.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ahmed Hassan",
    location: "Germany",
    course: "Advanced Arabic",
    rating: 5,
    text: "Living in Germany, finding quality Arabic education was challenging. This academy exceeded my expectations with native-level instruction.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mx-auto max-w-3xl text-balance text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            What Our <span className="text-transparent bg-gradient-to-r from-[#245E51] to-[#A8FF51] bg-clip-text">Students</span> Say
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from our global community of students who have transformed their Quranic and Arabic learning journey with us.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:gap-12">
            {/* First row - 2 cards */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {testimonials.slice(0, 2).map((t, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl border border-white/50 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:bg-white/90 hover:border-white/70 hover:scale-[1.02] ${index === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src={t.image || "/placeholder.svg"}
                        alt={t.name}
                        className="h-16 w-16 rounded-full object-cover border-3 border-white shadow-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">{t.location}</p>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                          t.course === 'Quran Reading & Tajweed' ? 'bg-orange-100' :
                          t.course === 'Arabic Language' ? 'bg-yellow-100' :
                          t.course === 'Islamic Studies' ? 'bg-orange-100' :
                          t.course === 'Quran Memorization' ? 'bg-yellow-100' :
                          t.course === 'Advanced Arabic' ? 'bg-[#A8FF51]/20' :
                          t.course === 'Quran & Arabic' ? 'bg-indigo-100' :
                          'bg-[#A8FF51]/20'
                        }`}>
                          <div className={`h-2 w-2 rounded-full ${
                            t.course === 'Quran Reading & Tajweed' ? 'bg-orange-400' :
                            t.course === 'Arabic Language' ? 'bg-yellow-400' :
                            t.course === 'Islamic Studies' ? 'bg-orange-400' :
                            t.course === 'Quran Memorization' ? 'bg-yellow-400' :
                            t.course === 'Advanced Arabic' ? 'bg-[#A8FF51]' :
                            t.course === 'Quran & Arabic' ? 'bg-indigo-400' :
                            'bg-[#A8FF51]'
                          }`}></div>
                          <span className={`text-xs font-medium ${
                            t.course === 'Quran Reading & Tajweed' ? 'text-orange-700' :
                            t.course === 'Arabic Language' ? 'text-yellow-700' :
                            t.course === 'Islamic Studies' ? 'text-orange-700' :
                            t.course === 'Quran Memorization' ? 'text-yellow-700' :
                            t.course === 'Advanced Arabic' ? 'text-[#245E51]' :
                            t.course === 'Quran & Arabic' ? 'text-indigo-700' :
                            'text-[#245E51]'
                          }`}>{t.course}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-amber-600/20" />
                      <p className="text-lg leading-8 text-gray-700 pl-6 italic">"{t.text}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Second row - 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.slice(2, 5).map((t, index) => (
                <Card
                  key={index + 2}
                  className={`group relative overflow-hidden rounded-3xl border border-white/50 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:bg-white/90 hover:border-white/70 hover:scale-[1.02] ${index === 0 ? 'rotate-2 hover:rotate-0' : index === 1 ? '-rotate-1 hover:rotate-0' : 'rotate-1 hover:rotate-0'}`}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <img
                        src={t.image || "/placeholder.svg"}
                        alt={t.name}
                        className="h-14 w-14 rounded-full object-cover border-3 border-white shadow-lg mx-auto mb-4"
                      />
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                    
                    <div className="relative mb-6">
                      <Quote className="absolute -top-1 -left-1 h-6 w-6 text-amber-600/30" />
                      <p className="text-sm leading-6 text-gray-700 pl-4">"{t.text}"</p>
                    </div>
                    
                    <div className="text-center">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                        t.course === 'Quran Reading & Tajweed' ? 'bg-orange-100' :
                        t.course === 'Arabic Language' ? 'bg-blue-100' :
                        t.course === 'Islamic Studies' ? 'bg-purple-100' :
                        t.course === 'Quran Memorization' ? 'bg-yellow-100' :
                        t.course === 'Advanced Arabic' ? 'bg-[#A8FF51]/20' :
                        t.course === 'Quran & Arabic' ? 'bg-indigo-100' :
                        'bg-teal-100'
                      }`}>
                        <div className={`h-1.5 w-1.5 rounded-full ${
                          t.course === 'Quran Reading & Tajweed' ? 'bg-orange-400' :
                          t.course === 'Arabic Language' ? 'bg-blue-400' :
                          t.course === 'Islamic Studies' ? 'bg-purple-400' :
                          t.course === 'Quran Memorization' ? 'bg-yellow-400' :
                          t.course === 'Advanced Arabic' ? 'bg-[#A8FF51]' :
                          t.course === 'Quran & Arabic' ? 'bg-indigo-400' :
                          'bg-teal-400'
                        }`}></div>
                        <span className={`text-xs font-medium ${
                          t.course === 'Quran Reading & Tajweed' ? 'text-orange-700' :
                          t.course === 'Arabic Language' ? 'text-blue-700' :
                          t.course === 'Islamic Studies' ? 'text-purple-700' :
                          t.course === 'Quran Memorization' ? 'text-yellow-700' :
                          t.course === 'Advanced Arabic' ? 'text-[#245E51]' :
                          t.course === 'Quran & Arabic' ? 'text-indigo-700' :
                          'text-teal-700'
                        }`}>{t.course}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Third row - 1 featured card */}
            {testimonials.slice(5, 6).map((t, index) => (
              <div key={index + 5} className="flex justify-center">
                <Card className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:bg-white/90 hover:border-white/70 hover:scale-[1.02] max-w-2xl w-full -rotate-2 hover:rotate-0">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6 mb-6">
                      <img
                        src={t.image || "/placeholder.svg"}
                        alt={t.name}
                        className="h-20 w-20 rounded-full object-cover border-4 border-white shadow-xl flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-xl mb-1">{t.name}</h4>
                        <p className="text-gray-500 mb-3">{t.location}</p>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                          t.course === 'Quran Reading & Tajweed' ? 'bg-orange-100' :
                          t.course === 'Arabic Language' ? 'bg-blue-100' :
                          t.course === 'Islamic Studies' ? 'bg-purple-100' :
                          t.course === 'Quran Memorization' ? 'bg-yellow-100' :
                          t.course === 'Advanced Arabic' ? 'bg-[#A8FF51]/20' :
                          t.course === 'Quran & Arabic' ? 'bg-indigo-100' :
                          'bg-teal-100'
                        }`}>
                          <div className={`h-2.5 w-2.5 rounded-full ${
                            t.course === 'Quran Reading & Tajweed' ? 'bg-orange-400' :
                            t.course === 'Arabic Language' ? 'bg-blue-400' :
                            t.course === 'Islamic Studies' ? 'bg-purple-400' :
                            t.course === 'Quran Memorization' ? 'bg-yellow-400' :
                            t.course === 'Advanced Arabic' ? 'bg-[#A8FF51]' :
                            t.course === 'Quran & Arabic' ? 'bg-indigo-400' :
                            'bg-teal-400'
                          }`}></div>
                          <span className={`text-sm font-medium ${
                            t.course === 'Quran Reading & Tajweed' ? 'text-orange-700' :
                            t.course === 'Arabic Language' ? 'text-blue-700' :
                            t.course === 'Islamic Studies' ? 'text-purple-700' :
                            t.course === 'Quran Memorization' ? 'text-yellow-700' :
                            t.course === 'Advanced Arabic' ? 'text-[#245E51]' :
                            t.course === 'Quran & Arabic' ? 'text-indigo-700' :
                            'text-teal-700'
                          }`}>{t.course}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-3 -left-3 h-10 w-10 text-amber-600/20" />
                      <p className="text-xl leading-9 text-gray-700 pl-8 italic">"{t.text}"</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        

        <div className="text-center mt-16">
          <button className="learn-more">Discover your path</button>
        </div>
      </div>
    </section>
  )
}
