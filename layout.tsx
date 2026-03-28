import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ME-BTC | Middle East B2B Trade Connect',
  description: 'Specialized B2B marketplace for the Middle East market',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  )
}
