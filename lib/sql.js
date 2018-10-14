'use strict';

var ruleChecker = require('../lib/rule_checker');
var purifier = require('../lib/rules_v2');

module.exports = function (req, res) {
	if (req.method === "GET") {
        for (var index in req.query) {
            var detect = ruleChecker.sqlFilter(decodeURI(req.query[index]));
            if (detect) {
                // var sanitizedValue = sanitizeHtml(req.query[index]);
                // sanitize query string
                req.query[index] = purifier.sqlSanitizer(req.query[index]);
            }
		}
	}

	if (req.method === "POST") {
        for (var index in req.body) {
            var detect = ruleChecker.sqlFilter(decodeURI(req.body[index]));
            if (detect) {
                // var sanitizedValue = sanitizeHtml(req.query[index]);
                // sanitize query string
                console.log(purifier.sqlSanitizer(req.body[index]));
                req.body[index] = purifier.sqlSanitizer(req.body[index]);
            }
        }
    }
}