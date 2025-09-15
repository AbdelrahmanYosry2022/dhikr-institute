import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, BookOpen, Star } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Section */}
           <div className="lg:col-span-2 space-y-6">
             <div className="flex justify-start">
                <img src="/logo/SVG/Asset 1.svg" alt="Dhikr Institute" className="h-16 w-auto" />
              </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Transforming lives through authentic Quranic and Arabic education with certified teachers and personalized learning paths.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">4.9/5 from 2,000+ students</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Courses", href: "#courses" },
                { name: "Teachers", href: "#teachers" },
                { name: "Student Reviews", href: "#testimonials" },
                { name: "Free Resources", href: "#" },
                { name: "Blog", href: "#" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-[#245E51] transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Connect With Us</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#A8FF51]/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-[#245E51]" />
                </div>
                <span className="text-gray-600 font-medium">info@dhikrinstitute.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#A8FF51]/20 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-[#245E51]" />
                </div>
                <span className="text-gray-600 font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#A8FF51]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-[#245E51]" />
                </div>
                <span className="text-gray-600 font-medium">Available Worldwide</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-gray-100 hover:bg-[#245E51] rounded-xl flex items-center justify-center transition-all duration-200 group"
                >
                  <Icon className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm font-medium">
              © 2024 Dhikr Institute. All rights reserved. Made with ❤️ for the Ummah.
            </p>
            <div className="flex space-x-8 text-sm">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-[#245E51] transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
