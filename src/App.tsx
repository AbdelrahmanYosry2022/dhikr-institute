import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../app/page'
import CoursesCatalogPage from '../app/courses/page'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesCatalogPage />} />
          </Routes>
        </Suspense>
        <Analytics />
      </div>
    </BrowserRouter>
  )
}

export default App