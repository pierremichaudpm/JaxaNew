/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable image optimization for Netlify compatibility
  images: {
    unoptimized: true,
  },
  // Disable TypeScript errors during build for Netlify
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build for Netlify
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable trailing slashes for better static export compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
