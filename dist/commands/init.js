'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.action = action;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _libLogger = require('../lib/logger');

var logger = _interopRequireWildcard(_libLogger);

var _libInit = require('../lib/init');

var cli = process.AURELIA;

function action() {
  var options = {
    env: cli.argv.env
  };

  logger.ok('initializing');

  var config = cli.env.configPath ? cli.aurelia._config : { env: {} };

  return (0, _libInit.init)(config, options);
}