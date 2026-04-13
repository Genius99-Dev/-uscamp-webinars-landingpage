import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uscamp.com.tr",
        pathname: "/wp-content/uploads/**",
      },
      {
        // SocialProof.tsx şu anda Unsplash stock görselleri kullanıyor
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
