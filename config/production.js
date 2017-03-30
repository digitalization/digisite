'use strict';

/**
 * Get base config
 */
const base = require('./base');

/**
 * Environment configuration (production)
 */
module.exports = Object.assign({}, base, {

  //Analytics
  ANALYTICS_ENABLED: true,
  ANALYTICS_TRACKING_ID: 'UA-62345956-1',
});
