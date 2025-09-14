"use client"
import { ArrowRight } from "lucide-react"
import React from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export function HeroSection() {
  return (
    <div className="bg-white">
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-2">
                <img className="w-auto h-9" src="/logo/SVG/Asset 3.svg" alt="Dhikr Institute" />
                <span className="sr-only">Dhikr Institute</span>
              </a>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-600 transition-all duration-200 rounded-lg lg:hidden hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
              </svg>
            </button>

            <nav className="hidden lg:flex lg:items-center lg:space-x-8">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50">
                Courses
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50">
                Teachers
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50">
                About
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50">
                Contact
              </a>
              
              <div className="flex items-center space-x-3 ml-6">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  role="button"
                >
                  Join Now
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-200">
                  🌟 Learn Quran & Arabic Online
                </div>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight lg:text-6xl xl:text-7xl">
                  Master the Sacred{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                    Quran
                  </span>{" "}
                  with Expert Teachers
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Begin your spiritual journey with personalized Quran and Arabic lessons from certified instructors worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  role="button"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                  role="button"
                >
                  Watch Demo
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                  </div>
                  <span>1000+ students</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div>⭐ 4.9/5 rating</div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full">
                <DotLottieReact
                  src="https://lottie.host/7b795c4a-181d-4dab-b71d-6db9c66ba740/PYY2O37pZ6.lottie"
                  loop
                  autoplay
                  style={{ width: "800px", height: "600px", maxWidth: "none" }}
                />
                {/* Noscript / fallback image */}
                <noscript>
                  <img src="/quran-with-tajweed-marks.jpg" alt="Quran with tajweed marks" />
                </noscript>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
