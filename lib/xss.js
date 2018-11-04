'use strict';

// intitial the module
// var sanitizeHtml = require('sanitize-html');
// var p = require('../lib/patterns');
var ruleChecker = require('../lib/rule_checker');
var purifier = require('../lib/rules_v2');
var loggGenerator=require('../lib/log_generator').logGenerator;
//var url_coder=require('../lib/url_coder');

// get the all request,response 
module.exports = function (req, res) {
    // catch the all get method
    if (req.method === "GET") {
        for (var key in req.query) {
            var detect = ruleChecker.xssFilter(decodeURI(req.query[key]));
            if (detect) {
                loggGenerator(req, 'XSS', detect,  { key: req.body[key]});
            }
        }
    }
    
    if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH"){
        for (var key in req.body) {
            var detect = ruleChecker.xssFilter(decodeURI(req.body[key]));
            if (detect) {
                loggGenerator(req, 'XSS', detect, { key: req.body[key]});
            }
        }
    }
};
