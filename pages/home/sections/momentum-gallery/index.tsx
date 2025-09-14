"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import styles from "../../../../styles/momentum-gallery.module.css"

type Slide = { src: string; title: string }

const slides: Slide[] = [
  { src: "/arabic-language.jpg", title: "Arabic Language" },
  { src: "/quran-with-tajweed-marks.jpg", title: "Tajweed" },
  { src: "/islamic-studies.jpg", title: "Islamic Studies" },
  { src: "/quran-memorization.jpg", title: "Hifdh" },
]

export function MomentumGallerySection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)
  const preloaderRef = useRef<HTMLDivElement | null>(null)
  const titlesRef = useRef<HTMLDivElement | null>(null)
  const particlesRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let renderer: THREE.WebGLRenderer | null = null
    let scene: THREE.Scene | null = null
    let camera: THREE.PerspectiveCamera | null = null
    let plane: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial> | null = null
    let texLoader: THREE.TextureLoader | null = null
    let running = true

    const canvas = canvasRef.current!
    const titlesEl = titlesRef.current!
    const preloadEl = preloaderRef.current!
    const footerEl = footerRef.current!

    const vertex = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragment = `
      uniform sampler2D uTex0;
      uniform sampler2D uTex1;
      uniform float uProg;
      uniform float uTime;
      varying vec2 vUv;
      void main(){
        vec2 uv = vUv;
        float disp = (sin((uv.y+uTime*0.2)*8.0)+cos((uv.x+uTime*0.25)*8.0))*0.02*(1.0-abs(uProg-0.5)*2.0);
        uv.x += disp*(uProg*2.0-1.0);
        vec4 a = texture2D(uTex0, uv);
        vec4 b = texture2D(uTex1, uv);
        gl_FragColor = mix(a,b, smoothstep(0.0,1.0,uProg));
      }
    `

    const state = { current: 0, next: 1, prog: 0, velocity: 0, dragging: false, lastX: 0 }

    function setTitle(idx: number) { titlesEl.innerHTML = `<span>${slides[idx].title}</span>` }

    function resize() {
      if (!renderer || !camera) return
      const w = canvas.clientWidth
      const h = Math.max(520, Math.round(w * 9 / 16))
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }

    async function init() {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
      camera.position.z = 2.2

      texLoader = new THREE.TextureLoader()
      const textures = await Promise.all(slides.map((s) => new Promise<THREE.Texture>((resolve) => { texLoader!.load(s.src, (t: THREE.Texture) => resolve(t)) })))
      textures.forEach((t: THREE.Texture) => { t.colorSpace = THREE.SRGBColorSpace })

      const geom = new THREE.PlaneGeometry(1.78, 1.0, 1, 1)
      const mat = new THREE.ShaderMaterial({
        uniforms: { uTex0: { value: textures[state.current] }, uTex1: { value: textures[state.next] }, uProg: { value: state.prog }, uTime: { value: 0 } },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: false,
      })
      plane = new THREE.Mesh(geom, mat)
      scene.add(plane)

      setTitle(state.current)
      preloadEl.style.display = "none"
      footerEl.style.opacity = "1"

      function onDown(e: PointerEvent) { state.dragging = true; state.lastX = e.clientX }
      function onMove(e: PointerEvent) { if (!state.dragging) return; const dx = e.clientX - state.lastX; state.lastX = e.clientX; state.velocity = dx * 0.002 }
      function onUp() { state.dragging = false }
      canvas.addEventListener("pointerdown", onDown)
      window.addEventListener("pointermove", onMove)
      window.addEventListener("pointerup", onUp)

      function animate(t: number) {
        if (!renderer || !scene || !camera || !plane) return
        ;(plane.material as THREE.ShaderMaterial).uniforms.uTime.value = t * 0.001
        state.prog += state.velocity
        state.velocity *= 0.95
        if (Math.abs(state.prog) >= 1) {
          const dir = state.prog > 0 ? 1 : -1
          state.current = (state.current - dir + slides.length) % slides.length
          state.next = (state.current + 1) % slides.length
          ;(plane.material as THREE.ShaderMaterial).uniforms.uTex0.value = textures[state.current]
          ;(plane.material as THREE.ShaderMaterial).uniforms.uTex1.value = textures[state.next]
          setTitle(state.current)
          state.prog = 0
        }

        ;(plane.material as THREE.ShaderMaterial).uniforms.uProg.value = Math.abs(state.prog)
        renderer.setClearColor(0x111111, 1)
        renderer.render(scene, camera)
        if (running) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)

      function onResize() { resize() }
      window.addEventListener("resize", onResize)
      resize()

      return () => {
        running = false
        window.removeEventListener("resize", onResize)
        canvas.removeEventListener("pointerdown", onDown)
        window.removeEventListener("pointermove", onMove)
        window.removeEventListener("pointerup", onUp)
        renderer?.dispose()
        geom.dispose()
      }
    }

    const cleanupPromise = init()
    return () => { ;(async () => (await cleanupPromise) && (await cleanupPromise)())() }
  }, [])

  return (
    <section className={styles.wrapper}>
      <div ref={preloaderRef} className={styles.preloader}>
        <div className={styles.circleContainer} />
        <div className={styles.initTextContainer}>
          <div className={styles.initProgress} />
          <div className={styles.initText}>INITIALIZING</div>
        </div>
      </div>

      <div ref={particlesRef} className={styles.particles} />
      <div ref={titlesRef} className={styles.titles} />
      <canvas ref={canvasRef} className={styles.canvas} />

      <div ref={footerRef} className={styles.footer}><p>DRAG TO EXPLORE</p></div>
    </section>
  )
}
