const postcss = require('rollup-plugin-postcss');
const images = require('rollup-plugin-image-files');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
        postcss({
        plugins: [],
      })
    );
    return config;
  },
};
