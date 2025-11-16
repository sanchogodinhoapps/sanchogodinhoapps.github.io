import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SG Apps - Development & Design',
  description: 'Building secure, modern applications with attention to detail. Featured project: VibedIn, a profile discovery platform.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Script
          src="https://rybbit.sg-app.com/api/script.js"
          data-site-id="4c9bb37bd8fe"
          strategy="afterInteractive"
          async
          defer
        />
      </body>
    </html>
  )
}
