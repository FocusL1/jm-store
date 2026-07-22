import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wctdonkacfisuvmjysur.supabase.co",
      },
    ],
  },
};

export default nextConfig;