/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Enable compression for better performance
  compress: true,
  // Add any environment variables you want accessible from the browser
  env: {
    SITE_NAME: 'Zobli Innovations Pvt Ltd',
    SITE_URL: 'https://zobli.com',
  },
};

export default nextConfig;