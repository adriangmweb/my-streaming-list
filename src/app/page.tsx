export default function LandingPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #000000 0%, #141414 25%, #1a1a1a 50%, #141414 75%, #000000 100%)',
      color: '#ffffff', 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(1rem, 4vw, 2rem)',
        position: 'relative'
      }}>
        {/* Background Effects */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(circle at 20% 80%, rgba(229,9,20,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(229,9,20,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        {/* Content */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
          {/* Logo/Brand */}
          <div style={{ marginBottom: 'clamp(2rem, 6vw, 3rem)' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: '900',
              background: 'linear-gradient(45deg, #e50914, #ff6b6b, #e50914)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>
              StreamList
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              color: '#ffffff',
              fontWeight: '300',
              letterSpacing: '0.1em'
            }}>
              MANAGER
            </p>
          </div>

          {/* Tagline */}
          <h2 style={{
            fontSize: 'clamp(1.25rem, 4vw, 2.5rem)',
            fontWeight: '600',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            color: '#ffffff',
            padding: '0 1rem'
          }}>
            Manage All Your Streaming Watchlists
            <br />
            <span style={{ color: '#e50914' }}>In One Place</span>
          </h2>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.25rem)',
            color: '#cccccc',
            marginBottom: 'clamp(2rem, 5vw, 3rem)',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            padding: '0 1rem'
          }}>
            Connect your Netflix, Hulu, Prime Video, and other streaming accounts. 
            Keep track of what you want to watch, manage your lists, and never lose 
            track of that perfect movie again.
          </p>

          {/* CTA Button */}
          <div style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)', padding: '0 1rem' }}>
            <a 
              href="/dashboard"
              style={{
                display: 'flex',
                backgroundColor: '#e50914',
                color: '#ffffff',
                padding: 'clamp(0.875rem, 2vw, 1rem) clamp(2rem, 5vw, 3rem)',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(229,9,20,0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                minHeight: '44px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Launch App
            </a>
          </div>

          {/* Secondary Actions */}
          <div style={{
            display: 'flex',
            gap: 'clamp(1rem, 3vw, 1.5rem)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 'clamp(3rem, 6vw, 4rem)',
            padding: '0 1rem'
          }}>
            <a 
              href="/auth/signin"
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: 'clamp(0.75rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2rem)',
                border: '2px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '120px'
              }}
            >
              Sign In
            </a>
            <a 
              href="/auth/signup"
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: 'clamp(0.75rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2rem)',
                border: '2px solid rgba(229,9,20,0.5)',
                borderRadius: '8px',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '120px'
              }}
            >
              Sign Up
            </a>
          </div>

          {/* Features */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: 'clamp(3rem, 6vw, 4rem)',
            maxWidth: '900px',
            margin: '4rem auto 0',
            padding: '0 1rem'
          }}>
            <div style={{
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                marginBottom: '1rem'
              }}>🎬</div>
              <h3 style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#ffffff'
              }}>
                Multi-Platform
              </h3>
              <p style={{
                color: '#cccccc',
                fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                lineHeight: '1.5'
              }}>
                Connect Netflix, Hulu, Prime Video, Disney+, and more streaming services
              </p>
            </div>

            <div style={{
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                marginBottom: '1rem'
              }}>🔒</div>
              <h3 style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#ffffff'
              }}>
                Secure
              </h3>
              <p style={{
                color: '#cccccc',
                fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                lineHeight: '1.5'
              }}>
                Your streaming accounts are protected with enterprise-grade security
              </p>
            </div>

            <div style={{
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                marginBottom: '1rem'
              }}>📱</div>
              <h3 style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#ffffff'
              }}>
                Organized
              </h3>
              <p style={{
                color: '#cccccc',
                fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                lineHeight: '1.5'
              }}>
                Keep all your watchlists organized and easily accessible
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(1rem, 3vw, 2rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: '#666666',
          fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
          padding: '0 1rem'
        }}>
          <p>StreamList Manager v1.0 • Built with Next.js</p>
        </div>
      </div>
    </div>
  )
}