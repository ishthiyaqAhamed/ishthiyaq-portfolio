import { Space_Grotesk, Fira_Code } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
})

export const metadata = {
  title: 'Ishthiyaq Ahamed | Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN stack, cloud computing and scalable applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  )
}