import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "United States",
    course: "Quran Reading & Tajweed",
    rating: 5,
    text: "The teachers are incredibly patient and knowledgeable. I've learned more in 3 months than I thought possible. The online format works perfectly for my schedule.",
    image: "/american-woman-smiling.png",
  },
  {
    name: "David Thompson",
    location: "United Kingdom",
    course: "Arabic Language",
    rating: 5,
    text: "Excellent structured curriculum and supportive instructors. The Arabic lessons are well-paced and the cultural context provided is invaluable.",
    image: "/british-man-smiling.jpg",
  },
  {
    name: "Maria Rodriguez",
    location: "Spain",
    course: "Islamic Studies",
    rating: 5,
    text: "As a new Muslim, this academy has been a blessing. The teachers explain everything clearly and create a welcoming environment for learning.",
    image: "/spanish-woman-with-hijab-smiling.jpg",
  },
  {
    name: "James Wilson",
    location: "Australia",
    course: "Quran Memorization",
    rating: 5,
    text: "The memorization techniques taught here are amazing. My 10-year-old son has memorized 5 chapters already with their systematic approach.",
    image: "/australian-man-smiling.jpg",
  },
  {
    name: "Lisa Chen",
    location: "Canada",
    course: "Quran & Arabic",
    rating: 5,
    text: "Professional, flexible, and results-oriented. The combination of Quran and Arabic studies has deepened my understanding significantly.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ahmed Hassan",
    location: "Germany",
    course: "Advanced Arabic",
    rating: 5,
    text: "Living in Germany, finding quality Arabic education was challenging. This academy exceeded my expectations with native-level instruction.",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        {/* Heading styled to mimic the reference while keeping original copy */}
        <div className="text-center mb-16">
          <h2 className="mx-auto max-w-3xl text-balance text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from our global community of students who have transformed their Quranic and Arabic learning journey with us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => {
            const tilt = index % 3 === 1 ? "md:-rotate-1" : index % 3 === 2 ? "md:rotate-1" : "md:rotate-0";
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:shadow-md ${tilt}`}
              >
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <div className="mb-4 flex items-center gap-3 text-primary/60">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <Quote className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Quote text */}
                  <p className="text-[17px] leading-7 text-muted-foreground mb-6 text-pretty">“{t.text}”</p>

                  {/* Name and meta */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>

                  {/* Footer row like the reference: left brand pill (course), right avatar */}
                  <div className="mt-4 border-t pt-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-3">
                      <img src="/placeholder-logo.svg" alt={t.course} className="h-5 w-auto" />
                      <span className="text-sm font-medium text-foreground/80">{t.course}</span>
                    </div>
                    <img
                      src={t.image || "/placeholder.svg"}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
