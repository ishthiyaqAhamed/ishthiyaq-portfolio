import { Space_Grotesk, Fira_Code, Outfit, Caveat } from 'next/font/google'
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
  weight: ['700', '800', '900'],
  variable: '--font-display',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-script',
})

export const metadata = {
  title: 'Ishthiyaq Ahamed | Full Stack Software Engineer',
  description: 'Full Stack Software Engineer specializing in MERN stack, Next.js architectures, cloud computing, and intelligent SaaS products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${firaCode.variable} ${outfit.variable} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  )
}
