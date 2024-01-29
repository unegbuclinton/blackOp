import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Black Ops- Top African operators building great companies',
  description: 'Black Ops-; Top African operators building great companies',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <div className='pb-5 pt-28'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
