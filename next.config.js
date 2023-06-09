const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/JohnsonChin1009.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/JohnsonChin1009.github.io' : '',

  trailingSlash: true,

  output: 'export',
};

module.exports = nextConfig;