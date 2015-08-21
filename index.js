'use strict';

var Bluebird = require('bluebird');

module.exports = function(f) {
  return Bluebird.coroutine(f)();
};
