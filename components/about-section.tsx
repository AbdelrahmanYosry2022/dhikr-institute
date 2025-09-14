import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Globe, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
            <BookOpen className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome To Quran Academy</h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto text-pretty">
            Quran Academy is dedicated to providing high-quality online education in Quran, Arabic, and Islamic studies
            for non-Arabs. Our courses are designed for all age groups and proficiency levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Teachers</h3>
              <p className="text-primary-foreground/80 text-sm">
                Qualified instructors with years of experience in teaching Quran and Arabic
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
            <CardContent className="p-6">
              <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-primary-foreground/80 text-sm">
                Students from over 50 countries learning with flexible schedules
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
            <CardContent className="p-6">
              <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Comprehensive Curriculum</h3>
              <p className="text-primary-foreground/80 text-sm">
                Complete courses covering Quran, Arabic language, and Islamic studies
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Certified Learning</h3>
              <p className="text-primary-foreground/80 text-sm">
                Receive certificates upon completion of courses and milestones
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
