'use client'
import { useState, useEffect } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile } = useWindowSize()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['About', 'Projects', 'Skills', 'Contact']

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '0 20px' : '0 60px',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: scrolled ? '1px solid rgba(37,99,235,0.15)' : '1px solid transparent',
        background: scrolled ? 'rgba(5,11,24,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <span style={{
          fontFamily: 'var(--font-fira)', fontSize: '20px', fontWeight: 700,
          color: '#60a5fa', letterSpacing: '2px',
          textShadow: '0 0 12px rgba(96,165,250,0.7), 0 0 24px rgba(96,165,250,0.4)',
        }}>
          &lt;IA /&gt;
        </span>

        {isMobile ? (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'transparent', border: '1px solid rgba(37,99,235,0.3)',
            borderRadius: '8px', padding: '6px', color: '#60a5fa', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                fontSize: '13px', color: '#94a3b8', textDecoration: 'none',
                letterSpacing: '1px', textTransform: 'uppercase', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#60a5fa'}
              onMouseLeave={e => e.target.style.color = '#94a3b8'}>
                {item}
              </a>
            ))}
            <a href="#contact" style={{
              fontFamily: 'var(--font-fira)', fontSize: '13px', color: '#60a5fa',
              textDecoration: 'none', border: '1px solid rgba(96,165,250,0.4)',
              borderRadius: '8px', padding: '8px 20px', transition: 'all 0.2s',
              boxShadow: '0 0 10px rgba(96,165,250,0.1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(96,165,250,0.1)'
              e.currentTarget.style.boxShadow = '0 0 18px rgba(96,165,250,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.boxShadow = '0 0 10px rgba(96,165,250,0.1)'
            }}>
              Get in Touch
            </a>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(5,11,24,0.97)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(37,99,235,0.15)',
          padding: '20px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '15px', color: '#94a3b8', textDecoration: 'none',
                padding: '14px 16px', borderRadius: '8px',
                letterSpacing: '1px', textTransform: 'uppercase',
                transition: 'all 0.2s', display: 'block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#60a5fa'
                e.currentTarget.style.background = 'rgba(37,99,235,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#94a3b8'
                e.currentTarget.style.background = 'transparent'
              }}>
              {item}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            marginTop: '8px', textAlign: 'center',
            fontFamily: 'var(--font-fira)', fontSize: '13px', color: '#60a5fa',
            textDecoration: 'none', border: '1px solid rgba(96,165,250,0.4)',
            borderRadius: '8px', padding: '12px 20px', transition: 'all 0.2s',
          }}>
            Get in Touch
          </a>
        </div>
      )}
    </>
  )
}
