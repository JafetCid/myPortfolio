import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: isProd ? '/mi-repo' : '',
  assetPrefix: isProd ? '/mi-repo/' : '',
  trailingSlash: true,
};

export default nextConfig;
