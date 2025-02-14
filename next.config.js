/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        hostname: process.env.NEXT_IMAGE_DOMAIN,
        // port: '',
        // pathname: '/sites/default/files/**',
      },
    ],
  },
}

if (process.env.BUILD_TARGET === 'gh-pages') {
  nextConfig.output = 'export'
  nextConfig.basePath = process.env.NEXT_PUBLIC_BASE_PATH
}

module.exports = nextConfig
