'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import styles from './Hero.module.css'

export const ARCHITECTURE_STRATA = [
  {
    id: 'ui',
    num: '01',
    code: 'UI // CLIENT',
    title: 'Interface & Motion Systems',
    detail: 'Next.js • React • TypeScript',
    status: 'SSR / 60FPS',
    yawOffset: 0.48,
    pitchOffset: 0.34,
    highlight: 'outer',
  },
  {
    id: 'api',
    num: '02',
    code: 'API // LOGIC',
    title: 'Distributed Service Layer',
    detail: 'Node.js • REST • Auth & Realtime',
    status: 'ASYNC / JWT',
    yawOffset: 1.28,
    pitchOffset: -0.2,
    highlight: 'orbitA',
  },
  {
    id: 'data',
    num: '03',
    code: 'DATA // CORE',
    title: 'Multi-Tenant Persistence',
    detail: 'PostgreSQL • Prisma • MongoDB',
    status: 'ISOLATED / ACID',
    yawOffset: 2.15,
    pitchOffset: 0.42,
    highlight: 'inner',
  },
  {
    id: 'cloud',
    num: '04',
    code: 'CLOUD // EDGE',
    title: 'Infrastructure & Telemetry',
    detail: 'AWS • Docker • Vercel Edge',
    status: 'HA / EDGE',
    yawOffset: 3.05,
    pitchOffset: -0.3,
    highlight: 'orbitB',
  },
]

// Static 3D geometric definitions
const OUTER_SCALE = 0.78
const OUTER_VERTICES = [
  [1, 1, 0], [1, -1, 0], [-1, 1, 0], [-1, -1, 0],
  [1, 0, 1], [1, 0, -1], [-1, 0, 1], [-1, 0, -1],
  [0, 1, 1], [0, 1, -1], [0, -1, 1], [0, -1, -1],
].map(([x, y, z]) => [x * OUTER_SCALE, y * OUTER_SCALE, z * OUTER_SCALE])

const OUTER_EDGES = (() => {
  const edges = []
  const targetSq = 2 * OUTER_SCALE * OUTER_SCALE
  for (let i = 0; i < OUTER_VERTICES.length; i++) {
    for (let j = i + 1; j < OUTER_VERTICES.length; j++) {
      const dx = OUTER_VERTICES[i][0] - OUTER_VERTICES[j][0]
      const dy = OUTER_VERTICES[i][1] - OUTER_VERTICES[j][1]
      const dz = OUTER_VERTICES[i][2] - OUTER_VERTICES[j][2]
      if (Math.abs(dx * dx + dy * dy + dz * dz - targetSq) < 0.01) {
        edges.push([i, j])
      }
    }
  }
  return edges
})()

const INNER_SCALE = 0.56
const INNER_VERTICES = [
  [INNER_SCALE, 0, 0], [-INNER_SCALE, 0, 0],
  [0, INNER_SCALE, 0], [0, -INNER_SCALE, 0],
  [0, 0, INNER_SCALE], [0, 0, -INNER_SCALE],
]

const INNER_EDGES = (() => {
  const edges = []
  const targetSq = 2 * INNER_SCALE * INNER_SCALE
  for (let i = 0; i < INNER_VERTICES.length; i++) {
    for (let j = i + 1; j < INNER_VERTICES.length; j++) {
      const dx = INNER_VERTICES[i][0] - INNER_VERTICES[j][0]
      const dy = INNER_VERTICES[i][1] - INNER_VERTICES[j][1]
      const dz = INNER_VERTICES[i][2] - INNER_VERTICES[j][2]
      if (Math.abs(dx * dx + dy * dy + dz * dz - targetSq) < 0.01) {
        edges.push([i, j])
      }
    }
  }
  return edges
})()

const RING_SEGMENTS = 48

function buildTiltedRingPoints(radius, tiltX, tiltZ) {
  const pts = []
  const cx = Math.cos(tiltX)
  const sx = Math.sin(tiltX)
  const cz = Math.cos(tiltZ)
  const sz = Math.sin(tiltZ)

  for (let i = 0; i < RING_SEGMENTS; i++) {
    const a = (i / RING_SEGMENTS) * Math.PI * 2
    const x0 = Math.cos(a) * radius
    const y0 = Math.sin(a) * radius
    const z0 = 0

    // Rotate X
    const y1 = y0 * cx - z0 * sx
    const z1 = y0 * sx + z0 * cx
    // Rotate Z
    const x2 = x0 * cz - y1 * sz
    const y2 = x0 * sz + y1 * cz
    pts.push([x2, y2, z1])
  }
  return pts
}

const RING_A_POINTS = buildTiltedRingPoints(1.36, 1.12, 0.36)
const RING_B_POINTS = buildTiltedRingPoints(1.52, -0.96, -0.52)

function projectPoint([x, y, z], yaw, pitch, roll) {
  // Rotate Y (yaw)
  const cy = Math.cos(yaw)
  const sy = Math.sin(yaw)
  const x1 = x * cy + z * sy
  const z1 = -x * sy + z * cy

  // Rotate X (pitch)
  const cx = Math.cos(pitch)
  const sx = Math.sin(pitch)
  const y2 = y * cx - z1 * sx
  const z2 = y * sx + z1 * cx

  // Rotate Z (roll)
  const cz = Math.cos(roll)
  const sz = Math.sin(roll)
  const x3 = x1 * cz - y2 * sz
  const y3 = x1 * sz + y2 * cz

  const fov = 470
  const camDist = 4.35
  const scale = fov / (camDist - z2)
  const depth = Math.max(0, Math.min(1, (z2 + 1.55) / 3.1))

  return {
    x: 200 + x3 * scale,
    y: 165 + y3 * scale,
    depth,
  }
}

function getTiltedPoint(radius, tiltX, tiltZ, angle) {
  const x0 = Math.cos(angle) * radius
  const y0 = Math.sin(angle) * radius
  const y1 = y0 * Math.cos(tiltX)
  const z1 = y0 * Math.sin(tiltX)
  const x2 = x0 * Math.cos(tiltZ) - y1 * Math.sin(tiltZ)
  const y2 = x0 * Math.sin(tiltZ) + y1 * Math.cos(tiltZ)
  return [x2, y2, z1]
}

function computeSceneSnapshot(yaw, pitch, roll, phaseTime) {
  const outerNodes = OUTER_VERTICES.map((v) => projectPoint(v, yaw, pitch, roll))
  const innerNodes = INNER_VERTICES.map((v) => projectPoint(v, -yaw * 0.72, pitch * 0.85, roll * 0.5))

  const ringAPath = RING_A_POINTS
    .map((p, idx) => {
      const proj = projectPoint(p, yaw * 0.35, pitch * 0.55, 0)
      return `${idx === 0 ? 'M' : 'L'}${proj.x.toFixed(1)},${proj.y.toFixed(1)}`
    })
    .join(' ') + ' Z'

  const ringBPath = RING_B_POINTS
    .map((p, idx) => {
      const proj = projectPoint(p, -yaw * 0.25, pitch * 0.55, 0)
      return `${idx === 0 ? 'M' : 'L'}${proj.x.toFixed(1)},${proj.y.toFixed(1)}`
    })
    .join(' ') + ' Z'

  const satellites = [
    projectPoint(getTiltedPoint(1.36, 1.12, 0.36, phaseTime * 0.68), yaw * 0.35, pitch * 0.55, 0),
    projectPoint(getTiltedPoint(1.36, 1.12, 0.36, phaseTime * 0.68 + Math.PI), yaw * 0.35, pitch * 0.55, 0),
    projectPoint(getTiltedPoint(1.52, -0.96, -0.52, -phaseTime * 0.5 + 0.9), -yaw * 0.25, pitch * 0.55, 0),
    projectPoint(getTiltedPoint(1.52, -0.96, -0.52, -phaseTime * 0.5 + 0.9 + Math.PI), -yaw * 0.25, pitch * 0.55, 0),
  ]

  return { outerNodes, innerNodes, ringAPath, ringBPath, satellites }
}

const INITIAL_SNAPSHOT = computeSceneSnapshot(0.48, 0.34, 0.12, 0.4)

export default function ArchitecturalVisual({ pointerNormRef }) {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isUserControlling, setIsUserControlling] = useState(false)

  const stageRef = useRef(null)
  const outerLineRefs = useRef([])
  const outerNodeRefs = useRef([])
  const innerLineRefs = useRef([])
  const innerNodeRefs = useRef([])
  const ringARef = useRef(null)
  const ringBRef = useRef(null)
  const satRefs = useRef([])

  const activeIndexRef = useRef(0)
  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  // Gentle auto-cycle between architecture strata unless user is interacting
  useEffect(() => {
    if (prefersReducedMotion || isUserControlling) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ARCHITECTURE_STRATA.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [prefersReducedMotion, isUserControlling])

  // Cursor-responsive 3D card tilt (desktop fine pointer only)
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const smoothTiltX = useSpring(tiltX, { stiffness: 180, damping: 24, mass: 0.6 })
  const smoothTiltY = useSpring(tiltY, { stiffness: 180, damping: 24, mass: 0.6 })

  const handlePointerMove = (e) => {
    if (prefersReducedMotion || e.pointerType !== 'mouse' || !stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    tiltY.set(nx * 4.5)
    tiltX.set(-ny * 4.5)
  }

  const handlePointerLeave = () => {
    tiltX.set(0)
    tiltY.set(0)
    setIsUserControlling(false)
  }

  // Real-time 3D wireframe projection loop (zero React re-renders per frame)
  useEffect(() => {
    if (prefersReducedMotion) return

    let frameId = null
    let isVisible = true
    let isTabActive = typeof document !== 'undefined' ? !document.hidden : true
    let lastTs = performance.now()
    let phaseTime = 0.4
    let currentYaw = 0.48
    let currentPitch = 0.34
    let spinAccum = 0

    const applySceneToDom = (snap, highlight) => {
      const outerFocus = highlight === 'outer'
      const innerFocus = highlight === 'inner'
      const orbitAFocus = highlight === 'orbitA'
      const orbitBFocus = highlight === 'orbitB'

      OUTER_EDGES.forEach(([a, b], i) => {
        const el = outerLineRefs.current[i]
        if (!el) return
        const p1 = snap.outerNodes[a]
        const p2 = snap.outerNodes[b]
        const avgDepth = (p1.depth + p2.depth) * 0.5
        el.setAttribute('x1', p1.x.toFixed(2))
        el.setAttribute('y1', p1.y.toFixed(2))
        el.setAttribute('x2', p2.x.toFixed(2))
        el.setAttribute('y2', p2.y.toFixed(2))
        const baseOp = outerFocus ? 0.34 + avgDepth * 0.58 : 0.14 + avgDepth * 0.34
        el.setAttribute('stroke-opacity', baseOp.toFixed(3))
        el.setAttribute('stroke-width', (outerFocus ? 0.9 + avgDepth * 0.85 : 0.7 + avgDepth * 0.55).toFixed(2))
        el.setAttribute('stroke', outerFocus && avgDepth > 0.48 ? '#f5d77f' : '#d4af37')
      })

      snap.outerNodes.forEach((p, i) => {
        const el = outerNodeRefs.current[i]
        if (!el) return
        el.setAttribute('cx', p.x.toFixed(2))
        el.setAttribute('cy', p.y.toFixed(2))
        el.setAttribute('r', (outerFocus ? 2.0 + p.depth * 1.4 : 1.3 + p.depth * 1.1).toFixed(2))
        el.setAttribute('fill-opacity', (0.28 + p.depth * 0.68).toFixed(3))
      })

      INNER_EDGES.forEach(([a, b], i) => {
        const el = innerLineRefs.current[i]
        if (!el) return
        const p1 = snap.innerNodes[a]
        const p2 = snap.innerNodes[b]
        const avgDepth = (p1.depth + p2.depth) * 0.5
        el.setAttribute('x1', p1.x.toFixed(2))
        el.setAttribute('y1', p1.y.toFixed(2))
        el.setAttribute('x2', p2.x.toFixed(2))
        el.setAttribute('y2', p2.y.toFixed(2))
        el.setAttribute('stroke', innerFocus ? '#f5d77f' : '#7dd3fc')
        el.setAttribute('stroke-opacity', (innerFocus ? 0.42 + avgDepth * 0.55 : 0.18 + avgDepth * 0.32).toFixed(3))
        el.setAttribute('stroke-width', (innerFocus ? 1.15 + avgDepth * 0.75 : 0.8 + avgDepth * 0.45).toFixed(2))
      })

      snap.innerNodes.forEach((p, i) => {
        const el = innerNodeRefs.current[i]
        if (!el) return
        el.setAttribute('cx', p.x.toFixed(2))
        el.setAttribute('cy', p.y.toFixed(2))
        el.setAttribute('r', (innerFocus ? 2.2 + p.depth * 1.2 : 1.5 + p.depth * 0.8).toFixed(2))
        el.setAttribute('fill', innerFocus ? '#fff7d6' : '#38bdf8')
        el.setAttribute('fill-opacity', (innerFocus ? 0.5 + p.depth * 0.5 : 0.3 + p.depth * 0.45).toFixed(3))
      })

      if (ringARef.current) {
        ringARef.current.setAttribute('d', snap.ringAPath)
        ringARef.current.setAttribute('stroke', orbitAFocus ? '#f5d77f' : '#d4af37')
        ringARef.current.setAttribute('stroke-opacity', orbitAFocus ? '0.68' : '0.24')
        ringARef.current.setAttribute('stroke-width', orbitAFocus ? '1.35' : '0.85')
      }

      if (ringBRef.current) {
        ringBRef.current.setAttribute('d', snap.ringBPath)
        ringBRef.current.setAttribute('stroke', orbitBFocus ? '#f5d77f' : '#94a3b8')
        ringBRef.current.setAttribute('stroke-opacity', orbitBFocus ? '0.62' : '0.18')
        ringBRef.current.setAttribute('stroke-width', orbitBFocus ? '1.25' : '0.8')
      }

      snap.satellites.forEach((s, i) => {
        const el = satRefs.current[i]
        if (!el) return
        const isRingA = i < 2
        const activeSat = (isRingA && orbitAFocus) || (!isRingA && orbitBFocus)
        el.setAttribute('cx', s.x.toFixed(2))
        el.setAttribute('cy', s.y.toFixed(2))
        el.setAttribute('r', (activeSat ? 3.2 + s.depth * 1.3 : 2.1 + s.depth * 0.9).toFixed(2))
        el.setAttribute('fill', activeSat ? '#fff7d6' : isRingA ? '#d4af37' : '#38bdf8')
        el.setAttribute('fill-opacity', (0.35 + s.depth * 0.62).toFixed(3))
      })
    }

    const tick = (now) => {
      if (!isVisible || !isTabActive) {
        frameId = null
        return
      }

      const dt = Math.min(0.05, (now - lastTs) / 1000)
      lastTs = now
      phaseTime += dt
      spinAccum += dt * 0.24

      const stratum = ARCHITECTURE_STRATA[activeIndexRef.current]
      const pointer = pointerNormRef?.current ?? { x: 0, y: 0 }

      const targetYaw = stratum.yawOffset + spinAccum + pointer.x * 0.42
      const targetPitch = stratum.pitchOffset + Math.sin(phaseTime * 0.45) * 0.08 - pointer.y * 0.28

      // Smooth critically-damped lerp
      const alpha = 1 - Math.exp(-dt * 4.2)
      currentYaw += (targetYaw - currentYaw) * alpha
      currentPitch += (targetPitch - currentPitch) * alpha

      const snap = computeSceneSnapshot(currentYaw, currentPitch, 0.12 + Math.sin(phaseTime * 0.3) * 0.04, phaseTime)
      applySceneToDom(snap, stratum.highlight)

      frameId = requestAnimationFrame(tick)
    }

    const startLoop = () => {
      if (frameId === null && isVisible && isTabActive) {
        lastTs = performance.now()
        frameId = requestAnimationFrame(tick)
      }
    }

    const stopLoop = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId)
        frameId = null
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true
        if (isVisible) startLoop()
        else stopLoop()
      },
      { threshold: 0.05 }
    )

    if (stageRef.current) observer.observe(stageRef.current)

    const onVisChange = () => {
      isTabActive = !document.hidden
      if (isTabActive) startLoop()
      else stopLoop()
    }
    document.addEventListener('visibilitychange', onVisChange)

    startLoop()

    return () => {
      stopLoop()
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisChange)
    }
  }, [prefersReducedMotion, pointerNormRef])

  const activeStratum = ARCHITECTURE_STRATA[activeIndex]

  return (
    <motion.div
      ref={stageRef}
      className={styles.visualStage}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
      style={
        prefersReducedMotion
          ? undefined
          : {
              rotateX: smoothTiltX,
              rotateY: smoothTiltY,
            }
      }
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsUserControlling(true)}
      onPointerLeave={handlePointerLeave}
    >
      {/* Precision corner brackets */}
      <span className={styles.cornerBracketTL} aria-hidden="true" />
      <span className={styles.cornerBracketTR} aria-hidden="true" />
      <span className={styles.cornerBracketBL} aria-hidden="true" />
      <span className={styles.cornerBracketBR} aria-hidden="true" />

      {/* Top Architectural Telemetry Bar */}
      <div className={styles.visualHeader}>
        <span className={styles.visualTag}>SYS.TOPOLOGY // 3D CORE</span>
        <span className={styles.visualStatus}>
          <span className={styles.visualStatusDot} aria-hidden="true" />
          {activeStratum.status}
        </span>
      </div>

      {/* Interactive 3D Wireframe Viewport */}
      <div className={styles.canvasViewport}>
        <svg
          viewBox="0 0 400 330"
          className={styles.coreSvg}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <radialGradient id="coreGlowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f5d77f" stopOpacity="0.24" />
              <stop offset="55%" stopColor="#d4af37" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#030712" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Subtle calibrated architectural reticle */}
          <circle cx="200" cy="165" r="138" fill="none" stroke="rgba(212, 175, 55, 0.08)" strokeDasharray="3 5" />
          <circle cx="200" cy="165" r="96" fill="none" stroke="rgba(148, 163, 184, 0.07)" />
          <line x1="42" y1="165" x2="358" y2="165" stroke="rgba(212, 175, 55, 0.06)" />
          <line x1="200" y1="22" x2="200" y2="308" stroke="rgba(212, 175, 55, 0.06)" />

          {/* Subtle core luminosity */}
          <circle cx="200" cy="165" r="92" fill="url(#coreGlowGrad)" />

          {/* Tilted 3D Orbital Planes */}
          <path
            ref={ringBRef}
            d={INITIAL_SNAPSHOT.ringBPath}
            fill="none"
            stroke="#94a3b8"
            strokeOpacity="0.2"
            strokeWidth="0.85"
            strokeDasharray="4 4"
          />
          <path
            ref={ringARef}
            d={INITIAL_SNAPSHOT.ringAPath}
            fill="none"
            stroke="#d4af37"
            strokeOpacity="0.3"
            strokeWidth="0.95"
          />

          {/* Outer Cuboctahedron Lattice */}
          {OUTER_EDGES.map(([a, b], i) => {
            const p1 = INITIAL_SNAPSHOT.outerNodes[a]
            const p2 = INITIAL_SNAPSHOT.outerNodes[b]
            const avgDepth = (p1.depth + p2.depth) * 0.5
            return (
              <line
                key={`oe-${i}`}
                ref={(el) => {
                  outerLineRefs.current[i] = el
                }}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke={avgDepth > 0.48 ? '#f5d77f' : '#d4af37'}
                strokeOpacity={0.34 + avgDepth * 0.55}
                strokeWidth={0.9 + avgDepth * 0.8}
                strokeLinecap="round"
              />
            )
          })}

          {INITIAL_SNAPSHOT.outerNodes.map((p, i) => (
            <circle
              key={`on-${i}`}
              ref={(el) => {
                outerNodeRefs.current[i] = el
              }}
              cx={p.x}
              cy={p.y}
              r={1.8 + p.depth * 1.2}
              fill="#f5d77f"
              fillOpacity={0.3 + p.depth * 0.65}
            />
          ))}

          {/* Inner Octahedron Data Vault */}
          {INNER_EDGES.map(([a, b], i) => {
            const p1 = INITIAL_SNAPSHOT.innerNodes[a]
            const p2 = INITIAL_SNAPSHOT.innerNodes[b]
            const avgDepth = (p1.depth + p2.depth) * 0.5
            return (
              <line
                key={`ie-${i}`}
                ref={(el) => {
                  innerLineRefs.current[i] = el
                }}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="#7dd3fc"
                strokeOpacity={0.22 + avgDepth * 0.34}
                strokeWidth={0.8 + avgDepth * 0.45}
                strokeLinecap="round"
              />
            )
          })}

          {INITIAL_SNAPSHOT.innerNodes.map((p, i) => (
            <circle
              key={`in-${i}`}
              ref={(el) => {
                innerNodeRefs.current[i] = el
              }}
              cx={p.x}
              cy={p.y}
              r={1.6 + p.depth * 0.8}
              fill="#38bdf8"
              fillOpacity={0.32 + p.depth * 0.45}
            />
          ))}

          {/* Central Precision Anchor */}
          <circle cx="200" cy="165" r="3.2" fill="#fff7d6" fillOpacity="0.9" />
          <circle cx="200" cy="165" r="9" fill="none" stroke="#d4af37" strokeOpacity="0.35" strokeWidth="0.75" />

          {/* Orbiting Satellites */}
          {INITIAL_SNAPSHOT.satellites.map((s, i) => (
            <circle
              key={`sat-${i}`}
              ref={(el) => {
                satRefs.current[i] = el
              }}
              cx={s.x}
              cy={s.y}
              r={2.4 + s.depth}
              fill={i < 2 ? '#f5d77f' : '#38bdf8'}
              fillOpacity={0.4 + s.depth * 0.55}
            />
          ))}
        </svg>

        {/* Minimalist Telemetry Badges inside Viewport */}
        <div className={styles.readoutOverlay}>
          <span className={styles.readoutBadge}>
            NODE <span className={styles.readoutHighlight}>{activeStratum.num}/04</span>
          </span>
          <span className={styles.readoutBadge}>
            ARCH <span className={styles.readoutHighlight}>FULL-STACK</span>
          </span>
        </div>
      </div>

      {/* Interactive Strata Selector */}
      <div className={styles.strataFooter}>
        <div className={styles.strataSpecRow}>
          <span className={styles.strataSpecTitle}>{activeStratum.title}</span>
          <span className={styles.strataSpecDetail}>{activeStratum.detail}</span>
        </div>

        <div className={styles.strataButtons} role="tablist" aria-label="System Architecture Layers">
          {ARCHITECTURE_STRATA.map((layer, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={layer.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.strataBtn} ${isActive ? styles.strataBtnActive : ''}`}
                onClick={() => {
                  setIsUserControlling(true)
                  setActiveIndex(idx)
                }}
                onMouseEnter={() => {
                  setIsUserControlling(true)
                  setActiveIndex(idx)
                }}
              >
                <span className={styles.strataNum}>{layer.num}</span>
                <span className={styles.strataCode}>{layer.code.split(' // ')[0]}</span>
              </button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

