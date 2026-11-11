import { Space_Grotesk, Fira_Code, Outfit, Syne, La_Belle_Aurore } from 'next/font/google'
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

const syne = Syne({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-syne',
})

const laBelleAurore = La_Belle_Aurore({
  subsets: ['latin'],
  weight: '400',
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
