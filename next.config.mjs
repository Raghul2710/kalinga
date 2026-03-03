/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed for Node.js server deployment
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.kalingauniversity.ac.in',
      },
      {
        protocol: 'https',
        hostname: 'kalinga-university.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "cdn.kalingauniversity.ac.in",
      },
    ],
    qualities: [75, 100],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
    ];
  },
  transpilePackages: ['motion', 'framer-motion', 'motion-dom'],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx', '.mjs'],
      '.mjs': ['.mjs', '.js', '.ts', '.tsx'],
    };
    return config;
  },
  turbopack: {},
};

export default nextConfig;
