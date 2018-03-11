var logging=require('../lib/logger');
var fs = require('fs');

/**
 * function paramiters are too much over write
** it should using an object 
 */
module.exports=send=function(request, event, queryString, stacktrace, url, d_method='input validation',description='strong attack', risk='high', impact='high risk', cwe='190'){

  function getClientIp(request){
      var ipAddress;

      // workaround to get real client IP
      var clientIp = req.headers['x-client-ip'];
      var forwardedForAlt = req.headers['x-forwarded-for'];
      var realIp = req.headers['x-real-ip'];

      // more obsure ones below
      var clusterClientIp = req.headers['x-cluster-client-ip'];
      var forwardedAlt = req.headers['x-forwarded'];
      var forwardedFor = req.headers['forwarded-for'];
      var forwarded = req.headers['forwarded'];

      // remote address check
      var reqConnectionRemoteAddress = req.connection ? req.connection.remoteAddress : null;
      var reqSocketRemoteAddress = req.socket ? req.socket.remoteAddress : null;
      var reqConnectionSocketRemoteAddress = (req.connection && req.connection.socket) ? req.connection.socket.remoteAddress : null;
      var reqInfoRemoteAddress = req.info ? req.info.remoteAddress : null;

      // x-client-ip
      if (clientIp) {
          ipAddress = clientIp;
      }

      // x-forwarded-for
      // (typically when your node app is behind a load-balancer (eg. AWS ELB) or proxy)
      else if (forwardedForAlt) {
          // x-forwarded-for may return multiple IP addresses in the format:
          // "client IP, proxy 1 IP, proxy 2 IP"
          // Therefore, the right-most IP address is the IP address of the most recent proxy
          // and the left-most IP address is the IP address of the originating client.
          // source: http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/x-forwarded-headers.html
          var forwardedIps = forwardedForAlt.split(',');
          ipAddress = forwardedIps[0];
      }

      // x-real-ip
      // (default nginx proxy/fcgi)
      else if (realIp) {
          // alternative to x-forwarded-for, used by some proxies
          ipAddress = realIp;
      }

      // x-cluster-client-ip
      else if (clusterClientIp) {
          ipAddress = clusterClientIp;
      }

      // x-forwarded
      else if (forwardedAlt) {
          ipAddress = forwardedAlt;
      }

      // forwarded-for
      else if (forwardedFor) {
          ipAddress = forwardedFor;
      }

      // forwarded
      else if (forwarded) {
          ipAddress = forwarded;
      }

      // remote address checks
      else if (reqConnectionRemoteAddress) {
          ipAddress = reqConnectionRemoteAddress;
      }
      else if (reqSocketRemoteAddress) {
          ipAddress = reqSocketRemoteAddress
      }
      else if (reqConnectionSocketRemoteAddress) {
          ipAddress = reqConnectionSocketRemoteAddress
      }
      else if (reqInfoRemoteAddress) {
          ipAddress = reqInfoRemoteAddress
      }

      // return null if we cannot find an address
      else {
          ipAddress = null;
      }

    userAgent = request.headers['HTTP_USER_AGENT']
    for (i in IP_LIST){
        if (request.headers.get(str(i))){
            ip = request.headers.get(str(i));
            break;
          }

    if (ip){
        pass;
      }
    else{
       ip = 'unknown';
     }
}
internal_data = {'event':event,'risk': 'high', }
version = {'core':core,'agent':agent,'database':db_name}
logging.info(log(name='attack',clientId=client_id, ip=ip, userAgent=userAgent, timestamp=new Date().toISOString(),ApplicationName=plugin_name, data=internal_data,backend=version,defence_method=d_method))
console.log("egt");//ApplicationName=plugin_name, data=(internal_data)))

}
}
