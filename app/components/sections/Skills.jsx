'use client'
import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Smartphone, Wrench, Globe } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Globe size={18} strokeWidth={1.5} />,
    color: '#3b82f6',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'React Native', level: 75 },
    ],
  },
  {
    title: 'Backend',
    icon: <Code2 size={18} strokeWidth={1.5} />,
    color: '#06b6d4',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 78 },
    ],
  },
  {
    title: 'Database',
    icon: <Database size={18} strokeWidth={1.5} />,
    color: '#8b5cf6',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Firebase', level: 78 },
      { name: 'SQL', level: 82 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud size={18} strokeWidth={1.5} />,
    color: '#f59e0b',
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'Google Cloud', level: 72 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Vercel', level: 80 },
    ],
  },
  {
    title: 'Languages',
    icon: <Smartphone size={18} strokeWidth={1.5} />,
    color: '#ec4899',
    skills: [
      { name: 'JavaScript', level: 88 },
      { name: 'Python', level: 78 },
      { name: 'Java', level: 75 },
      { name: 'C / C++', level: 65 },
    ],
  },
  {
    title: 'Tools',
    icon: <Wrench size={18} strokeWidth={1.5} />,
    color: '#22c55e',
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 70 },
      { name: 'Jira', level: 72 },
    ],
  },
]

const techLogos = [
  { name: 'React', bg: '#20232a', color: '#61dafb' },
  { name: 'Node', bg: '#1a1a1a', color: '#68a063' },
  { name: 'MongoDB', bg: '#1a1a1a', color: '#4db33d' },
  { name: 'Express', bg: '#1a1a1a', color: '#ffffff' },
  { name: 'AWS', bg: '#1a1a1a', color: '#ff9900' },
  { name: 'Firebase', bg: '#1a1a1a', color: '#ffca28' },
  { name: 'Python', bg: '#1a1a1a', color: '#3776ab' },
  { name: 'Java', bg: '#1a1a1a', color: '#f89820' },
  { name: 'MySQL', bg: '#1a1a1a', color: '#4479a1' },
  { name: 'Git', bg: '#1a1a1a', color: '#f05032' },
  { name: 'GCloud', bg: '#1a1a1a', color: '#4285f4' },
  { name: 'Figma', bg: '#1a1a1a', color: '#a259ff' },
]

function SkillBar({ name, level, color, index }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '13px', color: '#94a3b8' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: color }}>{level}%</span>
      </div>
      <div style={{
        height: '4px', background: 'rgba(37,99,235,0.1)',
        borderRadius: '999px', overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{
            height: '100%', borderRadius: '999px',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '140px 80px',
      position: 'relative',
      overflow: 'hidden',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>

      {/* Glow accents */}
      <div style={{
        position: 'absolute', borderRadius: '50%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
        top: '20%', left: '-150px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        bottom: '10%', right: '-100px', pointerEvents: 'none',
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
          {'// what i work with'}
        </p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.1 }}>
          Tech{' '}
          <span style={{
            background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Stack
          </span>
        </h2>
      </motion.div>

      {/* Skill cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        marginBottom: '80px',
      }}>
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            style={{
              background: 'rgba(15,23,42,0.7)',
              border: '1px solid rgba(37,99,235,0.1)',
              borderRadius: '16px',
              padding: '28px 24px',
              position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = cat.color + '50' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.1)' }}
          >
            {/* Top accent line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`,
            }} />

            {/* Card header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px',
                background: cat.color + '15',
                border: `1px solid ${cat.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: cat.color,
              }}>
                {cat.icon}
              </div>
              <span style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0' }}>{cat.title}</span>
            </div>

            {/* Skill bars */}
            {cat.skills.map((skill, j) => (
              <SkillBar key={j} name={skill.name} level={skill.level} color={cat.color} index={j} />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Tech logo strip */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show" custom={3} viewport={{ once: true }}
      >
        <p style={{
          fontFamily: 'var(--font-fira)', fontSize: '11px',
          color: '#334155', letterSpacing: '3px',
          textTransform: 'uppercase', textAlign: 'center',
          marginBottom: '28px',
        }}>
          {'// technologies i use'}
        </p>

        <div style={{
          display: 'flex', flexWrap: 'wrap',
          gap: '12px', justifyContent: 'center',
        }}>
          {techLogos.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.05 }}
              style={{
                background: 'rgba(15,23,42,0.8)',
                border: '1px solid rgba(37,99,235,0.12)',
                borderRadius: '10px',
                padding: '10px 18px',
                display: 'flex', alignItems: 'center', gap: '8px',
                cursor: 'default', transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = tech.color + '60' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.12)' }}
            >
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: tech.color,
                boxShadow: `0 0 6px ${tech.color}`,
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-fira)',
                fontSize: '12px', color: '#94a3b8',
              }}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}