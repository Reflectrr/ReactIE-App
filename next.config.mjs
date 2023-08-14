/**
   * @type {import('next').NextConfig}
   */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  experimental: {
    appDir: true,
  },
  output: "export"
};

export default nextConfig;