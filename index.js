'use strict';

var xss = require('./lib/xss');
// var socket= require('./lib/socket_xss');

exports.ThreatEquationMiddleware = function (req, res) {
	xss(req, res);
};