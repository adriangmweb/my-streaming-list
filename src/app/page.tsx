export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000', 
      color: '#fff', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        StreamList Manager
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Manage your streaming watchlists
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a 
          href="/auth/signup" 
          style={{ 
            backgroundColor: '#e50914', 
            color: 'white', 
            padding: '12px 24px', 
            textDecoration: 'none', 
            borderRadius: '4px' 
          }}
        >
          Get Started
        </a>
        <a 
          href="/auth/signin" 
          style={{ 
            border: '1px solid #e50914', 
            color: '#e50914', 
            padding: '12px 24px', 
            textDecoration: 'none', 
            borderRadius: '4px' 
          }}
        >
          Sign In
        </a>
      </div>
    </div>
  )
}