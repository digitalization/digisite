/* eslint max-len: off */
'use strict';

/**
 * Dependencies
 */
const path = require('path');
const argv = require('yargs').argv;
const pkg = require('../package.json');

//Environment
const ENV = argv.env || process.env.APP_ENV || 'dev';
const VERSION = pkg.version;
const PORT = 8080;

//Paths
const ROOT_PATH = path.normalize(path.join(__dirname, '..'));

//Watch extensions
const WATCH_EXT = [
  'js', 'css', 'html', 'jpg', 'png', 'svg', 'gif', 'woff',
];

//Source globs
const SRC_ASSETS = ['app/assets/**/*'];
const SRC_CONFIG = ['config/**/*'];
const SRC_INDEX_HTML = 'app/index.html';
const SRC_INDEX_SCSS = 'app/index.scss';
const SRC_JS = ['app/**/*.js', 'app/components/**/*.js'];
const SRC_SCSS = ['app/**/*.scss'];
const SRC_HTML = ['app/components/**/*.html'];

//Libraries
const SRC_LIB = [
  'babel-polyfill/dist/polyfill.js',
  'angular/angular.js',
  'angular-animate/angular-animate.js',
  'angular-touch/angular-touch.js',
  'angular-messages/angular-messages.js',
  'angular-sanitize/angular-sanitize.js',
  'angular-ui-router/release/angular-ui-router.js',
  'meanie-angular-analytics/release/meanie-angular-analytics.js',
].map(lib => 'node_modules/' + lib);

//Destination folders
let DEST_BUILD = `dist/${ENV}`;
let DEST_ASSETS = DEST_BUILD;
let DEST_JS = `${DEST_BUILD}/app`;
let DEST_CSS = `${DEST_BUILD}/css`;
let DEST_LIB = `${DEST_BUILD}/lib`;

//Build settings
let BUNDLE_JS = false;
let BUNDLE_CSS = false;
let BUNDLE_LIB = false;
let AUTOPREFIXER = {browsers: ['last 2 versions']};

/**
 * Non dev environment overrides
 */
if (ENV !== 'dev') {

  //Build settings
  BUNDLE_JS = true;
  BUNDLE_CSS = true;
  BUNDLE_LIB = true;

  //Destination folders
  DEST_JS =
  DEST_LIB =
  DEST_CSS = `${DEST_BUILD}/bundles`;
}

/**
 * Export build config object
 */
module.exports = {

  //Environment
  ENV,
  VERSION,
  PORT,
  ROOT_PATH,

  //Destination paths
  DEST_BUILD,
  DEST_ASSETS,
  DEST_JS,
  DEST_LIB,
  DEST_CSS,

  //Sources (JS)
  SRC_JS,
  SRC_ASSETS,
  SRC_CONFIG,
  SRC_LIB,

  //Sources (CSS & HTML)
  SRC_INDEX_HTML,
  SRC_INDEX_SCSS,
  SRC_HTML,
  SRC_SCSS,

  //Other build settings
  BUNDLE_JS,
  BUNDLE_CSS,
  BUNDLE_LIB,
  WATCH_EXT,
  AUTOPREFIXER,
};
