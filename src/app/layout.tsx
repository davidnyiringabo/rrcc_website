"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import logo from "@/assets/logo.svg"
import NextNProgress from 'nextjs-progressbar';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight:['100','200','300','400','500','600','700','800','900'] 
})

// export const metadata: Metadata = {
//   title: 'RCA Red Cross',
//   description: 'This is the website for red cross website.',
//   icons: logo
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className + "w-screen"}>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
