'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '0 40px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: scrolled ? '1px solid rgba(37,99,235,0.15)' : '1px solid transparent',
      background: scrolled ? 'rgba(5,11,24,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s ease',
    }}>

      {/* Logo */}
      <span style={{
        fontFamily: 'var(--font-fira)',
        fontSize: '20px',
        fontWeight: 700,
        color: '#60a5fa',
        letterSpacing: '2px',
        textShadow: '0 0 12px rgba(96,165,250,0.7), 0 0 24px rgba(96,165,250,0.4)',
      }}>
        &lt;IA /&gt;
      </span>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '32px' }}>
        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontSize: '13px',
            color: '#94a3b8',
            textDecoration: 'none',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#60a5fa'}
          onMouseLeave={e => e.target.style.color = '#94a3b8'}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Get in touch button */}
      <a href="#contact" style={{
        fontFamily: 'var(--font-fira)',
        fontSize: '13px',
        color: '#60a5fa',
        textDecoration: 'none',
        border: '1px solid rgba(96,165,250,0.4)',
        borderRadius: '8px',
        padding: '8px 20px',
        letterSpacing: '0.5px',
        transition: 'all 0.2s',
        boxShadow: '0 0 10px rgba(96,165,250,0.1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(96,165,250,0.1)'
        e.currentTarget.style.boxShadow = '0 0 18px rgba(96,165,250,0.3)'
        e.currentTarget.style.borderColor = 'rgba(96,165,250,0.7)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.boxShadow = '0 0 10px rgba(96,165,250,0.1)'
        e.currentTarget.style.borderColor = 'rgba(96,165,250,0.4)'
      }}>
        Get in Touch
      </a>
    </nav>
  )
}