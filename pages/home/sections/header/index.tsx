import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <div className="fixed top-12 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl">
      <header className="bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30 rounded-full">
        <div className="px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img src="/logo/SVG/Asset 3.svg" alt="Dhikr Institute" className="h-10 w-auto transition-transform group-hover:scale-105" />
            </div>
            <div className="hidden sm:block">
               <span className="text-xl font-bold text-gray-900 tracking-tight drop-shadow-sm">Dhikr Institute</span>
               <p className="text-xs text-gray-700 -mt-1 drop-shadow-sm">Islamic Learning Excellence</p>
             </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-1">
             <a href="/" className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-primary hover:bg-white/20 rounded-full transition-all duration-200 drop-shadow-sm">
               Home
             </a>
             <a href="#about" className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-primary hover:bg-white/20 rounded-full transition-all duration-200 drop-shadow-sm">
               About
             </a>
             <a href="/courses" className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-primary hover:bg-white/20 rounded-full transition-all duration-200 drop-shadow-sm">
               Courses
             </a>
             <a href="#teachers" className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-primary hover:bg-white/20 rounded-full transition-all duration-200 drop-shadow-sm">
               Teachers
             </a>
             <a href="#testimonials" className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-primary hover:bg-white/20 rounded-full transition-all duration-200 drop-shadow-sm">
               Reviews
             </a>
             <a href="#contact" className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-primary hover:bg-white/20 rounded-full transition-all duration-200 drop-shadow-sm">
               Contact
             </a>
           </nav>

          <div className="flex items-center space-x-3">
             <Button 
               variant="ghost" 
               className="hidden sm:inline-flex text-gray-800 hover:text-primary hover:bg-white/20 font-medium rounded-full drop-shadow-sm"
             >
               Login
             </Button>
             <Button className="bg-primary/90 hover:bg-primary text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm">
               Free Trial
             </Button>
             <Button variant="ghost" size="icon" className="lg:hidden p-2 hover:bg-white/20 rounded-full">
               <Menu className="h-5 w-5 text-gray-800 drop-shadow-sm" />
             </Button>
           </div>
        </div>
      </header>
    </div>
  )
}
