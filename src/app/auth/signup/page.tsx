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
      padding: '2rem'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(229,9,20,0.3)',
        borderRadius: '16px',
        padding: '3rem',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #e50914, #ff6b6b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          Welcome to StreamList!
        </h1>
        
        <p style={{ color: '#cccccc', marginBottom: '2rem', lineHeight: '1.6' }}>
          This is a demo version of StreamList Manager. 
          Use the demo account to explore all features.
        </p>

        <div style={{
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <p style={{ color: '#60a5fa', fontSize: '1rem', marginBottom: '1rem', fontWeight: '600' }}>
            🎬 Demo Access Available
          </p>
          <p style={{ color: '#cccccc', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Try all features with our demo account:
          </p>
          <p style={{ color: '#cccccc', fontSize: '0.85rem', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
            Email: demo@streamlist.com
          </p>
          <p style={{ color: '#cccccc', fontSize: '0.85rem', fontFamily: 'monospace' }}>
            Password: demo123
          </p>
        </div>

        <a 
          href="/auth/signin"
          style={{
            display: 'inline-block',
            backgroundColor: '#e50914',
            color: '#ffffff',
            padding: '0.875rem 2rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            textDecoration: 'none',
            marginBottom: '1.5rem'
          }}
        >
          Try Demo Login
        </a>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
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