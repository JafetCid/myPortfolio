import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  trailingSlash: true,
  // basePath: isProd ? '/mi-repo' : '',
  // assetPrefix: isProd ? '/mi-repo/' : '',
};

export default nextConfig;
