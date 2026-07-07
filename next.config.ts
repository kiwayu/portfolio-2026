import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isPages ? "/portfolio-2026" : "",
  assetPrefix: isPages ? "/portfolio-2026/" : undefined,
};

export default nextConfig;
