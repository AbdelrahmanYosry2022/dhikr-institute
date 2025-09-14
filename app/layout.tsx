import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Quran & Arabic Academy - Learn Quran and Arabic Online",
  description:
    "Professional online Quran and Arabic language learning for English speakers worldwide. Expert teachers, flexible schedules, and personalized instruction.",
  generator: "v0.app",
  icons: {
    icon: "/logo/SVG/Asset 3.svg",
    shortcut: "/logo/SVG/Asset 3.svg",
    apple: "/logo/SVG/Asset 3.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
