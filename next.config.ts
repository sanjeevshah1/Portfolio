import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['github-readme-stats.vercel.app', "api.microlink.io", ], // Add the hostname here
    dangerouslyAllowSVG: true, // Allow SVGs
  },
};

export default nextConfig;
