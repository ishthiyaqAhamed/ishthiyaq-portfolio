'use client'
import { motion } from 'framer-motion'
import { MapPin, Mail, GraduationCap, Award, Palette, Shield, Compass, CheckCircle2 } from 'lucide-react'
import { FaAws } from 'react-icons/fa6'
import { SiGooglecloud } from 'react-icons/si'
import { useWindowSize } from '../../hooks/useWindowSize'

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] } }),
}

const stats = [
  { value: '4+', label: 'Flagship Systems Built' },
  { value: '5+', label: 'Industry Certifications' },
  { value: '3+', label: 'Years Active Engineering' },
  { value: '99.9%', label: 'Commitment to Quality' },
]

const education = [
  { 
    degree: 'BSc (Hons) in Software Engineering', 
    school: 'University of Bedfordshire (UK)', 
    year: '2024 – 2025', 
    detail: 'Specialized in distributed systems, advanced algorithms, and cloud computing architectures.' 
  },
  { 
    degree: 'Higher National Diploma in Computing', 
    school: 'Pearson UK (Edexcel)', 
    year: '2021 – 2024', 
    detail: 'Solid foundation in data structures, OOP programming, and relational database systems.' 
  },
  { 
    degree: 'Ordinary Level Examination', 
    school: 'Zahira College', 
    year: '2018', 
    detail: 'Distinctions in Mathematics, Science, and Information & Communication Technology.' 
  },
]

const certifications = [
  { 
    name: 'Google Cloud Database Engineer', 
    platform: 'Coursera & Google Cloud', 
    color: '#4285F4', 
    short: 'GCP',
    icon: <SiGooglecloud size={20} color="#4285F4" />
  },
  { 
    name: 'AWS Certified Cloud Practitioner', 
    platform: 'Amazon Web Services', 
    color: '#FF9900', 
    short: 'AWS',
    icon: <FaAws size={20} color="#FF9900" />
  },
  { 
    name: 'IDM Cloud Computing Specialist', 
    platform: 'IDM Nations Campus', 
    color: '#38BDF8', 
    short: 'IDM',
    icon: <Compass size={20} color="#38BDF8" />
  },
  { 
    name: 'Cyber Security Foundation', 
    platform: 'Wellington College Scholarship', 
    color: '#22C55E', 
    short: 'SEC',
    icon: <Shield size={20} color="#22C55E" />
  },
  { 
    name: 'Digital Graphic Designing', 
    platform: 'Wellington College Scholarship', 
    color: '#D4AF37', 
    short: 'DES',
    icon: <Palette size={20} color="#D4AF37" />
  },
]

const quickFacts = [
  { label: 'Academic Degree', value: 'BSc (Hons) Software Engineering' },
  { label: 'Institution', value: 'University of Bedfordshire' },
  { label: 'Location', value: 'Colombo, Sri Lanka (GMT +5:30)' },
  { label: 'Languages', value: 'English, Tamil, Sinhala, Arabic' },
  { label: 'Specialization', value: 'Full Stack + Cloud + SaaS' },
  { label: 'Community', value: 'IEEE Member & Azure Tech Circles' },
  { label: 'Availability', value: 'Immediate / Full-Time & Contracts' },
]

export default function About() {
  const { isMobile, isTablet } = useWindowSize()
  const isSmall = isMobile || isTablet
  const pad = isMobile ? '80px 20px' : isTablet ? '100px 40px' : '140px 80px'

  return (
    <section id="about" style={{ padding: pad, position: 'relative', overflow: 'hidden' }}>

      {/* Luxury Ambient Glow Elements */}
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
        top: '0',
        right: '-200px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%)',
        bottom: '10%',
        left: '-100px',
        pointerEvents: 'none',
      }} />

      {/* Section Heading */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={0} viewport={{ once: true }} style={{ marginBottom: '60px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(212, 175, 55, 0.08)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          borderRadius: '999px',
          padding: '6px 18px',
          marginBottom: '16px',
        }}>
          <span style={{
            fontFamily: 'var(--font-fira)',
            fontSize: '11px',
            color: '#f5d77f',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            Executive Profile
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: 700, color: '#f8fafc', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          About{' '}
          <span className="gold-text-gradient">
            The Engineer
          </span>
        </h2>
      </motion.div>

      {/* Row 1 — Bio + Quick Facts */}
      <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : '1.15fr 0.85fr', gap: isSmall ? '40px' : '60px', marginBottom: '70px' }}>

        {/* Left: Detailed Bio & Metrics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}
            style={{
              background: 'rgba(10, 16, 28, 0.7)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              borderRadius: '20px',
              padding: '32px 28px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
            }}>
            <p style={{ fontSize: '15.5px', color: '#cbd5e1', lineHeight: 2, marginBottom: '18px' }}>
              I am a dedicated Full Stack Software Engineer based in Sri Lanka, holding a BSc in Software Engineering with Honors from the University of Bedfordshire. My focus is architecting scalable, high-performance web systems utilizing the modern MERN and Next.js ecosystems.
            </p>
            <p style={{ fontSize: '15.5px', color: '#94a3b8', lineHeight: 2 }}>
              From multi-branch enterprise ERP platforms and live multi-tenant SaaS products with AI Copilots to route-optimized delivery infrastructures, I build software that merges architectural elegance with uncompromising real-world reliability.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
              {[
                { icon: <MapPin size={16} color="#d4af37" />, label: 'Location', value: 'Colombo, Sri Lanka' },
                { icon: <Mail size={16} color="#d4af37" />, label: 'Direct Email', value: 'Ishthiyaqahamed@gmail.com' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '10.5px', color: '#64748b', fontFamily: 'var(--font-fira)', letterSpacing: '1px', textTransform: 'uppercase' }}>{item.label}</div>
                    <div style={{ fontSize: '13px', color: '#f8fafc', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={2} viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '14px' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(10, 16, 28, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '16px',
                padding: '20px 14px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }} />
                <div className="gold-text-gradient" style={{ fontSize: '26px', fontWeight: 800, marginBottom: '6px' }}>{s.value}</div>
                <div style={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.4, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Graduation Spotlight + Quick Facts Executive Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Graduation Photo Showcase */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={2} viewport={{ once: true }}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              background: 'rgba(10, 16, 28, 0.85)',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.1)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)'
              e.currentTarget.style.boxShadow = '0 25px 55px rgba(0, 0, 0, 0.7), 0 0 40px rgba(212, 175, 55, 0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.25)'
              e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.1)'
            }}
          >
            {/* Top gold accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #d4af37, #f5d77f, transparent)', zIndex: 2 }} />

            <div style={{ position: 'relative', overflow: 'hidden', height: '260px' }}>
              <img
                src="/graduation.jpg"
                alt="Ishthiyaq Ahamed - Convocation Class of 2025"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 22%',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(3, 7, 18, 0.1) 0%, rgba(3, 7, 18, 0.3) 50%, rgba(3, 7, 18, 0.95) 100%)',
                pointerEvents: 'none',
              }} />

              {/* Gold Convocation Badge overlay */}
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: 'rgba(3, 7, 18, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '999px',
                padding: '4px 12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
              }}>
                <GraduationCap size={13} color="#f5d77f" />
                <span style={{ fontFamily: 'var(--font-fira)', fontSize: '10.5px', color: '#f5d77f', fontWeight: 600, letterSpacing: '0.5px' }}>
                  Class of 2025
                </span>
              </div>

              {/* Bottom Caption overlay */}
              <div style={{
                position: 'absolute',
                bottom: '14px',
                left: '18px',
                right: '18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '8px',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-fira)', fontSize: '10.5px', color: '#f5d77f', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px', fontWeight: 600 }}>
                    Convocation Ceremony
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>
                    BSc (Hons) in Software Engineering
                  </div>
                </div>
                <span style={{
                  fontFamily: 'var(--font-fira)', fontSize: '10.5px', color: '#cbd5e1',
                  background: 'rgba(255, 255, 255, 0.08)', padding: '2px 8px',
                  borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  Univ. of Bedfordshire
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Facts Executive Panel */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={3} viewport={{ once: true }}
            style={{
              background: 'rgba(10, 16, 28, 0.7)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(212, 175, 55, 0.18)',
              borderRadius: '20px',
              padding: '26px 24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <CheckCircle2 size={16} color="#d4af37" />
              <span style={{ fontFamily: 'var(--font-fira)', fontSize: '12px', color: '#f5d77f', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
                Credentials Matrix
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {quickFacts.map((fact, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: i < quickFacts.length - 1 ? '1px solid rgba(212, 175, 55, 0.08)' : 'none',
                }}>
                  <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'var(--font-fira)' }}>{fact.label}</span>
                  <span style={{ fontSize: '12.5px', color: '#e2e8f0', textAlign: 'right', fontWeight: 500, maxWidth: '60%' }}>{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Row 2 — Education Timeline */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={3} viewport={{ once: true }} style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GraduationCap size={18} color="#f5d77f" />
          </div>
          <span style={{ fontFamily: 'var(--font-fira)', fontSize: '13px', color: '#f5d77f', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
            Academic Background
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
          {education.map((ed, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              style={{
                background: 'rgba(10, 16, 28, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderTop: '3px solid #d4af37',
                borderRadius: '16px',
                padding: '24px 22px',
                cursor: 'default',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.45)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)'}
            >
              <span style={{
                fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#f5d77f',
                background: 'rgba(212, 175, 55, 0.1)', padding: '4px 12px',
                borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.25)',
                display: 'inline-block', marginBottom: '14px', fontWeight: 600,
              }}>
                {ed.year}
              </span>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#f8fafc', marginBottom: '6px', lineHeight: 1.4 }}>
                {ed.degree}
              </div>
              <div style={{ fontSize: '12.5px', color: '#d4af37', marginBottom: '10px' }}>
                {ed.school}
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.6 }}>
                {ed.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Row 3 — Certifications */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={4} viewport={{ once: true }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Award size={18} color="#f5d77f" />
          </div>
          <span style={{ fontFamily: 'var(--font-fira)', fontSize: '13px', color: '#f5d77f', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
            Accreditations & Certifications
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)', gap: '16px' }}>
          {certifications.map((cert, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                background: 'rgba(10, 16, 28, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '16px',
                padding: '24px 18px',
                display: 'flex',
                flexDirection: isMobile ? 'row' : 'column',
                alignItems: 'center',
                textAlign: isMobile ? 'left' : 'center',
                gap: '14px',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`
              }} />
              <div style={{
                width: '50px', height: '50px', borderRadius: '14px',
                background: `${cert.color}15`,
                border: `1px solid ${cert.color}35`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                boxShadow: `0 0 16px ${cert.color}20`
              }}>
                {cert.icon}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#f8fafc', marginBottom: '4px', lineHeight: 1.35 }}>
                  {cert.name}
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                  {cert.platform}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
