/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // WebP only: AVIF encodes several times slower, delaying first loads.
    formats: ["image/webp"],
    qualities: [75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dusit.com",
        pathname: "/wp-content/themes/**",
      },
    ],
  },
};

export default nextConfig;