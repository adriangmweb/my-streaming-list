'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  name: string
  loginTime: string
}

interface Movie {
  id: number
  title: string
  year: number
  rating: number
  genre: string
  poster: string
  service: string
  inWatchlist: boolean
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('discover')
  const router = useRouter()

  // Sample movie data
  const [movies] = useState<Movie[]>([
    { id: 1, title: 'Stranger Things', year: 2022, rating: 8.7, genre: 'Sci-Fi', poster: '🎬', service: 'Netflix', inWatchlist: false },
    { id: 2, title: 'The Boys', year: 2023, rating: 8.9, genre: 'Action', poster: '🎭', service: 'Prime Video', inWatchlist: true },
    { id: 3, title: 'Ted Lasso', year: 2021, rating: 8.8, genre: 'Comedy', poster: '⚽', service: 'Apple TV+', inWatchlist: false },
    { id: 4, title: 'The Mandalorian', year: 2023, rating: 8.6, genre: 'Sci-Fi', poster: '🚀', service: 'Disney+', inWatchlist: true },
    { id: 5, title: 'House of Cards', year: 2022, rating: 8.1, genre: 'Drama', poster: '🏛️', service: 'Netflix', inWatchlist: false },
    { id: 6, title: 'The Marvelous Mrs. Maisel', year: 2023, rating: 8.5, genre: 'Comedy', poster: '🎤', service: 'Prime Video', inWatchlist: true }
  ])

  const [watchlist, setWatchlist] = useState<Movie[]>([])

  useEffect(() => {
    // Check for user authentication
    const userData = localStorage.getItem('streamlist_user')
    if (userData) {
      setUser(JSON.parse(userData))
      setWatchlist(movies.filter(movie => movie.inWatchlist))
    } else {
      router.push('/auth/signin')
    }
    setLoading(false)
  }, [router, movies])

  const handleLogout = () => {
    localStorage.removeItem('streamlist_user')
    router.push('/')
  }

  const toggleWatchlist = (movieId: number) => {
    const movie = movies.find(m => m.id === movieId)
    if (movie) {
      movie.inWatchlist = !movie.inWatchlist
      setWatchlist(movies.filter(m => m.inWatchlist))
    }
  }

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#141414',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <div>Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#141414',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#000',
        padding: '1rem 2rem',
        borderBottom: '1px solid #333',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #e50914, #ff6b6b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          StreamList Manager
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#ccc' }}>Welcome, {user.name}</span>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#e50914',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{
        backgroundColor: '#222',
        padding: '1rem 2rem',
        display: 'flex',
        gap: '2rem'
      }}>
        {['discover', 'watchlist', 'services'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab === tab ? '#e50914' : 'transparent',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main style={{ padding: '2rem' }}>
        {activeTab === 'discover' && (
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Discover Content</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  style={{
                    backgroundColor: '#222',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    border: '1px solid #333'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '3rem' }}>{movie.poster}</div>
                    <div style={{
                      backgroundColor: getServiceColor(movie.service),
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.8rem'
                    }}>
                      {movie.service}
                    </div>
                  </div>
                  
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{movie.title}</h3>
                  <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>{movie.year} • {movie.genre}</p>
                  <p style={{ color: '#ccc', marginBottom: '1rem' }}>⭐ {movie.rating}/10</p>
                  
                  <button
                    onClick={() => toggleWatchlist(movie.id)}
                    style={{
                      backgroundColor: movie.inWatchlist ? '#666' : '#e50914',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      width: '100%'
                    }}
                  >
                    {movie.inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'watchlist' && (
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>My Watchlist ({watchlist.length})</h2>
            {watchlist.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                color: '#666'
              }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Your watchlist is empty</p>
                <p>Browse the Discover tab to add some content!</p>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {watchlist.map((movie) => (
                  <div
                    key={movie.id}
                    style={{
                      backgroundColor: '#222',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      border: '1px solid #333'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div style={{ fontSize: '3rem' }}>{movie.poster}</div>
                      <div style={{
                        backgroundColor: getServiceColor(movie.service),
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.8rem'
                      }}>
                        {movie.service}
                      </div>
                    </div>
                    
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{movie.title}</h3>
                    <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>{movie.year} • {movie.genre}</p>
                    <p style={{ color: '#ccc', marginBottom: '1rem' }}>⭐ {movie.rating}/10</p>
                    
                    <button
                      onClick={() => toggleWatchlist(movie.id)}
                      style={{
                        backgroundColor: '#666',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '100%'
                      }}
                    >
                      Remove from Watchlist
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Connected Services</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: 'Netflix', color: '#e50914', status: 'Connected' },
                { name: 'Prime Video', color: '#00a8e1', status: 'Connected' },
                { name: 'Disney+', color: '#113ccf', status: 'Connected' },
                { name: 'Apple TV+', color: '#000', status: 'Not Connected' },
                { name: 'Hulu', color: '#1ce783', status: 'Not Connected' },
                { name: 'HBO Max', color: '#8a2be2', status: 'Not Connected' }
              ].map((service) => (
                <div
                  key={service.name}
                  style={{
                    backgroundColor: '#222',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    border: '1px solid #333',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: service.color,
                      borderRadius: '50%',
                      margin: '0 auto 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}
                  >
                    📺
                  </div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{service.name}</h3>
                  <p style={{
                    color: service.status === 'Connected' ? '#4ade80' : '#6b7280',
                    fontSize: '0.9rem'
                  }}>
                    {service.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

function getServiceColor(service: string): string {
  switch (service) {
    case 'Netflix': return '#e50914'
    case 'Prime Video': return '#00a8e1'
    case 'Disney+': return '#113ccf'
    case 'Apple TV+': return '#000'
    case 'Hulu': return '#1ce783'
    case 'HBO Max': return '#8a2be2'
    default: return '#666'
  }
}