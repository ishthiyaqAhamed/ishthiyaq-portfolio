'use client'
import { useWindowSize } from '../../hooks/useWindowSize'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const { isMobile } = useWindowSize()
  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: isMobile ? '28px 20px' : '36px 72px',
      display: 'flex', flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between', alignItems: 'center',
      gap: isMobile ? '20px' : '0',
      background: '#050505',
      textAlign: isMobile ? 'center' : 'left',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontFamily: 'var(--font-fira)', fontSize: '12px', color: '#71717a', letterSpacing: '0.04em' }}>
          Engineered with precision by{' '}
          <span style={{ color: '#f4f4f5', fontWeight: 600 }}>Ishthiyaq Ahamed</span>
          {' '}— {new Date().getFullYear()}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '22px' }}>
        {[
          { icon: <FiGithub size={17} />, href: 'https://github.com/ishthiyaqAhamed', label: 'GitHub' },
          { icon: <FiLinkedin size={17} />, href: 'https://linkedin.com/in/ishthiyaq-zakwan-4634a0231', label: 'LinkedIn' },
          { icon: <FiMail size={17} />, href: 'mailto:Ishthiyaqahamed@gmail.com', label: 'Email' },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            style={{
              color: '#71717a',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#71717a'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}
