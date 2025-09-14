"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"
import Link from "next/link"
import "@/styles/dots-grid.css"

declare global {
  interface Window {
    gsap?: any
    InertiaPlugin?: any
  }
}

export function DotsGridSection() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const initialized = useRef(false)
  let cleanup: (() => void) | null = null

  useEffect(() => {
    function initIfReady() {
      if (initialized.current) return
      if (!containerRef.current) return
      if (!window || !window.gsap || !window.InertiaPlugin) return

      const gsap = window.gsap
      gsap.registerPlugin(window.InertiaPlugin)

      const container = containerRef.current
      const colors = { base: "#245E51", active: "#A8FF51" }
      const threshold = 150
      const speedThreshold = 100
      const shockRadius = 250
      const shockPower = 5
      const maxSpeed = 5000
      const centerHole = true

      let dots: HTMLElement[] = []
      let dotCenters: { el: HTMLElement; x: number; y: number; _isHole?: boolean }[] = []

      function buildGrid() {
        if (!container) return
        container.innerHTML = ""
        dots = []
        dotCenters = []

        const style = getComputedStyle(container)
        const dotPx = parseFloat(style.fontSize)
        const gapPx = dotPx * 2
        const contW = container.clientWidth
        const contH = container.clientHeight

        const cols = Math.floor((contW + gapPx) / (dotPx + gapPx))
        const rows = Math.floor((contH + gapPx) / (dotPx + gapPx))
        const total = cols * rows

        const holeCols = centerHole ? (cols % 2 === 0 ? 4 : 5) : 0
        const holeRows = centerHole ? (rows % 2 === 0 ? 4 : 5) : 0
        const startCol = (cols - holeCols) / 2
        const startRow = (rows - holeRows) / 2

        for (let i = 0; i < total; i++) {
          const row = Math.floor(i / cols)
          const col = i % cols
          const isHole =
            centerHole && row >= startRow && row < startRow + holeRows && col >= startCol && col < startCol + holeCols

          const d = document.createElement("div")
          d.classList.add("dot")
          if (isHole) {
            d.style.visibility = "hidden"
            ;(d as any)._isHole = true
          } else {
            gsap.set(d, { x: 0, y: 0, backgroundColor: colors.base })
            ;(d as any)._inertiaApplied = false
          }
          container.appendChild(d)
          dots.push(d)
        }

        requestAnimationFrame(() => {
          dotCenters = dots
            .filter((d) => !(d as any)._isHole)
            .map((d) => {
              const r = d.getBoundingClientRect()
              return {
                el: d,
                x: r.left + window.scrollX + r.width / 2,
                y: r.top + window.scrollY + r.height / 2,
              }
            })
        })
      }

      function onResize() { buildGrid() }
      window.addEventListener("resize", onResize)
      buildGrid()

      let lastTime = 0, lastX = 0, lastY = 0
      const onMouseMove = (e: MouseEvent) => {
        const now = performance.now()
        const dt = (now - lastTime) || 16
        let dx = e.pageX - lastX
        let dy = e.pageY - lastY
        let vx = (dx / dt) * 1000
        let vy = (dy / dt) * 1000
        let speed = Math.hypot(vx, vy)
        if (speed > maxSpeed) {
          const scale = maxSpeed / speed
          vx *= scale
          vy *= scale
          speed = maxSpeed
        }
        lastTime = now
        lastX = e.pageX
        lastY = e.pageY

        requestAnimationFrame(() => {
          dotCenters.forEach(({ el, x, y }: any) => {
            const dist = Math.hypot(x - e.pageX, y - e.pageY)
            const t = Math.max(0, 1 - dist / threshold)
            const col = gsap.utils.interpolate(colors.base, colors.active, t)
            gsap.set(el, { backgroundColor: col })

            if (speed > speedThreshold && dist < threshold && !(el as any)._inertiaApplied) {
              ;(el as any)._inertiaApplied = true
              const pushX = x - e.pageX + vx * 0.005
              const pushY = y - e.pageY + vy * 0.005
              gsap.to(el, {
                inertia: { x: pushX, y: pushY, resistance: 750 },
                onComplete() {
                  gsap.to(el, { x: 0, y: 0, duration: 1.5, ease: "elastic.out(1,0.75)" })
                  ;(el as any)._inertiaApplied = false
                },
              })
            }
          })
        })
      }

      const onClick = (e: MouseEvent) => {
        dotCenters.forEach(({ el, x, y }: any) => {
          const dist = Math.hypot(x - e.pageX, y - e.pageY)
          if (dist < shockRadius && !(el as any)._inertiaApplied) {
            ;(el as any)._inertiaApplied = true
            const falloff = Math.max(0, 1 - dist / shockRadius)
            const pushX = (x - e.pageX) * shockPower * falloff
            const pushY = (y - e.pageY) * shockPower * falloff
            gsap.to(el, {
              inertia: { x: pushX, y: pushY, resistance: 750 },
              onComplete() {
                gsap.to(el, { x: 0, y: 0, duration: 1.5, ease: "elastic.out(1,0.75)" })
                ;(el as any)._inertiaApplied = false
              },
            })
          }
        })
      }

      window.addEventListener("mousemove", onMouseMove)
      window.addEventListener("click", onClick)

      cleanup = () => {
        window.removeEventListener("resize", onResize)
        window.removeEventListener("mousemove", onMouseMove)
        window.removeEventListener("click", onClick)
        if (container) container.innerHTML = ""
      }

      initialized.current = true
    }

    initIfReady()
  const t = setInterval(initIfReady, 200)
  return () => { clearInterval(t); cleanup?.() }
  }, [])

  return (
    <section className="dots-section">
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/InertiaPlugin.min.js" strategy="afterInteractive" />

      <div className="dots-wrap">
        <div ref={containerRef} data-dots-container-init className="dots-container" />
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
        <p className="text-neutral-200/60 text-sm pointer-events-auto">
          Resource by {" "}
          <Link href="https://www.osmo.supply?utm_source=codepen&utm_medium=pen&utm_campaign=glowing-interactive-dots-grid" target="_blank" className="underline text-neutral-100">
            Osmo
          </Link>
        </p>
      </div>
    </section>
  )
}
