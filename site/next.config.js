/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'west0nez Kasm',
    description: 'west0nez Kasm',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/west0nez/kasm-registrh,
    contactUrl: 'https://github.com/west0nez/kasm-registry',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
