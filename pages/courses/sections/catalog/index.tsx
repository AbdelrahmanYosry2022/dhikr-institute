"use client"
import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { allCourses, categoryOrder } from "@/pages/courses/data/courses"
import { Search, ArrowRight } from "lucide-react"

export function CoursesCatalog() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [level, setLevel] = useState("All")
  const [sort, setSort] = useState("popular")
  const [showFreeOnly, setShowFreeOnly] = useState(false)
  const [visible, setVisible] = useState(8)

  const filtered = useMemo(() => {
    return allCourses
      .filter(c => (category === "All" ? true : c.category === category))
      .filter(c => (level === "All" ? true : c.level.toLowerCase().includes(level.toLowerCase())))
      .filter(c => (showFreeOnly ? c.price.toLowerCase() === "free" : true))
      .filter(c => (query ? c.title.toLowerCase().includes(query.toLowerCase()) || c.description.toLowerCase().includes(query.toLowerCase()) : true))
      .sort((a, b) => {
        if (sort === "popular") return parseInt(b.students) - parseInt(a.students)
        if (sort === "rating") return b.rating - a.rating
        if (sort === "price-asc") return (parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0) - (parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0)
        if (sort === "price-desc") return (parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0) - (parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0)
        return 0
      })
  }, [query, category, level, showFreeOnly, sort])

  const visibleCourses = filtered.slice(0, visible)
  const canLoadMore = visible < filtered.length

  return (
    <div className="bg-[#FCF8F1]">
      {/* Filters */}
      <section className="pb-6 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 flex flex-col gap-6">
            <div className="flex flex-wrap gap-3">
              {categoryOrder.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    category === cat
                      ? "bg-gradient-to-r from-[#245E51] to-[#A8FF51] text-white border-[#245E51] shadow"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#A8FF51]"
                  }`}
                  aria-pressed={category===cat}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="relative col-span-2 md:col-span-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-[#A8FF51]/50 focus:border-[#A8FF51] outline-none text-sm"
                  value={query}
                  onChange={e=>setQuery(e.target.value)}
                  aria-label="Search courses"
                />
              </div>
              <div>
                <select
                  className="w-full py-2 px-3 rounded-lg border border-gray-200 bg-white/70 text-sm focus:ring-2 focus:ring-[#A8FF51]/50 focus:border-[#A8FF51] outline-none"
                  value={level}
                  onChange={e=>setLevel(e.target.value)}
                  aria-label="Filter by level"
                >
                  <option value="All">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div>
                <select
                  className="w-full py-2 px-3 rounded-lg border border-gray-200 bg-white/70 text-sm focus:ring-2 focus:ring-[#A8FF51]/50 focus:border-[#A8FF51] outline-none"
                  value={sort}
                  onChange={e=>setSort(e.target.value)}
                  aria-label="Sort courses"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
              <label className="flex items-center gap-2 text-sm font-medium cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#245E51] focus:ring-[#A8FF51]"
                  checked={showFreeOnly}
                  onChange={e=>setShowFreeOnly(e.target.checked)}
                  aria-label="Show free only"
                />
                Free only
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
            }}
          >
            <AnimatePresence mode="popLayout">
              {visibleCourses.map(course => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.55, ease: [0.21,0.68,0.25,0.95] }}
                  className="relative group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#A8FF51] overflow-hidden"
                >
                  <div className="relative aspect-[16/10] bg-gray-100">
                    <img
                      src={course.image || "/placeholder.jpg"}
                      alt={course.imageAlt || course.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {course.badge && (
                      <div className="absolute left-3 top-3">
                        <span
                          className={`px-3 py-1 text-xs font-semibold tracking-wide rounded-full backdrop-blur-sm border ${
                            course.badgeType === "new"
                              ? "text-gray-900 bg-white/70 border-white/60"
                              : course.badgeType === "sale"
                                ? "text-white bg-gray-900/90 border-gray-900"
                                : course.badgeType === "popular"
                                  ? "text-[#245E51] bg-[#A8FF51]/90 border-[#A8FF51]"
                                  : "text-gray-900 bg-white/70 border-white/60"
                          }`}
                        >
                          {course.badge}
                        </span>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#245E51] transition-colors line-clamp-2 min-h-[3.25rem]">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 min-h-[3.6rem]">{course.description}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 border border-gray-100">{course.level}</span>
                      <span>•</span>
                      <span>{course.students} students</span>
                      <span>•</span>
                      <span>⭐ {course.rating}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Duration</div>
                        <div className="text-sm font-semibold text-gray-900">{course.duration}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Price</div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">{course.price}</span>
                          {course.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <div className="text-center mt-12">
            {canLoadMore ? (
              <button
                onClick={() => setVisible(v => v + 8)}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#245E51] to-[#1a4a3e] rounded-xl hover:from-[#1a4a3e] hover:to-[#245E51] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Load More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <div className="text-sm text-gray-500">No more courses</div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
