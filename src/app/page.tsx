export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
      color: '#ffffff', 
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{
        padding: '1rem 2rem',
        borderBottom: '1px solid #333',
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #e50914, #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            StreamList Manager
          </h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a 
              href="/auth/signin" 
              style={{ 
                color: '#ffffff',
                textDecoration: 'none',
                padding: '8px 16px',
                border: '1px solid #e50914',
                borderRadius: '4px'
              }}
            >
              Sign In
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #ffffff, #cccccc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.2'
          }}>
            Manage Your Streaming Watchlists
          </h2>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: '#cccccc',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Never lose track of what to watch next. Organize your Netflix, Hulu, Prime Video, and other streaming service watchlists in one secure place.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem'
          }}>
            <a 
              href="/auth/signup" 
              style={{ 
                backgroundColor: '#e50914',
                color: 'white',
                padding: '16px 32px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-block'
              }}
            >
              Get Started Free
            </a>
            
            <a 
              href="#features" 
              style={{ 
                border: '2px solid #e50914',
                color: '#e50914',
                padding: '14px 32px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-block'
              }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" style={{
          marginTop: '4rem'
        }}>
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            color: '#ffffff'
          }}>
            Why Choose StreamList Manager?
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              {
                title: '🔒 Secure & Private',
                description: 'Your data is encrypted and secure. We never store your streaming service passwords.'
              },
              {
                title: '🔍 Universal Search',
                description: 'Search across all your streaming services at once. Find exactly what you want to watch.'
              },
              {
                title: '📝 Multiple Lists',
                description: 'Create custom watchlists for different moods, genres, or family members.'
              },
              {
                title: '⚡ Smart Sync',
                description: 'Automatically sync your watchlists across all devices. Access anywhere, anytime.'
              },
              {
                title: '✏️ Easy Management',
                description: 'Add, remove, and organize titles with simple clicks. Mark as watched and rate content.'
              },
              {
                title: '🎬 Quick Access',
                description: 'Direct links to watch content on your streaming platforms. No more endless searching.'
              }
            ].map((feature, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(229,9,20,0.3)',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'left'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#ffffff'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  color: '#cccccc',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: 'rgba(229,9,20,0.1)',
          border: '1px solid rgba(229,9,20,0.3)',
          borderRadius: '16px',
          padding: '3rem 2rem',
          marginTop: '4rem'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#ffffff'
          }}>
            Ready to Organize Your Streaming Life?
          </h3>
          <p style={{
            color: '#cccccc',
            marginBottom: '2rem',
            fontSize: '1.1rem'
          }}>
            Join thousands of users who have simplified their streaming experience.
          </p>
          <a 
            href="/auth/signup" 
            style={{ 
              backgroundColor: '#e50914',
              color: 'white',
              padding: '16px 32px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              display: 'inline-block'
            }}
          >
            Create Your Account
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0,0,0,0.8)',
        borderTop: '1px solid #333',
        padding: '2rem',
        textAlign: 'center',
        marginTop: '4rem'
      }}>
        <p style={{
          color: '#888',
          margin: 0
        }}>
          © 2024 StreamList Manager. Simplifying your streaming experience.
        </p>
      </footer>
    </div>
  )
}