/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fggmassppfayioprzeer.supabase.co",
        pathname: "**",
      },
    ],
  },
}

module.exports = nextConfig
