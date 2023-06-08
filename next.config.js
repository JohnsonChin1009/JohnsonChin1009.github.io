const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/react-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-portfolio/' : '',
  // Replace exportPathMap with generateStaticPaths
  generateStaticPaths: async () => {
    return {
      '/': { routes: ['/'] },
      // Add other routes of your application here
    };
  },
};

module.exports = nextConfig;