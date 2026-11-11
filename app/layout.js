import localFont from 'next/font/local'
import './globals.css'

const spaceGrotesk = localFont({
  src: './fonts/space-grotesk-variable.woff2',
  weight: '300 700',
  display: 'swap',
  variable: '--font-space',
})

const firaCode = localFont({
  src: './fonts/fira-code-variable.woff2',
  weight: '300 700',
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-fira',
})

const outfit = localFont({
  src: './fonts/outfit-variable.woff2',
  weight: '100 900',
  display: 'swap',
  variable: '--font-display',
})

const syne = localFont({
  src: './fonts/syne-variable.woff2',
  weight: '400 800',
  display: 'swap',
  variable: '--font-syne',
})

const laBelleAurore = localFont({
  src: './fonts/la-belle-aurore.woff2',
  weight: '400',
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-signature',
})

export const metadata = {
  title: 'Ishthiyaq Ahamed | Full Stack Software Engineer',
  description:
    'Full Stack Software Engineer specializing in MERN stack, Next.js architectures, cloud computing, and intelligent SaaS products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${firaCode.variable} ${outfit.variable} ${syne.variable} ${laBelleAurore.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
