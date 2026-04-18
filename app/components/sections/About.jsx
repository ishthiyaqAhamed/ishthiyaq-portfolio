'use client'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, GraduationCap, Award } from 'lucide-react'
import { useWindowSize } from '../../hooks/useWindowSize'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
}

const stats = [
  { value: '4+', label: 'Projects Built' },
  { value: '3+', label: 'Certifications' },
  { value: '3+', label: 'Years Learning' },
  { value: '\u221e', label: 'Lines of Code' },
]

const education = [
  { degree: 'BSc Hons — Software Engineering & Computer Science', school: 'University of Bedfordshire', year: '2024 – 2025', color: '#3b82f6' },
  { degree: 'HND in Computing', school: 'Pearson UK (Edexcel)', year: '2021 – 2024', color: '#06b6d4' },
  { degree: 'Ordinary Level Examination', school: 'Zahira College', year: '2018', color: '#8b5cf6' },
]

const certifications = [
  { name: 'Google Cloud Database Engineer', platform: 'Coursera', color: '#4285f4', short: 'GCP' },
  { name: 'AWS Certified Cloud Practitioner', platform: 'Amazon Web Services', color: '#ff9900', short: 'AWS' },
  { name: 'IDM Certification in Cloud Computing', platform: 'Coursera', color: '#06b6d4', short: 'IDM' },
  { name: 'Graphic Designing', platform: 'Wellington College Scholarship', color: '#a855f7', short: 'GD' },
  { name: 'Cyber Security', platform: 'Wellington College Scholarship', color: '#22c55e', short: 'CS' },
]

const quickFacts = [
  { label: 'Degree', value: 'BSc Software Engineering' },
  { label: 'University', value: 'University of Bedfordshire' },
  { label: 'Location', value: 'Sri Lanka' },
  { label: 'Languages', value: 'English, Tamil, Sinhala, Arabic' },
  { label: 'Focus', value: 'Full Stack + Cloud' },
  { label: 'Activities', value: 'IEEE & Microsoft Azure Workshops' },
  { label: 'Status', value: 'Open to Work' },
]

export default function About() {
  const { isMobile, isTablet } = useWindowSize()
  const isSmall = isMobile || isTablet
  const pad = isMobile ? '80px 20px' : isTablet ? '100px 40px' : '140px 80px'

  return (
    <section id="about" style={{ padding: pad, position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', borderRadius: '50%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', top: '0', right: '-200px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', borderRadius: '50%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)', bottom: '10%', left: '-100px', pointerEvents: 'none' }} />

      {/* Heading */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={0} viewport={{ once: true }} style={{ marginBottom: '60px' }}>
        <p style={{ fontFamily: 'var(--font-fira)', fontSize: '12px', color: '#3b82f6', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>{'// who i am'}</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.1 }}>
          About{' '}
          <span style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Me</span>
        </h2>
      </motion.div>

      {/* Row 1 — Bio + Quick Facts */}
      <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : '1fr 1fr', gap: isSmall ? '40px' : '80px', marginBottom: '60px' }}>

        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}>
            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 2, marginBottom: '16px' }}>
              I am a passionate Full Stack Developer from Sri Lanka, currently pursuing my BSc in Software Engineering at the University of Bedfordshire. I specialize in building scalable web applications using the MERN stack, with additional expertise in cloud platforms like AWS and Google Cloud.
            </p>
            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 2 }}>
              I have built everything from real-time food delivery platforms with route optimization algorithms to full SaaS products. I thrive at the intersection of clean code and outstanding user experience.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={2} viewport={{ once: true }}
            style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(37,99,235,0.12)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: <MapPin size={15} strokeWidth={1.5} />, label: 'Location', value: 'Colombo, Sri Lanka' },
              { icon: <Mail size={15} strokeWidth={1.5} />, label: 'Email', value: 'Ishthiyaqahamed@gmail.com' },
              { icon: <Phone size={15} strokeWidth={1.5} />, label: 'Phone', value: '+94 76 051 4320' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#334155', fontFamily: 'var(--font-fira)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>{item.label}</div>
                  <div style={{ fontSize: '13px', color: '#cbd5e1' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={3} viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(37,99,235,0.12)', borderRadius: '12px', padding: '16px 8px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #2563eb, #06b6d4)' }} />
                <div style={{ fontSize: '22px', fontWeight: 700, background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4px' }}>{s.value}</div>
                <div style={{ fontSize: '10px', color: '#475569', lineHeight: 1.3 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Quick Facts */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={2} viewport={{ once: true }}
          style={{ background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(37,99,235,0.1)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#3b82f6', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px' }}>{'// quick facts'}</p>
          {quickFacts.map((fact, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < quickFacts.length - 1 ? '1px solid rgba(37,99,235,0.07)' : 'none' }}>
              <span style={{ fontSize: '13px', color: '#475569', fontFamily: 'var(--font-fira)' }}>{fact.label}</span>
              <span style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'right', maxWidth: '55%' }}>{fact.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 — Education */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={4} viewport={{ once: true }} style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
          <GraduationCap size={18} strokeWidth={1.5} color="#3b82f6" />
          <p style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#3b82f6', letterSpacing: '3px', textTransform: 'uppercase' }}>Education</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
          {education.map((ed, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }} viewport={{ once: true }} whileHover={{ y: -4 }}
              style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(37,99,235,0.1)', borderTop: `3px solid ${ed.color}`, borderRadius: '16px', padding: '24px 20px', cursor: 'default' }}>
              <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: ed.color, background: ed.color + '20', padding: '4px 12px', borderRadius: '20px', border: `1px solid ${ed.color}40`, display: 'inline-block', marginBottom: '14px' }}>{ed.year}</span>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px', lineHeight: 1.5 }}>{ed.degree}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>{ed.school}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Row 3 — Certifications */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={5} viewport={{ once: true }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
          <Award size={18} strokeWidth={1.5} color="#3b82f6" />
          <p style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#3b82f6', letterSpacing: '3px', textTransform: 'uppercase' }}>Certifications</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)', gap: '14px' }}>
          {certifications.map((cert, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }} whileHover={{ y: -6, scale: 1.02 }}
              style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(37,99,235,0.1)', borderRadius: '16px', padding: '24px 16px', display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: 'center', textAlign: isMobile ? 'left' : 'center', gap: '14px', cursor: 'default', position: 'relative', overflow: 'hidden', transition: 'border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = cert.color + '50' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.1)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: cert.color + '20', border: `1px solid ${cert.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-fira)', fontSize: '12px', fontWeight: 700, color: cert.color, flexShrink: 0 }}>{cert.short}</div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 500, color: '#cbd5e1', marginBottom: '4px', lineHeight: 1.4 }}>{cert.name}</div>
                <div style={{ fontSize: '11px', color: '#475569' }}>{cert.platform}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
