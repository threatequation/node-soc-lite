'use strict';

var xss = require('./lib/xss');
var sql = require('./lib/sql');
// var socket= require('./lib/socket_xss');

exports.ThreatEquationMiddleware = function (req, res) {
	xss(req, res);
	sql(req, res);
};