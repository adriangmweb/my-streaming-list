import { Play, Plus, Search, Shield, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-netflix-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-black via-netflix-dark-gray to-netflix-black opacity-90"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-4 h-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className="bg-netflix-red rounded animate-pulse-slow"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            StreamList Manager
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-slide-up">
            Manage all your streaming service watchlists in one secure place. 
            Never lose track of what to watch next across Netflix, Hulu, Prime Video, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link href="/auth/signup" className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
              <Play className="w-5 h-5" />
              Get Started Free
            </Link>
            <Link href="/auth/signin" className="btn-outline flex items-center gap-2 text-lg px-8 py-4">
              Sign In
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose StreamList Manager?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The ultimate solution for managing your streaming entertainment across all platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-netflix-dark-gray p-8 rounded-lg glass card-hover"
              >
                <div className="bg-netflix-red w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-netflix-dark-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get started in minutes and never lose track of your entertainment again
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="text-center"
              >
                <div className="w-16 h-16 bg-netflix-red rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Organize Your Streaming Life?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already simplified their streaming experience. 
              Start managing your watchlists today, completely free.
            </p>
            <Link href="/auth/signup" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create Your Account
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-netflix-dark-gray py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">StreamList Manager</h3>
            <p className="text-gray-400 mb-6">
              Simplifying your streaming experience, one watchlist at a time.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-netflix-red transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-netflix-red transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-netflix-red transition-colors">Contact</Link>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              © 2024 StreamList Manager. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is encrypted and secure. We never store your streaming service passwords or access your accounts without permission.'
  },
  {
    icon: Search,
    title: 'Universal Search',
    description: 'Search across all your streaming services at once. Find exactly what you want to watch without jumping between apps.'
  },
  {
    icon: Users,
    title: 'Multiple Lists',
    description: 'Create custom watchlists for different moods, genres, or family members. Organize your entertainment your way.'
  },
  {
    icon: Zap,
    title: 'Smart Sync',
    description: 'Automatically sync your watchlists across all devices. Access your lists anywhere, anytime.'
  },
  {
    icon: Plus,
    title: 'Easy Management',
    description: 'Add, remove, and organize titles with simple clicks. Mark as watched, rate, and add personal notes.'
  },
  {
    icon: Play,
    title: 'Quick Access',
    description: 'Direct links to watch content on your streaming platforms. No more searching for where you saved that movie.'
  }
]

const steps = [
  {
    title: 'Create Account',
    description: 'Sign up for free and create your secure StreamList Manager account in under a minute.'
  },
  {
    title: 'Add Your Lists',
    description: 'Import or manually add your watchlists from Netflix, Hulu, Prime Video, and other streaming services.'
  },
  {
    title: 'Start Watching',
    description: 'Browse, organize, and enjoy your curated content with direct links to your streaming platforms.'
  }
]