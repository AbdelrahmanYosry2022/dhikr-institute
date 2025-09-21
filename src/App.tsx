import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../app/page'
import CoursesCatalogPage from '../app/courses/page'
import CourseDetailPage from '../app/courses/[id]/page'
import TeachersPage from '../pages/teachers/page'
import AboutPage from '../pages/about/page'
import ReviewsPage from '../pages/reviews/page'
import ContactPage from '../pages/contact/page'
import { Navigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesCatalogPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/about" element={<AboutPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<Navigate to="/teachers" replace />} />
          </Routes>
        </Suspense>
        <Analytics />
      </div>
    </BrowserRouter>
  )
}

export default App