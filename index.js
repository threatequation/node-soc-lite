'use strict';

var checkVersion = require('./version')(process.version);
if (!checkVersion) {
    console.error('The current version of Node.js is ' + process.version + '.It\'s not support by us. Please upgrade it node>=4');
}
else {
var xss=require('./lib/xss');
var socket= require('./lib/socket_xss');

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
}