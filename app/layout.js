import { Space_Grotesk, Fira_Code, Outfit, Newsreader } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fira',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

export const metadata = {
  title: 'Ishthiyaq Ahamed | Full Stack Software Engineer',
  description: 'Full Stack Software Engineer specializing in MERN stack, Next.js architectures, cloud computing, and intelligent SaaS products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${firaCode.variable} ${outfit.variable} ${newsreader.variable}`}>
        {children}
      </body>
    </html>
  )
}
