const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "", // Remove the port
        pathname: "/u/**", // Match any user ID and query parameters
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
