/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "storage.googleapis.com",
      "m.media-amazon.com"
    ]
  }
}

module.exports = nextConfig
