"use client"

import React from "react"

export function ShimmerButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "ghost"
}) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold transition-all duration-200 group overflow-hidden ${
        variant === "primary"
          ? "text-white bg-gradient-to-r from-[#245E51] to-[#1a4a3e] hover:from-[#1a4a3e] hover:to-[#245E51] shadow-lg hover:shadow-xl"
          : "text-gray-700 bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
      }`}
    >
      <span className="absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute -inset-[150%] translate-x-[-20%] rotate-45 bg-gradient-to-r from-white/0 via-white/25 to-white/0 transition-transform duration-700 ease-out group-hover:translate-x-[60%]" />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}
