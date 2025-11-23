import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.voxeus.com',
        pathname: '/podcasts/assets/images/**',
      },
    ],
  },
};

export default nextConfig;
