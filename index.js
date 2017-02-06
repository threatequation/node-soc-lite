'use strict';

var xss=require('./lib/xss');
var socket= require('./lib/socket_xss.js');

exports.ThreatEquationMiddleware = function(req,res){
     if (req.method === "GET"){
       xss(req,res);
     }
     if (req.method === "POST"){
       csrf(req);
     }
     };
     socket.use(function(socket, next) {
            var req = socket.handshake;
            var res = {};
            cookieParser(req, res, function(err) {
                if (err) return next(err);
                session(req, res, next);
            });
        });
