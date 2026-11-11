'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiSupabase, SiPrisma, SiTailwindcss, SiTypescript, SiPython,
  SiMysql, SiJavascript, SiHtml5, SiCss, SiVercel
} from 'react-icons/si'
import LogoLoop from '../components/ui/LogoLoop'
import FolderFloat from '../components/ui/FolderFloat'
import styles from './ProjectsPage.module.css'

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

const caseStudyTechLogos = [
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org', hoverColor: '#ffffff' },
  { node: <SiReact />, title: 'React', href: 'https://react.dev', hoverColor: '#61dafb' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org', hoverColor: '#3178c6' },
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org', hoverColor: '#68a063' },
  { node: <SiExpress />, title: 'Express.js', href: 'https://expressjs.com', hoverColor: '#ffffff' },
  { node: <SiSupabase />, title: 'Supabase', href: 'https://supabase.com', hoverColor: '#3ecf8e' },
  { node: <SiPostgresql />, title: 'PostgreSQL', href: 'https://www.postgresql.org', hoverColor: '#4169e1' },
  { node: <SiPrisma />, title: 'Prisma', href: 'https://www.prisma.io', hoverColor: '#5a67d8' },
  { node: <SiMongodb />, title: 'MongoDB', href: 'https://www.mongodb.com', hoverColor: '#47a248' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com', hoverColor: '#38bdf8' },
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org', hoverColor: '#3776ab' },
  { node: <SiMysql />, title: 'MySQL', href: 'https://www.mysql.com', hoverColor: '#00758f' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', hoverColor: '#f7df1e' },
  { node: <SiVercel />, title: 'Vercel', href: 'https://vercel.com', hoverColor: '#ffffff' },
]

const folderProjectItems = [
  { label: 'NovaFlow SaaS CRM', value: 'novaflow-crm' },
  { label: 'Pharmacy Enterprise ERP', value: 'pharmacy-erp' },
  { label: 'Gemotions Fine Jewelry', value: 'gemotions' },
  { label: 'Food Marketplace', value: 'food-marketplace' },
]

const projects = [
  {
    id: 'novaflow-crm',
    title: 'NovaFlow — Multi-Tenant SaaS CRM',
    category: 'Full Stack SaaS • Production',
    image: '/projects/novaflow.png',
    year: '2025',
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
    image: '/projects/food-marketplace.png',
    year: '2024 – 2025',
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
    image: '/projects/spiff-tracker.png',
    year: '2024 – 2025',
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
    image: '/projects/pharmacy-erp.png',
    year: '2025',
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
    image: '/projects/gemotions.png',
    year: '2025',
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
    image: null,
    year: '2025',
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
    image: null,
    year: '2023',
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
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <motion.div
      id={project.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      style={{
        scrollMarginTop: '92px',
        background: 'rgba(12, 12, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        overflow: 'hidden',
        marginBottom: '32px',
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

      <div style={{ padding: 'clamp(22px, 4vw, 44px)' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
          <div style={{ flex: 1, minWidth: '220px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: 'var(--font-fira)', fontSize: '11px',
                color: '#e4e4e7', background: 'rgba(255, 255, 255, 0.05)',
                padding: '3px 12px', borderRadius: '999px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                fontWeight: 600,
              }}>
                {project.year}
              </span>
              <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#71717a' }}>
                {project.category}
              </span>
              {project.live && (
                <span style={{
                  fontFamily: 'var(--font-fira)', fontSize: '11px',
                  color: '#60a5fa', background: 'rgba(59, 130, 246, 0.1)',
                  padding: '3px 10px', borderRadius: '999px',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  display: 'flex', alignItems: 'center', gap: '5px',
                  fontWeight: 600,
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }} />
                  Live Product
                </span>
              )}
            </div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 700, color: '#f4f4f5', marginBottom: '8px' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: 'clamp(13.5px, 1.5vw, 15px)', color: '#a1a1aa', lineHeight: 1.75 }}>
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
                fontSize: '13px', color: '#e4e4e7', textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.16)', borderRadius: '8px',
                padding: '8px 14px', background: 'rgba(255, 255, 255, 0.03)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.09)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)'
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
                  fontSize: '13px', color: '#050505', textDecoration: 'none',
                  background: '#f4f4f5',
                  borderRadius: '8px', padding: '8px 16px', fontWeight: 600,
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
          </div>
        </div>

        {/* Project Screenshot Preview */}
        {project.image && !imgFailed && (
          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: '#08080a',
            height: '280px',
          }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 960px) 100vw, 880px"
              style={{
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
              onError={() => setImgFailed(true)}
            />
          </div>
        )}

        {/* Tags with Real Brand Icons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {project.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-fira)',
                fontSize: '11px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                color: '#d4d4d8',
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
              background: '#09090b',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '10px', padding: '12px 14px',
            }}>
              <div style={{
                fontSize: '10px', color: '#71717a',
                fontFamily: 'var(--font-fira)', letterSpacing: '1px',
                textTransform: 'uppercase', marginBottom: '4px',
              }}>{detail.label}</div>
              <div style={{ fontSize: '12.5px', color: '#f4f4f5', fontWeight: 500 }}>{detail.value}</div>
            </div>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: '8px', padding: '10px 20px',
            color: '#e4e4e7', fontSize: '13px',
            cursor: 'pointer', fontFamily: 'var(--font-fira)',
            transition: 'all 0.2s',
            marginBottom: expanded ? '24px' : '0',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)'
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
                fontSize: '13px', fontWeight: 600,
                marginBottom: '14px', fontFamily: 'var(--font-fira)',
                color: '#60a5fa', letterSpacing: '1.2px', textTransform: 'uppercase'
              }}>
                {'// Technical Implementation'}
              </h3>
              {project.description.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  fontSize: 'clamp(13.5px, 1.5vw, 15px)',
                  color: '#d4d4d8', lineHeight: 1.9, marginBottom: '16px',
                }}>
                  {para}
                </p>
              ))}
            </div>

            <div>
              <h3 style={{
                fontSize: '13px', fontWeight: 600,
                marginBottom: '14px', fontFamily: 'var(--font-fira)',
                color: '#60a5fa', letterSpacing: '1.2px', textTransform: 'uppercase'
              }}>
                {'// Architectural Highlights'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '5px', height: '5px', borderRadius: '50%',
                      background: '#3b82f6', flexShrink: 0,
                    }} />
                    <span style={{ fontSize: 'clamp(13px, 1.5vw, 14.5px)', color: '#a1a1aa' }}>{h}</span>
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
    <div style={{ background: '#050505', minHeight: '100vh', color: '#f4f4f5' }}>

      {/* Navbar */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        padding: '0 clamp(20px, 5vw, 72px)',
        height: '70px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(5, 5, 5, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}>
        <Link href="/" style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          color: '#e4e4e7', textDecoration: 'none',
          fontSize: '12px', fontFamily: 'var(--font-fira)',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          transition: 'color 0.2s',
          fontWeight: 500,
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#ffffff' }}
        onMouseLeave={e => { e.currentTarget.style.color = '#e4e4e7' }}>
          <ArrowLeft size={15} /> Back to Portfolio
        </Link>

        <Link href="/" style={{
          fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 900,
          letterSpacing: '-0.04em', textDecoration: 'none', color: '#f4f4f5',
        }}>
          IA<span style={{ color: '#3b82f6' }}>.</span>
        </Link>
      </nav>

      {/* Main Content */}
      <div className={styles.mainContent}>

        {/* Page Heading & Interactive Folder */}
        <div className={styles.headerSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.headerCopy}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '999px',
              padding: '6px 16px',
              marginBottom: '16px',
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
                Engineering Blueprints
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(34px, 5vw, 58px)', fontWeight: 800,
              color: '#f4f4f5', lineHeight: 1.08, marginBottom: '14px', letterSpacing: '-0.03em'
            }}>
              Project{' '}
              <span className="silver-text-gradient">
                Case Studies
              </span>
            </h1>
            <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#a1a1aa', lineHeight: 1.75, maxWidth: '580px' }}>
              A comprehensive technical breakdown of flagship architectures — problems addressed, engineering design patterns, tech stack ecosystems, and production takeaways.
            </p>

            {/* Stats row */}
            <div className={styles.statsRow}>
              {[
                { value: '7', label: 'Engineered Systems' },
                { value: '3', label: 'Live Deployments' },
                { value: '3+', label: 'Years Engineering' },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: 'rgba(12, 12, 15, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px', padding: '16px 22px',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)' }} />
                  <div className="silver-text-gradient" style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800 }}>{stat.value}</div>
                  <div style={{ fontSize: '11px', color: '#a1a1aa', fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className={styles.folderSlot}
          >
            <FolderFloat
              items={folderProjectItems}
              label="Flagship Work"
              sublabel="4 key projects"
              trigger="hover"
              closeOnSelect
              physics
              drift={0.5}
              onSelect={(projectId) => {
                document.getElementById(projectId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              folderColor="#27272a"
              frontColor="#3f3f46"
              paperColor="#e4e4e7"
              itemColor="#f4f4f5"
              itemTextColor="#09090b"
              labelColor="#f4f4f5"
              width={196}
              height={144}
              radius={14}
              spread={178}
              lift={26}
              tilt={8}
              flapAngle={34}
              restAngle={16}
              openDuration={520}
              stagger={45}
              bounce={0.3}
            />
          </motion.div>
        </div>

        {/* Tech Stack Loop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className={styles.techLoopWrap}
        >
          <LogoLoop
            logos={caseStudyTechLogos}
            speed={85}
            direction="left"
            logoHeight={34}
            gap={48}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutWidth={0.14}
            labels="hover"
            ariaLabel="Technologies used across case studies"
            style={{ fontFamily: 'var(--font-fira)' }}
          />
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
            color: '#050505', textDecoration: 'none',
            fontFamily: 'var(--font-fira)', fontSize: '13px', fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            background: '#f4f4f5',
            borderRadius: '999px', padding: '14px 30px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#3b82f6'
            e.currentTarget.style.color = '#ffffff'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#f4f4f5'
            e.currentTarget.style.color = '#050505'
          }}>
            <ArrowLeft size={16} /> Return to Main Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
