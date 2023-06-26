const debug = process.env.NODE_ENV !== 'production';

/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  output: 'export',
  // assetPrefix: './'
  assetPrefix: !debug ? 'next-multipage-form' : ''
};

export default nextConfig;
