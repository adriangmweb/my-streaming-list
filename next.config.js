/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for deployment
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  trailingSlash: false,
}

module.exports = nextConfig