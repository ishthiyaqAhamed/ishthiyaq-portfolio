'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Database, Cloud, Wrench, Globe, Server, Terminal
} from 'lucide-react'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiMysql, SiJavascript, SiTypescript, SiPython, SiGooglecloud, SiFirebase,
  SiTailwindcss, SiDocker, SiGit, SiFigma, SiPostman, SiVercel,
  SiSupabase, SiPrisma, SiCplusplus, SiHtml5, SiJira
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa6'
import { VscVscode } from 'react-icons/vsc'
import { useWindowSize } from '../../hooks/useWindowSize'

const marqueeRow1 = [
  { name: 'React.js', icon: <SiReact />, color: '#61DAFB', desc: 'UI & Web Applications' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF', desc: 'Full Stack Framework' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#68A063', desc: 'Runtime Environment' },
  { name: 'Express.js', icon: <SiExpress />, color: '#FFFFFF', desc: 'REST APIs & Microservices' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', desc: 'NoSQL Database' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', desc: 'Relational Database' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', desc: 'Type-Safe JavaScript' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38BDF8', desc: 'Modern Styling Engine' },
  { name: 'AWS Cloud', icon: <FaAws />, color: '#FF9900', desc: 'Cloud Infrastructure' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED', desc: 'Containerization' },
]

const marqueeRow2 = [
  { name: 'Python', icon: <SiPython />, color: '#3776AB', desc: 'Data & Backend Scripting' },
  { name: 'Java', icon: <FaJava />, color: '#E76F00', desc: 'Enterprise Systems' },
  { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E', desc: 'BaaS & Realtime Data' },
  { name: 'Prisma ORM', icon: <SiPrisma />, color: '#5A67D8', desc: 'Next-Gen Database ORM' },
  { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285F4', desc: 'Cloud Computing' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28', desc: 'Realtime Backend' },
  { name: 'MySQL', icon: <SiMysql />, color: '#00758F', desc: 'Structured Database' },
  { name: 'Git & GitHub', icon: <SiGit />, color: '#F05032', desc: 'Version Control' },
  { name: 'VS Code', icon: <VscVscode />, color: '#007ACC', desc: 'Development IDE' },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', desc: 'API Testing & Docs' },
  { name: 'Figma', icon: <SiFigma />, color: '#F24E1E', desc: 'UI/UX Interface Design' },
  { name: 'Vercel', icon: <SiVercel />, color: '#FFFFFF', desc: 'Edge Deployment' },
]

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    category: 'Client-Side Architecture',
    icon: <Globe size={20} strokeWidth={1.5} />,
    skills: [
      { name: 'React.js', icon: <SiReact size={17} color="#61DAFB" />, level: 92, tag: 'Core' },
      { name: 'Next.js (App Router)', icon: <SiNextdotjs size={17} color="#FFFFFF" />, level: 88, tag: 'Production' },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript size={17} color="#F7DF1E" />, level: 90, tag: 'Advanced' },
      { name: 'TypeScript', icon: <SiTypescript size={17} color="#3178C6" />, level: 84, tag: 'Type-Safe' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={17} color="#38BDF8" />, level: 92, tag: 'Design Systems' },
      { name: 'HTML5 & CSS3', icon: <SiHtml5 size={17} color="#E34F26" />, level: 96, tag: 'Semantic' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Systems',
    category: 'Server-Side & APIs',
    icon: <Server size={20} strokeWidth={1.5} />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs size={17} color="#68A063" />, level: 88, tag: 'Runtime' },
      { name: 'Express.js', icon: <SiExpress size={17} color="#FFFFFF" />, level: 88, tag: 'RESTful APIs' },
      { name: 'Python', icon: <SiPython size={17} color="#3776AB" />, level: 78, tag: 'Automation' },
      { name: 'Java (OOP)', icon: <FaJava size={17} color="#E76F00" />, level: 76, tag: 'Enterprise' },
      { name: 'Prisma ORM', icon: <SiPrisma size={17} color="#5A67D8" />, level: 82, tag: 'Schema/Migrations' },
      { name: 'REST & GraphQL', icon: <Terminal size={17} color="#e4e4e7" />, level: 86, tag: 'Architecture' },
    ],
  },
  {
    id: 'database',
    title: 'Database & Storage',
    category: 'Data Persistence & Caching',
    icon: <Database size={20} strokeWidth={1.5} />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb size={17} color="#47A248" />, level: 88, tag: 'NoSQL' },
      { name: 'PostgreSQL', icon: <SiPostgresql size={17} color="#4169E1" />, level: 82, tag: 'Relational' },
      { name: 'MySQL', icon: <SiMysql size={17} color="#00758F" />, level: 80, tag: 'SQL' },
      { name: 'Supabase', icon: <SiSupabase size={17} color="#3ECF8E" />, level: 84, tag: 'Postgres BaaS' },
      { name: 'Firebase Firestore', icon: <SiFirebase size={17} color="#FFCA28" />, level: 80, tag: 'Realtime' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    category: 'Deployment & Telemetry',
    icon: <Cloud size={20} strokeWidth={1.5} />,
    skills: [
      { name: 'AWS (S3, EC2, IAM)', icon: <FaAws size={17} color="#FF9900" />, level: 78, tag: 'Certified CP' },
      { name: 'Google Cloud Platform', icon: <SiGooglecloud size={17} color="#4285F4" />, level: 75, tag: 'GCP Certified' },
      { name: 'Docker', icon: <SiDocker size={17} color="#2496ED" />, level: 74, tag: 'Containers' },
      { name: 'Vercel Edge Platform', icon: <SiVercel size={17} color="#FFFFFF" />, level: 90, tag: 'CI/CD' },
      { name: 'Git & GitHub Workflows', icon: <SiGit size={17} color="#F05032" />, level: 92, tag: 'VCS' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Ecosystem',
    category: 'Workflow & Productivity',
    icon: <Wrench size={20} strokeWidth={1.5} />,
    skills: [
      { name: 'VS Code Ecosystem', icon: <VscVscode size={17} color="#007ACC" />, level: 95, tag: 'Development' },
      { name: 'Postman', icon: <SiPostman size={17} color="#FF6C37" />, level: 88, tag: 'API Specs' },
      { name: 'Figma', icon: <SiFigma size={17} color="#F24E1E" />, level: 75, tag: 'UI Wireframing' },
      { name: 'Jira & Agile', icon: <SiJira size={17} color="#0052CC" />, level: 80, tag: 'Scrum' },
      { name: 'C / C++', icon: <SiCplusplus size={17} color="#00599C" />, level: 68, tag: 'Systems' },
    ],
  },
]

function SkillMetricBar({ name, icon, level, tag, index }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '24px', height: '24px', borderRadius: '6px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {icon}
          </div>
          <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#f4f4f5' }}>{name}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontFamily: 'var(--font-fira)', fontSize: '10px',
            color: '#a1a1aa', background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '2px 7px', borderRadius: '4px'
          }}>
            {tag}
          </span>
          <span style={{ fontFamily: 'var(--font-fira)', fontSize: '12px', fontWeight: 600, color: '#d4d4d8' }}>
            {level}%
          </span>
        </div>
      </div>
      <div style={{
        height: '4px',
        background: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '999px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.0, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{
            height: '100%',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, #52525b 0%, #e4e4e7 75%, #3b82f6 100%)',
          }}
        />
      </div>
    </div>
  )
}

function MarqueeCard({ item }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      background: 'rgba(12, 12, 15, 0.88)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '14px',
      padding: '12px 20px',
      margin: '0 8px',
      boxShadow: '0 10px 26px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
      transition: 'all 0.3s ease',
      cursor: 'default',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.24)'
      e.currentTarget.style.transform = 'translateY(-3px)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
      e.currentTarget.style.transform = 'translateY(0)'
    }}
    >
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        color: item.color,
        flexShrink: 0
      }}>
        {item.icon}
      </div>
      <div>
        <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#f4f4f5', whiteSpace: 'nowrap' }}>
          {item.name}
        </div>
        <div style={{ fontSize: '11px', color: '#71717a', fontFamily: 'var(--font-fira)', whiteSpace: 'nowrap' }}>
          {item.desc}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const { isMobile, isTablet } = useWindowSize()
  const [activeFilter, setActiveFilter] = useState('all')

  const pad = isMobile ? '80px 20px' : isTablet ? '100px 40px' : '130px 72px'
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'

  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeFilter)

  return (
    <section
      id="skills"
      style={{
        padding: pad,
        position: 'relative',
        overflow: 'hidden',
        background: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* Subtle Monochrome Glow */}
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
        top: '15%',
        right: '-180px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)',
        bottom: '10%',
        left: '-150px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1380px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 800, color: '#f4f4f5', letterSpacing: '-0.03em', lineHeight: 1.08 }}
          >
            Tech{' '}
            <span className="silver-text-gradient">
              Stack &amp; Arsenal
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#a1a1aa', maxWidth: '580px', marginTop: '14px', lineHeight: 1.7 }}
          >
            Modern frameworks, enterprise cloud services, and scalable database engines mastered through high-performance engineering.
          </motion.p>
        </div>

        {/* Infinite Dual-Row Animated Tech Marquee */}
        <div style={{
          position: 'relative',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginBottom: '56px',
          overflow: 'hidden',
          padding: '10px 0',
        }}>
          {/* Left & Right gradient masks for seamless fade into #050505 */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'clamp(60px, 12vw, 180px)',
            height: '100%',
            background: 'linear-gradient(90deg, #050505 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'clamp(60px, 12vw, 180px)',
            height: '100%',
            background: 'linear-gradient(270deg, #050505 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />

          {/* Row 1: Flowing Left */}
          <div style={{ overflow: 'hidden', marginBottom: '14px' }}>
            <div className="animate-marquee-left">
              {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, i) => (
                <MarqueeCard key={`row1-${i}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2: Flowing Right */}
          <div style={{ overflow: 'hidden' }}>
            <div className="animate-marquee-right">
              {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, i) => (
                <MarqueeCard key={`row2-${i}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '40px',
        }}>
          {[
            { id: 'all', label: 'All Skills' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend' },
            { id: 'database', label: 'Database' },
            { id: 'cloud', label: 'Cloud & DevOps' },
            { id: 'tools', label: 'Tools' },
          ].map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  fontFamily: 'var(--font-fira)',
                  fontSize: '12px',
                  fontWeight: isActive ? 600 : 500,
                  padding: '8px 18px',
                  borderRadius: '999px',
                  border: isActive ? '1px solid #f4f4f5' : '1px solid rgba(255, 255, 255, 0.09)',
                  background: isActive ? '#f4f4f5' : 'rgba(12, 12, 15, 0.8)',
                  color: isActive ? '#050505' : '#a1a1aa',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#a1a1aa'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)'
                  }
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Categorized Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            style={{
              display: 'grid',
              gridTemplateColumns: cols,
              gap: '24px',
            }}
          >
            {filteredCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={{
                  background: 'rgba(12, 12, 15, 0.82)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '28px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 44px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Top specular hairline */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '18%',
                  right: '18%',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.28), transparent)',
                }} />

                {/* Card Title Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e4e4e7',
                    flexShrink: 0,
                  }}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#f4f4f5', lineHeight: 1.3 }}>
                      {cat.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#71717a' }}>
                      {cat.category}
                    </p>
                  </div>
                </div>

                {/* Skills Metric Bars */}
                <div>
                  {cat.skills.map((skill, j) => (
                    <SkillMetricBar
                      key={j}
                      name={skill.name}
                      icon={skill.icon}
                      level={skill.level}
                      tag={skill.tag}
                      index={j}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
