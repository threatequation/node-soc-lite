var path = require('path');
var fs = require('fs');
var get_ip = require('ipware')().get_ip;

var pluginIni = require('../lib/threat');
var sendLog = require('./send_log');

module.exports = {
    logGenerator: function(req, event, data, queryString) {
        var userAgent = req.headers['HTTP_USER_AGENT'];
        var productId = pluginIni.productKey();
        var apiKey = pluginIni.apiKey();
        var ip = get_ip(req).clientIp;
        var host = req.headers.host;
        var url = req.url;
        var defenceMethods = [
            'input validation and white+black list testing',
            'escaping, encoding, white/black list verification',
            'url encoding, double encoding and escaping',
            'regex checking with given string buffer'
        ]
        var internalData = {
            'description': data['description'],
            'cwe': data['cwe'],
            'method': req.method,
            'queryString': queryString,
            'defence_method': defenceMethods[Math.floor(Math.random() * defenceMethods.length)]
        }

        if ((productId && productId.length == 32) && (apiKey && apiKey.length == 32)) {
            var logData = {
                'product_id': productId,
                'attacker_ip': ip,
                'attack_type': event,
                'url': url,
                'user_agent': userAgent,
                'plugin_type': pluginIni.pluginName,
                'risk': data['risk'],
                'attack_data': internalData,
            }
            sendLog.postAttackData(logData);
        }
    }
}
