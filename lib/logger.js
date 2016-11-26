'use strict';

var winston= require( 'winston' ),
	fs = require( 'fs' ),
	path = require('path');
	//env = process.env.NODE_ENV || 'development',

var logger = new winston.Logger();

logger.setLevels({
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  trace: 5
});

// Default to logging to console
logger.add(winston.transports.Console, {
  prettyPrint: true
});

logger.configure = function(config) {
  logger.level = config.logLevel;

  // Remove existing transports
  Object.keys(logger.transports).forEach(function(name) {
    var transport = logger.transports[name];
    if (transport.flush) transport.flush();
    logger.remove(name);
  });

  // Set the logger transports
  if (config.logFile === 'stdout' || config.logFile === 'STDOUT') {
    logger.add(winston.transports.Console, {
			handleExceptions: true,
			json: false,
			prettyPrint: true
    });
  } else {
    var realPath = path.resolve(config.logFile);
    var dirname = path.dirname(realPath);

    if (!exists(dirname)) {
      fs.mkdirSync(dirname);
    }

    logger.add(winston.transports.File, {
      filename: realPath,
      json: false,
      prettyPrint: true
    });
  }
};

module.exports = logger;
