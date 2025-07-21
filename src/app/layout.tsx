import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StreamList Manager - Manage Your Streaming Watchlists',
  description: 'Securely manage and track your Netflix, Hulu, Prime Video, and other streaming service watchlists in one place.',
  keywords: ['streaming', 'netflix', 'watchlist', 'movies', 'tv shows', 'hulu', 'prime video', 'disney plus'],
  authors: [{ name: 'StreamList Manager' }],
  creator: 'StreamList Manager',
  publisher: 'StreamList Manager',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://streamlist-manager.vercel.app',
    title: 'StreamList Manager - Manage Your Streaming Watchlists',
    description: 'Securely manage and track your Netflix, Hulu, Prime Video, and other streaming service watchlists in one place.',
    siteName: 'StreamList Manager',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StreamList Manager - Manage Your Streaming Watchlists',
    description: 'Securely manage and track your Netflix, Hulu, Prime Video, and other streaming service watchlists in one place.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              className: '',
              style: {
                background: '#222222',
                color: '#fff',
                border: '1px solid #E50914',
              },
              success: {
                iconTheme: {
                  primary: '#E50914',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ff4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}