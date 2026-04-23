/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  /* config options here */
  /* for GitHub Pages deployment */
  // output: "export",
  // assetPrefix: isProd
  //   ? "https://nanashi7c.github.io/0600-next-context-api"
  //   : undefined,
  // basePath: isProd ? "/0600-next-context-api" : undefined,
  // images: { unoptimized: true },
};

export default nextConfig;
