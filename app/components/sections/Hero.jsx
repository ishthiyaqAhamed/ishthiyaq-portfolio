'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import Particles from './hero/Particles'
import MagneticButton from './hero/MagneticButton'
import styles from './hero/Hero.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const FIRST_NAME = 'ISHTHIYAQ'.split('')
const LAST_NAME = 'AHAMED.'.split('')
const PARTICLE_COLORS = ['#ffffff', '#d4d4d8', '#71717a', '#52525b']

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [particleCount, setParticleCount] = useState(104)

  const sectionRef = useRef(null)
  const studioLightRef = useRef(null)
  const planesRef = useRef(null)
  const gridRef = useRef(null)
  const particlesWrapRef = useRef(null)
  const topMetaRef = useRef(null)
  const scriptRef = useRef(null)
  const line1ScrollRef = useRef(null)
  const line2ScrollRef = useRef(null)
  const roleRef = useRef(null)
  const descRef = useRef(null)
  const bottomRowRef = useRef(null)

  const firstCharsRef = useRef([])
  const lastCharsRef = useRef([])

  // Reduce particle density smoothly on mobile / tablet viewports
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const syncDensity = () => setParticleCount(mq.matches ? 52 : 104)
    syncDensity()
    mq.addEventListener('change', syncDensity)
    return () => mq.removeEventListener('change', syncDensity)
  }, [])

  // Choreographed black-screen-to-poster GSAP reveal + subtle scroll parallax
  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const firstChars = firstCharsRef.current.slice(0, FIRST_NAME.length).filter(Boolean)
      const lastChars = lastCharsRef.current.slice(0, LAST_NAME.length).filter(Boolean)

      if (prefersReducedMotion) {
        gsap.set(
          [
            studioLightRef.current,
            planesRef.current,
            gridRef.current,
            particlesWrapRef.current,
            topMetaRef.current,
            scriptRef.current,
            roleRef.current,
            descRef.current,
            bottomRowRef.current,
            ...firstChars,
            ...lastChars,
          ].filter(Boolean),
          { clearProps: 'all', opacity: 1, clipPath: 'none' }
        )
        return
      }

      // Start from dark canvas: hold typography & particles hidden until their cue
      gsap.set(
        [
          studioLightRef.current,
          planesRef.current,
          gridRef.current,
          particlesWrapRef.current,
          topMetaRef.current,
          roleRef.current,
          descRef.current,
          bottomRowRef.current,
        ].filter(Boolean),
        { opacity: 0 }
      )
      gsap.set(scriptRef.current, {
        opacity: 0,
        clipPath: 'inset(0 100% 0 0)',
        y: 8,
      })
      gsap.set([...firstChars, ...lastChars], {
        yPercent: 112,
        opacity: 0,
        filter: 'blur(6px)',
      })

      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      // 1 & 2. Black canvas -> subtle top meta & handwritten script stroke-wipe
      tl.to(
        topMetaRef.current,
        { opacity: 1, duration: 0.7, ease: 'power2.out' },
        0.12
      )
        .to(
          scriptRef.current,
          {
            opacity: 1,
            clipPath: 'inset(0 0% 0 0)',
            y: 0,
            duration: 0.9,
            ease: 'power3.inOut',
          },
          0.18
        )
        // 3. Dramatic vertical mask reveal for ISHTHIYAQ
        .to(
          firstChars,
          {
            yPercent: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.024,
            ease: 'expo.out',
          },
          0.46
        )
        // 4. Staggered vertical mask reveal for AHAMED.
        .to(
          lastChars,
          {
            yPercent: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.026,
            ease: 'expo.out',
          },
          0.66
        )
        // 5. Reveal architectural textures + professional title
        .to(
          [studioLightRef.current, planesRef.current, gridRef.current].filter(Boolean),
          { opacity: 1, duration: 1.2, ease: 'power2.out' },
          0.85
        )
        .fromTo(
          roleRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
          0.98
        )
        // 6. Reveal description & CTAs
        .fromTo(
          descRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
          1.1
        )
        .fromTo(
          bottomRowRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
          1.22
        )
        // 7. Gradually reveal React Bits Particles behind the typography
        .to(
          particlesWrapRef.current,
          { opacity: 1, duration: 1.4, ease: 'power2.out' },
          1.32
        )

      // Subtle scroll-linked parallax on the monumental name lines without losing readability
      gsap.to(line1ScrollRef.current, {
        x: -22,
        y: -18,
        opacity: 0.78,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(line2ScrollRef.current, {
        x: 22,
        y: -10,
        opacity: 0.78,
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

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Introduction"
      className={styles.heroSection}
    >
      {/* Textured Black Architectural Layers + WebGL2 Particles */}
      <div className={styles.backdropLayer} aria-hidden="true">
        <div ref={studioLightRef} className={styles.studioLight} />
        <div ref={planesRef} className={styles.architecturalPlanes} />
        <div className={styles.abstractMonolith} />
        <div ref={gridRef} className={styles.hairlineGrid} />

        <div ref={particlesWrapRef} className={styles.particlesWrap}>
          <Particles
            particleColors={PARTICLE_COLORS}
            particleCount={particleCount}
            particleSpread={10}
            speed={prefersReducedMotion ? 0.01 : 0.075}
            particleBaseSize={46}
            sizeRandomness={0.85}
            cameraDistance={22}
            moveParticlesOnHover={!prefersReducedMotion}
            hoverEffect="parallax"
            particleHoverFactor={0.55}
            alphaParticles={true}
            glow={0.12}
            twinkle={0.1}
            connections={false}
            clickBurst={false}
            drift="up"
            driftSpeed={0.22}
            intro={!prefersReducedMotion}
            opacity={0.46}
          />
        </div>

        <div className={styles.grainOverlay} />
        <div className={styles.vignetteOverlay} />
      </div>

      {/* Foreground Editorial Composition */}
      <div className={styles.heroContainer}>
        {/* Top Metadata + Availability Bar */}
        <div ref={topMetaRef} className={styles.heroTopMeta}>
          <span className={styles.metaCoord}>
            00 // Software Engineering Portfolio — Edition 2026
          </span>

          <div className={styles.metaAvailability}>
            <span className={styles.metaPulse} aria-hidden="true" />
            <span className={styles.metaStatusText}>
              Available for New Opportunities · Colombo
            </span>
          </div>
        </div>

        {/* Central Monumental Typography Block */}
        <div className={styles.posterCenter}>
          <div ref={scriptRef} className={styles.handwrittenWrap}>
            <span className={styles.handwrittenText}>
              Hello, I&apos;m a creative engineer
            </span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.srOnly}>ISHTHIYAQ AHAMED.</span>

            <span
              ref={line1ScrollRef}
              className={`${styles.nameLineScroll} ${styles.nameLine}`}
              aria-hidden="true"
            >
              {FIRST_NAME.map((char, idx) => (
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

            <span
              ref={line2ScrollRef}
              className={`${styles.nameLineScroll} ${styles.nameLine} ${styles.nameLineSecond}`}
              aria-hidden="true"
            >
              {LAST_NAME.map((char, idx) => (
                <span key={`last-${idx}`} className={styles.charMask}>
                  <span
                    ref={(el) => {
                      lastCharsRef.current[idx] = el
                    }}
                    className={`${styles.charInner} ${
                      char === '.' ? styles.nameDot : ''
                    }`}
                  >
                    {char}
                  </span>
                </span>
              ))}
            </span>
          </h1>

          {/* Secondary Role Title + Editorial Introduction */}
          <div className={styles.editorialMetaRow}>
            <div ref={roleRef} className={styles.roleBlock}>
              <div className={styles.roleRow}>
                <span className={styles.roleRule} aria-hidden="true" />
                <h2 className={styles.roleTitle}>FULL STACK SOFTWARE ENGINEER</h2>
              </div>
              <span className={styles.roleSubnote}>
                MERN Stack · Next.js · Cloud Architecture · SaaS Systems
              </span>
            </div>

            <p ref={descRef} className={styles.introCopy}>
              I design and engineer digital experiences, scalable applications
              and intelligent software solutions.
            </p>
          </div>
        </div>

        {/* Bottom Action Row + Scroll Indicator */}
        <div ref={bottomRowRef} className={styles.heroBottomRow}>
          <div className={styles.ctaGroup}>
            <MagneticButton
              href="#projects"
              className={styles.ctaPrimary}
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

          <a
            href="#about"
            className={styles.scrollCue}
            aria-label="Scroll down to About section"
          >
            <span>Scroll to Explore</span>
            <ArrowDown size={13} strokeWidth={2} aria-hidden="true" />
            <span className={styles.scrollTrack} aria-hidden="true">
              <span className={styles.scrollRunner} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
