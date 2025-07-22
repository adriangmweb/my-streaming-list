export default function SignUpPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
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
            Join StreamList
          </h1>
          <p style={{
            color: '#cccccc',
            margin: 0
          }}>
            Create your account to get started
          </p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#ffffff',
              fontSize: '0.9rem'
            }}>
              Full Name
            </label>
            <input
              type="text"
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #333',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#ffffff',
              fontSize: '0.9rem'
            }}>
              Email
            </label>
            <input
              type="email"
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #333',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#ffffff',
              fontSize: '0.9rem'
            }}>
              Password
            </label>
            <input
              type="password"
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #333',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              placeholder="Create a strong password"
            />
          </div>

          <div style={{
            background: 'rgba(229,9,20,0.1)',
            border: '1px solid rgba(229,9,20,0.3)',
            borderRadius: '8px',
            padding: '1rem',
            textAlign: 'center',
            marginTop: '1rem'
          }}>
            <p style={{
              color: '#e50914',
              margin: 0,
              fontSize: '0.9rem'
            }}>
              🚧 Account creation will be available soon!
            </p>
            <p style={{
              color: '#cccccc',
              margin: '0.5rem 0 0 0',
              fontSize: '0.8rem'
            }}>
              The app is in development mode. Stay tuned!
            </p>
          </div>
        </form>

        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <p style={{
            color: '#cccccc',
            margin: 0,
            fontSize: '0.9rem'
          }}>
            Already have an account?{' '}
            <a 
              href="/auth/signin" 
              style={{
                color: '#e50914',
                textDecoration: 'none'
              }}
            >
              Sign in
            </a>
          </p>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '1rem'
        }}>
          <a 
            href="/" 
            style={{
              color: '#888',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}