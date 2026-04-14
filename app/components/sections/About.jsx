'use client'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, GraduationCap, Award } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
}

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '3+', label: 'Certifications' },
  { value: '5+', label: 'Years Learning' },
  { value: '\u221e', label: 'Lines of Code' },
]

const education = [
  {
    degree: 'BSc Hons — Software Engineering & Computer Science',
    school: 'University of Bedfordshire',
    year: '2024 – 2025',
    color: '#3b82f6',
  },
  {
    degree: 'HND in Computing',
    school: 'Pearson UK (Edexcel)',
    year: '2021 – 2024',
    color: '#06b6d4',
  },
  {
    degree: 'Ordinary Level Examination',
    school: 'Zahira College',
    year: '2018',
    color: '#8b5cf6',
  },
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
  { label: 'Languages', value: 'English, Tamil, Sinhala' },
  { label: 'Focus', value: 'Full Stack + Cloud' },
  { label: 'Activities', value: 'IEEE & Microsoft Azure Workshops' },
  { label: 'Status', value: 'Open to Work' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '140px 80px',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      {/* Glow accents */}
      <div style={{
        position: 'absolute', borderRadius: '50%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
        top: '0', right: '-200px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        bottom: '10%', left: '-100px', pointerEvents: 'none',
      }} />

      {/* Section heading */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show" custom={0} viewport={{ once: true }}
        style={{ marginBottom: '80px' }}
      >
        <p style={{
          fontFamily: 'var(--font-fira)', fontSize: '12px',
          color: '#3b82f6', letterSpacing: '4px',
          textTransform: 'uppercase', marginBottom: '12px',
        }}>
          {'// who i am'}
        </p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.1 }}>
          About{' '}
          <span style={{
            background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Me
          </span>
        </h2>
      </motion.div>

      {/* Row 1 — Bio + Quick Facts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '80px' }}>

        {/* Left — Bio + Contact + Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}>
            <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 2, marginBottom: '20px' }}>
              I am a passionate Full Stack Developer from Sri Lanka, currently pursuing my
              BSc in Software Engineering at the University of Bedfordshire. I specialize
              in building scalable web applications using the MERN stack, with additional
              expertise in cloud platforms like AWS and Google Cloud.
            </p>
            <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 2 }}>
              I have built everything from real-time food delivery platforms with route
              optimization algorithms to full SaaS products. I thrive at the intersection
              of clean code and outstanding user experience.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" custom={2} viewport={{ once: true }}
            style={{
              background: 'rgba(15,23,42,0.6)',
              border: '1px solid rgba(37,99,235,0.12)',
              borderRadius: '16px',
              padding: '28px 32px',
              display: 'flex', flexDirection: 'column', gap: '18px',
            }}
          >
            {[
              { icon: <MapPin size={15} strokeWidth={1.5} />, label: 'Location', value: 'Colombo, Sri Lanka' },
              { icon: <Mail size={15} strokeWidth={1.5} />, label: 'Email', value: 'Ishthiyaqahamed@gmail.com' },
              { icon: <Phone size={15} strokeWidth={1.5} />, label: 'Phone', value: '+94 76 051 4320' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '36px', height: '36px',
                  background: 'rgba(37,99,235,0.1)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#60a5fa', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '11px', color: '#334155',
                    fontFamily: 'var(--font-fira)', letterSpacing: '1px',
                    textTransform: 'uppercase', marginBottom: '2px',
                  }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '14px', color: '#cbd5e1' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" custom={3} viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(15,23,42,0.8)',
                border: '1px solid rgba(37,99,235,0.12)',
                borderRadius: '12px', padding: '20px 12px',
                textAlign: 'center', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                }} />
                <div style={{
                  fontSize: '26px', fontWeight: 700,
                  background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  marginBottom: '6px',
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '11px', color: '#475569', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Quick Facts */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" custom={2} viewport={{ once: true }}
          style={{
            background: 'rgba(15,23,42,0.5)',
            border: '1px solid rgba(37,99,235,0.1)',
            borderRadius: '20px', padding: '36px',
            display: 'flex', flexDirection: 'column', gap: '4px',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-fira)', fontSize: '11px',
            color: '#3b82f6', letterSpacing: '3px',
            textTransform: 'uppercase', marginBottom: '24px',
          }}>
            {'// quick facts'}
          </p>
          {quickFacts.map((fact, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 0',
              borderBottom: i < quickFacts.length - 1 ? '1px solid rgba(37,99,235,0.07)' : 'none',
            }}>
              <span style={{ fontSize: '13px', color: '#475569', fontFamily: 'var(--font-fira)' }}>{fact.label}</span>
              <span style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'right', maxWidth: '55%' }}>{fact.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 — Education */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show" custom={4} viewport={{ once: true }}
        style={{ marginBottom: '64px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <GraduationCap size={18} strokeWidth={1.5} color="#3b82f6" />
          <p style={{
            fontFamily: 'var(--font-fira)', fontSize: '11px',
            color: '#3b82f6', letterSpacing: '3px', textTransform: 'uppercase',
          }}>
            Education
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {education.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              style={{
                background: 'rgba(15,23,42,0.6)',
                border: '1px solid rgba(37,99,235,0.1)',
                borderTop: `3px solid ${ed.color}`,
                borderRadius: '16px', padding: '28px 24px',
                cursor: 'default',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-fira)', fontSize: '11px',
                color: ed.color, background: `${ed.color}20`,
                padding: '4px 12px', borderRadius: '20px',
                border: `1px solid ${ed.color}40`,
                display: 'inline-block', marginBottom: '16px',
              }}>
                {ed.year}
              </span>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px', lineHeight: 1.5 }}>{ed.degree}</div>
              <div style={{ fontSize: '13px', color: '#64748b' }}>{ed.school}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Row 3 — Certifications */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show" custom={5} viewport={{ once: true }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <Award size={18} strokeWidth={1.5} color="#3b82f6" />
          <p style={{
            fontFamily: 'var(--font-fira)', fontSize: '11px',
            color: '#3b82f6', letterSpacing: '3px', textTransform: 'uppercase',
          }}>
            Certifications
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                background: 'rgba(15,23,42,0.7)',
                border: '1px solid rgba(37,99,235,0.1)',
                borderRadius: '16px', padding: '28px 20px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', textAlign: 'center', gap: '16px',
                cursor: 'default', position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = cert.color + '50' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.1)' }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`,
              }} />
              <div style={{
                width: '56px', height: '56px', borderRadius: '14px',
                background: cert.color + '20',
                border: `1px solid ${cert.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-fira)', fontSize: '13px',
                fontWeight: 700, color: cert.color, letterSpacing: '1px',
              }}>
                {cert.short}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#cbd5e1', marginBottom: '6px', lineHeight: 1.4 }}>{cert.name}</div>
                <div style={{ fontSize: '11px', color: '#475569' }}>{cert.platform}</div>
              </div>
              <div style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: cert.color, boxShadow: `0 0 8px ${cert.color}`,
              }} />
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}