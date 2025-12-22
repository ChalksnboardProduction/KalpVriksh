import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Kalp Vriksh Public School',
  description: 'Kalp Vriksh Public School',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

