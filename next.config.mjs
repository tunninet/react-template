/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.ny5.os.tunninet.com",
        pathname: "/**",
      },
    ],
  },
  
  experimental: {
    optimizeCss: false // Prevents Next.js from prefetching Google Fonts (fixes ECONNRESET errors)
  },
  
  webpack: (config) => config,
};

export default nextConfig;
