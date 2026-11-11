'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { useWindowSize } from '../../hooks/useWindowSize'

const contactInfo = [
  { icon: <Mail size={18} strokeWidth={1.5} />, label: 'Email Inquiries', value: 'Ishthiyaqahamed@gmail.com', href: 'mailto:Ishthiyaqahamed@gmail.com' },
  { icon: <Phone size={18} strokeWidth={1.5} />, label: 'Direct Phone', value: '+94 76 051 4320', href: 'tel:+94760514320' },
  { icon: <MapPin size={18} strokeWidth={1.5} />, label: 'Location', value: 'Colombo, Sri Lanka', href: null },
]

const socials = [
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', handle: 'ishthiyaq-zakwan', href: 'https://linkedin.com/in/ishthiyaq-zakwan-4634a0231' },
  { icon: <FiGithub size={18} />, label: 'GitHub', handle: 'ishthiyaqAhamed', href: 'https://github.com/ishthiyaqAhamed' },
  { icon: <Mail size={18} strokeWidth={1.5} />, label: 'Email', handle: 'Ishthiyaqahamed@gmail.com', href: 'mailto:Ishthiyaqahamed@gmail.com' },
]

export default function Contact() {
  const { isMobile, isTablet } = useWindowSize()
  const pad = isMobile ? '80px 20px' : isTablet ? '100px 40px' : '130px 72px'
  const isSmall = isMobile || isTablet

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', website: '' })
  const [status, setStatus] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const statusTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) {
        clearTimeout(statusTimerRef.current)
      }
    }
  }, [])

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading) return

    if (statusTimerRef.current) {
      clearTimeout(statusTimerRef.current)
      statusTimerRef.current = null
    }

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus('error')
      setErrorMsg('Please fill out all required fields before sending.')
      return
    }

    setStatus(null)
    setErrorMsg('')
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          website: form.website,
        }),
      })

      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(data?.error || 'Unable to send message right now. Please try again.')
      }

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '', website: '' })
      statusTimerRef.current = setTimeout(() => {
        setStatus(null)
      }, 6000)
    } catch (error) {
      setStatus('error')
      setErrorMsg(
        error?.message ||
          'Unable to send message right now. Please try again or email ishthiyaqahamed@gmail.com directly.'
      )
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    background: '#09090b',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#f4f4f5',
    fontSize: '14px',
    fontFamily: 'var(--font-space)',
    outline: 'none',
    transition: 'all 0.25s ease',
    boxSizing: 'border-box',
  }

  return (
    <section
      id="contact"
      style={{
        padding: pad,
        position: 'relative',
        overflow: 'hidden',
        background: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* Subtle Monochrome Studio Glow */}
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        width: '580px',
        height: '580px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
        top: '10%',
        right: '-150px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1380px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 800, color: '#f4f4f5', letterSpacing: '-0.03em', lineHeight: 1.08 }}>
            Let&apos;s Build Something{' '}
            <span className="silver-text-gradient">
              Extraordinary
            </span>
          </h2>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#a1a1aa', marginTop: '14px', maxWidth: '560px', lineHeight: 1.7 }}>
            Whether you have a strategic product vision, enterprise engineering opening, or bespoke consulting requirement, I am ready to collaborate.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : '1fr 1.4fr', gap: isSmall ? '36px' : '56px', alignItems: 'start' }}>

          {/* Left: Contact Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                style={{
                  background: 'rgba(12, 12, 15, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '20px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: item.href ? 'pointer' : 'default',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.45)',
                  transition: 'border-color 0.25s ease',
                }}
                onClick={() => item.href && window.open(item.href)}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.24)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)' }}
              >
                <div style={{
                  width: '46px', height: '46px', borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#60a5fa', flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#71717a', fontFamily: 'var(--font-fira)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '14px', color: '#f4f4f5', fontWeight: 500 }}>
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
                    background: 'rgba(12, 12, 15, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px', padding: '14px 18px',
                    textDecoration: 'none', transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                    e.currentTarget.style.background = 'rgba(12, 12, 15, 0.7)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <span style={{ color: '#e4e4e7', fontSize: '18px' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontSize: '11px', color: '#71717a', fontFamily: 'var(--font-fira)' }}>{s.label}</div>
                    <div style={{ fontSize: '13.5px', color: '#e4e4e7', fontWeight: 500 }}>{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Card */}
            <div style={{
              background: 'rgba(12, 12, 15, 0.85)',
              border: '1px solid rgba(59, 130, 246, 0.28)',
              borderRadius: '16px', padding: '20px 22px',
              display: 'flex', alignItems: 'center', gap: '14px',
            }}>
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#3b82f6', flexShrink: 0, boxShadow: '0 0 10px rgba(59, 130, 246, 0.7)', animation: 'contactPulse 2s infinite' }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#f4f4f5', marginBottom: '2px' }}>
                  Open to Strategic Opportunities
                </div>
                <div style={{ fontSize: '12px', color: '#a1a1aa' }}>
                  Available for full-time engineering positions and specialized contract work.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Monochrome Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(12, 12, 15, 0.85)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              borderRadius: '24px',
              padding: isMobile ? '28px 20px' : '44px 38px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
            }}
          >
            {/* Top specular hairline */}
            <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f4f4f5', marginBottom: '8px' }}>
              Direct Message
            </h3>
            <p style={{ fontSize: '13.5px', color: '#a1a1aa', marginBottom: '32px' }}>
              Send a message and I will reply within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Hidden honeypot field to filter automated bot submissions */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden',
                  opacity: 0,
                  pointerEvents: 'none',
                }}
              >
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '18px' }}>
                <div>
                  <label htmlFor="contact-name" style={{ fontSize: '11px', color: '#a1a1aa', fontFamily: 'var(--font-fira)', letterSpacing: '1.5px', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    maxLength={120}
                    disabled={loading}
                    placeholder="e.g. John Doe"
                    style={inputStyle}
                    onFocus={e => {
                      e.target.style.borderColor = '#3b82f6'
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.16)'
                      e.target.style.background = '#0d0d11'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.target.style.boxShadow = 'none'
                      e.target.style.background = '#09090b'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" style={{ fontSize: '11px', color: '#a1a1aa', fontFamily: 'var(--font-fira)', letterSpacing: '1.5px', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    disabled={loading}
                    placeholder="e.g. john@enterprise.com"
                    style={inputStyle}
                    onFocus={e => {
                      e.target.style.borderColor = '#3b82f6'
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.16)'
                      e.target.style.background = '#0d0d11'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.target.style.boxShadow = 'none'
                      e.target.style.background = '#09090b'
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" style={{ fontSize: '11px', color: '#a1a1aa', fontFamily: 'var(--font-fira)', letterSpacing: '1.5px', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  disabled={loading}
                  placeholder="Product Inquiry / Role Offer / Consultation"
                  style={inputStyle}
                  onFocus={e => {
                    e.target.style.borderColor = '#3b82f6'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.16)'
                    e.target.style.background = '#0d0d11'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.boxShadow = 'none'
                    e.target.style.background = '#09090b'
                  }}
                />
              </div>

              <div>
                <label htmlFor="contact-message" style={{ fontSize: '11px', color: '#a1a1aa', fontFamily: 'var(--font-fira)', letterSpacing: '1.5px', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  disabled={loading}
                  placeholder="Detail your requirements, project scope, or opportunity..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                  onFocus={e => {
                    e.target.style.borderColor = '#3b82f6'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.16)'
                    e.target.style.background = '#0d0d11'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.boxShadow = 'none'
                    e.target.style.background = '#09090b'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="luxury-btn"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  background: loading ? 'rgba(255, 255, 255, 0.45)' : '#f4f4f5',
                  border: 'none', borderRadius: '999px', padding: '16px 32px',
                  color: '#050505', fontSize: '13.5px', fontWeight: 700,
                  fontFamily: 'var(--font-fira)', letterSpacing: '0.08em', textTransform: 'uppercase',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.background = '#3b82f6'
                    e.currentTarget.style.color = '#ffffff'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = loading ? 'rgba(255, 255, 255, 0.45)' : '#f4f4f5'
                  e.currentTarget.style.color = '#050505'
                }}
              >
                {loading ? (
                  <>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(0,0,0,0.25)', borderTopColor: '#050505', animation: 'spin 0.8s linear infinite' }} />
                    <span>Dispatching Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div
                  role="status"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.35)',
                    borderRadius: '12px', padding: '14px 18px',
                    display: 'flex', alignItems: 'center', gap: '10px'
                  }}
                >
                  <CheckCircle2 size={18} color="#60a5fa" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '13.5px', color: '#f4f4f5', fontWeight: 500 }}>
                    Message successfully delivered. I will respond promptly.
                  </span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  role="alert"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.35)',
                    borderRadius: '12px', padding: '14px 18px',
                    display: 'flex', alignItems: 'center', gap: '10px'
                  }}
                >
                  <AlertCircle size={18} color="#f87171" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '13.5px', color: '#fecaca', fontWeight: 500, lineHeight: 1.5 }}>
                    {errorMsg}
                  </span>
                </motion.div>
              )}
            </form>

            <style>{`
              @keyframes spin { to { transform: rotate(360deg); } }
              @keyframes contactPulse { 0%,100%{opacity:1;} 50%{opacity:0.35;} }
            `}</style>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
