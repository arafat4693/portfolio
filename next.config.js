/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.graphassets.com',
      'res.cloudinary.com',
      'media.dev.to',
      'media2.dev.to',
    ],
  },
};

module.exports = nextConfig;
