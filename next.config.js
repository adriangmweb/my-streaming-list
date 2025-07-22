/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'image.tmdb.org',
      'www.themoviedb.org',
      'media.themoviedb.org',
      'api.themoviedb.org'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
    ],
  },
  // Optimize for deployment
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  trailingSlash: false,
}

module.exports = nextConfig