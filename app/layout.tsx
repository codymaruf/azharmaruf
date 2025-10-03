import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'


const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const clashDisplay = localFont({
  src: './fonts/ClashDisplay-Variable.woff2',
  variable: '--font-clash',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Azhar Maruf - Portfolio',
  description: 'Web Development, Cinematography, Filmmaking & Storytelling',
  keywords: ['web development', 'cinematography', 'filmmaking', 'portfolio'],
   icons: {
  icon: '/profile.jpg',   // this is your website icon for most browsers
  apple: '/profile.jpg',  // this is used on Apple devices (iPhone, iPad)
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  <body className={`${inter.variable} ${clashDisplay.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}