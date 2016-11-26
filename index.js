'use strict';

var xss=require('./lib/xss');

exports.ThreatEquationMiddleware = function(req,res){
     if (req.method === "GET"){
       xss(req,res);
     }
     if (req.method === "POST"){
       csrf(req);
     }
     };
