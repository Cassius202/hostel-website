import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // increase as needed
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: 'https',
        hostname: 'qgpnibdjfvcelecddhas.supabase.co',
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: 'website-v3-assets.s3.amazonaws.com'
      },
      {
  protocol: 'https',
  hostname: 'flagcdn.com',
},
    ],
  },
};

export default nextConfig