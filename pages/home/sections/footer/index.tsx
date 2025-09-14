import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">Quran Academy</span>
            </div>
            <p className="text-background/80 text-pretty">
              Dedicated to providing high-quality online Quran and Arabic education for students worldwide with expert
              teachers and flexible schedules.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#about" className="hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-secondary transition-colors">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#teachers" className="hover:text-secondary transition-colors">
                  Teachers
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-secondary transition-colors">
                  Student Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Free Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Quran Reading
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Quran Memorization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Arabic Language
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Islamic Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Kids Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Adult Classes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span>info@quranacademy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">© 2024 Quran Academy. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
