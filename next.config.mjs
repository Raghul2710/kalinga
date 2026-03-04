import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      // Use CJS build so Turbopack avoids motion-dom's ESM .mjs internal resolution bug
      'motion-dom': './node_modules/motion-dom/dist/cjs/index.js',
    },
  },
  images: {
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
  // Best practice: short cache for HTML (speed + fresh after deploy), static assets keep Next default long cache.
  async headers() {
    return [
      {
        source: '/((?!_next/|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, s-maxage=60, stale-while-revalidate=86400',
          },
        ],
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
        const polyfillPath = path.resolve(__dirname, 'polyfills/dommatrix.js');

        // Add polyfill to all entry points
        if (entries['main.js'] && !entries['main.js'].includes(polyfillPath)) {
          entries['main.js'].unshift(polyfillPath);
        }

        return entries;
      };
    }
    return config;
  },
  // We're using webpack for the DOMMatrix polyfill
};

export default nextConfig;
