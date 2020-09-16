const path = require('path');
const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  port: 12580,
  alias: {
    '/@/': resolve('src'),
    '/@img/': resolve('src/assets/images')
  },
  proxy: {
    '/api': {
      target: 'http://10.10.68.185:3000',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}
