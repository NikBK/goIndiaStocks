import Navbar from '@/components/Navbar'
import './globals.css'
import { Outfit } from 'next/font/google'
import DailyStocks from '@/components/DailyStocks'
import FeaturedCompanies from '@/components/FeaturedCompanies'
import Footer from '@/components/Footer'

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'GIA Stocks',
  description: 'Bringing Indian Corporates to Investors. An Investor Relations Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <DailyStocks />
        <FeaturedCompanies />

        {children}

        <div className="sm:hidden fixed z-20 bottom-0 left-0 w-full flex justify-around bg-[#1d3b61]">
          <Footer />
        </div>
      </body>
    </html>
  )
}
