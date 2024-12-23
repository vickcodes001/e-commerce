import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io"
      }
    ],
    domains: ['cdn.sanity.io'],
  }
};

export default nextConfig;
