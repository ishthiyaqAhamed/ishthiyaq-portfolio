'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function MagneticButton({
  href,
  download,
  className = '',
  children,
  strength = 7,
  ariaLabel,
}) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const x = useSpring(rawX, { stiffness: 320, damping: 24, mass: 0.45 })
  const y = useSpring(rawY, { stiffness: 320, damping: 24, mass: 0.45 })

  const handlePointerMove = (e) => {
    if (prefersReducedMotion || e.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    rawX.set(Math.max(-1, Math.min(1, relX)) * strength)
    rawY.set(Math.max(-1, Math.min(1, relY)) * strength)
  }

  const resetPosition = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      aria-label={ariaLabel}
      className={className}
      style={prefersReducedMotion ? undefined : { x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      onBlur={resetPosition}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.a>
  )
}

