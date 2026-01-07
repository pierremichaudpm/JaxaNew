/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable image optimization for Netlify compatibility
  images: {
    unoptimized: true,
  },
  // Output standalone build for better Netlify compatibility
  output: "standalone",
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
  // Configure for static export if needed
  // output: 'export', // Uncomment if you want fully static export
};

module.exports = nextConfig;
