'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql, 
  SiSupabase, SiPrisma, SiTailwindcss, SiTypescript, SiPython, 
  SiMysql, SiJavascript, SiHtml5, SiCss 
} from 'react-icons/si'

const tagIcons = {
  'Next.js 16': <SiNextdotjs size={12} color="#FFFFFF" />,
  'Next.js': <SiNextdotjs size={12} color="#FFFFFF" />,
  'React': <SiReact size={12} color="#61DAFB" />,
  'Node.js': <SiNodedotjs size={12} color="#68A063" />,
  'TypeScript': <SiTypescript size={12} color="#3178C6" />,
  'Supabase': <SiSupabase size={12} color="#3ECF8E" />,
  'PostgreSQL': <SiPostgresql size={12} color="#4169E1" />,
  'Prisma 7': <SiPrisma size={12} color="#5A67D8" />,
  'Prisma': <SiPrisma size={12} color="#5A67D8" />,
  'Tailwind CSS': <SiTailwindcss size={12} color="#38BDF8" />,
  'Tailwind': <SiTailwindcss size={12} color="#38BDF8" />,
  'MongoDB': <SiMongodb size={12} color="#47A248" />,
  'Python': <SiPython size={12} color="#3776AB" />,
  'MySQL': <SiMysql size={12} color="#00758F" />,
  'JavaScript': <SiJavascript size={12} color="#F7DF1E" />,
  'HTML': <SiHtml5 size={12} color="#E34F26" />,
  'CSS': <SiCss size={12} color="#1572B6" />,
}

const projects = [
  {
    id: 'novaflow-crm',
    title: 'NovaFlow — Multi-Tenant SaaS CRM',
    category: 'Full Stack SaaS • Production',
    year: '2025',
    color: '#d4af37',
    tags: ['Next.js 16', 'TypeScript', 'Supabase', 'PostgreSQL', 'Prisma 7', 'Tailwind CSS'],
    summary: 'A production-ready multi-tenant SaaS CRM with GPT-4o AI Copilot, 7-stage Kanban pipeline, and a Super Admin observability portal — live at novaflowpro.online.',
    description: `NovaFlow is the most technically advanced project I have built. It is a fully production-ready multi-tenant SaaS CRM platform where each workspace is completely isolated — meaning multiple companies can use the same platform with zero data crossover between tenants.

The standout feature is the embedded GPT-4o AI Copilot. It connects directly to live deal data, revenue pipeline metrics, and overdue tasks to generate real actionable sales recommendations — not generic advice, but insights based on what is actually happening in your pipeline right now.

I built the entire authentication system from scratch using Resend for email delivery — OTP-based login and a full password recovery flow. There is also a Super Admin portal that gives platform-level observability, letting admins monitor live telemetry across all tenants without touching their data.

The frontend is a fully custom dark interface I designed myself — no UI kits, no templates. Every component including the interactive drawers, KPI telemetry cards, and the touch-optimized Kanban board was built from scratch with mobile responsiveness in mind.

This project pushed me into truly senior-level territory — multi-tenancy, AI integration, SaaS architecture, custom auth, and production deployment with a custom domain.`,
    highlights: [
      'GPT-4o AI Copilot analyzing live pipeline data',
      'Multi-tenant SaaS with complete tenant data segregation',
      'Role-based team invitations and workspace management',
      '7-stage Kanban deal pipeline with touch optimization',
      'CSV spreadsheet import and export engine',
      'Email OTP authentication and password recovery via Resend',
      'Super Admin observability portal with live platform telemetry',
      'Contacts directory and company management',
      'KPI telemetry dashboard cards',
      'Custom mobile-responsive dark design system',
    ],
    techDetails: [
      { label: 'Framework', value: 'Next.js 16 (App Router)' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'Database', value: 'Supabase PostgreSQL' },
      { label: 'ORM', value: 'Prisma 7' },
      { label: 'AI Engine', value: 'OpenAI GPT-4o' },
      { label: 'Email', value: 'Resend' },
      { label: 'Styling', value: 'Tailwind CSS (custom)' },
      { label: 'Auth', value: 'Custom OTP + bcrypt' },
      { label: 'Deployment', value: 'Vercel + Custom Domain' },
      { label: 'Type', value: 'Multi-tenant SaaS' },
      { label: 'Status', value: 'Live in Production' },
      { label: 'Domain', value: 'novaflowpro.online' },
    ],
    github: 'https://github.com/ishthiyaqAhamed',
    live: 'https://novaflowpro.online',
  },
  {
    id: 'food-marketplace',
    title: 'Food Marketplace Platform - Local Plates',
    category: 'Full Stack • Undergraduate Project',
    year: '2024 – 2025',
    color: '#f5d77f',
    tags: ['MongoDB', 'React', 'Node.js'],
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
      { label: 'Frontend', value: 'React.js, CSS3' },
      { label: 'Backend', value: 'Node.js, Express.js' },
      { label: 'Database', value: 'MongoDB, Mongoose' },
      { label: 'Real-time', value: 'Socket.io' },
      { label: 'Algorithm', value: "Dijkstra's Shortest Path" },
      { label: 'Auth', value: 'JWT, bcrypt' },
    ],
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
  },
  {
    id: 'spiff-tracker',
    title: 'Spiff Tracker SaaS',
    category: 'Full Stack • Robance Lanka Pvt Ltd',
    year: '2024 – 2025',
    color: '#c5a880',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    summary: 'A full-stack SaaS platform automating income tracking and reconciliation for Total Wireless dealers.',
    description: `This was a real client project at Robance Lanka Pvt Ltd. Total Wireless dealers approached us with a painful problem — they were manually tracking commissions and income on spreadsheets, which caused errors and wasted hours every week.

I designed and built the entire platform from scratch as the frontend developer. The system automatically pulls dealer sales data, calculates commissions called SPIFFs, and generates reports — eliminating all manual work.

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
  },
  {
    id: 'pharmacy-erp',
    title: 'Pharmacy Enterprise ERP System',
    category: 'Full Stack • Live Product',
    year: '2025',
    color: '#d4af37',
    tags: ['React', 'Node.js', 'MongoDB'],
    summary: 'A multi-branch pharmacy inventory and sales management ERP system — live and in production.',
    description: `This is a fully live ERP system built for pharmacy businesses managing multiple branches. The system handles everything from inventory tracking to sales management across all branches from a single dashboard.

The platform includes a secure login system, branch-wise inventory management, sales reporting, and real-time stock level monitoring. It was built to solve the real problem of pharmacies losing track of stock across multiple locations.

Seeing this project go live and being used by real pharmacy staff was one of the most rewarding experiences of my development journey. It proved that the systems I build can handle real business operations reliably.`,
    highlights: [
      'Multi-branch inventory management',
      'Real-time stock level monitoring',
      'Sales and billing management',
      'Secure role-based authentication',
      'Branch performance analytics dashboard',
    ],
    techDetails: [
      { label: 'Frontend', value: 'React.js' },
      { label: 'Backend', value: 'Node.js, Express.js' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Type', value: 'ERP System' },
      { label: 'Status', value: 'Live in Production' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    github: 'https://github.com/ishthiyaqAhamed',
    live: 'https://pharmacy-erp-lime.vercel.app/',
  },
  {
    id: 'gemotions',
    title: 'Gemotions — Rare Gems & Fine Jewelry',
    category: 'Full Stack • Luxury E-Commerce',
    year: '2025',
    color: '#f5d77f',
    tags: ['React', 'Node.js', 'MongoDB'],
    summary: 'A full e-commerce platform for rare gemstones and handcrafted fine jewelry — ethically sourced and lab certified.',
    description: `Gemotions is a live e-commerce store for rare gems and fine jewelry. The platform was built to give gem enthusiasts and jewelry lovers access to ethically sourced, lab certified gemstones from around the world.

Building an e-commerce platform for luxury products came with unique challenges — the UI had to feel premium, the product presentation had to be stunning, and the shopping experience had to be seamless and trustworthy.

I built the complete frontend and backend, including product catalog management, filtering by gem type and price, a smooth cart and checkout flow, and an admin dashboard for managing inventory and orders. This project pushed my UI/UX skills significantly.`,
    highlights: [
      'Full e-commerce shopping experience',
      'Advanced product filtering by gem type and price',
      'Lab certification display for each product',
      'Secure cart and checkout flow',
      'Admin dashboard for inventory and orders',
    ],
    techDetails: [
      { label: 'Frontend', value: 'React.js' },
      { label: 'Backend', value: 'Node.js, Express.js' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Type', value: 'E-Commerce Platform' },
      { label: 'Status', value: 'Live' },
      { label: 'Domain', value: 'gemotions.shop' },
    ],
    github: 'https://github.com/ishthiyaqAhamed',
    live: 'https://gemotions.shop/',
  },
  {
    id: 'pharmacy-management',
    title: 'Pharmacy Management System',
    category: 'Full Stack • Group Project',
    year: '2025',
    color: '#e5c07b',
    tags: ['MySQL', 'HTML', 'CSS', 'JavaScript'],
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
      { label: 'Role', value: 'Lead Developer & Coordinator' },
      { label: 'Team Size', value: '4 members' },
      { label: 'Institution', value: 'Sliit City University' },
    ],
    github: 'https://github.com/ishthiyaqAhamed',
    live: null,
  },
  {
    id: 'supermarket-sales',
    title: 'Supermarket Sales System',
    category: 'Backend • HND Project',
    year: '2023',
    color: '#d4af37',
    tags: ['Python'],
    summary: 'A Python-based supermarket management system with stock control and sales reporting.',
    description: `This was my HND Computing project at BCAS Campus. It was one of my earliest full projects and the one that made me fall in love with building real systems.

I built a complete supermarket backend system in Python that handles stock management, checks product availability in real time, processes sales, and generates end-of-day reports.

Although it is a CLI based application, the logic behind it taught me core programming fundamentals — file handling, data structures, loops, and building systems that actually solve a real problem. This project is where my journey as a developer really began.`,
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
  },
]

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      style={{
        background: 'rgba(10, 16, 28, 0.75)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(212, 175, 55, 0.16)',
        borderRadius: '20px',
        overflow: 'hidden',
        marginBottom: '32px',
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
      {/* Top gold bar */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #aa7c11, #d4af37, #f5d77f)' }} />

      <div style={{ padding: 'clamp(22px, 4vw, 44px)' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
          <div style={{ flex: 1, minWidth: '220px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: 'var(--font-fira)', fontSize: '11px',
                color: '#f5d77f', background: 'rgba(212, 175, 55, 0.12)',
                padding: '3px 12px', borderRadius: '20px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                fontWeight: 600,
              }}>
                {project.year}
              </span>
              <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#64748b' }}>
                {project.category}
              </span>
              {project.live && (
                <span style={{
                  fontFamily: 'var(--font-fira)', fontSize: '11px',
                  color: '#22c55e', background: 'rgba(34, 197, 94, 0.12)',
                  padding: '3px 10px', borderRadius: '20px',
                  border: '1px solid rgba(34, 197, 94, 0.35)',
                  display: 'flex', alignItems: 'center', gap: '5px',
                  fontWeight: 600,
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }} />
                  Live Product
                </span>
              )}
            </div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: 'clamp(13.5px, 1.5vw, 15px)', color: '#94a3b8', lineHeight: 1.75 }}>
              {project.summary}
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '13px', color: '#f5d77f', textDecoration: 'none',
                border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '8px',
                padding: '8px 14px', background: 'rgba(212, 175, 55, 0.05)',
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
              <FiGithub size={14} /> Repository
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-btn"
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontSize: '13px', color: '#030712', textDecoration: 'none',
                  background: 'linear-gradient(135deg, #f5d77f 0%, #d4af37 60%, #aa7c11 100%)',
                  borderRadius: '8px', padding: '8px 16px', fontWeight: 700,
                  boxShadow: '0 0 16px rgba(212, 175, 55, 0.35)',
                }}
              >
                <ExternalLink size={14} /> Live Application
              </a>
            )}
          </div>
        </div>

        {/* Tags with Real Brand Icons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {project.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-fira)',
                fontSize: '11px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                color: '#e2e8f0',
                borderRadius: '6px',
                padding: '4px 10px',
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

        {/* Tech details matrix */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
          gap: '10px', marginBottom: '24px',
        }}>
          {project.techDetails.map((detail, i) => (
            <div key={i} style={{
              background: 'rgba(8, 12, 22, 0.6)',
              border: '1px solid rgba(212, 175, 55, 0.1)',
              borderRadius: '10px', padding: '12px 14px',
            }}>
              <div style={{
                fontSize: '10px', color: '#64748b',
                fontFamily: 'var(--font-fira)', letterSpacing: '1px',
                textTransform: 'uppercase', marginBottom: '4px',
              }}>{detail.label}</div>
              <div style={{ fontSize: '12.5px', color: '#f8fafc', fontWeight: 500 }}>{detail.value}</div>
            </div>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'transparent',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            borderRadius: '8px', padding: '10px 20px',
            color: '#f5d77f', fontSize: '13px',
            cursor: 'pointer', fontFamily: 'var(--font-fira)',
            transition: 'all 0.2s',
            marginBottom: expanded ? '24px' : '0',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)'
            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.7)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)'
          }}
        >
          {expanded ? '▲ Hide Blueprint Details' : '▼ View Deep Architecture & Notes'}
        </button>

        {/* Expanded content */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div style={{ marginBottom: '24px', marginTop: '16px' }}>
              <h3 style={{
                fontSize: '13.5px', fontWeight: 600,
                marginBottom: '14px', fontFamily: 'var(--font-fira)',
                color: '#f5d77f', letterSpacing: '1px', textTransform: 'uppercase'
              }}>
                {'// Technical Implementation'}
              </h3>
              {project.description.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  fontSize: 'clamp(13.5px, 1.5vw, 15px)',
                  color: '#cbd5e1', lineHeight: 1.9, marginBottom: '16px',
                }}>
                  {para}
                </p>
              ))}
            </div>

            <div>
              <h3 style={{
                fontSize: '13.5px', fontWeight: 600,
                marginBottom: '14px', fontFamily: 'var(--font-fira)',
                color: '#f5d77f', letterSpacing: '1px', textTransform: 'uppercase'
              }}>
                {'// Architectural Highlights'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#d4af37', flexShrink: 0,
                      boxShadow: '0 0 8px #d4af37',
                    }} />
                    <span style={{ fontSize: 'clamp(13px, 1.5vw, 14.5px)', color: '#94a3b8' }}>{h}</span>
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
    <div style={{ background: '#030712', minHeight: '100vh', color: '#e2e8f0' }}>

      {/* Grid background */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.02) 1px, transparent 1px)`,
        backgroundSize: '48px 48px', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Luxury glow orbs */}
      <div style={{ position: 'fixed', borderRadius: '50%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)', top: '-120px', right: '-100px', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', borderRadius: '50%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%)', bottom: '10%', left: '-100px', pointerEvents: 'none', zIndex: 0 }} />

      {/* Navbar */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        padding: '0 clamp(20px, 5vw, 80px)',
        height: '70px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(3, 7, 18, 0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
      }}>
        <Link href="/" style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          color: '#f5d77f', textDecoration: 'none',
          fontSize: '13.5px', fontFamily: 'var(--font-fira)',
          transition: 'all 0.2s',
          fontWeight: 600,
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#fff7d6' }}
        onMouseLeave={e => { e.currentTarget.style.color = '#f5d77f' }}>
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <span style={{
          fontFamily: 'var(--font-fira)', fontSize: '18px', fontWeight: 700,
          letterSpacing: '2px',
          background: 'linear-gradient(135deg, #fff7d6 0%, #f5d77f 40%, #d4af37 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 16px rgba(212, 175, 55, 0.3)',
        }}>
          &lt;IA /&gt;
        </span>
      </nav>

      {/* Main Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '960px', margin: '0 auto',
        padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px)',
      }}>

        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '60px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '999px',
            padding: '6px 18px',
            marginBottom: '16px',
          }}>
            <Sparkles size={13} color="#d4af37" />
            <span style={{
              fontFamily: 'var(--font-fira)',
              fontSize: '11px',
              color: '#f5d77f',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              Engineering Blueprints
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700,
            color: '#f8fafc', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.02em'
          }}>
            Project{' '}
            <span className="gold-text-gradient">
              Case Studies
            </span>
          </h1>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 16.5px)', color: '#94a3b8', lineHeight: 1.8, maxWidth: '640px' }}>
            A comprehensive technical breakdown of flagship architectures — problems addressed, engineering design patterns, tech stack ecosystems, and production takeaways.
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '18px', marginTop: '36px', flexWrap: 'wrap' }}>
            {[
              { value: '7', label: 'Engineered Systems' },
              { value: '3', label: 'Live Deployments' },
              { value: '3+', label: 'Years Engineering' },
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(10, 16, 28, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '14px', padding: '18px 24px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #aa7c11, #d4af37, #f5d77f)' }} />
                <div className="gold-text-gradient" style={{ fontSize: '26px', fontWeight: 800 }}>{stat.value}</div>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects list */}
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}

        {/* Back to portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '40px' }}
        >
          <Link href="/" className="luxury-btn" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: '#030712', textDecoration: 'none',
            fontFamily: 'var(--font-fira)', fontSize: '14px', fontWeight: 700,
            background: 'linear-gradient(135deg, #f5d77f 0%, #d4af37 60%, #aa7c11 100%)',
            borderRadius: '10px', padding: '14px 28px',
            boxShadow: '0 0 24px rgba(212, 175, 55, 0.35)',
          }}>
            <ArrowLeft size={16} /> Return to Main Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  )
}