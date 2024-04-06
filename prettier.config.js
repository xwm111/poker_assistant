const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
  serverRuntimeConfig: {
    // 监听地址
    host: '0.0.0.0',
  },
};
