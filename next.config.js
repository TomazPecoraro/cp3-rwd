/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'https://www.google.com',
          port: '',
          pathname: '/imghp',
        },
        
      ],
    },
  }