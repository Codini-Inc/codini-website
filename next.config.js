/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: {
    loader: 'imgix',
    path: '/codini-website',
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
