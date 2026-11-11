'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { ArrowRight, Download, GraduationCap, Mail } from 'lucide-react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import MagneticButton from './hero/MagneticButton'
import styles from './hero/Hero.module.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const ROLES = [
  'Full Stack Software Engineer',
  'Frontend Engineer',
  'Backend Developer',
  'SaaS & Systems Developer',
]

const METRICS = [
  { value: '3+', label: 'years of engineering' },
  { value: '4+', label: 'flagship systems' },
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/ishthiyaqAhamed',
    icon: <FiGithub size={16} aria-hidden="true" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ishthiyaq-zakwan-4634a0231',
    icon: <FiLinkedin size={16} aria-hidden="true" />,
  },
  {
    label: 'Email',
    href: 'mailto:Ishthiyaqahamed@gmail.com',
    icon: <FiMail size={16} aria-hidden="true" />,
  },
]

const EASE_CINEMATIC = [0.16, 1, 0.3, 1]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)
  const [isRolePaused, setIsRolePaused] = useState(false)
  const sectionRef = useRef(null)

  const rawParallaxX = useMotionValue(0)
  const rawParallaxY = useMotionValue(0)
  const portraitX = useSpring(rawParallaxX, { stiffness: 90, damping: 24, mass: 0.8 })
  const portraitY = useSpring(rawParallaxY, { stiffness: 90, damping: 24, mass: 0.8 })

  useEffect(() => {
    if (prefersReducedMotion || isRolePaused) return
    const interval = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [prefersReducedMotion, isRolePaused])

  const handlePointerMove = (e) => {
    if (prefersReducedMotion || e.pointerType !== 'mouse' || !sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    rawParallaxX.set(nx * -10)
    rawParallaxY.set(ny * -7)
  }

  const handlePointerLeave = () => {
    rawParallaxX.set(0)
    rawParallaxY.set(0)
  }

  const instant = { duration: 0 }

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Introduction"
      className={`${styles.heroSection} ${playfair.variable}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Full-Bleed Editorial Portrait Backdrop */}
      <div className={styles.portraitBackdrop} aria-hidden="true">
        <motion.div
          className={styles.portraitFrame}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            prefersReducedMotion
              ? instant
              : { duration: 1.15, ease: EASE_CINEMATIC }
          }
          style={prefersReducedMotion ? undefined : { x: portraitX, y: portraitY }}
        >
          <Image
            src="/hero-portrait.jpg"
            alt="Ishthiyaq Ahamed — Software Engineering Graduate"
            fill
            priority
            sizes="(max-width: 960px) 100vw, 66vw"
            className={styles.portraitImg}
          />
        </motion.div>
        <div className={styles.scrimAtmosphere} />
        <div className={styles.scrimHorizontal} />
        <div className={styles.scrimVertical} />
      </div>

      {/* Foreground Editorial Composition */}
      <div className={styles.heroContainer}>
        <div className={styles.heroUpper}>
          {/* LEFT EDITORIAL COLUMN */}
          <div className={styles.leftColumn}>
            {/* Eyebrow Identity Marker */}
            <motion.div
              className={styles.eyebrowRow}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 12, filter: 'blur(4px)' }
              }
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={
                prefersReducedMotion
                  ? instant
                  : { duration: 0.6, delay: 0.12, ease: EASE_CINEMATIC }
              }
            >
              <span className={styles.eyebrowName}>| Ishthiyaq Ahamed |</span>
              <span className={styles.availabilityChip}>
                <span className={styles.statusPulseWrap} aria-hidden="true">
                  <span className={styles.statusRing} />
                  <span className={styles.statusDot} />
                </span>
                Available for Opportunities
              </span>
            </motion.div>

            {/* 2-Line Editorial Serif Headline */}
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLineMask}>
                <motion.span
                  className={styles.titleLineGold}
                  initial={
                    prefersReducedMotion
                      ? false
                      : { y: '110%', opacity: 0, filter: 'blur(6px)' }
                  }
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={
                    prefersReducedMotion
                      ? instant
                      : { duration: 0.78, delay: 0.22, ease: EASE_CINEMATIC }
                  }
                >
                  Full Stack, Cloud
                </motion.span>
              </span>

              <span className={styles.titleLineMask}>
                <motion.span
                  className={styles.titleLineWhite}
                  initial={
                    prefersReducedMotion
                      ? false
                      : { y: '110%', opacity: 0, filter: 'blur(6px)' }
                  }
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={
                    prefersReducedMotion
                      ? instant
                      : { duration: 0.78, delay: 0.34, ease: EASE_CINEMATIC }
                  }
                >
                  &amp; Systems Engineer
                </motion.span>
              </span>
            </h1>

            {/* Dynamic Role & Subcopy */}
            <motion.div
              className={styles.subcopyBlock}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 14, filter: 'blur(4px)' }
              }
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={
                prefersReducedMotion
                  ? instant
                  : { duration: 0.65, delay: 0.48, ease: EASE_CINEMATIC }
              }
              onMouseEnter={() => setIsRolePaused(true)}
              onMouseLeave={() => setIsRolePaused(false)}
            >
              <div className={styles.roleLine} aria-label={`Roles: ${ROLES.join(', ')}`}>
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
                          ? instant
                          : { duration: 0.45, ease: EASE_CINEMATIC }
                      }
                    >
                      {ROLES[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <p className={styles.availabilitySubline}>
                Engineering digital experiences &amp; scalable SaaS architectures worldwide.
              </p>
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              className={styles.ctaRow}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? instant
                  : { duration: 0.6, delay: 0.62, ease: EASE_CINEMATIC }
              }
            >
              <MagneticButton
                href="#projects"
                className={`${styles.ctaPrimary} luxury-btn`}
                ariaLabel="Explore My Work — Jump to featured projects"
              >
                <span>Explore My Work</span>
                <span className={styles.ctaPrimaryIcon} aria-hidden="true">
                  <ArrowRight size={15} strokeWidth={2.2} />
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
            </motion.div>
          </div>

          {/* RIGHT FLOATING EDITORIAL METRICS */}
          <motion.div
            className={styles.metricsColumn}
            initial={prefersReducedMotion ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
              prefersReducedMotion
                ? instant
                : { duration: 0.7, delay: 0.56, ease: EASE_CINEMATIC }
            }
          >
            {METRICS.map((item) => (
              <div key={item.label} className={styles.metricItem}>
                <span className={styles.metricValue}>{item.value}</span>
                <span className={styles.metricLabel}>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM EDITORIAL FOOTER BAR */}
        <motion.div
          className={styles.heroFooter}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? instant
              : { duration: 0.65, delay: 0.74, ease: EASE_CINEMATIC }
          }
        >
          <div className={styles.contactGroup}>
            <div className={styles.contactCard}>
              <div className={styles.contactIconCircle} aria-hidden="true">
                <Mail size={15} strokeWidth={1.7} />
              </div>
              <div className={styles.contactMeta}>
                <span className={styles.contactHeading}>Contact Information</span>
                <a href="tel:+94760514320" className={styles.contactLink}>
                  +94 76 051 4320
                </a>
                <a href="mailto:Ishthiyaqahamed@gmail.com" className={styles.contactLink}>
                  Ishthiyaqahamed@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIconCircle} aria-hidden="true">
                <GraduationCap size={15} strokeWidth={1.7} />
              </div>
              <div className={styles.contactMeta}>
                <span className={styles.contactHeading}>Qualification &amp; Base</span>
                <span className={styles.contactLine}>BSc (Hons) Software Engineering</span>
                <span className={styles.contactLine}>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          <div className={styles.socialGroup} aria-label="Social Profiles">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className={styles.socialLink}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
