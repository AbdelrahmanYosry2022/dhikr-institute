import type React from "react"
import { Suspense } from "react"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Quran & Arabic Academy - Learn Quran and Arabic Online</title>
        <meta name="description" content="Professional online Quran and Arabic language learning for English speakers worldwide. Expert teachers, flexible schedules, and personalized instruction." />
        <link rel="icon" href="/logo/SVG/Asset 3.svg" />
      </head>
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
