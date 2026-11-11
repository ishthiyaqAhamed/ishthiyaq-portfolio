'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import LiquidChromeCanvas from './hero/LiquidChromeCanvas'
import MagneticButton from './hero/MagneticButton'
import styles from './hero/Hero.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const HEADLINE_WORDS = [
  { text: 'THINK', accent: '.' },
  { text: 'DESIGN', accent: '.' },
  { text: 'ENGINEER', accent: '.' },
]

const TOTAL_HEADLINE_CHARS = HEADLINE_WORDS.reduce(
  (sum, w) => sum + w.text.length + w.accent.length,
  0
)

const ROTATING_STATEMENTS = [
  'Building Digital Products.',
  'Engineering Scalable Systems.',
  'Creating Intelligent Solutions.',
]

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [statementIdx, setStatementIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const washRef = useRef(null)
  const mastheadRef = useRef(null)
  const introLabelRef = useRef(null)
  const leftScrollRef = useRef(null)
  const chromeScrollRef = useRef(null)
  const chromeEntranceRef = useRef(null)
  const footerRef = useRef(null)

  const charRefs = useRef([])
  const supportRefs = useRef([])

  const pointerNormRef = useRef({ x: 0, y: 0 })
  const scrollProgressRef = useRef(0)

  // Dynamic rotating statement cycle (Phase 5)
  useEffect(() => {
    if (prefersReducedMotion || isPaused) return
    const timer = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return
      setStatementIdx((prev) => (prev + 1) % ROTATING_STATEMENTS.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [prefersReducedMotion, isPaused])

  // Choreographed GSAP entrance timeline & ScrollTrigger parallax
  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const chars = charRefs.current.slice(0, TOTAL_HEADLINE_CHARS).filter(Boolean)
      const supports = supportRefs.current.slice(0, 4).filter(Boolean)

      if (prefersReducedMotion) {
        gsap.set(
          [
            gridRef.current,
            mastheadRef.current,
            introLabelRef.current,
            chromeEntranceRef.current,
            footerRef.current,
            ...chars,
            ...supports,
          ].filter(Boolean),
          { clearProps: 'all', opacity: 1 }
        )
        return
      }

      // Signature choreographed entrance (Sequences A -> G)
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      tl.fromTo(
        gridRef.current,
        { opacity: 0, scale: 1.03 },
        { opacity: 1, scale: 1, duration: 1.0 },
        0
      )
        .fromTo(
          mastheadRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.65 },
          0.06
        )
        .fromTo(
          introLabelRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.65 },
          0.12
        )
        .fromTo(
          chars,
          { yPercent: 118, opacity: 0, filter: 'blur(8px)' },
          {
            yPercent: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.85,
            stagger: 0.022,
            ease: 'expo.out',
          },
          0.18
        )
        .fromTo(
          chromeEntranceRef.current,
          { opacity: 0, scale: 0.86, filter: 'blur(10px)' },
          {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.15,
            ease: 'power3.out',
          },
          0.26
        )
        .fromTo(
          supports,
          { opacity: 0, y: 20, filter: 'blur(4px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.75,
            stagger: 0.09,
            ease: 'power3.out',
          },
          0.58
        )
        .fromTo(
          footerRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
          0.9
        )

      // Smooth scroll-linked parallax & depth motion
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          scrollProgressRef.current = self.progress
        },
      })

      gsap.to(leftScrollRef.current, {
        y: -36,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(chromeScrollRef.current, {
        y: 44,
        scale: 0.94,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(washRef.current, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  const handlePointerMove = (e) => {
    if (prefersReducedMotion || e.pointerType !== 'mouse' || !sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    pointerNormRef.current = { x: nx, y: ny }

    if (washRef.current) {
      gsap.to(washRef.current, {
        x: nx * 24,
        y: ny * 18,
        duration: 0.9,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        x: nx * -8,
        y: ny * -8,
        duration: 1.0,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }
  }

  const handlePointerLeave = () => {
    pointerNormRef.current = { x: 0, y: 0 }
    if (washRef.current) {
      gsap.to(washRef.current, { x: 0, y: 0, duration: 0.9, ease: 'power2.out', overwrite: 'auto' })
    }
    if (gridRef.current) {
      gsap.to(gridRef.current, { x: 0, y: 0, duration: 1.0, ease: 'power2.out', overwrite: 'auto' })
    }
  }

  let runningCharIdx = 0

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Introduction"
      className={styles.heroSection}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Swiss Grid & Soft Iridescent Optical Atmosphere */}
      <div className={styles.backdropLayer} aria-hidden="true">
        <div ref={gridRef} className={styles.swissGrid} />
        <div ref={washRef} className={styles.iridescentWash} />
        <div className={styles.cobaltAccentGlow} />
      </div>

      {/* Main Asymmetrical Editorial Composition */}
      <div className={styles.heroContainer}>
        {/* Top Masthead + Availability Indicator */}
        <div ref={mastheadRef} className={styles.mastheadBar}>
          <span className={styles.mastheadIndex}>
            00 / Digital Craftsmanship — Edition 2026
          </span>

          <div className={styles.availabilityBadge}>
            <span className={styles.statusPulseWrap} aria-hidden="true">
              <span className={styles.statusRing} />
              <span className={styles.statusDot} />
            </span>
            <span className={styles.availabilityText}>
              Available for New Opportunities
            </span>
          </div>
        </div>

        {/* Asymmetrical Split Content */}
        <div className={styles.heroGrid}>
          {/* LEFT EDITORIAL COLUMN */}
          <div ref={leftScrollRef} className={styles.leftColumn}>
            {/* Introductory Label */}
            <div ref={introLabelRef} className={styles.introLabel}>
              <span className={styles.introRule} aria-hidden="true" />
              <span className={styles.introText}>
                Independent Software Engineer
              </span>
            </div>

            {/* Oversized Kinetic Split-Text Headline */}
            <h1 className={styles.heroTitle}>
              <span className={styles.srOnly}>THINK. DESIGN. ENGINEER.</span>

              {HEADLINE_WORDS.map((wordObj, wordIdx) => {
                const chars = (wordObj.text + wordObj.accent).split('')
                return (
                  <span key={wordObj.text} className={styles.titleLine} aria-hidden="true">
                    {chars.map((char, cIdx) => {
                      const flatIndex = runningCharIdx++
                      const isDot = char === '.'
                      return (
                        <span key={`${wordIdx}-${cIdx}`} className={styles.wordMask}>
                          <span
                            ref={(el) => {
                              charRefs.current[flatIndex] = el
                            }}
                            className={`${styles.wordInner} ${
                              isDot ? styles.cobaltDot : ''
                            }`}
                          >
                            {char}
                          </span>
                        </span>
                      )
                    })}
                  </span>
                )
              })}
            </h1>

            {/* Dynamic Secondary Statement */}
            <div
              ref={(el) => {
                supportRefs.current[0] = el
              }}
              className={styles.statementRow}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              aria-label={`Focus: ${ROTATING_STATEMENTS.join(' ')}`}
            >
              <span className={styles.statementIndex} aria-hidden="true">
                {String(statementIdx + 1).padStart(2, '0')}
              </span>
              <span className={styles.statementDivider} aria-hidden="true" />
              <div className={styles.statementViewport} aria-live="off">
                <AnimatePresence initial={false}>
                  <motion.span
                    key={ROTATING_STATEMENTS[statementIdx]}
                    className={styles.statementItem}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { y: '105%', opacity: 0, filter: 'blur(5px)' }
                    }
                    animate={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { y: '0%', opacity: 1, filter: 'blur(0px)' }
                    }
                    exit={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { y: '-105%', opacity: 0, filter: 'blur(5px)' }
                    }
                    transition={{
                      duration: prefersReducedMotion ? 0.15 : 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {ROTATING_STATEMENTS[statementIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Positioning & Supporting Intro */}
            <p
              ref={(el) => {
                supportRefs.current[1] = el
              }}
              className={styles.leadCopy}
            >
              I&apos;m Ishthiyaq — I turn complex ideas into meaningful digital
              experiences.
            </p>

            <p
              ref={(el) => {
                supportRefs.current[2] = el
              }}
              className={styles.supportCopy}
            >
              Building intelligent applications, scalable platforms and products
              that make a difference.
            </p>

            {/* Primary & Secondary Magnetic CTAs */}
            <div
              ref={(el) => {
                supportRefs.current[3] = el
              }}
              className={styles.ctaRow}
            >
              <MagneticButton
                href="#projects"
                className={styles.ctaPrimary}
                ariaLabel="Explore My Work — View featured engineering projects"
              >
                <span>Explore My Work</span>
                <span className={styles.ctaPrimaryIcon} aria-hidden="true">
                  <ArrowRight size={15} strokeWidth={2.1} />
                </span>
              </MagneticButton>

              <MagneticButton
                href="/cv.pdf"
                download
                className={styles.ctaSecondary}
                ariaLabel="Download CV as PDF"
              >
                <span className={styles.ctaSecondaryIcon} aria-hidden="true">
                  <Download size={14} strokeWidth={2} />
                </span>
                <span>Download CV</span>
              </MagneticButton>
            </div>
          </div>

          {/* RIGHT 3D LIQUID CHROME SCULPTURE */}
          <div ref={chromeScrollRef} className={styles.rightColumn}>
            <div ref={chromeEntranceRef} className={styles.chromeVisualStage}>
              <LiquidChromeCanvas
                pointerNormRef={pointerNormRef}
                scrollProgressRef={scrollProgressRef}
                prefersReducedMotion={Boolean(prefersReducedMotion)}
              />
              <div className={styles.chromeCaption} aria-hidden="true">
                <span className={styles.chromeCaptionDot} />
                <span>WebGL // Iridescent Form 01</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Swiss Footer Bar */}
        <div ref={footerRef} className={styles.heroFooter}>
          <span className={styles.footerMeta}>
            Ishthiyaq Ahamed · BSc (Hons) Software Engineering · Colombo
          </span>
          <a
            href="#about"
            className={styles.scrollCue}
            aria-label="Scroll down to About section"
          >
            <span>Scroll to Explore</span>
            <span className={styles.scrollCueLine} aria-hidden="true">
              <span className={styles.scrollCueRunner} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
