/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // domains: "i.ibb.co",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ibb.co",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
// domains: [
//   "i.ibb.co",
//   "avatars.githubusercontent.com",
//   "lh3.googleusercontent.com",
// ],
