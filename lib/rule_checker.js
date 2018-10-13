var fs = require('fs');
var _ = require('lodash');
var Regex = require('regex');

var rules = require('../lib/rules');

var converter = function (q) {
    var q = decodeURIComponent(q);
    //console.log(q);
    return q;
}

module.exports = {
    xss_filter: function (query) {
        // var q = converter(q)
        f = 0
        _.forEach(rules, function (item) {
            var tag = item.tags.tag[0];
            if (tag == 'xss' || tag == 'dos') {
                var rule = item.rule
                regex = new RegExp(rule, 'gm')
                console.log(query)
                if (query.match(regex)) {
                    // console.log(query.match(regex))
                    f = 1;
                }
            }
        });

        if (f == 1) {
            return true;
        } else return false;
    }
}
