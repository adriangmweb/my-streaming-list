'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, List, Settings, LogOut, Tv, Film, Star, Clock } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="loading-shimmer w-32 h-32 rounded-full"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      {/* Navigation Header */}
      <header className="bg-netflix-dark-gray border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/dashboard" className="text-2xl font-bold gradient-text">
                StreamList
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search movies and TV shows..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-netflix-red focus:ring-2 focus:ring-netflix-red focus:ring-opacity-50 transition-all duration-200"
                />
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-netflix-red rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm text-gray-300">{session.user.name}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="w-64 bg-netflix-dark-gray border-r border-gray-700">
          <nav className="p-4 space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-netflix-red text-white"
            >
              <List className="w-5 h-5" />
              <span>My Watchlists</span>
            </Link>
            <Link
              href="/dashboard/discover"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
              <span>Discover</span>
            </Link>
            <Link
              href="/dashboard/services"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Tv className="w-5 h-5" />
              <span>Streaming Services</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </nav>

          {/* Streaming Services */}
          <div className="p-4 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Connected Services
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gray-800">
                <div className="w-6 h-6 bg-netflix-red rounded"></div>
                <span className="text-sm">Netflix</span>
              </div>
              <button className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors w-full text-left">
                <Plus className="w-4 h-4" />
                <span className="text-sm">Add Service</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {session.user.name}!
              </h1>
              <p className="text-gray-300">
                Manage your watchlists and discover new content across all your streaming services.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-netflix-dark-gray p-6 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Total Items</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <List className="w-8 h-8 text-netflix-red" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-netflix-dark-gray p-6 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Movies</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <Film className="w-8 h-8 text-netflix-red" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-netflix-dark-gray p-6 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">TV Shows</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <Tv className="w-8 h-8 text-netflix-red" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-netflix-dark-gray p-6 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Watched</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <Star className="w-8 h-8 text-netflix-red" />
                </div>
              </motion.div>
            </div>

            {/* Empty State */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center py-12"
            >
              <div className="bg-netflix-dark-gray rounded-lg p-8 max-w-md mx-auto">
                <Clock className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Your Watchlists Are Empty</h3>
                <p className="text-gray-400 mb-6">
                  Start building your collection by searching for movies and TV shows you want to watch.
                </p>
                <Link
                  href="/dashboard/discover"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Discover Content
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}