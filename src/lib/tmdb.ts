import axios from 'axios'

const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_API_KEY = process.env.TMDB_API_KEY

if (!TMDB_API_KEY) {
  throw new Error('TMDB_API_KEY is not defined in environment variables')
}

const tmdbClient = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
})

export interface TMDBMovie {
  id: number
  title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  vote_average: number
  vote_count: number
  genre_ids: number[]
  adult: boolean
  original_language: string
  original_title: string
  popularity: number
  video: boolean
}

export interface TMDBTVShow {
  id: number
  name: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  first_air_date: string
  vote_average: number
  vote_count: number
  genre_ids: number[]
  origin_country: string[]
  original_language: string
  original_name: string
  popularity: number
}

export interface TMDBGenre {
  id: number
  name: string
}

export interface TMDBSearchResult {
  page: number
  results: (TMDBMovie | TMDBTVShow)[]
  total_pages: number
  total_results: number
}

export interface TMDBMovieDetails extends TMDBMovie {
  genres: TMDBGenre[]
  runtime: number
  budget: number
  revenue: number
  status: string
  tagline: string
  imdb_id: string
  production_companies: Array<{
    id: number
    name: string
    logo_path: string | null
    origin_country: string
  }>
}

export interface TMDBTVDetails extends TMDBTVShow {
  genres: TMDBGenre[]
  episode_run_time: number[]
  seasons: Array<{
    id: number
    name: string
    overview: string
    poster_path: string | null
    season_number: number
    episode_count: number
    air_date: string
  }>
  status: string
  tagline: string
  number_of_episodes: number
  number_of_seasons: number
}

export const tmdbApi = {
  // Search for movies and TV shows
  search: async (query: string, page = 1): Promise<TMDBSearchResult> => {
    const response = await tmdbClient.get('/search/multi', {
      params: { query, page }
    })
    return response.data
  },

  // Get trending movies and TV shows
  getTrending: async (mediaType: 'movie' | 'tv' | 'all' = 'all', timeWindow: 'day' | 'week' = 'week'): Promise<TMDBSearchResult> => {
    const response = await tmdbClient.get(`/trending/${mediaType}/${timeWindow}`)
    return response.data
  },

  // Get popular movies
  getPopularMovies: async (page = 1): Promise<TMDBSearchResult> => {
    const response = await tmdbClient.get('/movie/popular', {
      params: { page }
    })
    return response.data
  },

  // Get popular TV shows
  getPopularTV: async (page = 1): Promise<TMDBSearchResult> => {
    const response = await tmdbClient.get('/tv/popular', {
      params: { page }
    })
    return response.data
  },

  // Get top rated movies
  getTopRatedMovies: async (page = 1): Promise<TMDBSearchResult> => {
    const response = await tmdbClient.get('/movie/top_rated', {
      params: { page }
    })
    return response.data
  },

  // Get top rated TV shows
  getTopRatedTV: async (page = 1): Promise<TMDBSearchResult> => {
    const response = await tmdbClient.get('/tv/top_rated', {
      params: { page }
    })
    return response.data
  },

  // Get movie details
  getMovieDetails: async (movieId: number): Promise<TMDBMovieDetails> => {
    const response = await tmdbClient.get(`/movie/${movieId}`)
    return response.data
  },

  // Get TV show details
  getTVDetails: async (tvId: number): Promise<TMDBTVDetails> => {
    const response = await tmdbClient.get(`/tv/${tvId}`)
    return response.data
  },

  // Get movie genres
  getMovieGenres: async (): Promise<{ genres: TMDBGenre[] }> => {
    const response = await tmdbClient.get('/genre/movie/list')
    return response.data
  },

  // Get TV genres
  getTVGenres: async (): Promise<{ genres: TMDBGenre[] }> => {
    const response = await tmdbClient.get('/genre/tv/list')
    return response.data
  },

  // Get movie recommendations
  getMovieRecommendations: async (movieId: number, page = 1): Promise<TMDBSearchResult> => {
    const response = await tmdbClient.get(`/movie/${movieId}/recommendations`, {
      params: { page }
    })
    return response.data
  },

  // Get TV show recommendations
  getTVRecommendations: async (tvId: number, page = 1): Promise<TMDBSearchResult> => {
    const response = await tmdbClient.get(`/tv/${tvId}/recommendations`, {
      params: { page }
    })
    return response.data
  },

  // Discover movies with filters
  discoverMovies: async (filters: {
    genre?: number
    year?: number
    sort_by?: string
    page?: number
  } = {}): Promise<TMDBSearchResult> => {
    const response = await tmdbClient.get('/discover/movie', {
      params: {
        page: 1,
        ...filters
      }
    })
    return response.data
  },

  // Discover TV shows with filters
  discoverTV: async (filters: {
    genre?: number
    year?: number
    sort_by?: string
    page?: number
  } = {}): Promise<TMDBSearchResult> => {
    const response = await tmdbClient.get('/discover/tv', {
      params: {
        page: 1,
        ...filters
      }
    })
    return response.data
  }
}

// Helper function to get full image URL
export const getImageUrl = (path: string | null, size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original' = 'w500'): string => {
  if (!path) return '/placeholder-poster.svg'
  return `https://image.tmdb.org/t/p/${size}${path}`
}

// Helper function to determine if item is a movie or TV show
export const isMovie = (item: TMDBMovie | TMDBTVShow): item is TMDBMovie => {
  return 'title' in item && 'release_date' in item
}

// Helper function to get title from movie or TV show
export const getTitle = (item: TMDBMovie | TMDBTVShow): string => {
  return isMovie(item) ? item.title : item.name
}

// Helper function to get release date from movie or TV show
export const getReleaseDate = (item: TMDBMovie | TMDBTVShow): string => {
  return isMovie(item) ? item.release_date : item.first_air_date
}

export default tmdbApi