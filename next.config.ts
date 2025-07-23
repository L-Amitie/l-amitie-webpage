import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 170],
  },
  experimental: {
    optimizePackageImports: ["@vercel/analytics", "@vercel/speed-insights"],
  },
};

export default nextConfig;
