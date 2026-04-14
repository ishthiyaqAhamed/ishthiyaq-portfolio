'use client'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const projects = [
  {
    title: 'Food Marketplace Platform',
    category: 'Full Stack • Undergraduate Project',
    description:
      'A full-stack food delivery platform connecting homemade food entrepreneurs with customers. Built with real-time ordering, live tracking, and delivery route optimization using Dijkstra\'s Algorithm.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Dijkstra', 'Real-time'],
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.05))',
    featured: true,
    year: '2024 – 2025',
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
    highlights: [
      'Real-time order tracking system',
      'Dijkstra route optimization algorithm',
      'Multi-vendor marketplace architecture',
    ],
  },
  {
    title: 'Spiff Tracker SaaS',
    category: 'Full Stack • Robance Lanka Pvt Ltd',
    description:
      'Built a full-stack SaaS platform for Total Wireless dealers to solve income tracking and manual reconciliation challenges. Automates complex dealership operations end-to-end.',
    tags: ['React', 'Node.js', 'MongoDB', 'SaaS', 'Automation', 'Dashboard'],
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.05))',
    featured: true,
    year: '2024 – 2025',
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
    highlights: [
      'Automated income reconciliation',
      'Real-time dealer dashboard',
      'End-to-end SaaS architecture',
    ],
  },
  {
    title: 'Pharmacy Management System',
    category: 'Full Stack • Group Project',
    description:
      'A team-led pharmacy management system with full database administration, website design and project coordination. Managed deadlines and implemented tracking tools across all project phases.',
    tags: ['SQL', 'MySQL', 'Web Design', 'Database Admin', 'Project Management'],
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.05))',
    featured: false,
    year: '2025',
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
    highlights: [
      'Full database administration',
      'Team coordination & task allocation',
      'Deadline tracking system',
    ],
  },
  {
    title: 'Supermarket Sales System',
    category: 'Backend • HND Project',
    description:
      'A Python-based supermarket sales system with stock management, product availability checking, and sales reporting. Built as part of HND Computing coursework at BCAS Campus.',
    tags: ['Python', 'Stock Management', 'Sales', 'CLI', 'Database'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.05))',
    featured: false,
    year: '2023',
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
    highlights: [
      'Stock management system',
      'Product availability checker',
      'Sales reporting module',
    ],
  },
]

function FeaturedProject({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        background: 'rgba(15,23,42,0.7)',
        border: '1px solid rgba(37,99,235,0.12)',
        borderRadius: '20px',
        overflow: 'hidden',
        marginBottom: '32px',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = project.color + '40' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.12)' }}
    >
      {/* Visual side */}
      <div style={{
        order: isEven ? 1 : 2,
        background: project.gradient,
        borderRight: isEven ? '1px solid rgba(37,99,235,0.1)' : 'none',
        borderLeft: isEven ? 'none' : '1px solid rgba(37,99,235,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '48px',
        position: 'relative', overflow: 'hidden', minHeight: '320px',
      }}>
        {/* Decorative glow */}
        <div style={{
          position: 'absolute',
          width: '200px', height: '200px', borderRadius: '50%',
          background: `radial-gradient(circle, ${project.color}25 0%, transparent 70%)`,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }} />

        {/* Mock browser window */}
        <div style={{
          width: '100%', maxWidth: '340px',
          background: 'rgba(5,11,24,0.9)',
          border: `1px solid ${project.color}30`,
          borderRadius: '12px', overflow: 'hidden',
          boxShadow: `0 0 40px ${project.color}20`,
          position: 'relative', zIndex: 1,
        }}>
          {/* Browser bar */}
          <div style={{
            background: 'rgba(15,23,42,0.95)',
            padding: '10px 14px',
            display: 'flex', alignItems: 'center', gap: '8px',
            borderBottom: `1px solid ${project.color}20`,
          }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                <div key={i} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{
              flex: 1, background: 'rgba(37,99,235,0.1)',
              borderRadius: '4px', padding: '3px 10px',
              fontFamily: 'var(--font-fira)', fontSize: '10px', color: '#475569',
            }}>
              {project.title.toLowerCase().replace(/ /g, '-')}.app
            </div>
          </div>
          {/* Browser content */}
          <div style={{ padding: '20px 16px' }}>
            <div style={{ height: '8px', background: project.color + '30', borderRadius: '4px', marginBottom: '10px', width: '60%' }} />
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '8px' }} />
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '8px', width: '80%' }} />
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '16px', width: '65%' }} />
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ height: '28px', flex: 1, background: project.color + '25', borderRadius: '6px', border: `1px solid ${project.color}40` }} />
              <div style={{ height: '28px', width: '60px', background: 'rgba(255,255,255,0.04)', borderRadius: '6px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Content side */}
      <div style={{
        order: isEven ? 2 : 1,
        padding: '48px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{
              fontFamily: 'var(--font-fira)', fontSize: '11px',
              color: project.color, background: project.color + '15',
              padding: '3px 10px', borderRadius: '20px',
              border: `1px solid ${project.color}30`,
            }}>
              {project.year}
            </span>
            <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#334155', letterSpacing: '1px' }}>
              {project.category}
            </span>
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#f1f5f9', marginBottom: '12px' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.8 }}>
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {project.highlights.map((h, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: project.color, flexShrink: 0,
                boxShadow: `0 0 6px ${project.color}`,
              }} />
              <span style={{ fontSize: '13px', color: '#94a3b8' }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tags.map((tag, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-fira)', fontSize: '11px',
              background: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.15)',
              color: '#60a5fa', borderRadius: '6px',
              padding: '3px 10px',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            fontSize: '13px', color: '#60a5fa', textDecoration: 'none',
            border: '1px solid rgba(37,99,235,0.3)',
            borderRadius: '8px', padding: '8px 16px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(37,99,235,0.1)'
            e.currentTarget.style.borderColor = 'rgba(37,99,235,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'
          }}>
            <FiGithub size={14} /> View Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function SmallProject({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      style={{
        background: 'rgba(15,23,42,0.7)',
        border: '1px solid rgba(37,99,235,0.1)',
        borderRadius: '16px', padding: '28px',
        display: 'flex', flexDirection: 'column', gap: '16px',
        position: 'relative', overflow: 'hidden',
        cursor: 'default', transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = project.color + '50' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.1)' }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: '42px', height: '42px', borderRadius: '10px',
          background: project.color + '15',
          border: `1px solid ${project.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-fira)', fontSize: '12px',
          fontWeight: 700, color: project.color,
        }}>
          {project.title.split(' ').map(w => w[0]).join('').slice(0, 2)}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#334155', transition: 'color 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#60a5fa' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#334155' }}>
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>{project.title}</h3>
        <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.7 }}>{project.description}</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
        {project.tags.slice(0, 4).map((tag, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-fira)', fontSize: '10px',
            background: 'rgba(37,99,235,0.08)',
            border: '1px solid rgba(37,99,235,0.15)',
            color: '#60a5fa', borderRadius: '4px', padding: '2px 8px',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{
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
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        top: '10%', right: '-150px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
        bottom: '20%', left: '-100px', pointerEvents: 'none',
      }} />

      {/* Heading */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show" custom={0} viewport={{ once: true }}
        style={{ marginBottom: '80px' }}
      >
        <p style={{
          fontFamily: 'var(--font-fira)', fontSize: '12px',
          color: '#3b82f6', letterSpacing: '4px',
          textTransform: 'uppercase', marginBottom: '12px',
        }}>
          {'// what i have built'}
        </p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.1 }}>
          Featured{' '}
          <span style={{
            background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Projects
          </span>
        </h2>
      </motion.div>

      {/* Featured projects */}
      {featured.map((project, i) => (
        <FeaturedProject key={i} project={project} index={i} />
      ))}

      {/* Other projects */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show" custom={2} viewport={{ once: true }}
        style={{ marginTop: '64px' }}
      >
        <p style={{
          fontFamily: 'var(--font-fira)', fontSize: '11px',
          color: '#334155', letterSpacing: '3px',
          textTransform: 'uppercase', marginBottom: '28px',
        }}>
          {'// other projects'}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {others.map((project, i) => (
            <SmallProject key={i} project={project} index={i} />
          ))}
        </div>
      </motion.div>

    </section>
  )
}