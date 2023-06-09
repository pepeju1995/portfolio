import Header from '../../components/header'
import Footer from '../../components/footer'
import './globals.css'
import React from 'react'

export const metadata = {
  title: 'José Juan Pérez González',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
