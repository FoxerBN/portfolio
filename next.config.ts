import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',            // vygeneruje čistú statiku do /out
  images: { unoptimized: true }, // Next/Image bez servera
  trailingSlash: true,         // zabráni 404 pri refreshi na podstránkach
};

export default nextConfig;
