'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import styles from './Hero.module.css'

export default function LiquidChromeCanvas({
  pointerNormRef,
  scrollProgressRef,
  prefersReducedMotion,
}) {
  const containerRef = useRef(null)
  const [webglUnavailable, setWebglUnavailable] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let renderer
    let scene
    let camera
    let pmremGenerator
    let envRT
    let geometry
    let material
    let mesh
    let frameId = null
    let isVisible = true
    let isTabActive = typeof document !== 'undefined' ? !document.hidden : true

    try {
      const width = container.clientWidth || 520
      const height = container.clientHeight || 520
      const aspect = width / height
      const isCompact = width < 420

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isCompact ? 1.5 : 2))
      renderer.setSize(width, height)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.08
      renderer.outputColorSpace = THREE.SRGBColorSpace
      renderer.domElement.className = styles.chromeWebglCanvas
      renderer.domElement.setAttribute('aria-hidden', 'true')
      container.appendChild(renderer.domElement)

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(38, aspect, 0.1, 100)
      camera.position.set(0, 0.04, aspect < 1 ? 6.6 / aspect : 6.6)

      pmremGenerator = new THREE.PMREMGenerator(renderer)
      pmremGenerator.compileEquirectangularShader()
      const roomEnv = new RoomEnvironment()
      envRT = pmremGenerator.fromScene(roomEnv, 0.04)
      scene.environment = envRT.texture
      roomEnv.dispose()

      // Studio lighting sculpting deep liquid chrome, electric cobalt, and lavender reflections
      const ambientLight = new THREE.AmbientLight('#f7f5f0', 0.45)
      scene.add(ambientLight)

      const keyLight = new THREE.DirectionalLight('#ffffff', 2.6)
      keyLight.position.set(3.5, 4.4, 4.5)
      scene.add(keyLight)

      const cobaltRim = new THREE.DirectionalLight('#2563eb', 4.0)
      cobaltRim.position.set(-4.4, -2.0, 2.8)
      scene.add(cobaltRim)

      const lavenderRim = new THREE.DirectionalLight('#a78bfa', 3.1)
      lavenderRim.position.set(4.0, 2.4, -2.8)
      scene.add(lavenderRim)

      const ivoryBounce = new THREE.DirectionalLight('#f7f5f0', 1.1)
      ivoryBounce.position.set(0, -4.2, 2.0)
      scene.add(ivoryBounce)

      // Organic twisted sculptural ribbon
      geometry = new THREE.TorusKnotGeometry(
        1.02,
        0.31,
        isCompact ? 130 : 220,
        isCompact ? 28 : 44,
        2,
        3
      )

      const uniforms = {
        uTime: { value: 0 },
        uMorph: { value: prefersReducedMotion ? 0 : 1 },
      }

      material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#dce4f0'),
        metalness: 0.96,
        roughness: 0.08,
        iridescence: 1.0,
        iridescenceIOR: 1.42,
        iridescenceThicknessRange: [160, 580],
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        envMapIntensity: 1.45,
      })
      material.customProgramCacheKey = () => 'liquid-chrome-iridescent-v1'
      material.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = uniforms.uTime
        shader.uniforms.uMorph = uniforms.uMorph

        shader.vertexShader = shader.vertexShader.replace(
          '#include <common>',
          `#include <common>
           uniform float uTime;
           uniform float uMorph;`
        )

        shader.vertexShader = shader.vertexShader.replace(
          '#include <beginnormal_vertex>',
          `#include <beginnormal_vertex>
           float dWaveX = cos(position.x * 2.1 + uTime * 0.85) * 2.1 * cos(position.y * 2.0 - uTime * 0.65) * 0.055 * uMorph;
           float dWaveY = -sin(position.x * 2.1 + uTime * 0.85) * sin(position.y * 2.0 - uTime * 0.65) * 2.0 * 0.055 * uMorph;
           float dWaveZ = cos(position.z * 2.3 + uTime * 0.72) * 2.3 * 0.5 * 0.055 * uMorph;
           objectNormal = normalize(objectNormal - vec3(dWaveX, dWaveY, dWaveZ) * 0.45);`
        )

        shader.vertexShader = shader.vertexShader.replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
           float vDispA = sin(position.x * 2.1 + uTime * 0.85) * cos(position.y * 2.0 - uTime * 0.65);
           float vDispB = sin(position.z * 2.3 + uTime * 0.72) * 0.5;
           transformed += normalize(normal) * ((vDispA + vDispB) * 0.055 * uMorph);`
        )
      }

      mesh = new THREE.Mesh(geometry, material)
      mesh.rotation.set(0.32, -0.45, 0.14)
      scene.add(mesh)

      // Initial render for immediate crisp first paint
      renderer.render(scene, camera)

      const handleResize = () => {
        if (!container || !renderer || !camera) return
        const w = container.clientWidth || 520
        const h = container.clientHeight || 520
        const nextAspect = w / h
        camera.aspect = nextAspect
        camera.position.z = nextAspect < 1 ? 6.6 / nextAspect : 6.6
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
        renderer.render(scene, camera)
      }

      const resizeObserver = new ResizeObserver(handleResize)
      resizeObserver.observe(container)

      if (prefersReducedMotion) {
        return () => {
          resizeObserver.disconnect()
          geometry?.dispose()
          material?.dispose()
          envRT?.dispose()
          pmremGenerator?.dispose()
          renderer?.dispose()
          if (renderer?.domElement && renderer.domElement.parentNode === container) {
            container.removeChild(renderer.domElement)
          }
        }
      }

      let lastTime = performance.now()
      let elapsed = 0
      let smoothRotX = 0.32
      let smoothRotY = -0.45

      const renderLoop = (now) => {
        if (!isVisible || !isTabActive) {
          frameId = null
          return
        }

        const dt = Math.min(0.05, (now - lastTime) / 1000)
        lastTime = now
        elapsed += dt

        uniforms.uTime.value = elapsed

        const pointer = pointerNormRef?.current ?? { x: 0, y: 0 }
        const scrollP = scrollProgressRef?.current ?? 0

        const targetRotX = 0.3 + Math.sin(elapsed * 0.35) * 0.12 - pointer.y * 0.42 + scrollP * 0.55
        const targetRotY = -0.42 + elapsed * 0.24 + pointer.x * 0.58 + scrollP * 1.1

        const easeAlpha = 1 - Math.exp(-dt * 4.5)
        smoothRotX += (targetRotX - smoothRotX) * easeAlpha
        smoothRotY += (targetRotY - smoothRotY) * easeAlpha

        mesh.rotation.x = smoothRotX
        mesh.rotation.y = smoothRotY
        mesh.rotation.z = 0.14 + Math.cos(elapsed * 0.28) * 0.08
        mesh.position.y = Math.sin(elapsed * 0.65) * 0.07

        renderer.render(scene, camera)
        frameId = requestAnimationFrame(renderLoop)
      }

      const startLoop = () => {
        if (frameId === null && isVisible && isTabActive) {
          lastTime = performance.now()
          frameId = requestAnimationFrame(renderLoop)
        }
      }

      const stopLoop = () => {
        if (frameId !== null) {
          cancelAnimationFrame(frameId)
          frameId = null
        }
      }

      const io = new IntersectionObserver(
        (entries) => {
          isVisible = entries[0]?.isIntersecting ?? true
          if (isVisible) startLoop()
          else stopLoop()
        },
        { threshold: 0.02 }
      )
      io.observe(container)

      const onVisibility = () => {
        isTabActive = !document.hidden
        if (isTabActive) startLoop()
        else stopLoop()
      }
      document.addEventListener('visibilitychange', onVisibility)

      startLoop()

      return () => {
        stopLoop()
        io.disconnect()
        resizeObserver.disconnect()
        document.removeEventListener('visibilitychange', onVisibility)
        geometry?.dispose()
        material?.dispose()
        envRT?.dispose()
        pmremGenerator?.dispose()
        renderer?.dispose()
        if (renderer?.domElement && renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement)
        }
      }
    } catch {
      queueMicrotask(() => setWebglUnavailable(true))
    }
  }, [prefersReducedMotion, pointerNormRef, scrollProgressRef])

  return (
    <div ref={containerRef} className={styles.chromeCanvasHost}>
      {/* Soft optical studio aura behind the liquid chrome sculpture */}
      <div className={styles.chromeAura} aria-hidden="true" />
      <div className={styles.chromeShadow} aria-hidden="true" />

      {webglUnavailable && (
        <div className={styles.chromeFallback} aria-hidden="true">
          <div className={styles.chromeFallbackOrb} />
        </div>
      )}
    </div>
  )
}

