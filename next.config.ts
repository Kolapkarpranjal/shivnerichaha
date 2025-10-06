import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip ESLint during next build (lint separately in dev/CI)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optimize named imports for smaller/faster bundles where supported
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
