import { Suspense } from 'react'
import HomePage from '../app/page'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="font-sans">
      <Suspense fallback={null}>
        <HomePage />
      </Suspense>
      <Analytics />
    </div>
  )
}

export default App