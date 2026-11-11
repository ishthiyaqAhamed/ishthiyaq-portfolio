'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        aria-label="Primary Navigation"
        className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}
      >
        <Link href="/" className={styles.brand} aria-label="Ishthiyaq Ahamed — Home">
          <span>IA</span>
          <span className={styles.brandDot}>.</span>
        </Link>

        {/* Desktop Links */}
        <div className={styles.desktopNav}>
          <div className={styles.navLinksGroup}>
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
            <Link href="/projects" className={styles.navLink}>
              Case Studies
            </Link>
          </div>

          <span className={styles.navDivider} aria-hidden="true" />

          <div className={styles.rightCluster}>
            <div className={styles.availabilityPill}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span className={styles.availabilityLabel}>Available</span>
            </div>

            <a href="#contact" className={`${styles.ctaBtn} luxury-btn`}>
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className={styles.mobileControls}>
          <div className={styles.availabilityPill} style={{ display: 'inline-flex' }}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.availabilityLabel}>Available</span>
          </div>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className={styles.mobileDrawer}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <Link
            href="/projects"
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>

          <a
            href="#contact"
            className={`${styles.mobileCta} luxury-btn`}
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </>
  )
}
