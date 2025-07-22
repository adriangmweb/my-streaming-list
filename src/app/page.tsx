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
        padding: '2rem',
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
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Logo/Brand */}
          <div style={{ marginBottom: '3rem' }}>
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
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              color: '#ffffff',
              fontWeight: '300',
              letterSpacing: '0.1em'
            }}>
              MANAGER
            </p>
          </div>

          {/* Tagline */}
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: '600',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            color: '#ffffff'
          }}>
            Manage All Your Streaming Watchlists
            <br />
            <span style={{ color: '#e50914' }}>In One Place</span>
          </h2>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#cccccc',
            marginBottom: '3rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}>
            Connect your Netflix, Hulu, Prime Video, and other streaming accounts. 
            Keep track of what you want to watch, manage your lists, and never lose 
            track of that perfect movie again.
          </p>

          {/* CTA Button */}
          <div style={{ marginBottom: '3rem' }}>
            <a 
              href="/dashboard"
              style={{
                display: 'inline-block',
                backgroundColor: '#e50914',
                color: '#ffffff',
                padding: '1rem 3rem',
                fontSize: '1.25rem',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(229,9,20,0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Launch App
            </a>
          </div>

          {/* Secondary Actions */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem'
          }}>
            <a 
              href="/auth/signin"
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.75rem 2rem',
                border: '2px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              Sign In
            </a>
            <a 
              href="/auth/signup"
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.75rem 2rem',
                border: '2px solid rgba(229,9,20,0.5)',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              Sign Up
            </a>
          </div>

          {/* Features */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '4rem',
            maxWidth: '900px',
            margin: '4rem auto 0'
          }}>
            <div style={{
              padding: '2rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>🎬</div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#ffffff'
              }}>
                Multi-Platform
              </h3>
              <p style={{
                color: '#cccccc',
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                Connect Netflix, Hulu, Prime Video, Disney+, and more streaming services
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>🔒</div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#ffffff'
              }}>
                Secure
              </h3>
              <p style={{
                color: '#cccccc',
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                Your streaming accounts are protected with enterprise-grade security
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>📱</div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#ffffff'
              }}>
                Organized
              </h3>
              <p style={{
                color: '#cccccc',
                fontSize: '0.9rem',
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
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: '#666666',
          fontSize: '0.9rem'
        }}>
          <p>StreamList Manager v1.0 • Built with Next.js</p>
        </div>
      </div>
    </div>
  )
}