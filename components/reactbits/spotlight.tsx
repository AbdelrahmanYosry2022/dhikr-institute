"use client"

import React, { useRef } from "react"

export function Spotlight({ className = "", size = 280 }: { className?: string; size?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      onMouseMove={(e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        ref.current.style.setProperty("--spot-x", `${x}px`)
        ref.current.style.setProperty("--spot-y", `${y}px`)
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          left: "calc(var(--spot-x, 50%) - var(--spot-r, 140px))",
          top: "calc(var(--spot-y, 30%) - var(--spot-r, 140px))",
          filter: "blur(60px)",
          background:
            "radial-gradient(closest-side, rgba(168,255,81,0.35), rgba(36,94,81,0.15), rgba(36,94,81,0))",
          transform: "translateZ(0)",
        }}
      />
    </div>
  )
}
