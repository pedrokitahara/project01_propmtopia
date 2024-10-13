/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

// CommonJS export for Next.js
module.exports = nextConfig;
