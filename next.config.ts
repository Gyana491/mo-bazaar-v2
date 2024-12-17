import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mobazaar.42web.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
