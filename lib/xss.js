'use strict';

var sanitizeHtml = require('sanitize-html');
var escaping = require('../lib/escaping');
var p = require('../lib/patterns');
var rule_checker = require('../lib/rule_checker')
var logger=require('../lib/logger');
//var url_coder=require('../lib/url_coder');

module.exports = function(req,res){
     if(req.method === "GET"){
        var query_string = (req.query);
        if(query_string){
          q=querystring(query_string);
        }
        for(var index in query_string){
            var text = query_string[index];
            //console.log("text"+text);

            var checkbox=rule_checker(text);
            for (var value in checkbox){
              //console.log("success hocchec xss er ta");
            }

            if(detected){

                console.log(escaping.threatprotect(query_string[index]));
                if(req.method === "GET"){
                         if (rule_checker.xss_filter in value){
                         send_log(request, query);
                         console.log("success");
                         q = sanitizeHtml(value);
                         req.query[index] = escaping.threatprotect(q);
                         }
                         else{
                          var q = encoding.convert('UTF-8');
                    }
                    }
                if(req.method === "POST"){
                    q = sanitizeHtml(value);
                    req.query[index] = escaping.threatprotect(q);
                    }
console.log("xssattempt");
                //////here log post/////


                console.log('ready for prevention and logging.');



            }

}

       }
     if(req.method === "POST"){
        var query_string = req.body
        console.log("post");
       }
        for(var index in query_string){
            //console.log(index,'=',query_string[index]);
            //console.log(p.xss());
            var text = query_string[index];
            var xss_pattern = p.xss();

            var detected = xss_pattern.test(text)
            //console.log(text,'->',xss_pattern.test(text));

            if(detected){

                console.log(escaping.threatprotect(query_string[index]));
                if(req.method === "GET"){
                         if (rule_checker.xss_filter in value){
                         send_log(request, query);
                         console.log("success");
                         q = sanitizeHtml(value);
                         req.query[index] = escaping.threatprotect(q);
                         }
                         else{
                          var q = encoding.convert('UTF-8');
                    }
                    }
                if(req.method === "POST"){
                    q = sanitizeHtml(value);
                    req.query[index] = escaping.threatprotect(q);
                    }
console.log("xssattempt");
                //////here log post/////


                console.log('ready for prevention and logging.');



            }


        }






     //console.log('%s %s', req.method, query_string);
     //module.exports.escapeHTML = escaping.escapeHTML;
    };
