import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:['100','200','300','400','500','600','700','800','900'] })

export const metadata: Metadata = {
  title: 'RCA Red Cross',
  description: 'This is the website for red cross website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className + " w-screen h-[140vh]"}>
        {children}
      </body>
    </html>
  )
}
