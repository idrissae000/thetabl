import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thetablebybb.carrd.co',
      },
    ],
  },
}

export default nextConfig
