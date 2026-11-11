'use client'
import { useState } from 'react'
import Image from 'next/image'
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
    year: '2025',
    github: 'https://github.com/ishthiyaqAhamed',
    live: 'https://novaflowpro.online',
    highlights: [
      'GPT-4o Copilot analyzing live pipeline metrics',
      'Isolated multi-tenant database workspaces',
      'Super Admin platform observability & telemetry',
    ],
  },
  {
    id: 'pharmacy-erp',
    title: 'Pharmacy Enterprise ERP System',
    category: 'Full Stack • Commercial ERP',
    image: '/projects/pharmacy-erp.png',
    description: 'A multi-branch pharmacy inventory, procurement, and billing management ERP. Handles automated stock level synchronization, batch tracking, and sales audits.',
    tags: ['React', 'Node.js', 'MongoDB'],
    year: '2025',
    github: 'https://github.com/ishthiyaqAhamed',
    live: 'https://pharmacy-erp-lime.vercel.app/',
    highlights: [
      'Multi-branch distributed stock control',
      'Real-time automated low-inventory alerts',
      'Granular role-based security & auditing',
    ],
  },
  {
    id: 'gemotions',
    title: 'Gemotions — Rare Gems & Fine Jewelry',
    category: 'Full Stack • Luxury E-Commerce',
    image: '/projects/gemotions.png',
    description: 'A bespoke e-commerce boutique for rare, certified gemstones and fine handcrafted jewelry with high-fidelity filtering, secure payments, and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB'],
    year: '2025',
    github: 'https://github.com/ishthiyaqAhamed',
    live: 'https://gemotions.shop/',
    highlights: [
      'Editorial luxury customer journey',
      'Advanced multi-parameter gemstone filtering',
      'Comprehensive administrative store portal',
    ],
  },
  {
    id: 'food-marketplace',
    title: 'Route-Optimized Food Marketplace',
    category: 'Full Stack • Undergrad Thesis',
    image: '/projects/food-marketplace.png',
    description: 'A real-time artisan food delivery marketplace featuring Dijkstra Algorithm shortest-path delivery routing and WebSockets live order tracking.',
    tags: ['React', 'Node.js', 'MongoDB'],
    year: '2024 – 2025',
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
    highlights: [
      'Real-time WebSocket order dispatcher',
      'Dijkstra graph shortest route computation',
      'Multi-vendor marketplace architecture',
    ],
  },
]

function ProjectPreviewCard({ project, index }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      style={{
        background: 'rgba(12, 12, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 44px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.24)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Top specular hairline */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)' }} />

      {/* Mock browser visual header */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, transparent 100%)',
        padding: '24px 24px 0',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '420px',
          background: '#08080a',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: 'none',
          borderRadius: '12px 12px 0 0',
          overflow: 'hidden',
        }}>
          <div style={{
            background: '#0d0d10',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
          }}>
            {['#52525b', '#71717a', '#a1a1aa'].map((c, idx) => (
              <div key={idx} style={{ width: '7px', height: '7px', borderRadius: '50%', background: c }} />
            ))}
            <div style={{
              flex: 1,
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '4px',
              padding: '3px 10px',
              fontFamily: 'var(--font-fira)',
              fontSize: '10px',
              color: '#a1a1aa',
              marginLeft: '8px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              https://{project.id}.ishthiyaq.online
            </div>
          </div>

          <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#070709' }}>
            {project.image && !imgFailed ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  transition: 'transform 0.45s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div style={{ padding: '20px' }}>
                <div style={{ height: '8px', background: 'linear-gradient(90deg, #e4e4e7, #52525b)', borderRadius: '4px', marginBottom: '12px', width: '60%' }} />
                <div style={{ height: '5px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', marginBottom: '8px' }} />
                <div style={{ height: '5px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', marginBottom: '8px', width: '80%' }} />
                <div style={{ height: '5px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', marginBottom: '16px', width: '65%' }} />
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ height: '26px', flex: 1, background: 'rgba(255, 255, 255, 0.08)', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.14)' }} />
                  <div style={{ height: '26px', width: '70px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#e4e4e7',
              background: 'rgba(255, 255, 255, 0.05)', padding: '3px 10px',
              borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.12)',
              fontWeight: 600,
            }}>
              {project.year}
            </span>
            <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#71717a' }}>
              {project.category}
            </span>
          </div>
          <h3 style={{ fontSize: 'clamp(17px, 2.2vw, 20px)', fontWeight: 700, color: '#f4f4f5', marginBottom: '10px', lineHeight: 1.3 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '13.5px', color: '#a1a1aa', lineHeight: 1.75 }}>
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          {project.highlights.map((h, j) => (
            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#3b82f6', flexShrink: 0 }} />
              <span style={{ fontSize: '12.5px', color: '#d4d4d8' }}>{h}</span>
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
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                color: '#d4d4d8',
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
                fontWeight: 600,
                color: '#050505',
                background: '#f4f4f5',
                borderRadius: '8px',
                padding: '9px 18px',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#3b82f6'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#f4f4f5'
                e.currentTarget.style.color = '#050505'
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
              color: '#e4e4e7',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              borderRadius: '8px',
              padding: '8px 16px',
              background: 'rgba(255, 255, 255, 0.03)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)'
            }}
          >
            <FiGithub size={14} /> Code Repository
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { isMobile, isTablet } = useWindowSize()
  const pad = isMobile ? '80px 20px' : isTablet ? '100px 40px' : '130px 72px'
  const isSmall = isMobile || isTablet

  return (
    <section
      id="projects"
      style={{
        padding: pad,
        position: 'relative',
        overflow: 'hidden',
        background: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* Subtle Studio Ambient Glow */}
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        width: '540px',
        height: '540px',
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
            Featured{' '}
            <span className="silver-text-gradient">
              Engineering Projects
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: isSmall ? '1fr' : 'repeat(2, 1fr)', gap: '28px' }}>
          {projects.map((project, i) => (
            <ProjectPreviewCard key={project.id} project={project} index={i} />
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
            fontFamily: 'var(--font-fira)', fontSize: '12.5px',
            color: '#71717a', marginBottom: '20px',
          }}>
            Interested in architecture decisions and technical blueprints?
          </p>
          <Link
            href="/projects"
            className="luxury-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#f4f4f5',
              borderRadius: '999px', padding: '14px 34px',
              color: '#050505', fontSize: '13.5px', fontWeight: 600,
              fontFamily: 'var(--font-fira)', letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 12px 28px rgba(255, 255, 255, 0.08)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.background = '#3b82f6'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.background = '#f4f4f5'
              e.currentTarget.style.color = '#050505'
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(255, 255, 255, 0.08)'
            }}
          >
            <span>Explore Detailed Case Studies</span>
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
