/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kalinga-university.s3.ap-south-1.amazonaws.com',
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
    ],
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
  // Use webpack explicitly for DOMMatrix polyfill support
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      // Inject DOMMatrix polyfill before any modules are evaluated
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        const polyfillPath = require('path').resolve(__dirname, 'polyfills/dommatrix.js');
        
        // Add polyfill to all entry points
        if (entries['main.js'] && !entries['main.js'].includes(polyfillPath)) {
          entries['main.js'].unshift(polyfillPath);
        }
        
        return entries;
      };
    }
    return config;
  },
  // Add empty turbopack config to silence the warning
  // We're using webpack for the DOMMatrix polyfill
  turbopack: {},
};

export default nextConfig;
