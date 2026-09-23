'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2 } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { useWindowSize } from '../../hooks/useWindowSize'

const contactInfo = [
  { icon: <Mail size={18} strokeWidth={1.5} />, label: 'Email Inquiries', value: 'Ishthiyaqahamed@gmail.com', href: 'mailto:Ishthiyaqahamed@gmail.com' },
  { icon: <Phone size={18} strokeWidth={1.5} />, label: 'Direct Phone', value: '+94 76 051 4320', href: 'tel:+94760514320' },
  { icon: <MapPin size={18} strokeWidth={1.5} />, label: 'Location', value: 'Colombo, Sri Lanka', href: null },
]

const socials = [
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', handle: 'ishthiyaq-zakwan', href: 'https://linkedin.com/in/ishthiyaq-zakwan-4634a0231', color: '#0a66c2' },
  { icon: <FiGithub size={18} />, label: 'GitHub', handle: 'ishthiyaqAhamed', href: 'https://github.com/ishthiyaqAhamed', color: '#f5d77f' },
  { icon: <Mail size={18} strokeWidth={1.5} />, label: 'Email', handle: 'Ishthiyaqahamed@gmail.com', href: 'mailto:Ishthiyaqahamed@gmail.com', color: '#d4af37' },
]

export default function Contact() {
  const { isMobile, isTablet } = useWindowSize()
  const pad = isMobile ? '80px 20px' : isTablet ? '100px 40px' : '140px 80px'
  const isSmall = isMobile || isTablet

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 5000)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(8, 12, 22, 0.75)',
    border: '1px solid rgba(212, 175, 55, 0.18)',
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#f8fafc',
    fontSize: '14px',
    fontFamily: 'var(--font-space)',
    outline: 'none',
    transition: 'all 0.25s ease',
    boxSizing: 'border-box',
  }

  return (
    <section id="contact" style={{ padding: pad, position: 'relative', overflow: 'hidden' }}>
      {/* Luxury Glow Background */}
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)',
        top: '10%',
        right: '-150px',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ marginBottom: '60px' }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(212, 175, 55, 0.08)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          borderRadius: '999px',
          padding: '6px 18px',
          marginBottom: '16px',
        }}>
          <Sparkles size={13} color="#d4af37" />
          <span style={{
            fontFamily: 'var(--font-fira)',
            fontSize: '11px',
            color: '#f5d77f',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            Initiate Contact
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
          Let's Build Something{' '}
          <span className="gold-text-gradient">
            Extraordinary
          </span>
        </h2>
        <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#94a3b8', marginTop: '14px', maxWidth: '560px', lineHeight: 1.7 }}>
          Whether you have a strategic product vision, enterprise engineering opening, or bespoke consulting requirement, I am ready to collaborate.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : '1fr 1.4fr', gap: isSmall ? '40px' : '60px', alignItems: 'start' }}>

        {/* Left: Contact Channels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              style={{
                background: 'rgba(10, 16, 28, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '16px',
                padding: '20px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                cursor: item.href ? 'pointer' : 'default',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onClick={() => item.href && window.open(item.href)}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.45)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)'}
            >
              <div style={{
                width: '46px', height: '46px', borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.04) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#f5d77f', flexShrink: 0
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-fira)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '14px', color: '#f8fafc', fontWeight: 500 }}>
                  {item.value}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Social Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  background: 'rgba(10, 16, 28, 0.6)',
                  border: '1px solid rgba(212, 175, 55, 0.12)',
                  borderRadius: '12px', padding: '14px 18px',
                  textDecoration: 'none', transition: 'all 0.25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.45)'
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.08)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.12)'
                  e.currentTarget.style.background = 'rgba(10, 16, 28, 0.6)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <span style={{ color: '#f5d77f', fontSize: '18px' }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-fira)' }}>{s.label}</div>
                  <div style={{ fontSize: '13.5px', color: '#e2e8f0', fontWeight: 500 }}>{s.handle}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Immediate Availability Badge */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(212, 175, 55, 0.04) 100%)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '16px', padding: '20px 22px',
            display: 'flex', alignItems: 'center', gap: '14px',
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', flexShrink: 0, boxShadow: '0 0 12px #22c55e', animation: 'pulse 2s infinite' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#86efac', marginBottom: '2px' }}>
                Open to Strategic Opportunities
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                Available for full-time engineering positions and specialized contract work.
              </div>
            </div>
          </div>
        </div>

        {/* Right: Luxury Glass Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(10, 16, 28, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '24px',
            padding: isMobile ? '28px 20px' : '44px 38px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Top Gold Accent Bar */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #d4af37, #f5d77f, transparent)' }} />
          
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
            Direct Message
          </h3>
          <p style={{ fontSize: '13.5px', color: '#94a3b8', marginBottom: '32px' }}>
            Send a message and I will reply within 24 hours.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '18px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#f5d77f', fontFamily: 'var(--font-fira)', letterSpacing: '1.5px', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe"
                  style={inputStyle}
                  onFocus={e => {
                    e.target.style.borderColor = '#d4af37'
                    e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)'
                    e.target.style.background = 'rgba(12, 18, 32, 0.95)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(212, 175, 55, 0.18)'
                    e.target.style.boxShadow = 'none'
                    e.target.style.background = 'rgba(8, 12, 22, 0.75)'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '11px', color: '#f5d77f', fontFamily: 'var(--font-fira)', letterSpacing: '1.5px', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. john@enterprise.com"
                  style={inputStyle}
                  onFocus={e => {
                    e.target.style.borderColor = '#d4af37'
                    e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)'
                    e.target.style.background = 'rgba(12, 18, 32, 0.95)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(212, 175, 55, 0.18)'
                    e.target.style.boxShadow = 'none'
                    e.target.style.background = 'rgba(8, 12, 22, 0.75)'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '11px', color: '#f5d77f', fontFamily: 'var(--font-fira)', letterSpacing: '1.5px', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                SUBJECT
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Product Inquiry / Role Offer / Consultation"
                style={inputStyle}
                onFocus={e => {
                  e.target.style.borderColor = '#d4af37'
                  e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)'
                  e.target.style.background = 'rgba(12, 18, 32, 0.95)'
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'rgba(212, 175, 55, 0.18)'
                  e.target.style.boxShadow = 'none'
                  e.target.style.background = 'rgba(8, 12, 22, 0.75)'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '11px', color: '#f5d77f', fontFamily: 'var(--font-fira)', letterSpacing: '1.5px', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                MESSAGE
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Detail your requirements, project scope, or opportunity..."
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                onFocus={e => {
                  e.target.style.borderColor = '#d4af37'
                  e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)'
                  e.target.style.background = 'rgba(12, 18, 32, 0.95)'
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'rgba(212, 175, 55, 0.18)'
                  e.target.style.boxShadow = 'none'
                  e.target.style.background = 'rgba(8, 12, 22, 0.75)'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="luxury-btn"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                background: loading ? 'rgba(212, 175, 55, 0.4)' : 'linear-gradient(135deg, #f5d77f 0%, #d4af37 60%, #aa7c11 100%)',
                border: 'none', borderRadius: '12px', padding: '16px 32px',
                color: '#030712', fontSize: '14px', fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: loading ? 'none' : '0 0 25px rgba(212, 175, 55, 0.35)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                if (!loading) {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(212, 175, 55, 0.6)'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = loading ? 'none' : '0 0 25px rgba(212, 175, 55, 0.35)'
              }}
            >
              {loading ? (
                <>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(0,0,0,0.3)', borderTopColor: '#030712', animation: 'spin 0.8s linear infinite' }} />
                  <span>Dispatching Message...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'rgba(34, 197, 94, 0.12)',
                  border: '1px solid rgba(34, 197, 94, 0.35)',
                  borderRadius: '12px', padding: '14px 18px',
                  display: 'flex', alignItems: 'center', gap: '10px'
                }}
              >
                <CheckCircle2 size={18} color="#86efac" />
                <span style={{ fontSize: '13.5px', color: '#86efac', fontWeight: 500 }}>
                  Message successfully delivered. I will respond promptly.
                </span>
              </motion.div>
            )}
          </form>

          <style>{`
            @keyframes spin { to { transform: rotate(360deg); } }
            @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
          `}</style>
        </motion.div>
      </div>
    </section>
  )
}
