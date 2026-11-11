'use client'
import { useWindowSize } from '../../hooks/useWindowSize'
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiFacebook } from 'react-icons/fi'
import { TbBrandWhatsapp } from 'react-icons/tb'

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

      <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { icon: <FiGithub size={17} aria-hidden="true" />, href: 'https://github.com/ishthiyaqAhamed', label: 'GitHub', external: true },
          { icon: <FiLinkedin size={17} aria-hidden="true" />, href: 'https://linkedin.com/in/ishthiyaq-zakwan-4634a0231', label: 'LinkedIn', external: true },
          { icon: <FiMail size={17} aria-hidden="true" />, href: 'mailto:Ishthiyaqahamed@gmail.com', label: 'Email', external: false },
          { icon: <FiInstagram size={17} aria-hidden="true" />, href: 'https://www.instagram.com/ishthiyaq_?mdxt=cHBzeGR6c2tmeG5k&utm_source=qr', label: 'Instagram', external: true },
          { icon: <FiFacebook size={17} aria-hidden="true" />, href: 'https://www.facebook.com/share/1A4X6pQLgP/?mibextid=wwXIfr', label: 'Facebook', external: true },
          { icon: <TbBrandWhatsapp size={18} aria-hidden="true" />, href: 'https://wa.me/94760514320', label: 'WhatsApp', external: true },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
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
