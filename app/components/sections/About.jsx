'use client'
import Image from 'next/image'
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
    icon: <SiGooglecloud size={20} color="#e4e4e7" />
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    platform: 'Amazon Web Services',
    icon: <FaAws size={20} color="#e4e4e7" />
  },
  {
    name: 'IDM Cloud Computing Specialist',
    platform: 'IDM Nations Campus',
    icon: <Compass size={20} color="#60a5fa" />
  },
  {
    name: 'Cyber Security Foundation',
    platform: 'Wellington College Scholarship',
    icon: <Shield size={20} color="#e4e4e7" />
  },
  {
    name: 'Digital Graphic Designing',
    platform: 'Wellington College Scholarship',
    icon: <Palette size={20} color="#60a5fa" />
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
  const pad = isMobile ? '80px 20px' : isTablet ? '100px 40px' : '130px 72px'

  return (
    <section
      id="about"
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
        width: '620px',
        height: '620px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
        top: '-40px',
        right: '-180px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        width: '420px',
        height: '420px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.035) 0%, transparent 70%)',
        bottom: '8%',
        left: '-120px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1380px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
            padding: '6px 16px',
            marginBottom: '18px',
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#3b82f6' }} />
            <span style={{
              fontFamily: 'var(--font-fira)',
              fontSize: '11px',
              color: '#d4d4d8',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}>
              01 // Executive Profile
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            fontWeight: 800,
            color: '#f4f4f5',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
          }}>
            About{' '}
            <span className="silver-text-gradient">
              The Engineer
            </span>
          </h2>
        </motion.div>

        {/* Row 1 — Bio + Quick Facts */}
        <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : '1.15fr 0.85fr', gap: isSmall ? '36px' : '48px', marginBottom: '68px' }}>

          {/* Left: Detailed Bio & Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              viewport={{ once: true }}
              style={{
                background: 'rgba(12, 12, 15, 0.82)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '32px 28px',
                boxShadow: '0 20px 44px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              <p style={{ fontSize: '15.5px', color: '#e4e4e7', lineHeight: 1.9, marginBottom: '18px' }}>
                I am a dedicated Full Stack Software Engineer based in Sri Lanka, holding a BSc in Software Engineering with Honors from the University of Bedfordshire. My focus is architecting scalable, high-performance web systems utilizing the modern MERN and Next.js ecosystems.
              </p>
              <p style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.9 }}>
                From multi-branch enterprise ERP platforms and live multi-tenant SaaS products with AI Copilots to route-optimized delivery infrastructures, I build software that merges architectural elegance with uncompromising real-world reliability.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {[
                  { icon: <MapPin size={16} color="#60a5fa" />, label: 'Location', value: 'Colombo, Sri Lanka' },
                  { icon: <Mail size={16} color="#60a5fa" />, label: 'Direct Email', value: 'Ishthiyaqahamed@gmail.com' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '10.5px', color: '#71717a', fontFamily: 'var(--font-fira)', letterSpacing: '1px', textTransform: 'uppercase' }}>{item.label}</div>
                      <div style={{ fontSize: '13px', color: '#f4f4f5', fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={2}
              viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '14px' }}
            >
              {stats.map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(12, 12, 15, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '22px 14px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.45)',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)' }} />
                  <div className="silver-text-gradient" style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, marginBottom: '6px' }}>{s.value}</div>
                  <div style={{ fontSize: '11px', color: '#a1a1aa', lineHeight: 1.4, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Graduation Spotlight + Quick Facts Executive Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Graduation Photo Showcase */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={2}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                background: '#0b0b0d',
                boxShadow: '0 24px 50px rgba(0, 0, 0, 0.65)',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', height: '260px' }}>
                <Image
                  src="/graduation.jpg"
                  alt="Ishthiyaq Ahamed - Convocation Class of 2025"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 22%',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(5, 5, 5, 0.12) 0%, rgba(5, 5, 5, 0.35) 52%, rgba(5, 5, 5, 0.94) 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Monochrome Class Badge */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: 'rgba(5, 5, 5, 0.86)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  borderRadius: '999px',
                  padding: '5px 12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                }}>
                  <GraduationCap size={13} color="#60a5fa" />
                  <span style={{ fontFamily: 'var(--font-fira)', fontSize: '10.5px', color: '#f4f4f5', fontWeight: 600, letterSpacing: '0.5px' }}>
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
                    <div style={{ fontFamily: 'var(--font-fira)', fontSize: '10px', color: '#60a5fa', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '2px', fontWeight: 600 }}>
                      Convocation Ceremony
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#f4f4f5' }}>
                      BSc (Hons) in Software Engineering
                    </div>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-fira)', fontSize: '10.5px', color: '#d4d4d8',
                    background: 'rgba(255, 255, 255, 0.08)', padding: '3px 9px',
                    borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.12)'
                  }}>
                    Univ. of Bedfordshire
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Facts Executive Panel */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={3}
              viewport={{ once: true }}
              style={{
                background: 'rgba(12, 12, 15, 0.82)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '26px 24px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 20px 44px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                <CheckCircle2 size={16} color="#3b82f6" />
                <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11.5px', color: '#e4e4e7', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
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
                    borderBottom: i < quickFacts.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                  }}>
                    <span style={{ fontSize: '12px', color: '#71717a', fontFamily: 'var(--font-fira)' }}>{fact.label}</span>
                    <span style={{ fontSize: '12.5px', color: '#f4f4f5', textAlign: 'right', fontWeight: 500, maxWidth: '60%' }}>{fact.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Row 2 — Education Timeline */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={3} viewport={{ once: true }} style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '26px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={18} color="#e4e4e7" />
            </div>
            <span style={{ fontFamily: 'var(--font-fira)', fontSize: '12.5px', color: '#e4e4e7', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
              Academic Background
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
            {education.map((ed, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={{
                  background: 'rgba(12, 12, 15, 0.82)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderTop: '2px solid #3b82f6',
                  borderRadius: '16px',
                  padding: '24px 22px',
                  cursor: 'default',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.45)',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)'
                  e.currentTarget.style.borderTopColor = '#60a5fa'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                  e.currentTarget.style.borderTopColor = '#3b82f6'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#e4e4e7',
                  background: 'rgba(255, 255, 255, 0.05)', padding: '4px 12px',
                  borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'inline-block', marginBottom: '14px', fontWeight: 600,
                }}>
                  {ed.year}
                </span>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#f4f4f5', marginBottom: '6px', lineHeight: 1.4 }}>
                  {ed.degree}
                </div>
                <div style={{ fontSize: '12.5px', color: '#60a5fa', marginBottom: '10px', fontWeight: 500 }}>
                  {ed.school}
                </div>
                <div style={{ fontSize: '12.5px', color: '#a1a1aa', lineHeight: 1.65 }}>
                  {ed.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Row 3 — Certifications */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={4} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '26px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={18} color="#e4e4e7" />
            </div>
            <span style={{ fontFamily: 'var(--font-fira)', fontSize: '12.5px', color: '#e4e4e7', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
              Accreditations &amp; Certifications
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)', gap: '16px' }}>
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                style={{
                  background: 'rgba(12, 12, 15, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
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
                  boxShadow: '0 14px 32px rgba(0, 0, 0, 0.45)',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.24)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)'
                }} />
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {cert.icon}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#f4f4f5', marginBottom: '4px', lineHeight: 1.35 }}>
                    {cert.name}
                  </div>
                  <div style={{ fontSize: '11px', color: '#71717a' }}>
                    {cert.platform}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
