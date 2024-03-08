/** @type {import('next').NextConfig} */
module.exports = {
  // images: {
  //   loader: 'imgix',
  //   path: '',
  // },
  eslint: {
    ignoreDuringBuilds: true,
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
