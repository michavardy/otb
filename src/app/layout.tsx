import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './provider'
import Navbar from '../components/Navbar'
import Titlebar from '../components/Titlebar'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
        <div className="flex flex-col min-h-screen">
          <Titlebar/>
        <div className="flex-1 flex">
      <Navbar/>
    
          {children}
      
      </div>
      </div>
      </NextAuthProvider>
      </body>
    </html>
  )
}
