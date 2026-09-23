'use client'
import { useWindowSize } from '../../hooks/useWindowSize'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const { isMobile } = useWindowSize()
  return (
    <footer style={{
      borderTop: '1px solid rgba(212, 175, 55, 0.15)',
      padding: isMobile ? '28px 20px' : '36px 80px',
      display: 'flex', flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between', alignItems: 'center',
      gap: isMobile ? '20px' : '0',
      background: 'rgba(3, 7, 18, 0.95)',
      textAlign: isMobile ? 'center' : 'left',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontFamily: 'var(--font-fira)', fontSize: '12.5px', color: '#94a3b8' }}>
          Crafted with Precision by{' '}
          <span style={{ color: '#f5d77f', fontWeight: 600 }}>Ishthiyaq Ahamed</span>
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
              color: '#64748b',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#f5d77f'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#64748b'
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
