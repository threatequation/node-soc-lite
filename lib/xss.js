'use strict';

// intitial the module
// var sanitizeHtml = require('sanitize-html');
// var escaping = require('../lib/escaping');
// var p = require('../lib/patterns');
var rule_checker = require('../lib/rule_checker')
// var logger=require('../lib/logger');
//var url_coder=require('../lib/url_coder');

// get the all request,response 
module.exports = function (req, res) {
    // catch the all get method
    if (req.method === "GET") {

        for (var index in req.query) {
            console.log(rule_checker.xss_filter(req.query[index]));
        }
        // catch the all queries
        // var query_string = (req.query);
        // if (query_string) {
        //     q = querystring(query_string);
        // }
        // for (var index in query_string) {
        //     var text = query_string[index];
        //     //console.log("text"+text);
        //     // detection technique
        //     var checkbox = rule_checker(text);
        //     for (var value in checkbox) {
        //         //console.log("success hocchec xss er ta");
        //     }
        //     // if detetcted
        //     if (detected) {

        //         console.log(escaping.threatprotect(query_string[index]));
        //         if (req.method === "GET") {
        //             if (rule_checker.xss_filter in value) {
        //                 //create log
        //                 send_log(request, query);
        //                 console.log("success");
        //                 //preventation method
        //                 //whitelisting approach 
        //                 q = sanitizeHtml(value);
        //                 //html escaping
        //                 req.query[index] = escaping.threatprotect(q);
        //             }
        //             else {
        //                 var q = encoding.convert('UTF-8');
        //             }
        //         }
        //         if (req.method === "POST") {
        //             q = sanitizeHtml(value);
        //             req.query[index] = escaping.threatprotect(q);
        //         }
        //         console.log("xssattempt");
        //         //////here log post/////


        //         console.log('ready for prevention and logging.');



        //     }

    }
//      if(req.method === "POST"){
//         var query_string = req.body
//         console.log("post");
//        }
//         for(var index in query_string){
//             //console.log(index,'=',query_string[index]);
//             //console.log(p.xss());
//             var text = query_string[index];
//             var xss_pattern = p.xss();

//             var detected = xss_pattern.test(text)
//             //console.log(text,'->',xss_pattern.test(text));

//             if(detected){

//                 console.log(escaping.threatprotect(query_string[index]));
//                 if(req.method === "GET"){
//                          if (rule_checker.xss_filter in value){
//                          send_log(request, query);
//                          console.log("success");
//                          q = sanitizeHtml(value);
//                          req.query[index] = escaping.threatprotect(q);
//                          }
//                          else{
//                           var q = encoding.convert('UTF-8');
//                     }
//                     }
//                 if(req.method === "POST"){
//                     q = sanitizeHtml(value);
//                     req.query[index] = escaping.threatprotect(q);
//                     }
// console.log("xssattempt");
//                 //////here log post/////


//                 console.log('ready for prevention and logging.');



//             }


//         }






//      //console.log('%s %s', req.method, query_string);
//      //module.exports.escapeHTML = escaping.escapeHTML;
};
