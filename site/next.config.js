/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'west0nez Kasm',
    description: 'west0nez Kasm',
    icon: '',
    listUrl: 'https://west0nez.github.io/kasm-registry',
    contactUrl: 'https://github.com/west0nez/kasm-registry',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
