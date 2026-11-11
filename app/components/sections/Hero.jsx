'use client'

import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import {
  SiDocker,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import ArchitecturalVisual from './hero/ArchitecturalVisual'
import MagneticButton from './hero/MagneticButton'
import styles from './hero/Hero.module.css'

const ROLES = [
  'Full Stack Software Engineer',
  'Frontend Engineer',
  'Backend Developer',
  'SaaS & Systems Developer',
]

const STACK_ITEMS = [
  { name: 'Next.js', icon: <SiNextdotjs size={13} color="#f8fafc" aria-hidden="true" /> },
  { name: 'TypeScript', icon: <SiTypescript size={13} color="#60a5fa" aria-hidden="true" /> },
  { name: 'React', icon: <SiReact size={13} color="#67e8f9" aria-hidden="true" /> },
  { name: 'Node.js', icon: <SiNodedotjs size={13} color="#86efac" aria-hidden="true" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={13} color="#93c5fd" aria-hidden="true" /> },
  { name: 'MongoDB', icon: <SiMongodb size={13} color="#6ee7b7" aria-hidden="true" /> },
  { name: 'AWS', icon: <FaAws size={13} color="#fbbf24" aria-hidden="true" /> },
  { name: 'Docker', icon: <SiDocker size={13} color="#38bdf8" aria-hidden="true" /> },
]

const FIRST_NAME_CHARS = 'ISHTHIYAQ'.split('')
const LAST_NAME_CHARS = 'AHAMED'.split('')
const EASE_CINEMATIC = [0.16, 1, 0.3, 1]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)
  const [isRolePaused, setIsRolePaused] = useState(false)

  const sectionRef = useRef(null)
  const pointerNormRef = useRef({ x: 0, y: 0 })

  // Subtle cursor-driven background parallax (desktop mouse pointer only)
  const rawParallaxX = useMotionValue(0)
  const rawParallaxY = useMotionValue(0)
  const gridParallaxX = useMotionValue(0)
  const gridParallaxY = useMotionValue(0)

  const smoothGlowX = useSpring(rawParallaxX, { stiffness: 90, damping: 24, mass: 0.8 })
  const smoothGlowY = useSpring(rawParallaxY, { stiffness: 90, damping: 24, mass: 0.8 })
  const smoothGridX = useSpring(gridParallaxX, { stiffness: 80, damping: 26, mass: 0.9 })
  const smoothGridY = useSpring(gridParallaxY, { stiffness: 80, damping: 26, mass: 0.9 })

  useEffect(() => {
    if (prefersReducedMotion || isRolePaused) return
    const interval = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [prefersReducedMotion, isRolePaused])

  const handleSectionPointerMove = (e) => {
    if (prefersReducedMotion || e.pointerType !== 'mouse' || !sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    pointerNormRef.current = { x: nx, y: ny }
    rawParallaxX.set(nx * 18)
    rawParallaxY.set(ny * 14)
    gridParallaxX.set(-nx * 6)
    gridParallaxY.set(-ny * 6)
  }

  const handleSectionPointerLeave = () => {
    pointerNormRef.current = { x: 0, y: 0 }
    rawParallaxX.set(0)
    rawParallaxY.set(0)
    gridParallaxX.set(0)
    gridParallaxY.set(0)
  }

  const instantaneous = { duration: 0 }

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Introduction"
      className={styles.heroSection}
      onPointerMove={handleSectionPointerMove}
      onPointerLeave={handleSectionPointerLeave}
    >
      {/* Phase 1 — Architectural Backdrop & Subtle Parallax Layers */}
      <div className={styles.backdropLayer} aria-hidden="true">
        <motion.div
          className={styles.architecturalGrid}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={prefersReducedMotion ? instantaneous : { duration: 0.95, ease: EASE_CINEMATIC }}
          style={prefersReducedMotion ? undefined : { x: smoothGridX, y: smoothGridY }}
        />

        <motion.div
          className={styles.microGrid}
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={prefersReducedMotion ? instantaneous : { duration: 1.1, delay: 0.15, ease: EASE_CINEMATIC }}
        />

        <motion.div
          className={styles.ambientGlowPrimary}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={prefersReducedMotion ? instantaneous : { duration: 1.1, ease: EASE_CINEMATIC }}
          style={prefersReducedMotion ? undefined : { x: smoothGlowX, y: smoothGlowY }}
        />

        <div className={styles.ambientGlowSecondary} />

        <motion.div
          className={styles.horizonRule}
          initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={prefersReducedMotion ? instantaneous : { duration: 0.9, delay: 0.08, ease: EASE_CINEMATIC }}
        />

        <div className={styles.vignetteFade} />
      </div>

      {/* Main Content Container */}
      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* LEFT COLUMN — Editorial Identity & Actions */}
          <div className={styles.leftColumn}>
            {/* Availability Indicator */}
            <motion.div
              className={styles.availabilityBadge}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 12, filter: 'blur(4px)' }
              }
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={prefersReducedMotion ? instantaneous : { duration: 0.55, delay: 0.1, ease: EASE_CINEMATIC }}
            >
              <span className={styles.statusPulseWrap} aria-hidden="true">
                <span className={styles.statusRing} />
                <span className={styles.statusDot} />
              </span>
              <span className={styles.availabilityText}>
                Available for New Opportunities
              </span>
            </motion.div>

            {/* Phase 2 — Split-Text Character Reveal Typography */}
            <h1 className={styles.heroTitle}>
              <span className={styles.srOnly}>Ishthiyaq Ahamed</span>

              <span className={styles.titleLine} aria-hidden="true">
                {FIRST_NAME_CHARS.map((char, idx) => (
                  <span key={`fn-${idx}`} className={styles.charMask}>
                    <motion.span
                      className={styles.charInner}
                      initial={
                        prefersReducedMotion
                          ? false
                          : { y: '118%', opacity: 0, filter: 'blur(6px)' }
                      }
                      animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                      transition={
                        prefersReducedMotion
                          ? instantaneous
                          : {
                              duration: 0.65,
                              delay: 0.18 + idx * 0.024,
                              ease: EASE_CINEMATIC,
                            }
                      }
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </span>

              <span className={styles.titleLine} aria-hidden="true">
                {LAST_NAME_CHARS.map((char, idx) => {
                  const globalIdx = FIRST_NAME_CHARS.length + idx
                  return (
                    <span key={`ln-${idx}`} className={styles.charMask}>
                      <motion.span
                        className={`${styles.charInner} ${styles.goldChar}`}
                        initial={
                          prefersReducedMotion
                            ? false
                            : { y: '118%', opacity: 0, filter: 'blur(6px)' }
                        }
                        animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                        transition={
                          prefersReducedMotion
                            ? instantaneous
                            : {
                                duration: 0.65,
                                delay: 0.18 + globalIdx * 0.024,
                                ease: EASE_CINEMATIC,
                              }
                        }
                      >
                        {char}
                      </motion.span>
                    </span>
                  )
                })}
              </span>
            </h1>

            {/* Phase 3 — Dynamic Professional Identity Transition */}
            <motion.div
              className={styles.roleContainer}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 14, filter: 'blur(4px)' }
              }
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={prefersReducedMotion ? instantaneous : { duration: 0.6, delay: 0.52, ease: EASE_CINEMATIC }}
              onMouseEnter={() => setIsRolePaused(true)}
              onMouseLeave={() => setIsRolePaused(false)}
              aria-label={`Roles: ${ROLES.join(', ')}`}
            >
              <div className={styles.roleRow}>
                <span className={styles.roleIndex} aria-hidden="true">
                  {String(roleIndex + 1).padStart(2, '0')}
                </span>
                <span className={styles.roleDivider} aria-hidden="true" />
                <div className={styles.roleViewport} aria-live="off">
                  <AnimatePresence initial={false}>
                    <motion.span
                      key={ROLES[roleIndex]}
                      className={styles.roleTextItem}
                      initial={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { y: '100%', opacity: 0, filter: 'blur(4px)' }
                      }
                      animate={
                        prefersReducedMotion
                          ? { opacity: 1 }
                          : { y: '0%', opacity: 1, filter: 'blur(0px)' }
                      }
                      exit={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { y: '-100%', opacity: 0, filter: 'blur(4px)' }
                      }
                      transition={
                        prefersReducedMotion
                          ? instantaneous
                          : {
                              duration: 0.48,
                              ease: EASE_CINEMATIC,
                            }
                      }
                    >
                      {ROLES[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <div
                className={styles.roleProgressTrack}
                role="group"
                aria-label="Select professional identity"
              >
                {ROLES.map((role, idx) => (
                  <button
                    key={role}
                    type="button"
                    aria-label={`Show role: ${role}`}
                    aria-pressed={idx === roleIndex}
                    className={`${styles.roleDashBtn} ${
                      idx === roleIndex ? styles.roleDashBtnActive : ''
                    }`}
                    onClick={() => setRoleIndex(idx)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Phase 4 — Supporting Positioning & Narrative */}
            <motion.p
              className={styles.positioningStatement}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 16, filter: 'blur(4px)' }
              }
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={prefersReducedMotion ? instantaneous : { duration: 0.65, delay: 0.68, ease: EASE_CINEMATIC }}
            >
              Engineering Digital Experiences. Building Scalable Systems.
            </motion.p>

            <motion.p
              className={styles.supportingDescription}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 16, filter: 'blur(4px)' }
              }
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={prefersReducedMotion ? instantaneous : { duration: 0.65, delay: 0.78, ease: EASE_CINEMATIC }}
            >
              I build modern web applications, intelligent SaaS platforms, and
              scalable digital solutions by combining thoughtful architecture
              with exceptional user experiences.
            </motion.p>

            {/* Phase 5 — Premium Magnetic CTAs */}
            <motion.div
              className={styles.ctaRow}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? instantaneous : { duration: 0.6, delay: 0.9, ease: EASE_CINEMATIC }}
            >
              <MagneticButton
                href="#projects"
                className={`${styles.ctaPrimary} luxury-btn`}
                ariaLabel="Explore My Work — Jump to featured projects"
              >
                <span>Explore My Work</span>
                <span className={styles.ctaPrimaryIcon} aria-hidden="true">
                  <ArrowRight size={16} strokeWidth={2.2} />
                </span>
              </MagneticButton>

              <MagneticButton
                href="/cv.pdf"
                download
                className={styles.ctaSecondary}
                ariaLabel="Download CV as PDF"
              >
                <span className={styles.ctaSecondaryIcon} aria-hidden="true">
                  <Download size={15} strokeWidth={2} />
                </span>
                <span>Download CV</span>
              </MagneticButton>
            </motion.div>

            {/* Refined Technology Stack Indicator */}
            <motion.div
              className={styles.stackSection}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? instantaneous : { duration: 0.6, delay: 1.04, ease: EASE_CINEMATIC }}
            >
              <div className={styles.stackLabel}>
                <span className={styles.stackLabelAccent} aria-hidden="true" />
                <span>Core Architecture Stack</span>
              </div>
              <div className={styles.stackGrid}>
                {STACK_ITEMS.map((tech) => (
                  <div key={tech.name} className={styles.stackItem}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Interactive 3D Engineering Visual */}
          <div className={styles.rightColumn}>
            <ArchitecturalVisual pointerNormRef={pointerNormRef} />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <motion.a
        href="#about"
        className={styles.scrollHint}
        aria-label="Scroll down to About section"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.72 }}
        transition={prefersReducedMotion ? instantaneous : { duration: 0.6, delay: 1.25, ease: EASE_CINEMATIC }}
      >
        <span className={styles.scrollHintLabel}>Scroll</span>
        <span className={styles.scrollHintTrack} aria-hidden="true">
          <span className={styles.scrollHintRunner} />
        </span>
      </motion.a>
    </section>
  )
}
