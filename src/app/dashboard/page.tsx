export default function DashboardPage() {
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
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Dashboard
      </h1>
      <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
        Please sign in to access your dashboard.
      </p>
      <a 
        href="/auth/signin" 
        style={{ 
          backgroundColor: '#e50914', 
          color: 'white', 
          padding: '12px 24px', 
          textDecoration: 'none', 
          borderRadius: '4px' 
        }}
      >
        Sign In
      </a>
    </div>
  )
}