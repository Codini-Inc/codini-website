/** @type {import('next').NextConfig} */
module.exports = {
  output: 'out',
  images: {
    loader: 'imgix',
    path: 'https://noop/',
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;

  },





}

