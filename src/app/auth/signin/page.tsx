'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simple demo authentication
    if (email === 'demo@streamlist.com' && password === 'demo123') {
      // Store user session in localStorage
      localStorage.setItem('streamlist_user', JSON.stringify({
        id: '1',
        email: 'demo@streamlist.com',
        name: 'Demo User',
        loginTime: new Date().toISOString()
      }))
      
      // Redirect to dashboard
      router.push('/dashboard')
    } else {
      setError('Invalid credentials. Try: demo@streamlist.com / demo123')
    }
    
    setLoading(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000 0%, #141414 25%, #1a1a1a 50%, #141414 75%, #000000 100%)',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(229,9,20,0.3)',
        borderRadius: '16px',
        padding: '3rem',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #e50914, #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem'
          }}>
            Welcome Back
          </h1>
          <p style={{ color: '#cccccc', fontSize: '0.9rem' }}>
            Sign in to access your StreamList Manager
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
          {error && (
            <div style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              padding: '0.75rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              fontSize: '0.9rem'
            }}>
              {error}
            </div>
          )}

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#cccccc' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#cccccc' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '1rem'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              backgroundColor: loading ? '#666' : '#e50914',
              color: '#ffffff',
              padding: '0.875rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div style={{
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1.5rem'
        }}>
          <p style={{ color: '#60a5fa', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>
            Demo Credentials:
          </p>
          <p style={{ color: '#cccccc', fontSize: '0.8rem', fontFamily: 'monospace' }}>
            Email: demo@streamlist.com
          </p>
          <p style={{ color: '#cccccc', fontSize: '0.8rem', fontFamily: 'monospace' }}>
            Password: demo123
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>
            Don't have an account?{' '}
            <a href="/auth/signup" style={{ color: '#e50914', textDecoration: 'none' }}>
              Sign up
            </a>
          </p>
          <p style={{ marginTop: '1rem' }}>
            <a href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>
              ← Back to home
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}