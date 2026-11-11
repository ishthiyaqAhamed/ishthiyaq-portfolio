'use client'
import { useState, useEffect } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isLightHero, setIsLightHero] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile } = useWindowSize()

  useEffect(() => {
    const updateNavTheme = () => {
      setScrolled(window.scrollY > 40)
      const heroEl = document.getElementById('hero')
      if (heroEl) {
        setIsLightHero(heroEl.getBoundingClientRect().bottom > 84)
      } else {
        setIsLightHero(false)
      }
    }
    updateNavTheme()
    window.addEventListener('scroll', updateNavTheme, { passive: true })
    window.addEventListener('resize', updateNavTheme, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateNavTheme)
      window.removeEventListener('resize', updateNavTheme)
    }
  }, [])

  const navLinks = ['About', 'Projects', 'Skills', 'Contact']

  const navBg = isLightHero
    ? (scrolled ? 'rgba(247, 245, 240, 0.88)' : 'transparent')
    : (scrolled ? 'rgba(3, 7, 18, 0.85)' : 'transparent')

  const navBorder = isLightHero
    ? (scrolled ? '1px solid rgba(18, 19, 22, 0.08)' : '1px solid transparent')
    : (scrolled ? '1px solid rgba(212, 175, 55, 0.18)' : '1px solid transparent')

  const linkColor = isLightHero ? '#3f3f46' : '#94a3b8'
  const linkHoverColor = isLightHero ? '#1d4ed8' : '#f5d77f'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '0 20px' : '0 60px',
        height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: navBorder,
        background: navBg,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: scrolled
          ? (isLightHero ? '0 10px 30px rgba(18, 19, 22, 0.06)' : '0 10px 30px rgba(0, 0, 0, 0.5)')
          : 'none',
      }}>
        {/* Monogram */}
        <Link href="/" style={{
          fontFamily: 'var(--font-fira)', fontSize: '20px', fontWeight: 700,
          letterSpacing: '2px', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          {isLightHero ? (
            <span style={{ color: '#121316', transition: 'color 0.25s ease' }}>
              &lt;IA <span style={{ color: '#2563eb' }}>/</span>&gt;
            </span>
          ) : (
            <span style={{
              background: 'linear-gradient(135deg, #fff7d6 0%, #f5d77f 40%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
            }}>
              &lt;IA /&gt;
            </span>
          )}
        </Link>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            style={{
              background: isLightHero ? 'rgba(18, 19, 22, 0.05)' : 'rgba(212, 175, 55, 0.08)',
              border: isLightHero ? '1px solid rgba(18, 19, 22, 0.16)' : '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '10px', padding: '8px',
              color: isLightHero ? '#121316' : '#f5d77f',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.25s ease',
            }}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                fontSize: '13px', color: linkColor, textDecoration: 'none',
                letterSpacing: '1.2px', textTransform: 'uppercase', transition: 'all 0.2s ease',
                fontWeight: 500,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = linkHoverColor
                e.currentTarget.style.textShadow = isLightHero ? 'none' : '0 0 12px rgba(212, 175, 55, 0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = linkColor
                e.currentTarget.style.textShadow = 'none'
              }}>
                {item}
              </a>
            ))}

            {/* Project Blog Link */}
            <Link href="/projects" style={{
              fontSize: '13px', color: linkColor, textDecoration: 'none',
              letterSpacing: '1.2px', textTransform: 'uppercase', transition: 'all 0.2s ease',
              fontWeight: 500,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = linkHoverColor
              e.currentTarget.style.textShadow = isLightHero ? 'none' : '0 0 12px rgba(212, 175, 55, 0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = linkColor
              e.currentTarget.style.textShadow = 'none'
            }}>
              Project Case Studies
            </Link>

            {/* Primary Navbar CTA */}
            <a href="#contact" className="luxury-btn" style={isLightHero ? {
              fontFamily: 'var(--font-fira)', fontSize: '12px', color: '#f7f5f0',
              fontWeight: 600, textDecoration: 'none',
              background: '#121316',
              borderRadius: '999px', padding: '9px 22px',
              boxShadow: '0 8px 20px rgba(18, 19, 22, 0.14)',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            } : {
              fontFamily: 'var(--font-fira)', fontSize: '12.5px', color: '#030712',
              fontWeight: 700, textDecoration: 'none',
              background: 'linear-gradient(135deg, #f5d77f 0%, #d4af37 60%, #aa7c11 100%)',
              borderRadius: '999px', padding: '9px 22px',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.35)',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              if (isLightHero) {
                e.currentTarget.style.background = '#1d4ed8'
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(29, 78, 216, 0.25)'
              } else {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.55)'
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              if (isLightHero) {
                e.currentTarget.style.background = '#121316'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(18, 19, 22, 0.14)'
              } else {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.35)'
              }
            }}>
              <span>Get in Touch</span>
            </a>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 99,
          background: isLightHero ? 'rgba(247, 245, 240, 0.98)' : 'rgba(3, 7, 18, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: isLightHero ? '1px solid rgba(18, 19, 22, 0.1)' : '1px solid rgba(212, 175, 55, 0.2)',
          padding: '24px 20px',
          display: 'flex', flexDirection: 'column', gap: '8px',
          boxShadow: isLightHero ? '0 20px 40px rgba(18, 19, 22, 0.12)' : '0 20px 40px rgba(0, 0, 0, 0.8)',
        }}>
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '15px', color: isLightHero ? '#18181b' : '#94a3b8', textDecoration: 'none',
                padding: '12px 16px', borderRadius: '10px',
                letterSpacing: '1px', textTransform: 'uppercase',
                transition: 'all 0.2s', display: 'block', fontWeight: 500,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = isLightHero ? '#1d4ed8' : '#f5d77f'
                e.currentTarget.style.background = isLightHero ? 'rgba(37, 99, 235, 0.08)' : 'rgba(212, 175, 55, 0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = isLightHero ? '#18181b' : '#94a3b8'
                e.currentTarget.style.background = 'transparent'
              }}>
              {item}
            </a>
          ))}

          <Link href="/projects" onClick={() => setMenuOpen(false)} style={{
            fontSize: '15px', color: isLightHero ? '#18181b' : '#94a3b8', textDecoration: 'none',
            padding: '12px 16px', borderRadius: '10px',
            letterSpacing: '1px', textTransform: 'uppercase',
            transition: 'all 0.2s', display: 'block', fontWeight: 500,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = isLightHero ? '#1d4ed8' : '#f5d77f'
            e.currentTarget.style.background = isLightHero ? 'rgba(37, 99, 235, 0.08)' : 'rgba(212, 175, 55, 0.08)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = isLightHero ? '#18181b' : '#94a3b8'
            e.currentTarget.style.background = 'transparent'
          }}>
            Project Case Studies
          </Link>

          <a href="#contact" onClick={() => setMenuOpen(false)} className="luxury-btn" style={{
            marginTop: '12px', textAlign: 'center',
            fontFamily: 'var(--font-fira)', fontSize: '14px',
            color: isLightHero ? '#f7f5f0' : '#030712',
            fontWeight: 700,
            background: isLightHero
              ? '#121316'
              : 'linear-gradient(135deg, #f5d77f 0%, #d4af37 60%, #aa7c11 100%)',
            borderRadius: '10px', padding: '14px 20px', textDecoration: 'none',
            boxShadow: isLightHero ? '0 8px 20px rgba(18, 19, 22, 0.16)' : '0 0 20px rgba(212, 175, 55, 0.3)',
          }}>
            Get in Touch
          </a>
        </div>
      )}
    </>
  )
}
