// const withPWA = require("next-pwa")({
//   dest: "public",
// });

const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
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

module.exports = withMDX(nextConfig);
