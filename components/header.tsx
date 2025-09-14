import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="relative">
            <img src="/logo/SVG/Asset 3.svg" alt="Dhikr Institute" className="h-10 w-auto transition-transform group-hover:scale-105" />
          </div>
          <div className="hidden sm:block">
            <span className="text-xl font-bold text-gray-900 tracking-tight">Dhikr Institute</span>
            <p className="text-xs text-gray-500 -mt-1">Islamic Learning Excellence</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center space-x-1">
          <a href="#home" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
            Home
          </a>
          <a href="#about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
            About
          </a>
          <a href="#courses" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
            Courses
          </a>
          <a href="#teachers" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
            Teachers
          </a>
          <a href="#testimonials" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
            Reviews
          </a>
          <a href="#contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            className="hidden sm:inline-flex text-gray-700 hover:text-primary hover:bg-primary/5 font-medium"
          >
            Login
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
            Free Trial
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="h-5 w-5 text-gray-700" />
          </Button>
        </div>
      </div>
    </header>
  )
}
