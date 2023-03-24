// next.config.js

const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const webpack = require('webpack');

const ENV = 'dev';

let SERVER_URL = 'https://api.abule.io';
let DOMAIN = 'https://app.abule.io';
let VILLAGE_URL = 'https://village.abule.io';
const MARKER_DESTINATION = '61a0b8e235c93b2218fa021f';

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
      },
    }),
  ),

);
