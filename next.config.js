/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t0mrrn6uzcxdc7gp.public.blob.vercel-storage.com",
        port: "",
        pathname: "/modimo-projects/**",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
