// next.config.js

const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const webpack = require('webpack');


module.exports = withCss(
  withSass(
    withLess({
      /* config options here */
      webpack(config) {
        config.plugins.push(
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
          }),
        );
        return config;
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        basePath: '/github-pages',
      },
    }),
  ),

);
