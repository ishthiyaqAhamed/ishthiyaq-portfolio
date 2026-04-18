'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { useWindowSize } from '../../hooks/useWindowSize'

const projects = [
  {
    title: 'Food Marketplace Platform',
    category: 'Full Stack • Undergraduate Project',
    description: 'A full-stack food delivery platform connecting homemade food entrepreneurs with customers. Built with real-time ordering, live tracking, and delivery route optimization using Dijkstra\'s Algorithm.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Dijkstra', 'Real-time'],
    color: '#3b82f6',
    year: '2024 – 2025',
    github: 'https://github.com/ishthiyaqAhamed',
    highlights: ['Real-time order tracking system', 'Dijkstra route optimization algorithm', 'Multi-vendor marketplace architecture'],
    featured: true,
  },
  {
    title: 'Spiff Tracker SaaS',
    category: 'Full Stack • Robance Lanka Pvt Ltd',
    description: 'Built a full-stack SaaS platform for Total Wireless dealers to solve income tracking and manual reconciliation challenges. Automates complex dealership operations end-to-end.',
    tags: ['React', 'Node.js', 'MongoDB', 'SaaS', 'Automation', 'Dashboard'],
    color: '#06b6d4',
    year: '2024 – 2025',
    github: 'https://github.com/ishthiyaqAhamed',
    highlights: ['Automated income reconciliation', 'Real-time dealer dashboard', 'End-to-end SaaS architecture'],
    featured: true,
  },
  {
    title: 'Pharmacy Management System',
    category: 'Full Stack • Group Project',
    description: 'A team-led pharmacy management system with full database administration, website design and project coordination.',
    tags: ['SQL', 'MySQL', 'Web Design', 'Database Admin'],
    color: '#8b5cf6',
    year: '2025',
    github: 'https://github.com/ishthiyaqAhamed',
    highlights: ['Full database administration', 'Team coordination', 'Deadline tracking'],
    featured: false,
  },
  {
    title: 'Supermarket Sales System',
    category: 'Backend • HND Project',
    description: 'A Python-based supermarket sales system with stock management, product availability checking, and sales reporting.',
    tags: ['Python', 'Stock Management', 'Sales', 'CLI'],
    color: '#f59e0b',
    year: '2023',
    github: 'https://github.com/ishthiyaqAhamed',
    highlights: ['Stock management system', 'Product availability checker', 'Sales reporting module'],
    featured: false,
  },
]

export default function Projects() {
  const { isMobile, isTablet } = useWindowSize()
  const pad = isMobile ? '80px 20px' : isTablet ? '100px 40px' : '140px 80px'
  const isSmall = isMobile || isTablet

  return (
    <section id="projects" style={{ padding: pad, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', borderRadius: '50%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)', top: '10%', right: '-150px', pointerEvents: 'none' }} />

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ marginBottom: '60px' }}>
        <p style={{ fontFamily: 'var(--font-fira)', fontSize: '12px', color: '#3b82f6', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>{'// what i have built'}</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#f1f5f9' }}>
          Featured{' '}
          <span style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
        </h2>
      </motion.div>

      {/* All projects in responsive grid */}
      <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : 'repeat(2, 1fr)', gap: '24px' }}>
        {projects.map((project, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            style={{
              background: 'rgba(15,23,42,0.7)',
              border: '1px solid rgba(37,99,235,0.12)',
              borderRadius: '20px', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = project.color + '40' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.12)' }}
          >
            {/* Top color bar */}
            <div style={{ height: '3px', background: `linear-gradient(90deg, ${project.color}, ${project.color}60)` }} />

            {/* Mock browser */}
            <div style={{ background: `linear-gradient(135deg, ${project.color}12, transparent)`, padding: '24px 24px 0', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '360px', background: 'rgba(5,11,24,0.9)', border: `1px solid ${project.color}25`, borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
                <div style={{ background: 'rgba(15,23,42,0.95)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map((c, idx) => (
                    <div key={idx} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />
                  ))}
                  <div style={{ flex: 1, background: 'rgba(37,99,235,0.1)', borderRadius: '3px', padding: '2px 8px', fontFamily: 'var(--font-fira)', fontSize: '9px', color: '#475569', marginLeft: '6px' }}>
                    {project.title.toLowerCase().replace(/ /g, '-')}.app
                  </div>
                </div>
                <div style={{ padding: '16px' }}>
                  <div style={{ height: '7px', background: project.color + '30', borderRadius: '4px', marginBottom: '8px', width: '55%' }} />
                  <div style={{ height: '5px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '6px' }} />
                  <div style={{ height: '5px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '6px', width: '75%' }} />
                  <div style={{ height: '5px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '12px', width: '60%' }} />
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ height: '24px', flex: 1, background: project.color + '20', borderRadius: '5px', border: `1px solid ${project.color}35` }} />
                    <div style={{ height: '24px', width: '50px', background: 'rgba(255,255,255,0.03)', borderRadius: '5px' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: project.color, background: project.color + '15', padding: '3px 10px', borderRadius: '20px', border: `1px solid ${project.color}30` }}>{project.year}</span>
                  <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#334155' }}>{project.category}</span>
                </div>
                <h3 style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 700, color: '#f1f5f9', marginBottom: '10px' }}>{project.title}</h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.8 }}>{project.description}</p>
              </div>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {project.highlights.map((h, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: project.color, flexShrink: 0, boxShadow: `0 0 6px ${project.color}` }} />
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags.map((tag, j) => (
                  <span key={j} style={{ fontFamily: 'var(--font-fira)', fontSize: '10px', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)', color: '#60a5fa', borderRadius: '5px', padding: '2px 8px' }}>{tag}</span>
                ))}
              </div>

              {/* Link */}
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#60a5fa', textDecoration: 'none', border: '1px solid rgba(37,99,235,0.3)', borderRadius: '8px', padding: '8px 16px', width: 'fit-content', transition: 'all 0.2s', marginTop: 'auto' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.1)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.6)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)' }}>
                <FiGithub size={14} /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
