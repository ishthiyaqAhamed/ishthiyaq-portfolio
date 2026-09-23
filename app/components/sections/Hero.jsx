'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript, 
  SiDocker, SiTailwindcss, SiPostgresql 
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { ArrowRight, Download } from 'lucide-react'
import { useWindowSize } from '../../hooks/useWindowSize'

const TYPED_STRINGS = [
  'Full Stack Software Engineer',
  'MERN & Next.js Architect',
  'Cloud & Systems Builder',
  'High-Performance UI/UX Engineer',
]

function useTyped(strings) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[idx % strings.length]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, display.length + 1))
        if (display.length + 1 === current.length) setTimeout(() => setDeleting(true), 2000)
      } else {
        setDisplay(current.slice(0, display.length - 1))
        if (display.length === 0) { setDeleting(false); setIdx(i => i + 1) }
      }
    }, deleting ? 35 : 70)
    return () => clearTimeout(timeout)
  }, [display, deleting, idx, strings])

  return display
}

const codeLines = [
  { indent: 0, tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'engineer' }, { t: 'op', v: ' = {' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'name' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Ishthiyaq Ahamed"' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'title' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Full Stack Engineer"' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'stack' }, { t: 'op', v: ': [' }, { t: 'str', v: '"Next.js"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"MERN"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"AWS"' }, { t: 'op', v: '],' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'credentials' }, { t: 'op', v: ': ' }, { t: 'str', v: '"BSc (Hons) Software Eng"' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'available' }, { t: 'op', v: ': ' }, { t: 'bool', v: 'true' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'ethos' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Excellence in Craft"' }, { t: 'op', v: ',' }] },
  { indent: 0, tokens: [{ t: 'op', v: '}' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: 'keyword', v: 'async function ' }, { t: 'fn', v: 'initiateCollab' }, { t: 'op', v: '() {' }] },
  { indent: 1, tokens: [{ t: 'keyword', v: 'return ' }, { t: 'str', v: '"Uncompromising Quality & Speed"' }, { t: 'op', v: ';' }] },
  { indent: 0, tokens: [{ t: 'op', v: '}' }] },
]

const tokenColors = {
  keyword: '#f5d77f',
  var: '#e2e8f0',
  key: '#94a3b8',
  str: '#d4af37',
  bool: '#38bdf8',
  fn: '#60a5fa',
  op: '#64748b',
}

function CodeCard() {
  const [visibleLines, setVisibleLines] = useState(0)
  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 110)
      return () => clearTimeout(t)
    }
  }, [visibleLines])

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        background: 'rgba(8, 12, 22, 0.85)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(212, 175, 55, 0.22)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(212, 175, 55, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        width: '100%',
        maxWidth: '520px',
      }}
    >
      {/* Terminal Titlebar */}
      <div style={{
        background: 'rgba(12, 18, 32, 0.95)',
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(212, 175, 55, 0.12)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
            <span key={i} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c, display: 'block' }} />
          ))}
          <span style={{ marginLeft: '12px', fontFamily: 'var(--font-fira)', fontSize: '11px', color: '#94a3b8' }}>
            developer.config.ts
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d4af37', boxShadow: '0 0 8px #d4af37' }} />
          <span style={{ fontFamily: 'var(--font-fira)', fontSize: '10px', color: '#f5d77f' }}>PROD</span>
        </div>
      </div>

      {/* Code Area */}
      <div style={{ padding: '22px 24px', fontFamily: 'var(--font-fira)', fontSize: '13px', lineHeight: '1.9', overflowX: 'auto' }}>
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} style={{ paddingLeft: `${line.indent * 20}px`, whiteSpace: 'pre' }}>
            <span style={{ color: '#334155', userSelect: 'none', marginRight: '16px', fontSize: '11px' }}>
              {String(i + 1).padStart(2, ' ')}
            </span>
            {line.tokens.map((tok, j) => (
              <span key={j} style={{ color: tokenColors[tok.t] || '#e2e8f0' }}>{tok.v}</span>
            ))}
            {i === visibleLines - 1 && (
              <span style={{
                display: 'inline-block', width: '2px', height: '14px',
                background: '#d4af37', marginLeft: '2px', verticalAlign: 'middle',
                animation: 'blink 1s infinite',
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Bottom Gold Accent Bar */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #d4af37, #f5d77f, transparent)' }} />
    </motion.div>
  )
}

const heroLogos = [
  { name: 'React', icon: <SiReact size={15} color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={15} color="#FFFFFF" /> },
  { name: 'Node.js', icon: <SiNodedotjs size={15} color="#68A063" /> },
  { name: 'TypeScript', icon: <SiTypescript size={15} color="#3178C6" /> },
  { name: 'MongoDB', icon: <SiMongodb size={15} color="#47A248" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={15} color="#4169E1" /> },
  { name: 'AWS', icon: <FaAws size={15} color="#FF9900" /> },
  { name: 'Docker', icon: <SiDocker size={15} color="#2496ED" /> },
]

export default function Hero() {
  const typed = useTyped(TYPED_STRINGS)
  const { isMobile, isTablet } = useWindowSize()

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '100px 20px 50px' : isTablet ? '110px 40px 50px' : '100px 60px 0',
      position: 'relative',
      overflow: 'hidden',
      gap: isMobile ? '40px' : '60px',
      flexDirection: isMobile ? 'column' : 'row',
    }}>

      {/* Luxury Ambient Glow Elements */}
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
        top: '-150px',
        left: '-100px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
        top: '250px',
        right: '-100px',
        pointerEvents: 'none',
      }} />

      {/* Subtle luxury grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      {/* Left Column Content */}
      <div style={{ position: 'relative', zIndex: 1, flex: 1.1, maxWidth: isMobile ? '100%' : '640px' }}>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.28)',
            borderRadius: '999px',
            padding: '6px 18px',
            marginBottom: '28px',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.08)',
          }}
        >
          <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e', animation: 'pulse 2s infinite' }} />
          <span style={{ fontFamily: 'var(--font-fira)', fontSize: '11.5px', color: '#f5d77f', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600 }}>
            Available for New Ventures
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(38px, 6vw, 70px)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '18px',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: '#f8fafc' }}>Ishthiyaq </span>
          <span className="gold-text-gradient">
            Ahamed
          </span>
        </motion.h1>

        {/* Interactive Typing Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-fira)',
            fontSize: 'clamp(14px, 2.2vw, 20px)',
            marginBottom: '24px',
            color: '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '6px',
          }}
        >
          <span style={{ color: '#64748b' }}>const role = </span>
          <span style={{ color: '#f5d77f', fontWeight: 600 }}>"{typed}"</span>
          <span style={{ display: 'inline-block', width: '2px', height: '1.1em', background: '#d4af37', verticalAlign: 'text-bottom', animation: 'blink 1s infinite' }} />
        </motion.div>

        {/* Hero Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            color: '#94a3b8',
            maxWidth: '520px',
            lineHeight: 1.8,
            marginBottom: '36px',
          }}
        >
          Crafting bespoke digital solutions, scalable enterprise web architectures, and high-performance cloud applications with precision engineering. BSc Software Engineering @ University of Bedfordshire.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}
        >
          <a
            href="#projects"
            className="luxury-btn"
            style={{
              background: 'linear-gradient(135deg, #f5d77f 0%, #d4af37 60%, #aa7c11 100%)',
              borderRadius: '10px',
              padding: '13px 30px',
              color: '#030712',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 0 24px rgba(212, 175, 55, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 0 38px rgba(212, 175, 55, 0.65)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 24px rgba(212, 175, 55, 0.4)'
            }}
          >
            <span>Explore Works</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="/cv.pdf"
            download
            style={{
              background: 'rgba(12, 18, 32, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '10px',
              padding: '13px 26px',
              color: '#f5d77f',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)'
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.7)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(12, 18, 32, 0.7)'
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <Download size={15} />
            <span>Curriculum Vitae</span>
          </a>
        </motion.div>

        {/* Real Brand Logos Tech Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}
        >
          {heroLogos.map((tech) => (
            <div
              key={tech.name}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontFamily: 'var(--font-fira)',
                background: 'rgba(10, 16, 28, 0.7)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '11.5px',
                color: '#e2e8f0',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.45)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'rgba(10, 16, 28, 0.7)'
              }}
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Column — Code Terminal */}
      {!isMobile && (
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CodeCard />
        </div>
      )}

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
      `}</style>
    </section>
  )
}
