'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
  Phone,
  X,
} from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import MagneticButton from './hero/MagneticButton'
import styles from './hero/Hero.module.css'

const EASE_EDITORIAL = [0.22, 1, 0.36, 1]

const FEATURED_BUILDS = {
  novaflow: {
    id: 'novaflow',
    name: 'NovaFlow',
    urlLabel: 'novaflowpro.online',
    live: 'https://novaflowpro.online',
    image: '/projects/novaflow.png',
    stack: 'Next.js · Supabase · GPT-4o',
    alt: 'NovaFlow multi-tenant SaaS CRM dashboard interface',
  },
  pharmacy: {
    id: 'pharmacy',
    name: 'Pharmacy ERP',
    urlLabel: 'pharmacy-erp-lime.vercel.app',
    live: 'https://pharmacy-erp-lime.vercel.app/',
    image: '/projects/pharmacy-erp.png',
    stack: 'React · Node.js · MongoDB',
    alt: 'Pharmacy Enterprise ERP multi-branch management dashboard',
  },
  gemotions: {
    id: 'gemotions',
    name: 'Gemotions',
    urlLabel: 'gemotions.shop',
    live: 'https://gemotions.shop/',
    image: '/projects/gemotions.png',
    stack: 'React · Express · MongoDB',
    alt: 'Gemotions certified gemstones and jewelry commerce storefront',
  },
}

const clockSubscribers = new Set()
let clockInterval = null

function getColomboClockSnapshot() {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Colombo',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date())
}

function subscribeColomboClock(callback) {
  clockSubscribers.add(callback)
  if (!clockInterval && typeof window !== 'undefined') {
    clockInterval = setInterval(() => {
      clockSubscribers.forEach((cb) => cb())
    }, 15000)
  }
  return () => {
    clockSubscribers.delete(callback)
    if (clockSubscribers.size === 0 && clockInterval) {
      clearInterval(clockInterval)
      clockInterval = null
    }
  }
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const colomboTime = useSyncExternalStore(
    subscribeColomboClock,
    getColomboClockSnapshot,
    () => ''
  )

  const sectionRef = useRef(null)
  const portraitCardRef = useRef(null)
  const glintLayerRef = useRef(null)
  const copyTimerRef = useRef(null)

  const [hoveredBuild, setHoveredBuild] = useState(null)
  const [mobileSelectedBuild, setMobileSelectedBuild] = useState(null)
  const [copiedEmail, setCopiedEmail] = useState(false)

  // Scroll-linked subtle depth parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const leftColumnY = useTransform(scrollYProgress, [0, 1], [0, -28])
  const portraitParallaxY = useTransform(scrollYProgress, [0, 1], [0, 26])
  const portraitScrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.965])

  // Portrait 3D spring tilt & optical depth shift
  const tiltXRaw = useMotionValue(0)
  const tiltYRaw = useMotionValue(0)
  const photoShiftXRaw = useMotionValue(0)
  const photoShiftYRaw = useMotionValue(0)

  const tiltX = useSpring(tiltXRaw, { stiffness: 190, damping: 24, mass: 0.6 })
  const tiltY = useSpring(tiltYRaw, { stiffness: 190, damping: 24, mass: 0.6 })
  const photoShiftX = useSpring(photoShiftXRaw, { stiffness: 170, damping: 26 })
  const photoShiftY = useSpring(photoShiftYRaw, { stiffness: 170, damping: 26 })

  // Cursor-following live preview physics with velocity tilt
  const previewXRaw = useMotionValue(-400)
  const previewYRaw = useMotionValue(-400)
  const previewX = useSpring(previewXRaw, { stiffness: 360, damping: 32, mass: 0.5 })
  const previewY = useSpring(previewYRaw, { stiffness: 360, damping: 32, mass: 0.5 })
  const previewVelX = useVelocity(previewX)
  const smoothVelX = useSpring(previewVelX, { stiffness: 240, damping: 28 })
  const previewRotate = useTransform(smoothVelX, [-950, 0, 950], [-4.5, 0, 4.5])

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current)
      }
    }
  }, [])

  const updatePreviewCoords = (clientX, clientY) => {
    if (prefersReducedMotion || typeof window === 'undefined') return
    const targetX = Math.min(Math.max(clientX + 24, 16), window.innerWidth - 316)
    const targetY = Math.max(82, Math.min(clientY - 196, window.innerHeight - 256))
    previewXRaw.set(targetX)
    previewYRaw.set(targetY)
  }

  const handleSectionPointerMove = (e) => {
    if (prefersReducedMotion || e.pointerType !== 'mouse') return
    updatePreviewCoords(e.clientX, e.clientY)
  }

  const handlePortraitPointerMove = (e) => {
    if (prefersReducedMotion || e.pointerType !== 'mouse' || !portraitCardRef.current) {
      return
    }
    const rect = portraitCardRef.current.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width
    const ny = (e.clientY - rect.top) / rect.height
    const centeredX = (nx - 0.5) * 2
    const centeredY = (ny - 0.5) * 2

    tiltXRaw.set(-centeredY * 3.2)
    tiltYRaw.set(centeredX * 3.4)
    photoShiftXRaw.set(-centeredX * 7)
    photoShiftYRaw.set(-centeredY * 6)

    if (glintLayerRef.current) {
      glintLayerRef.current.style.setProperty('--glint-x', `${(nx * 100).toFixed(1)}%`)
      glintLayerRef.current.style.setProperty('--glint-y', `${(ny * 100).toFixed(1)}%`)
      glintLayerRef.current.style.setProperty('--glint-opacity', '1')
    }
  }

  const handlePortraitPointerLeave = () => {
    tiltXRaw.set(0)
    tiltYRaw.set(0)
    photoShiftXRaw.set(0)
    photoShiftYRaw.set(0)
    if (glintLayerRef.current) {
      glintLayerRef.current.style.setProperty('--glint-opacity', '0')
    }
  }

  const handleBuildHoverStart = (buildKey, e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 960) return
    if (e && typeof e.clientX === 'number' && typeof e.clientY === 'number' && e.clientX > 0) {
      updatePreviewCoords(e.clientX, e.clientY)
    } else if (e?.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect()
      updatePreviewCoords(rect.left + rect.width * 0.5, rect.top)
    }
    setHoveredBuild(FEATURED_BUILDS[buildKey])
  }

  const handleBuildHoverEnd = () => {
    setHoveredBuild(null)
  }

  const handleBuildClick = (buildKey) => {
    const build = FEATURED_BUILDS[buildKey]
    if (!build) return

    const isCompactViewport = typeof window !== 'undefined' && window.innerWidth <= 960
    const isTouchPointer =
      typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

    if (isCompactViewport || isTouchPointer) {
      setMobileSelectedBuild((prev) => (prev?.id === build.id ? null : build))
      return
    }

    window.open(build.live, '_blank', 'noopener,noreferrer')
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('Ishthiyaqahamed@gmail.com')
      setCopiedEmail(true)
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current)
      }
      copyTimerRef.current = setTimeout(() => {
        setCopiedEmail(false)
      }, 2200)
    } catch {
      window.location.href = 'mailto:Ishthiyaqahamed@gmail.com'
    }
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Introduction"
      className={styles.heroSection}
      onPointerMove={handleSectionPointerMove}
      onPointerLeave={() => setHoveredBuild(null)}
    >
      {/* Subtle Photographic Studio Backdrop */}
      <div className={styles.atmosphereLayer} aria-hidden="true">
        <div className={styles.studioWash} />
        <div className={styles.filmGrain} />
      </div>

      {/* Main Split Editorial Layout */}
      <div className={styles.heroContainer}>
        <div className={styles.splitGrid}>
          {/* Left Column: Authentic Voice & Kinetic Typography */}
          <motion.div
            className={styles.leftColumn}
            style={prefersReducedMotion ? undefined : { y: leftColumnY }}
          >
            {/* Identity & Local Time Strip */}
            <motion.div
              className={styles.identityRow}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: EASE_EDITORIAL }}
            >
              <span className={styles.identityRule} aria-hidden="true" />
              <span className={styles.identityName}>Full-Stack Software Engineer</span>
              <span className={styles.identitySep} aria-hidden="true">
                ·
              </span>
              <span className={styles.identityMeta}>
                Colombo, Sri Lanka{colomboTime ? ` · ${colomboTime} IST` : ''}
              </span>
            </motion.div>

            {/* Baseline-Masked Headline */}
            <h1 className={styles.heroHeadline}>
              <span className={styles.lineMask}>
                <motion.span
                  className={styles.lineInner}
                  initial={prefersReducedMotion ? false : { y: '108%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.12, ease: EASE_EDITORIAL }}
                >
                  Building software
                </motion.span>
              </span>

              <span className={styles.lineMask}>
                <motion.span
                  className={styles.lineInner}
                  initial={prefersReducedMotion ? false : { y: '108%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.21, ease: EASE_EDITORIAL }}
                >
                  people rely on
                </motion.span>
              </span>

              <span className={styles.lineMask}>
                <motion.span
                  className={`${styles.lineInner} ${styles.headlineItalic}`}
                  initial={prefersReducedMotion ? false : { y: '108%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.82, delay: 0.3, ease: EASE_EDITORIAL }}
                >
                  every single day.
                </motion.span>
              </span>
            </h1>

            {/* Human Narrative with Interactive Build Preview Triggers */}
            <motion.div
              className={styles.bioParagraph}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.42, ease: EASE_EDITORIAL }}
            >
              <p>
                I&apos;m{' '}
                <strong className={styles.bioHighlight} style={{ fontWeight: 600 }}>
                  Ishthiyaq Ahamed
                </strong>
                , a BSc (Hons) Software Engineering graduate. Lately I&apos;ve been
                shipping{' '}
                <button
                  type="button"
                  className={`${styles.projectTrigger} ${
                    hoveredBuild?.id === 'novaflow' ||
                    mobileSelectedBuild?.id === 'novaflow'
                      ? styles.projectTriggerActive
                      : ''
                  }`}
                  onMouseEnter={(e) => handleBuildHoverStart('novaflow', e)}
                  onMouseLeave={handleBuildHoverEnd}
                  onFocus={(e) => handleBuildHoverStart('novaflow', e)}
                  onBlur={handleBuildHoverEnd}
                  onClick={() => handleBuildClick('novaflow')}
                  aria-label="Preview NovaFlow live CRM application"
                >
                  <span>NovaFlow</span>
                  <span className={styles.triggerArrow} aria-hidden="true">
                    <ArrowUpRight size={13} strokeWidth={2.1} />
                  </span>
                </button>{' '}
                for SaaS sales teams, multi-branch{' '}
                <button
                  type="button"
                  className={`${styles.projectTrigger} ${
                    hoveredBuild?.id === 'pharmacy' ||
                    mobileSelectedBuild?.id === 'pharmacy'
                      ? styles.projectTriggerActive
                      : ''
                  }`}
                  onMouseEnter={(e) => handleBuildHoverStart('pharmacy', e)}
                  onMouseLeave={handleBuildHoverEnd}
                  onFocus={(e) => handleBuildHoverStart('pharmacy', e)}
                  onBlur={handleBuildHoverEnd}
                  onClick={() => handleBuildClick('pharmacy')}
                  aria-label="Preview Pharmacy ERP multi-branch web app"
                >
                  <span>Pharmacy ERP</span>
                  <span className={styles.triggerArrow} aria-hidden="true">
                    <ArrowUpRight size={13} strokeWidth={2.1} />
                  </span>
                </button>{' '}
                inventory tools, and{' '}
                <button
                  type="button"
                  className={`${styles.projectTrigger} ${
                    hoveredBuild?.id === 'gemotions' ||
                    mobileSelectedBuild?.id === 'gemotions'
                      ? styles.projectTriggerActive
                      : ''
                  }`}
                  onMouseEnter={(e) => handleBuildHoverStart('gemotions', e)}
                  onMouseLeave={handleBuildHoverEnd}
                  onFocus={(e) => handleBuildHoverStart('gemotions', e)}
                  onBlur={handleBuildHoverEnd}
                  onClick={() => handleBuildClick('gemotions')}
                  aria-label="Preview Gemotions fine jewelry storefront"
                >
                  <span>Gemotions</span>
                  <span className={styles.triggerArrow} aria-hidden="true">
                    <ArrowUpRight size={13} strokeWidth={2.1} />
                  </span>
                </button>{' '}
                — from schema design straight through live deployment.
              </p>

              <span className={styles.interactiveHint}>
                Hover any highlighted project above to inspect the live build
              </span>
            </motion.div>

            {/* Mobile / Touch Inline Preview Peek Drawer */}
            <AnimatePresence initial={false}>
              {mobileSelectedBuild && (
                <motion.div
                  key={mobileSelectedBuild.id}
                  className={styles.mobilePreviewWrap}
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, height: 0 }
                  }
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.32, ease: EASE_EDITORIAL }}
                >
                  <div className={styles.mobilePreviewCard}>
                    <div className={styles.mobilePreviewHeader}>
                      <span className={styles.mobilePreviewTitle}>
                        {mobileSelectedBuild.name}
                      </span>
                      <button
                        type="button"
                        className={styles.mobilePreviewClose}
                        onClick={() => setMobileSelectedBuild(null)}
                        aria-label="Close project preview"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className={styles.mobilePreviewImgBox}>
                      <Image
                        src={mobileSelectedBuild.image}
                        alt={mobileSelectedBuild.alt}
                        fill
                        sizes="(max-width: 960px) 100vw, 320px"
                        style={{ objectFit: 'cover', objectPosition: 'top center' }}
                      />
                    </div>
                    <div className={styles.mobilePreviewFooter}>
                      <span className={styles.mobilePreviewStack}>
                        {mobileSelectedBuild.stack}
                      </span>
                      <a
                        href={mobileSelectedBuild.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mobilePreviewVisit}
                      >
                        <span>Visit live</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Primary & Secondary CTAs */}
            <motion.div
              className={styles.ctaRow}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.54, ease: EASE_EDITORIAL }}
            >
              <MagneticButton
                href="#projects"
                className={`${styles.ctaPrimary} luxury-btn`}
                ariaLabel="Explore selected projects"
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
                  <Download size={15} strokeWidth={2} />
                </span>
                <span>Download CV</span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Column: Spatial Depth Photographic Frame */}
          <div className={styles.rightColumn}>
            <motion.div
              className={styles.portraitStage}
              style={
                prefersReducedMotion
                  ? undefined
                  : { y: portraitParallaxY, scale: portraitScrollScale }
              }
            >
              <motion.div
                ref={portraitCardRef}
                className={styles.portraitCard}
                onPointerMove={handlePortraitPointerMove}
                onPointerLeave={handlePortraitPointerLeave}
                initial={
                  prefersReducedMotion
                    ? false
                    : { clipPath: 'inset(14% 0% 14% 0% round 22px)' }
                }
                animate={{ clipPath: 'inset(0% 0% 0% 0% round 22px)' }}
                transition={{ duration: 1.05, delay: 0.08, ease: EASE_EDITORIAL }}
                style={
                  prefersReducedMotion
                    ? undefined
                    : {
                        rotateX: tiltX,
                        rotateY: tiltY,
                        transformPerspective: 1200,
                      }
                }
              >
                <motion.div
                  className={styles.portraitMedia}
                  initial={prefersReducedMotion ? false : { scale: 1.11 }}
                  animate={{ scale: 1.045 }}
                  transition={{ duration: 1.2, delay: 0.08, ease: EASE_EDITORIAL }}
                  style={
                    prefersReducedMotion
                      ? undefined
                      : { x: photoShiftX, y: photoShiftY }
                  }
                >
                  <Image
                    src="/portrait.jpg"
                    alt="Ishthiyaq Ahamed outdoors in convocation attire against blue campus buildings"
                    fill
                    priority
                    sizes="(max-width: 960px) 100vw, 46vw"
                    className={styles.portraitImage}
                  />
                </motion.div>

                <div className={styles.portraitVignette} aria-hidden="true" />
                <div
                  ref={glintLayerRef}
                  className={styles.portraitGlint}
                  aria-hidden="true"
                />

                <motion.div
                  className={styles.portraitFooter}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.56, ease: EASE_EDITORIAL }}
                >
                  <div>
                    <div className={styles.portraitCaptionPrimary}>
                      Class of &rsquo;25 · Colombo
                    </div>
                    <div className={styles.portraitCaptionSecondary}>
                      Univ. of Bedfordshire BSc (Hons)
                    </div>
                  </div>

                  <div className={styles.portraitMetrics}>
                    <div className={styles.metricBlock}>
                      <span className={styles.metricValue}>4+</span>
                      <span className={styles.metricLabel}>Shipped Apps</span>
                    </div>
                    <span className={styles.metricDivider} aria-hidden="true" />
                    <div className={styles.metricBlock}>
                      <span className={styles.metricValue}>3+ Yrs</span>
                      <span className={styles.metricLabel}>Full-Stack</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Direct Contact & Social Bar */}
        <motion.div
          className={styles.heroFooterBar}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.64, ease: EASE_EDITORIAL }}
        >
          <div className={styles.directContacts}>
            <button
              type="button"
              className={styles.contactAction}
              onClick={handleCopyEmail}
              aria-label="Copy email address Ishthiyaqahamed@gmail.com"
            >
              <span className={styles.contactActionIcon} aria-hidden="true">
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
              </span>
              <span>Ishthiyaqahamed@gmail.com</span>
              {copiedEmail && <span className={styles.copiedTag}>Copied</span>}
            </button>

            <span className={styles.contactDivider} aria-hidden="true" />

            <a
              href="tel:+94760514320"
              className={styles.contactAction}
              aria-label="Call Ishthiyaq Ahamed"
            >
              <span className={styles.contactActionIcon} aria-hidden="true">
                <Phone size={14} />
              </span>
              <span>+94 76 051 4320</span>
            </a>
          </div>

          <div className={styles.footerRight}>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/ishthiyaqAhamed"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub Profile"
              >
                <FiGithub size={15} />
              </a>
              <a
                href="https://linkedin.com/in/ishthiyaq-zakwan-4634a0231"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={15} />
              </a>
              <a
                href="mailto:Ishthiyaqahamed@gmail.com"
                className={styles.socialLink}
                aria-label="Send Email"
              >
                <Mail size={15} />
              </a>
            </div>

            <a
              href="#about"
              className={styles.scrollLink}
              aria-label="Scroll down to About section"
            >
              <span>Scroll</span>
              <span className={styles.scrollArrow} aria-hidden="true">
                <ArrowDown size={13} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Desktop 2026 Cursor-Following Live Build Preview Portal */}
      <AnimatePresence>
        {hoveredBuild && !prefersReducedMotion && (
          <motion.div
            key="cursor-build-preview"
            aria-hidden="true"
            className={styles.floatingPreview}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
            style={{
              x: previewX,
              y: previewY,
              rotate: previewRotate,
            }}
          >
            <div className={styles.floatingFrame}>
              <div className={styles.floatingChrome}>
                <span className={styles.chromeDot} />
                <span className={styles.chromeDot} />
                <span className={styles.chromeDot} />
                <span className={styles.chromeUrl}>{hoveredBuild.urlLabel}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredBuild.id}
                  className={styles.floatingViewport}
                  initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0.6 }}
                  animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: EASE_EDITORIAL }}
                >
                  <Image
                    src={hoveredBuild.image}
                    alt={hoveredBuild.alt}
                    fill
                    sizes="296px"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </motion.div>
              </AnimatePresence>

              <div className={styles.floatingCaptionBar}>
                <span className={styles.floatingTitle}>{hoveredBuild.name}</span>
                <span className={styles.floatingStack}>{hoveredBuild.stack}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
