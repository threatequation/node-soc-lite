'use strict';

var ruleChecker = require('../lib/rule_checker');
var purifier = require('../lib/rules_v2');
var loggGenerator=require('../lib/log_generator').logGenerator;

module.exports = function (req, res) {
	if (req.method === "GET") {
        for (var index in req.query) {
            var detect = ruleChecker.sqlFilter(decodeURI(req.query[index]));
            if (detect) {
                loggGenerator(req, 'SQLI', detect,  { key: req.query[index]});
            }
		}
	}

	if (req.method === "POST") {
        for (var index in req.body) {
            var detect = ruleChecker.sqlFilter(decodeURI(req.body[index]));
            if (detect) {
                loggGenerator(req, 'SQLI', detect, { key: req.body[index]});
            }
        }
    }
}