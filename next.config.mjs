/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false, // Prevents Google Fonts prefetch issue
  },
};

export default nextConfig;
