'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { useWindowSize } from '../../hooks/useWindowSize'

const contactInfo = [
  { icon: <Mail size={18} strokeWidth={1.5} />, label: 'Email', value: 'Ishthiyaqahamed@gmail.com', href: 'mailto:Ishthiyaqahamed@gmail.com', color: '#3b82f6' },
  { icon: <Phone size={18} strokeWidth={1.5} />, label: 'Phone', value: '+94 76 051 4320', href: 'tel:+94760514320', color: '#06b6d4' },
  { icon: <MapPin size={18} strokeWidth={1.5} />, label: 'Location', value: 'Dharga Town, Sri Lanka', href: null, color: '#8b5cf6' },
]

const socials = [
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', handle: 'ishthiyaqahamed', href: 'https://linkedin.com/in/ishthiyaqahamed', color: '#0a66c2' },
  { icon: <FiGithub size={18} />, label: 'GitHub', handle: 'ishthiyaqAhamed', href: 'https://github.com/ishthiyaqAhamed', color: '#6e40c9' },
  { icon: <Mail size={18} strokeWidth={1.5} />, label: 'Email', handle: 'Ishthiyaqahamed@gmail.com', href: 'mailto:Ishthiyaqahamed@gmail.com', color: '#3b82f6' },
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
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  const inputStyle = {
    width: '100%', background: 'rgba(15,23,42,0.8)',
    border: '1px solid rgba(37,99,235,0.15)', borderRadius: '10px',
    padding: '14px 16px', color: '#e2e8f0', fontSize: '14px',
    fontFamily: 'var(--font-space)', outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box',
  }

  return (
    <section id="contact" style={{ padding: pad, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', borderRadius: '50%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', top: '10%', right: '-150px', pointerEvents: 'none' }} />

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ marginBottom: '60px' }}>
        <p style={{ fontFamily: 'var(--font-fira)', fontSize: '12px', color: '#3b82f6', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>{'// get in touch'}</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#f1f5f9' }}>
          Contact{' '}
          <span style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Me</span>
        </h2>
        <p style={{ fontSize: '15px', color: '#64748b', marginTop: '14px', maxWidth: '500px', lineHeight: 1.8 }}>
          Have a project in mind or want to collaborate? I am always open to discussing new opportunities.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : '1fr 1.5fr', gap: isSmall ? '40px' : '64px', alignItems: 'start' }}>

        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {contactInfo.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ x: 4 }}
              style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(37,99,235,0.1)', borderRadius: '14px', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '16px', cursor: item.href ? 'pointer' : 'default' }}
              onClick={() => item.href && window.open(item.href)}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: item.color + '15', border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: '11px', color: '#334155', fontFamily: 'var(--font-fira)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '3px' }}>{item.label}</div>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>{item.value}</div>
              </div>
            </motion.div>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(37,99,235,0.08)', borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.color + '50'; e.currentTarget.style.background = s.color + '08' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.08)'; e.currentTarget.style.background = 'rgba(15,23,42,0.5)' }}>
                <span style={{ color: s.color }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: '11px', color: '#475569', fontFamily: 'var(--font-fira)', marginBottom: '2px' }}>{s.label}</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>{s.handle}</div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '14px', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', flexShrink: 0, boxShadow: '0 0 10px #22c55e', animation: 'pulse 2s infinite' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#86efac', marginBottom: '2px' }}>Available for Work</div>
              <div style={{ fontSize: '12px', color: '#475569' }}>Open to full-time, freelance and remote roles</div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
          style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(37,99,235,0.12)', borderRadius: '20px', padding: isMobile ? '24px' : '40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #3b82f6, #06b6d4, transparent)' }} />
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#f1f5f9', marginBottom: '8px' }}>Send a Message</h3>
          <p style={{ fontSize: '13px', color: '#475569', marginBottom: '28px' }}>Fill out the form and I will get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '12px', color: '#475569', fontFamily: 'var(--font-fira)', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>NAME</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'rgba(37,99,235,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.08)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(37,99,235,0.15)'; e.target.style.boxShadow = 'none' }} />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#475569', fontFamily: 'var(--font-fira)', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>EMAIL</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'rgba(37,99,235,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.08)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(37,99,235,0.15)'; e.target.style.boxShadow = 'none' }} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '12px', color: '#475569', fontFamily: 'var(--font-fira)', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>SUBJECT</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="Project collaboration, Job opportunity..." style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'rgba(37,99,235,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.08)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(37,99,235,0.15)'; e.target.style.boxShadow = 'none' }} />
            </div>

            <div>
              <label style={{ fontSize: '12px', color: '#475569', fontFamily: 'var(--font-fira)', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>MESSAGE</label>
              <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell me about your project or opportunity..." rows={5}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                onFocus={e => { e.target.style.borderColor = 'rgba(37,99,235,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.08)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(37,99,235,0.15)'; e.target.style.boxShadow = 'none' }} />
            </div>

            <button type="submit" disabled={loading}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: loading ? 'rgba(37,99,235,0.5)' : 'linear-gradient(135deg, #2563eb, #0891b2)', border: 'none', borderRadius: '10px', padding: '14px 28px', color: 'white', fontSize: '14px', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', boxShadow: loading ? 'none' : '0 0 24px rgba(37,99,235,0.35)', transition: 'all 0.2s' }}
              onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(37,99,235,0.55)' } }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = loading ? 'none' : '0 0 24px rgba(37,99,235,0.35)' }}>
              {loading ? (
                <><div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', animation: 'spin 0.8s linear infinite' }} />Sending...</>
              ) : (
                <><Send size={15} /> Send Message</>
              )}
            </button>

            {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '10px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                <span style={{ fontSize: '13px', color: '#86efac' }}>Message sent! I will get back to you soon.</span>
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
