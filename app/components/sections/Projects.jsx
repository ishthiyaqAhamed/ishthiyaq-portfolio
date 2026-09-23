'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql, 
  SiSupabase, SiPrisma, SiTailwindcss, SiTypescript 
} from 'react-icons/si'
import { useWindowSize } from '../../hooks/useWindowSize'
import Link from 'next/link'

const tagIcons = {
  'React': <SiReact size={12} color="#61DAFB" />,
  'Next.js': <SiNextdotjs size={12} color="#FFFFFF" />,
  'Node.js': <SiNodedotjs size={12} color="#68A063" />,
  'MongoDB': <SiMongodb size={12} color="#47A248" />,
  'PostgreSQL': <SiPostgresql size={12} color="#4169E1" />,
  'TypeScript': <SiTypescript size={12} color="#3178C6" />,
  'Supabase': <SiSupabase size={12} color="#3ECF8E" />,
  'Prisma': <SiPrisma size={12} color="#5A67D8" />,
  'Tailwind': <SiTailwindcss size={12} color="#38BDF8" />,
}

const projects = [
  {
    id: 'novaflow',
    title: 'NovaFlow — Multi-Tenant SaaS CRM',
    category: 'Enterprise SaaS • Production',
    image: '/projects/novaflow.png',
    description: 'A production-grade multi-tenant CRM engine with embedded GPT-4o sales copilot, 7-stage Kanban pipeline, team role isolation, and a Super Admin observability portal.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Prisma', 'Tailwind'],
    color: '#d4af37',
    year: '2025',
    github: 'https://github.com/ishthiyaqAhamed',
    live: 'https://novaflowpro.online',
    highlights: [
      'GPT-4o Copilot analyzing live pipeline metrics',
      'Isolated multi-tenant database workspaces',
      'Super Admin platform observability & telemetry',
    ],
    featured: true,
  },
  {
    id: 'pharmacy-erp',
    title: 'Pharmacy Enterprise ERP System',
    category: 'Full Stack • Commercial ERP',
    image: '/projects/pharmacy-erp.png',
    description: 'A multi-branch pharmacy inventory, procurement, and billing management ERP. Handles automated stock level synchronization, batch tracking, and sales audits.',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#f5d77f',
    year: '2025',
    github: 'https://github.com/ishthiyaqAhamed',
    live: 'https://pharmacy-erp-lime.vercel.app/',
    highlights: [
      'Multi-branch distributed stock control',
      'Real-time automated low-inventory alerts',
      'Granular role-based security & auditing',
    ],
    featured: true,
  },
  {
    id: 'gemotions',
    title: 'Gemotions — Haute Horlogerie & Gems',
    category: 'Full Stack • Luxury E-Commerce',
    image: '/projects/gemotions.png',
    description: 'A bespoke e-commerce boutique for rare, certified gemstones and fine handcrafted jewelry with high-fidelity filtering, secure payments, and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#c5a880',
    year: '2025',
    github: 'https://github.com/ishthiyaqAhamed',
    live: 'https://gemotions.shop/',
    highlights: [
      'Editorial luxury customer journey',
      'Advanced multi-parameter gemstone filtering',
      'Comprehensive administrative store portal',
    ],
    featured: true,
  },
  {
    id: 'food-marketplace',
    title: 'Route-Optimized Food Marketplace',
    category: 'Full Stack • Undergrad Thesis',
    image: '/projects/food-marketplace.png',
    description: 'A real-time artisan food delivery marketplace featuring Dijkstra Algorithm shortest-path delivery routing and WebSockets live order tracking.',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#e5c07b',
    year: '2024 – 2025',
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
    highlights: [
      'Real-time WebSocket order dispatcher',
      'Dijkstra graph shortest route computation',
      'Multi-vendor marketplace architecture',
    ],
    featured: false,
  },
]

export default function Projects() {
  const { isMobile, isTablet } = useWindowSize()
  const pad = isMobile ? '80px 20px' : isTablet ? '100px 40px' : '140px 80px'
  const isSmall = isMobile || isTablet

  return (
    <section id="projects" style={{ padding: pad, position: 'relative', overflow: 'hidden' }}>
      {/* Luxury Ambient Glow Elements */}
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        width: '500px',
        height: '500px',
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
            Selected Works
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
          Featured{' '}
          <span className="gold-text-gradient">
            Engineering Projects
          </span>
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : 'repeat(2, 1fr)', gap: '28px' }}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            style={{
              background: 'rgba(10, 16, 28, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(212, 175, 55, 0.16)',
              borderRadius: '20px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.45)'
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.12)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.16)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)'
            }}
          >
            {/* Top gold accent line */}
            <div style={{ height: '3px', background: 'linear-gradient(90deg, #aa7c11, #d4af37, #f5d77f)' }} />

            {/* Mock browser visual header */}
            <div style={{
              background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.06) 0%, transparent 100%)',
              padding: '24px 24px 0',
              display: 'flex',
              justifyContent: 'center',
            }}>
              <div style={{
                width: '100%',
                maxWidth: '420px',
                background: 'rgba(5, 8, 16, 0.95)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '12px 12px 0 0',
                overflow: 'hidden',
              }}>
                <div style={{
                  background: 'rgba(12, 18, 32, 0.98)',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map((c, idx) => (
                    <div key={idx} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />
                  ))}
                  <div style={{
                    flex: 1,
                    background: 'rgba(212, 175, 55, 0.08)',
                    borderRadius: '4px',
                    padding: '3px 10px',
                    fontFamily: 'var(--font-fira)',
                    fontSize: '10px',
                    color: '#f5d77f',
                    marginLeft: '8px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    https://{project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.app
                  </div>
                </div>

                <div style={{ position: 'relative', height: '180px', overflow: 'hidden', background: 'rgba(10, 16, 28, 0.9)' }}>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      onError={e => {
                        e.currentTarget.style.display = 'none'
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.style.display = 'block'
                        }
                      }}
                    />
                  )}
                  <div style={{ padding: '20px', display: project.image ? 'none' : 'block' }}>
                    <div style={{ height: '8px', background: 'linear-gradient(90deg, #d4af37, #aa7c11)', borderRadius: '4px', marginBottom: '12px', width: '60%' }} />
                    <div style={{ height: '5px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', marginBottom: '8px' }} />
                    <div style={{ height: '5px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', marginBottom: '8px', width: '80%' }} />
                    <div style={{ height: '5px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', marginBottom: '16px', width: '65%' }} />
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div style={{ height: '26px', flex: 1, background: 'rgba(212, 175, 55, 0.12)', borderRadius: '6px', border: '1px solid rgba(212, 175, 55, 0.3)' }} />
                      <div style={{ height: '26px', width: '70px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#f5d77f',
                    background: 'rgba(212, 175, 55, 0.12)', padding: '3px 10px',
                    borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.3)',
                    fontWeight: 600,
                  }}>
                    {project.year}
                  </span>
                  <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#64748b' }}>
                    {project.category}
                  </span>
                </div>
                <h3 style={{ fontSize: 'clamp(17px, 2.2vw, 20px)', fontWeight: 700, color: '#f8fafc', marginBottom: '10px', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: 1.75 }}>
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {project.highlights.map((h, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#d4af37', flexShrink: 0, boxShadow: '0 0 6px #d4af37' }} />
                    <span style={{ fontSize: '12.5px', color: '#cbd5e1' }}>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags with Real Brand Icons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    style={{
                      fontFamily: 'var(--font-fira)',
                      fontSize: '11px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(212, 175, 55, 0.15)',
                      color: '#e2e8f0',
                      borderRadius: '6px',
                      padding: '4px 9px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    {tagIcons[tag]}
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '10px' }}>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      color: '#030712',
                      background: 'linear-gradient(135deg, #f5d77f 0%, #d4af37 60%, #aa7c11 100%)',
                      borderRadius: '8px',
                      padding: '9px 18px',
                      textDecoration: 'none',
                      boxShadow: '0 0 16px rgba(212, 175, 55, 0.3)',
                    }}
                  >
                    <ExternalLink size={14} /> Live Application
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontSize: '12.5px',
                    color: '#f5d77f',
                    textDecoration: 'none',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    background: 'rgba(212, 175, 55, 0.05)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.15)'
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.05)'
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'
                  }}
                >
                  <FiGithub size={14} /> Code Repository
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore All Projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginTop: '60px' }}
      >
        <p style={{
          fontFamily: 'var(--font-fira)', fontSize: '13px',
          color: '#64748b', marginBottom: '20px',
        }}>
          Interested in architecture decisions and technical blueprints?
        </p>
        <Link
          href="/projects"
          className="luxury-btn"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'linear-gradient(135deg, #f5d77f 0%, #d4af37 60%, #aa7c11 100%)',
            borderRadius: '12px', padding: 'clamp(14px, 2vw, 16px) clamp(28px, 4vw, 40px)',
            color: '#030712', fontSize: 'clamp(14px, 1.5vw, 15px)', fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 0 28px rgba(212, 175, 55, 0.4)',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 0 45px rgba(212, 175, 55, 0.65)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 0 28px rgba(212, 175, 55, 0.4)'
          }}
        >
          <span>Explore Detailed Case Studies</span>
          <ArrowUpRight size={18} />
        </Link>
      </motion.div>
    </section>
  )
}
