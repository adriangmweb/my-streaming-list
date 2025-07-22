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
      padding: 'clamp(1rem, 4vw, 2rem)'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(229,9,20,0.3)',
        borderRadius: '16px',
        padding: 'clamp(2rem, 5vw, 3rem)',
        width: '100%',
        maxWidth: '420px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #e50914, #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem'
          }}>
            Welcome Back
          </h1>
          <p style={{ 
            color: '#cccccc', 
            fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
            lineHeight: '1.4'
          }}>
            Sign in to access your StreamList Manager
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
          {error && (
            <div style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
              borderRadius: '8px',
              marginBottom: '1rem',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              lineHeight: '1.4'
            }}>
              {error}
            </div>
          )}

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', 
              color: '#cccccc' 
            }}>
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
                padding: 'clamp(0.75rem, 2vw, 1rem)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                minHeight: '44px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', 
              color: '#cccccc' 
            }}>
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
                padding: 'clamp(0.75rem, 2vw, 1rem)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                minHeight: '44px',
                boxSizing: 'border-box'
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
              padding: 'clamp(0.875rem, 2vw, 1rem)',
              border: 'none',
              borderRadius: '8px',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
              minHeight: '48px'
            }}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div style={{
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '8px',
          padding: 'clamp(1rem, 3vw, 1.25rem)',
          marginBottom: '1.5rem'
        }}>
          <p style={{ 
            color: '#60a5fa', 
            fontSize: 'clamp(0.8rem, 2vw, 0.85rem)', 
            marginBottom: '0.5rem', 
            fontWeight: '600' 
          }}>
            Demo Credentials:
          </p>
          <p style={{ 
            color: '#cccccc', 
            fontSize: 'clamp(0.75rem, 2vw, 0.8rem)', 
            fontFamily: 'monospace',
            lineHeight: '1.4',
            wordBreak: 'break-all'
          }}>
            Email: demo@streamlist.com
          </p>
          <p style={{ 
            color: '#cccccc', 
            fontSize: 'clamp(0.75rem, 2vw, 0.8rem)', 
            fontFamily: 'monospace',
            lineHeight: '1.4'
          }}>
            Password: demo123
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ 
            color: '#888', 
            fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
            marginBottom: '1rem'
          }}>
            Don't have an account?{' '}
            <a href="/auth/signup" style={{ 
              color: '#e50914', 
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Sign up
            </a>
          </p>
          <p>
            <a href="/" style={{ 
              color: '#888', 
              textDecoration: 'none', 
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.5rem',
              minHeight: '44px',
              justifyContent: 'center'
            }}>
              ← Back to home
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}