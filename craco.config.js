const path = require('path');
const resolve = pathName => path.resolve(__dirname, pathName);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7777',
        changeOrigin: true,
      },
    },
  },
};