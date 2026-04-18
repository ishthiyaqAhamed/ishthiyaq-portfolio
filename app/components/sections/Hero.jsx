'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { useWindowSize } from '../../hooks/useWindowSize'

const TYPED_STRINGS = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'Cloud Computing Enthusiast',
  'Problem Solver',
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
        if (display.length + 1 === current.length) setTimeout(() => setDeleting(true), 1800)
      } else {
        setDisplay(current.slice(0, display.length - 1))
        if (display.length === 0) { setDeleting(false); setIdx(i => i + 1) }
      }
    }, deleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [display, deleting, idx, strings])

  return display
}

const codeLines = [
  { indent: 0, tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'developer' }, { t: 'op', v: ' = {' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'name' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Ishthiyaq Ahamed"' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'role' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Full Stack Dev"' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'stack' }, { t: 'op', v: ': [' }, { t: 'str', v: '"MERN"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"AWS"' }, { t: 'op', v: '],' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'education' }, { t: 'op', v: ': ' }, { t: 'str', v: '"BSc Software Eng"' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'available' }, { t: 'op', v: ': ' }, { t: 'bool', v: 'true' }, { t: 'op', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'passion' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Building things"' }, { t: 'op', v: ',' }] },
  { indent: 0, tokens: [{ t: 'op', v: '}' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: 'keyword', v: 'function ' }, { t: 'fn', v: 'hire' }, { t: 'op', v: '(' }, { t: 'var', v: 'ishthiyaq' }, { t: 'op', v: ') {' }] },
  { indent: 1, tokens: [{ t: 'keyword', v: 'return ' }, { t: 'str', v: '"Best decision ever"' }, { t: 'op', v: ';' }] },
  { indent: 0, tokens: [{ t: 'op', v: '}' }] },
]

const tokenColors = {
  keyword: '#c792ea', var: '#82aaff', key: '#f07178',
  str: '#c3e88d', bool: '#ff9cac', fn: '#82aaff', op: '#89ddff',
}

function CodeCard() {
  const [visibleLines, setVisibleLines] = useState(0)
  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 120)
      return () => clearTimeout(t)
    }
  }, [visibleLines])

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      style={{
        background: 'rgba(10,18,35,0.85)',
        border: '1px solid rgba(37,99,235,0.2)',
        borderRadius: '16px', overflow: 'hidden',
        boxShadow: '0 0 60px rgba(37,99,235,0.12), 0 0 120px rgba(6,182,212,0.06)',
        width: '100%',
      }}
    >
      <div style={{
        background: 'rgba(15,25,45,0.9)', padding: '12px 16px',
        display: 'flex', alignItems: 'center', gap: '8px',
        borderBottom: '1px solid rgba(37,99,235,0.1)',
      }}>
        {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
          <span key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c, display: 'block' }} />
        ))}
        <span style={{ marginLeft: '12px', fontFamily: 'var(--font-fira)', fontSize: '12px', color: '#475569' }}>developer.js</span>
      </div>
      <div style={{ padding: '20px 24px', fontFamily: 'var(--font-fira)', fontSize: '13px', lineHeight: '1.9', overflowX: 'auto' }}>
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} style={{ paddingLeft: `${line.indent * 20}px`, whiteSpace: 'pre' }}>
            <span style={{ color: '#2d3f5e', userSelect: 'none', marginRight: '16px', fontSize: '11px' }}>
              {String(i + 1).padStart(2, ' ')}
            </span>
            {line.tokens.map((tok, j) => (
              <span key={j} style={{ color: tokenColors[tok.t] || '#e2e8f0' }}>{tok.v}</span>
            ))}
            {i === visibleLines - 1 && (
              <span style={{
                display: 'inline-block', width: '2px', height: '14px',
                background: '#06b6d4', marginLeft: '2px', verticalAlign: 'middle',
                animation: 'blink 1s infinite',
              }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #2563eb, #06b6d4, transparent)' }} />
    </motion.div>
  )
}

export default function Hero() {
  const typed = useTyped(TYPED_STRINGS)
  const { isMobile, isTablet } = useWindowSize()

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '80px 20px 40px' : isTablet ? '80px 40px 40px' : '80px 60px 0',
      position: 'relative',
      overflow: 'hidden',
      gap: isMobile ? '40px' : '60px',
      flexDirection: isMobile ? 'column' : 'row',
    }}>

      {/* Glow orbs */}
      <div style={{ position: 'absolute', borderRadius: '50%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)', top: '-100px', left: '-100px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', borderRadius: '50%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', top: '200px', right: '-80px', pointerEvents: 'none' }} />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)`,
        backgroundSize: '40px 40px', pointerEvents: 'none',
      }} />

      {/* Left content */}
      <div style={{ position: 'relative', zIndex: 1, flex: 1, maxWidth: isMobile ? '100%' : '600px' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.3)',
            borderRadius: '20px', padding: '6px 16px', marginBottom: '24px',
          }}>
          <span style={{ width: '7px', height: '7px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 8px #22c55e', animation: 'pulse 2s infinite' }} />
          <span style={{ fontFamily: 'var(--font-fira)', fontSize: '12px', color: '#60a5fa', letterSpacing: '1px' }}>
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 700, lineHeight: 1.1, marginBottom: '16px' }}>
          <span style={{ color: '#f1f5f9' }}>Ishthiyaq </span>
          <span style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Ahamed
          </span>
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: 'var(--font-fira)', fontSize: 'clamp(12px, 2vw, 18px)', marginBottom: '24px', color: '#475569' }}>
          <span>const role = </span>
          <span style={{ color: '#06b6d4' }}>"{typed}"</span>
          <span style={{ display: 'inline-block', width: '2px', height: '1em', background: '#06b6d4', marginLeft: '2px', verticalAlign: 'text-bottom', animation: 'blink 1s infinite' }} />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#64748b', maxWidth: '480px', lineHeight: 1.8, marginBottom: '36px' }}>
          MERN Stack developer with expertise in cloud computing, database management,
          and scalable application development. BSc Software Engineering @ University of Bedfordshire.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <a href="#projects" style={{
            background: 'linear-gradient(135deg, #2563eb, #0891b2)', borderRadius: '8px',
            padding: '12px 28px', color: 'white', fontSize: '14px', fontWeight: 600,
            textDecoration: 'none', boxShadow: '0 0 24px rgba(37,99,235,0.35)', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(37,99,235,0.55)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(37,99,235,0.35)' }}>
            View Projects
          </a>
          <a href="/cv.pdf" download style={{
            background: 'transparent', border: '1px solid rgba(37,99,235,0.4)',
            borderRadius: '8px', padding: '12px 28px', color: '#60a5fa',
            fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.1)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.7)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)' }}>
            Download CV
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Firebase', 'Python', 'Git'].map(tech => (
            <span key={tech} style={{
              fontFamily: 'var(--font-fira)', background: 'rgba(6,182,212,0.07)',
              border: '1px solid rgba(6,182,212,0.2)', borderRadius: '6px',
              padding: '4px 12px', fontSize: '12px', color: '#67e8f9',
            }}>{tech}</span>
          ))}
        </motion.div>
      </div>

      {/* Right — Code Card — hidden on mobile */}
      {!isMobile && (
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CodeCard />
        </div>
      )}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: '#334155', fontSize: '11px', fontFamily: 'var(--font-fira)',
          animation: 'bounce 2s infinite',
        }}>
        <span>scroll</span>
        <FiArrowDown size={14} />
      </motion.div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0);} 50%{transform:translateX(-50%) translateY(6px);} }
      `}</style>
    </section>
  )
}
