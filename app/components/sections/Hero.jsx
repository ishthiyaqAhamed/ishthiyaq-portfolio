'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import MagneticButton from './hero/MagneticButton'
import styles from './hero/Hero.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const FIRST_NAME_CHARS = 'ISHTHIYAQ'.split('')
const LAST_NAME_CHARS = 'AHAMED'.split('')

const IDENTITY_STATEMENTS = [
  'Building Digital Experiences.',
  'Engineering Scalable Applications.',
  'Turning Ideas Into Products.',
]

const EASE_MASK = [0.22, 1, 0.36, 1]

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [statementIdx, setStatementIdx] = useState(0)

  const sectionRef = useRef(null)
  const registerLineRef = useRef(null)

  const signatureWrapRef = useRef(null)
  const signaturePathRef = useRef(null)

  const firstLineScrollRef = useRef(null)
  const lastLineScrollRef = useRef(null)
  const firstLineMouseRef = useRef(null)
  const lastLineMouseRef = useRef(null)
  const firstCharsRef = useRef([])
  const lastCharsRef = useRef([])

  const bandRuleTopRef = useRef(null)
  const bandRuleBottomRef = useRef(null)
  const roleSliderRef = useRef(null)
  const roleTagRef = useRef(null)

  const lowerLeftRef = useRef(null)
  const lowerRightRef = useRef(null)

  const quickMoveRef = useRef({
    firstX: null,
    firstY: null,
    lastX: null,
    lastY: null,
  })

  // Cycle between secondary identity statements with zero layout shift
  useEffect(() => {
    if (prefersReducedMotion) return
    const timer = setTimeout(() => {
      setStatementIdx((prev) => (prev + 1) % IDENTITY_STATEMENTS.length)
    }, 3600)
    return () => clearTimeout(timer)
  }, [prefersReducedMotion, statementIdx])

  // Choreographed GSAP Identity Entrance + Mouse QuickTo + Scroll Depth
  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const firstChars = firstCharsRef.current
        .slice(0, FIRST_NAME_CHARS.length)
        .filter(Boolean)
      const lastChars = lastCharsRef.current
        .slice(0, LAST_NAME_CHARS.length)
        .filter(Boolean)

      if (prefersReducedMotion) {
        gsap.set(
          [
            registerLineRef.current,
            signatureWrapRef.current,
            bandRuleTopRef.current,
            bandRuleBottomRef.current,
            roleSliderRef.current,
            roleTagRef.current,
            lowerLeftRef.current,
            lowerRightRef.current,
            ...firstChars,
            ...lastChars,
          ].filter(Boolean),
          {
            clearProps: 'all',
            opacity: 1,
            clipPath: 'none',
            scaleX: 1,
            scaleY: 1,
          }
        )
        if (signaturePathRef.current) {
          gsap.set(signaturePathRef.current, { strokeDashoffset: 0 })
        }
        return
      }

      // Initial concealed composition on minimal black canvas
      gsap.set(registerLineRef.current, { scaleY: 0 })

      gsap.set(signatureWrapRef.current, {
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0,
      })
      if (signaturePathRef.current) {
        gsap.set(signaturePathRef.current, {
          strokeDasharray: 1,
          strokeDashoffset: 1,
        })
      }

      gsap.set([...firstChars, ...lastChars], {
        yPercent: 118,
        clipPath: 'inset(0 0 100% 0)',
        opacity: 0,
        scale: 0.94,
        '--char-wght': 400,
      })

      gsap.set([bandRuleTopRef.current, bandRuleBottomRef.current], { scaleX: 0 })
      gsap.set(roleSliderRef.current, {
        xPercent: 28,
        scale: 1.42,
        clipPath: 'inset(0 0 0 100%)',
        opacity: 0.4,
        '--role-ls': '0.16em',
      })
      gsap.set(roleTagRef.current, { opacity: 0, x: 12 })
      gsap.set([lowerLeftRef.current, lowerRightRef.current], {
        opacity: 0,
        y: 18,
      })

      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      // 1. Minimal Black Canvas -> Handwritten "Hello, stranger." signature stroke
      tl.to(
        registerLineRef.current,
        { scaleY: 1, duration: 1.15, ease: 'power3.inOut' },
        0.04
      )
        .to(
          signatureWrapRef.current,
          {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 0.85,
            ease: 'power3.inOut',
          },
          0.08
        )
        .to(
          signaturePathRef.current,
          {
            strokeDashoffset: 0,
            duration: 0.72,
            ease: 'power2.inOut',
          },
          0.24
        )

      // 2. Choreographed Variable-Font Name Reveal: ISHTHIYAQ (L->R) & AHAMED (R->L)
      tl.to(
        firstChars,
        {
          yPercent: 0,
          clipPath: 'inset(0 0 0% 0)',
          opacity: 1,
          scale: 1,
          '--char-wght': 800,
          duration: 0.96,
          stagger: { each: 0.028, from: 'start' },
          ease: 'expo.out',
        },
        0.38
      ).to(
        lastChars,
        {
          yPercent: 0,
          clipPath: 'inset(0 0 0% 0)',
          opacity: 1,
          scale: 1,
          '--char-wght': 500,
          duration: 0.96,
          stagger: { each: 0.032, from: 'end' },
          ease: 'expo.out',
        },
        0.56
      )

      // 3. Horizontal Clipping-Window Role Reveal (Oversized sweep -> locked rest)
      tl.to(
        bandRuleTopRef.current,
        { scaleX: 1, duration: 0.88, ease: 'power3.out' },
        0.78
      )
        .to(
          bandRuleBottomRef.current,
          { scaleX: 1, duration: 0.88, ease: 'power3.out' },
          0.84
        )
        .to(
          roleSliderRef.current,
          {
            xPercent: 0,
            scale: 1,
            clipPath: 'inset(0 0 0 0%)',
            opacity: 1,
            '--role-ls': '0em',
            duration: 1.08,
            ease: 'expo.out',
          },
          0.9
        )
        .to(
          roleTagRef.current,
          { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' },
          1.12
        )

      // 4. Supporting Statements, Intro & Magnetic CTAs
      tl.to(
        lowerLeftRef.current,
        { opacity: 1, y: 0, duration: 0.78, ease: 'power3.out' },
        1.16
      ).to(
        lowerRightRef.current,
        { opacity: 1, y: 0, duration: 0.78, ease: 'power3.out' },
        1.26
      )

      // 5. Ultra-subtle 60fps mouse-responsive typography tracks
      quickMoveRef.current = {
        firstX: gsap.quickTo(firstLineMouseRef.current, 'x', {
          duration: 0.75,
          ease: 'power3.out',
        }),
        firstY: gsap.quickTo(firstLineMouseRef.current, 'y', {
          duration: 0.75,
          ease: 'power3.out',
        }),
        lastX: gsap.quickTo(lastLineMouseRef.current, 'x', {
          duration: 0.75,
          ease: 'power3.out',
        }),
        lastY: gsap.quickTo(lastLineMouseRef.current, 'y', {
          duration: 0.75,
          ease: 'power3.out',
        }),
      }

      // 6. Scroll-linked typographic transition toward #about
      gsap.to(firstLineScrollRef.current, {
        x: -22,
        y: -16,
        opacity: 0.72,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(lastLineScrollRef.current, {
        x: 22,
        y: -8,
        opacity: 0.72,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => {
      quickMoveRef.current = {
        firstX: null,
        firstY: null,
        lastX: null,
        lastY: null,
      }
      ctx.revert()
    }
  }, [prefersReducedMotion])

  const handlePointerMove = (e) => {
    if (prefersReducedMotion || e.pointerType !== 'mouse' || !sectionRef.current) {
      return
    }
    const { firstX, firstY, lastX, lastY } = quickMoveRef.current
    if (!firstX || !lastX) return

    const rect = sectionRef.current.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2

    firstX(nx * 10)
    firstY(ny * 4)
    lastX(-nx * 12)
    lastY(-ny * 3.5)
  }

  const handlePointerLeave = () => {
    const { firstX, firstY, lastX, lastY } = quickMoveRef.current
    if (!firstX || !lastX) return
    firstX(0)
    firstY(0)
    lastX(0)
    lastY(0)
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Introduction"
      className={styles.heroSection}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Restrained Dark Studio Depth */}
      <div className={styles.backdropLayer} aria-hidden="true">
        <div className={styles.tonalLight} />
        <div ref={registerLineRef} className={styles.registerLine} />
        <div className={styles.grainTexture} />
      </div>

      {/* Main Editorial Identity Container */}
      <div className={styles.heroContainer}>
        {/* Centerpiece Kinetic Typography Stage */}
        <div className={styles.identityStage}>
          {/* Personal Handwritten Signature Intro */}
          <div ref={signatureWrapRef} className={styles.signatureRow}>
            <span className={styles.signatureMask}>
              <span className={styles.signatureText}>Hello, World.</span>
            </span>
            <svg
              viewBox="0 0 180 12"
              className={styles.signatureStrokeSvg}
              aria-hidden="true"
            >
              <path
                ref={signaturePathRef}
                pathLength="1"
                strokeDasharray="1"
                d="M 2 9 C 48 2, 118 3, 176 7"
                className={styles.signaturePath}
              />
            </svg>
          </div>

          {/* Dominant Asymmetric Name Typography */}
          <h1 className={styles.heroTitle}>
            <span className={styles.srOnly}>ISHTHIYAQ AHAMED</span>

            <span
              ref={firstLineScrollRef}
              className={`${styles.nameTrack} ${styles.firstNameLine}`}
              aria-hidden="true"
            >
              <span ref={firstLineMouseRef} className={styles.nameTrack}>
                {FIRST_NAME_CHARS.map((char, idx) => (
                  <span key={`first-${idx}`} className={styles.charMask}>
                    <span
                      ref={(el) => {
                        firstCharsRef.current[idx] = el
                      }}
                      className={styles.charInner}
                    >
                      {char}
                    </span>
                  </span>
                ))}
              </span>
            </span>

            <span
              ref={lastLineScrollRef}
              className={`${styles.nameTrack} ${styles.lastNameLine}`}
              aria-hidden="true"
            >
              <span ref={lastLineMouseRef} className={styles.nameTrack}>
                {LAST_NAME_CHARS.map((char, idx) => (
                  <span key={`last-${idx}`} className={styles.charMask}>
                    <span
                      ref={(el) => {
                        lastCharsRef.current[idx] = el
                      }}
                      className={styles.charInner}
                    >
                      {char}
                    </span>
                  </span>
                ))}
              </span>
            </span>
          </h1>

          {/* Horizontal Clipping-Window Role Reveal */}
          <div className={styles.roleBand}>
            <span
              ref={bandRuleTopRef}
              className={styles.bandRuleTop}
              aria-hidden="true"
            />

            <div className={styles.roleAperture}>
              <div ref={roleSliderRef} className={styles.roleSlider}>
                <span className={styles.roleAccentBar} aria-hidden="true" />
                <h2 className={styles.roleTitle}>FULL STACK SOFTWARE ENGINEER</h2>
              </div>
            </div>

            <span
              ref={bandRuleBottomRef}
              className={styles.bandRuleBottom}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Lower Asymmetric Editorial Narrative & Magnetic CTAs */}
        <div className={styles.lowerEditorialGrid}>
          <div ref={lowerLeftRef} className={styles.narrativeColumn}>
            {/* Masked Vertical Transition Between Identity Statements */}
            <div className={styles.statementModule}>
              <div className={styles.statementWindow} aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={statementIdx}
                    className={styles.statementText}
                    initial={
                      prefersReducedMotion
                        ? false
                        : {
                            y: '100%',
                            clipPath: 'inset(0 0 100% 0)',
                            opacity: 0,
                          }
                    }
                    animate={{
                      y: '0%',
                      clipPath: 'inset(0 0 0% 0)',
                      opacity: 1,
                    }}
                    exit={
                      prefersReducedMotion
                        ? undefined
                        : {
                            y: '-100%',
                            clipPath: 'inset(100% 0 0 0)',
                            opacity: 0,
                          }
                    }
                    transition={{ duration: 0.28, ease: EASE_MASK }}
                  >
                    {IDENTITY_STATEMENTS[statementIdx]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div
                className={styles.statementControls}
                role="tablist"
                aria-label="Identity statements"
              >
                {IDENTITY_STATEMENTS.map((stmt, idx) => (
                  <button
                    key={stmt}
                    type="button"
                    role="tab"
                    aria-selected={statementIdx === idx}
                    aria-label={stmt}
                    onClick={() => setStatementIdx(idx)}
                    className={`${styles.statementStepBtn} ${
                      statementIdx === idx ? styles.statementStepBtnActive : ''
                    }`}
                  >
                    <span>0{idx + 1}</span>
                    <span className={styles.stepBar} aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>

            <p className={styles.introCopy}>
              Hey, I&apos;m Ishthiyaq. I build digital experiences and engineer
              solutions to real-world problems.
            </p>
          </div>

          <div ref={lowerRightRef} className={styles.actionsColumn}>
            <div className={styles.ctaGroup}>
              <MagneticButton
                href="#projects"
                className={`${styles.ctaPrimary} luxury-btn`}
                ariaLabel="Explore My Work — View engineering projects"
              >
                <span>Explore My Work</span>
                <span className={styles.ctaPrimaryIcon} aria-hidden="true">
                  <ArrowRight size={14} strokeWidth={2.2} />
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
        </div>
      </div>
    </section>
  )
}
