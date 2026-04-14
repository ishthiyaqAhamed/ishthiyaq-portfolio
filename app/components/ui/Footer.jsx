'use client'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(37,99,235,0.1)',
      padding: '32px 80px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(5,11,24,0.9)',
    }}>
      <span style={{
        fontFamily: 'var(--font-fira)',
        fontSize: '13px', color: '#1e3a5f',
      }}>
        Designed & Built by{' '}
        <span style={{ color: '#3b82f6' }}>Ishthiyaq Ahamed</span>
        {' '}— {new Date().getFullYear()}
      </span>

      <div style={{ display: 'flex', gap: '20px' }}>
        {[
          { icon: <FiGithub size={16} />, href: 'https://github.com/ishthiyaqAhamed' },
          { icon: <FiLinkedin size={16} />, href: 'https://linkedin.com/in/ishthiyaqahamed' },
          { icon: <FiMail size={16} />, href: 'mailto:Ishthiyaqahamed@gmail.com' },
        ].map((item, i) => (
          <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" style={{
            color: '#1e3a5f', transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#60a5fa' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#1e3a5f' }}>
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}