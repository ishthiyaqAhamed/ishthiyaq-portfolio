'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: 'food-marketplace',
    title: 'Food Marketplace Platform',
    category: 'Full Stack',
    year: '2024 – 2025',
    color: '#3b82f6',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Dijkstra', 'Real-time'],
    summary: 'A full-stack food delivery platform connecting homemade food entrepreneurs with customers.',
    description: `This was my undergraduate individual project at Sliit City University. The idea came from seeing how talented home cooks had no proper platform to reach customers. I built a complete marketplace from scratch using the MERN stack.

The most challenging part was implementing real-time order tracking and optimizing delivery routes. I used Dijkstra's Algorithm to find the shortest delivery path between vendor and customer locations, which was a deep dive into graph theory applied to a real world problem.

The platform supports multiple vendors, real-time order updates using WebSockets, and a clean dashboard for both entrepreneurs and customers.`,
    highlights: [
      'Real-time order tracking with WebSockets',
      'Dijkstra Algorithm for route optimization',
      'Multi-vendor marketplace architecture',
      'Secure authentication & role-based access',
      'Mobile responsive React frontend',
    ],
    techDetails: [
      { label: 'Frontend', value: 'React.js, CSS3, Framer Motion' },
      { label: 'Backend', value: 'Node.js, Express.js' },
      { label: 'Database', value: 'MongoDB, Mongoose' },
      { label: 'Real-time', value: 'Socket.io' },
      { label: 'Algorithm', value: "Dijkstra's Shortest Path" },
      { label: 'Auth', value: 'JWT, bcrypt' },
    ],
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
    screenshots: [],
  },
  {
    id: 'spiff-tracker',
    title: 'Spiff Tracker SaaS',
    category: 'Full Stack • SaaS',
    year: '2024 – 2025',
    color: '#06b6d4',
    tags: ['React', 'Node.js', 'MongoDB', 'SaaS', 'Automation', 'Dashboard'],
    summary: 'A full-stack SaaS platform automating income tracking and reconciliation for Total Wireless dealers.',
    description: `This was a real client project at Robance Lanka Pvt Ltd. Total Wireless dealers approached us with a painful problem — they were manually tracking commissions and income on spreadsheets, which caused errors and wasted hours every week.

I designed and built the entire platform from scratch as the frontend developer. The system automatically pulls dealer sales data, calculates commissions (called SPIFFs), and generates reports — eliminating all manual work.

This was my first real commercial SaaS product and taught me a lot about building for real users with real business needs, handling edge cases, and making UI that non-technical users can actually use.`,
    highlights: [
      'Automated SPIFF commission calculation',
      'Real-time dealer performance dashboard',
      'Bulk data import and export',
      'Role-based access for managers and dealers',
      'Automated monthly reconciliation reports',
    ],
    techDetails: [
      { label: 'Frontend', value: 'React.js, Tailwind CSS' },
      { label: 'Backend', value: 'Node.js, Express.js' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Type', value: 'SaaS Platform' },
      { label: 'Client', value: 'Robance Lanka Pvt Ltd' },
      { label: 'Role', value: 'Frontend Developer' },
    ],
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
    screenshots: [],
  },
  {
    id: 'pharmacy-management',
    title: 'Pharmacy Management System',
    category: 'Full Stack • Group Project',
    year: '2025',
    color: '#8b5cf6',
    tags: ['SQL', 'MySQL', 'Web Design', 'Database Admin', 'Project Management'],
    summary: 'A team-led pharmacy management system with database administration and full project coordination.',
    description: `This was a group project at Sliit City University where I took on the role of both developer and project coordinator. Managing a team while coding was a new challenge — I had to balance writing code and making sure the team stayed on track.

I handled the full database design and administration using MySQL, designed the web interface, and implemented tracking tools to monitor team deliverables and deadlines.

The system manages patient records, prescription tracking, stock management, and billing. I learned a lot about database normalization, team communication, and project management tools during this project.`,
    highlights: [
      'Full MySQL database design and administration',
      'Patient and prescription management',
      'Stock and inventory tracking',
      'Team coordination and task allocation',
      'Deadline tracking and progress monitoring',
    ],
    techDetails: [
      { label: 'Frontend', value: 'HTML, CSS, JavaScript' },
      { label: 'Backend', value: 'PHP' },
      { label: 'Database', value: 'MySQL' },
      { label: 'Role', value: 'Lead Developer & Project Coordinator' },
      { label: 'Team Size', value: '4 members' },
      { label: 'Institution', value: 'Sliit City University' },
    ],
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
    screenshots: [],
  },
  {
    id: 'supermarket-sales',
    title: 'Supermarket Sales System',
    category: 'Backend • HND Project',
    year: '2023',
    color: '#f59e0b',
    tags: ['Python', 'Stock Management', 'Sales', 'CLI', 'Database'],
    summary: 'A Python-based supermarket management system with stock control and sales reporting.',
    description: `This was my HND Computing project at BCAS Campus. It was one of my earliest full projects and the one that made me fall in love with building real systems.

I built a complete supermarket backend system in Python that handles stock management, checks product availability in real time, processes sales, and generates end-of-day reports.

Although it's a CLI based application, the logic behind it taught me core programming fundamentals — file handling, data structures, loops, and building systems that actually solve a real problem. This project is where my journey as a developer really began.`,
    highlights: [
      'Real-time stock level monitoring',
      'Product availability checking',
      'Sales transaction processing',
      'End-of-day sales report generation',
      'Low stock alert system',
    ],
    techDetails: [
      { label: 'Language', value: 'Python 3' },
      { label: 'Type', value: 'CLI Application' },
      { label: 'Storage', value: 'File-based / CSV' },
      { label: 'Features', value: 'Stock, Sales, Reports' },
      { label: 'Institution', value: 'BCAS Campus' },
      { label: 'Level', value: 'HND Computing' },
    ],
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
    screenshots: [],
  },
]

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
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
      {/* Top color bar */}
      <div style={{ height: '3px', background: `linear-gradient(90deg, ${project.color}, ${project.color}40)` }} />

      <div style={{ padding: 'clamp(24px, 4vw, 48px)' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: project.color, background: project.color + '15', padding: '3px 12px', borderRadius: '20px', border: `1px solid ${project.color}30` }}>
                {project.year}
              </span>
              <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#475569' }}>
                {project.category}
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, color: '#f1f5f9', marginBottom: '8px' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7, maxWidth: '600px' }}>
              {project.summary}
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#60a5fa', textDecoration: 'none', border: '1px solid rgba(37,99,235,0.3)', borderRadius: '8px', padding: '8px 14px', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
              <FiGithub size={14} /> Code
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'white', textDecoration: 'none', background: `linear-gradient(135deg, ${project.color}, ${project.color}90)`, borderRadius: '8px', padding: '8px 14px', transition: 'all 0.2s' }}>
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
          {project.tags.map((tag, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)', color: '#60a5fa', borderRadius: '6px', padding: '3px 10px' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Tech details grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px', marginBottom: '28px' }}>
          {project.techDetails.map((detail, i) => (
            <div key={i} style={{ background: 'rgba(5,11,24,0.5)', border: '1px solid rgba(37,99,235,0.08)', borderRadius: '10px', padding: '12px 16px' }}>
              <div style={{ fontSize: '11px', color: '#334155', fontFamily: 'var(--font-fira)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>{detail.label}</div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>{detail.value}</div>
            </div>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'transparent',
            border: `1px solid ${project.color}40`,
            borderRadius: '8px', padding: '10px 20px',
            color: project.color, fontSize: '13px',
            cursor: 'pointer', fontFamily: 'var(--font-fira)',
            transition: 'all 0.2s', marginBottom: expanded ? '28px' : '0',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = project.color + '10' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
        >
          {expanded ? '▲ Show Less' : '▼ Read Full Case Study'}
        </button>

        {/* Expanded content */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Full description */}
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e2e8f0', marginBottom: '16px', fontFamily: 'var(--font-fira)' }}>
                {'// about this project'}
              </h3>
              {project.description.split('\n\n').map((para, i) => (
                <p key={i} style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.9, marginBottom: '16px' }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e2e8f0', marginBottom: '16px', fontFamily: 'var(--font-fira)' }}>
                {'// key features'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: project.color, flexShrink: 0, boxShadow: `0 0 8px ${project.color}` }} />
                    <span style={{ fontSize: '14px', color: '#94a3b8' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function ProjectsBlog() {
  return (
    <div style={{ background: '#050b18', minHeight: '100vh', color: '#e2e8f0' }}>

      {/* Grid background */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: `linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)`,
        backgroundSize: '40px 40px', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Glow orbs */}
      <div style={{ position: 'fixed', borderRadius: '50%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', top: '-100px', right: '-100px', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', borderRadius: '50%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', bottom: '10%', left: '-100px', pointerEvents: 'none', zIndex: 0 }} />

      {/* Navbar */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        padding: '0 clamp(20px, 5vw, 80px)',
        height: '64px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(5,11,24,0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(37,99,235,0.1)',
      }}>
        <Link href="/" style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          color: '#60a5fa', textDecoration: 'none',
          fontSize: '14px', fontFamily: 'var(--font-fira)',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#93c5fd' }}
        onMouseLeave={e => { e.currentTarget.style.color = '#60a5fa' }}>
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <span style={{ fontFamily: 'var(--font-fira)', fontSize: '18px', fontWeight: 700, color: '#60a5fa', letterSpacing: '2px', textShadow: '0 0 12px rgba(96,165,250,0.7)' }}>
          &lt;IA /&gt;
        </span>
      </nav>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px)' }}>

        {/* Page heading */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '60px' }}>
          <p style={{ fontFamily: 'var(--font-fira)', fontSize: '12px', color: '#3b82f6', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
            {'// my work'}
          </p>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.1, marginBottom: '16px' }}>
            Project{' '}
            <span style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Showcase
            </span>
          </h1>
          <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.8, maxWidth: '600px' }}>
            A deep dive into everything I have built — the problems, the solutions, the tech stack, and what I learned along the way.
          </p>
        </motion.div>

        {/* Projects */}
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}