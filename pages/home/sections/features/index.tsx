"use client"

import { BookOpen, Users, Clock, Award, Globe, Heart, Headphones, MessageCircle, Star } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Quran Learning",
    description:
      "Learn Quran recitation with proper Tajweed rules and beautiful pronunciation from certified teachers.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Expert Native Teachers",
    description: "Study with qualified native Arabic speakers who specialize in Quran and Arabic language instruction.",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Choose your preferred time slots and learn at your own pace with our flexible scheduling system.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Receive internationally recognized certificates upon completion of our structured learning programs.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join thousands of students worldwide in our supportive Islamic learning community.",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: Heart,
    title: "Spiritual Growth",
    description: "Develop a deeper connection with the Quran while strengthening your faith and understanding.",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: Headphones,
    title: "Interactive Learning",
    description: "Engage with multimedia content, audio recitations, and interactive exercises for better retention.",
    color: "bg-gray-100",
    iconColor: "text-gray-600",
  },
  {
    icon: MessageCircle,
    title: "One-on-One Support",
    description: "Get personalized attention and feedback through individual sessions with your dedicated teacher.",
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Star,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed progress reports and achievement milestones.",
    color: "bg-lime-100",
    iconColor: "text-lime-600",
  },
]

const blobShapes = [
  "rounded-[65%_35%_40%_60%/55%_45%_65%_35%]",
  "rounded-[45%_55%_65%_35%/45%_65%_35%_55%]",
  "rounded-[60%_40%_45%_55%/40%_60%_55%_45%]",
  "rounded-[55%_45%_60%_40%/65%_35%_45%_55%]",
  "rounded-[40%_60%_55%_45%/50%_50%_60%_40%]",
  "rounded-[65%_35%_50%_50%/60%_40%_55%_45%]",
  "rounded-[50%_50%_65%_35%/45%_55%_60%_40%]",
  "rounded-[45%_55%_40%_60%/55%_45%_50%_50%]",
  "rounded-[60%_40%_55%_45%/40%_60%_45%_55%]",
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-[#FCF8F1]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <div
                  className={`absolute inset-0 ${feature.color} ${blobShapes[index]} transform group-hover:scale-105 transition-transform duration-300`}
                />
                <feature.icon
                  className={`relative z-10 w-8 h-8 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
