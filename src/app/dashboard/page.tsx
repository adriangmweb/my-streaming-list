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
        padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)',
        borderBottom: '1px solid #333',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #e50914, #ff6b6b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          minWidth: '0',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          StreamList Manager
        </h1>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 'clamp(0.5rem, 2vw, 1rem)',
          flexWrap: 'wrap',
          justifyContent: 'flex-end'
        }}>
          <span 
            className="hidden sm:inline"
            style={{ 
              color: '#ccc', 
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
            }}
          >
            Welcome, {user.name.length > 10 ? user.name.substring(0, 10) + '...' : user.name}
          </span>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#e50914',
              color: 'white',
              border: 'none',
              padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              minHeight: '36px',
              minWidth: '60px'
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{
        backgroundColor: '#222',
        padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        <div style={{
          display: 'flex',
          gap: 'clamp(1rem, 3vw, 2rem)',
          minWidth: 'max-content'
        }}>
          {['discover', 'watchlist', 'services'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                backgroundColor: activeTab === tab ? '#e50914' : 'transparent',
                color: 'white',
                border: 'none',
                padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)',
                borderRadius: '4px',
                cursor: 'pointer',
                textTransform: 'capitalize',
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                minHeight: '36px',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s ease'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: 'clamp(1rem, 3vw, 2rem)' }}>
        {activeTab === 'discover' && (
          <div>
            <h2 style={{ 
              marginBottom: '1.5rem', 
              fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
              padding: '0 0.5rem'
            }}>
              Discover Content
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(1rem, 3vw, 1.5rem)'
            }}>
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  style={{
                    backgroundColor: '#222',
                    borderRadius: '8px',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    border: '1px solid #333'
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    marginBottom: '1rem',
                    gap: '0.5rem'
                  }}>
                    <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>{movie.poster}</div>
                    <div style={{
                      backgroundColor: getServiceColor(movie.service),
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                      textAlign: 'center',
                      minWidth: 'max-content'
                    }}>
                      {movie.service}
                    </div>
                  </div>
                  
                  <h3 style={{ 
                    marginBottom: '0.5rem', 
                    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                    lineHeight: '1.3',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {movie.title}
                  </h3>
                  <p style={{ 
                    color: '#ccc', 
                    marginBottom: '0.5rem',
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
                  }}>
                    {movie.year} • {movie.genre}
                  </p>
                  <p style={{ 
                    color: '#ccc', 
                    marginBottom: '1rem',
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
                  }}>
                    ⭐ {movie.rating}/10
                  </p>
                  
                  <button
                    onClick={() => toggleWatchlist(movie.id)}
                    style={{
                      backgroundColor: movie.inWatchlist ? '#666' : '#e50914',
                      color: 'white',
                      border: 'none',
                      padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      width: '100%',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                      minHeight: '40px',
                      transition: 'background-color 0.2s ease'
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
            <h2 style={{ 
              marginBottom: '1.5rem', 
              fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
              padding: '0 0.5rem'
            }}>
              My Watchlist ({watchlist.length})
            </h2>
            {watchlist.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: 'clamp(2rem, 5vw, 3rem)',
                color: '#666'
              }}>
                <p style={{ 
                  fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
                  marginBottom: '1rem' 
                }}>
                  Your watchlist is empty
                </p>
                <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                  Browse the Discover tab to add some content!
                </p>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
                gap: 'clamp(1rem, 3vw, 1.5rem)'
              }}>
                {watchlist.map((movie) => (
                  <div
                    key={movie.id}
                    style={{
                      backgroundColor: '#222',
                      borderRadius: '8px',
                      padding: 'clamp(1rem, 3vw, 1.5rem)',
                      border: '1px solid #333'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start', 
                      marginBottom: '1rem',
                      gap: '0.5rem'
                    }}>
                      <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>{movie.poster}</div>
                      <div style={{
                        backgroundColor: getServiceColor(movie.service),
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                        textAlign: 'center',
                        minWidth: 'max-content'
                      }}>
                        {movie.service}
                      </div>
                    </div>
                    
                    <h3 style={{ 
                      marginBottom: '0.5rem', 
                      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                      lineHeight: '1.3',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {movie.title}
                    </h3>
                    <p style={{ 
                      color: '#ccc', 
                      marginBottom: '0.5rem',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
                    }}>
                      {movie.year} • {movie.genre}
                    </p>
                    <p style={{ 
                      color: '#ccc', 
                      marginBottom: '1rem',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
                    }}>
                      ⭐ {movie.rating}/10
                    </p>
                    
                    <button
                      onClick={() => toggleWatchlist(movie.id)}
                      style={{
                        backgroundColor: '#666',
                        color: 'white',
                        border: 'none',
                        padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '100%',
                        fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                        minHeight: '40px',
                        transition: 'background-color 0.2s ease'
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
            <h2 style={{ 
              marginBottom: '1.5rem', 
              fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
              padding: '0 0.5rem'
            }}>
              Connected Services
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(220px, 100%), 1fr))',
              gap: 'clamp(1rem, 3vw, 1.5rem)'
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
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    border: '1px solid #333',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(50px, 12vw, 60px)',
                      height: 'clamp(50px, 12vw, 60px)',
                      backgroundColor: service.color,
                      borderRadius: '50%',
                      margin: '0 auto 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)'
                    }}
                  >
                    📺
                  </div>
                  <h3 style={{ 
                    marginBottom: '0.5rem',
                    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {service.name}
                  </h3>
                  <p style={{
                    color: service.status === 'Connected' ? '#4ade80' : '#6b7280',
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
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