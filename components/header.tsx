import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#home" className="flex items-center space-x-2">
          <img src="/logo/SVG/Asset 3.svg" alt="Dhikr Institute" className="h-8 w-auto" />
          <span className="sr-only">Dhikr Institute</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
            Courses
          </a>
          <a href="#teachers" className="text-sm font-medium hover:text-primary transition-colors">
            Teachers
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Reviews
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex bg-transparent">
            Login
          </Button>
          <Button className="bg-primary hover:bg-primary/90">Free Trial</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
