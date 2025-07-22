import type { Metadata } from 'next'
import './globals.css'

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}