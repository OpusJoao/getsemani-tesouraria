/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com', 'cdn.onlinewebfonts.com'],
  },
}

module.exports = nextConfig
