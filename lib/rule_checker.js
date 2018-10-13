var fs = require('fs');
var _ = require('lodash');
var Regex = require('regex');

var rules = require('../lib/rules_v2');

var getInfo = function (items) {
    return items[~~(items.length * Math.random())];
}

module.exports = {
    xssFilter: function (query) {
        // var q = converter(q)
        var flag = 0;
        var data = {};

        var rule_data = rules.xssRegex;
        var matched = query.match(rule_data.rule);
        if (matched) {
            flag = 1;
            data.description = getInfo(rule_data.description),
            data.risk = getInfo(rule_data.risk),
            data.cwe = getInfo(rule_data.cwe),
            data.findings = matched
        }

        if (flag == 1) {
            return data;
        } else return false;
    }
}
