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

        {
          protocol: 'https',
          hostname: 'img.elo7.com.br',
          port: '',
          pathname: '/product/original/17B1547/camisa-sublimacao-poliester.jpg',
        },
        
      ],
    },
  }