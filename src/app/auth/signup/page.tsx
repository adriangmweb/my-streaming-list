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
            StreamList Manager
          </h1>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#ffffff',
            margin: 0
          }}>
            Create Account
          </h2>
        </div>

        <div style={{
          background: 'rgba(229,9,20,0.1)',
          border: '1px solid rgba(229,9,20,0.3)',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#cccccc',
            margin: 0,
            fontSize: '0.9rem'
          }}>
            🚧 Account creation is being set up.<br/>
            This is a preview of the StreamList Manager interface.
          </p>
        </div>

        <form style={{ marginBottom: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#cccccc',
              fontSize: '0.9rem'
            }}>
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#cccccc',
              fontSize: '0.9rem'
            }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#cccccc',
              fontSize: '0.9rem'
            }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            type="button"
            onClick={() => alert('Account creation will be available soon!')}
            style={{
              width: '100%',
              backgroundColor: '#e50914',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Create Account
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <p style={{
            color: '#888',
            fontSize: '0.9rem',
            margin: '0 0 1rem 0'
          }}>
            Already have an account?
          </p>
          <a
            href="/auth/signin"
            style={{
              color: '#e50914',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Sign In
          </a>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '2rem'
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