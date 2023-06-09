const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/react-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-portfolio/' : '',

};

module.exports = nextConfig;