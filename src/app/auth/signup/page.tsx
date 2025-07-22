export default function SignUpPage() {
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
        maxWidth: '420px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #e50914, #ff6b6b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          Welcome to StreamList!
        </h1>
        
        <p style={{ 
          color: '#cccccc', 
          marginBottom: '2rem', 
          lineHeight: '1.6',
          fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
        }}>
          This is a demo version of StreamList Manager. 
          Use the demo account to explore all features.
        </p>

        <div style={{
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '8px',
          padding: 'clamp(1.25rem, 4vw, 1.5rem)',
          marginBottom: '2rem'
        }}>
          <p style={{ 
            color: '#60a5fa', 
            fontSize: 'clamp(0.9rem, 3vw, 1rem)', 
            marginBottom: '1rem', 
            fontWeight: '600' 
          }}>
            🎬 Demo Access Available
          </p>
          <p style={{ 
            color: '#cccccc', 
            fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', 
            marginBottom: '1rem',
            lineHeight: '1.5'
          }}>
            Try all features with our demo account:
          </p>
          <p style={{ 
            color: '#cccccc', 
            fontSize: 'clamp(0.8rem, 2vw, 0.85rem)', 
            fontFamily: 'monospace', 
            marginBottom: '0.5rem',
            wordBreak: 'break-all',
            lineHeight: '1.4'
          }}>
            Email: demo@streamlist.com
          </p>
          <p style={{ 
            color: '#cccccc', 
            fontSize: 'clamp(0.8rem, 2vw, 0.85rem)', 
            fontFamily: 'monospace',
            lineHeight: '1.4'
          }}>
            Password: demo123
          </p>
        </div>

        <a 
          href="/auth/signin"
          style={{
            display: 'flex',
            backgroundColor: '#e50914',
            color: '#ffffff',
            padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
            borderRadius: '8px',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            fontWeight: '600',
            textDecoration: 'none',
            marginBottom: '1.5rem',
            minHeight: '48px',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease'
          }}
        >
          Try Demo Login
        </a>

        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '1.5rem' 
        }}>
          <a 
            href="/" 
            style={{
              color: '#888',
              textDecoration: 'none',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.5rem',
              minHeight: '44px',
              justifyContent: 'center'
            }}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}