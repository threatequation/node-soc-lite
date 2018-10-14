const path = require('path');
var fs = require('fs');
var ini = require('ini');

var apiHome = 'https://www.threatequation.com';

var productKey;
var apiKey;


module.exports = {
	pluginName: 'ThreatequationNode v0.0.5',
	postAttackData: apiHome + '/api/v1/attack_log/',
	verifyAccount: apiHome + '/api/v1/product_verify/',
	postLibraryLog: apiHome + '/api/v1/insecure_library/',
	productKey: function () {
		var appDir = path.dirname(require.main.filename);
		var _iniPath = appDir + "/threat.ini";
		var iniData = fs.readFileSync(_iniPath, 'utf8', function (err, data) {
			if (err) {
				console.log('not found `threat.ini` file inside app directory. please create and try again!!!');
			}
		});
		if (iniData) {
			iniData = ini.parse(iniData);
			if (iniData.PRODUCT_KEY) {
				productKey = iniData.PRODUCT_KEY;
			}
		}
		
		return productKey;
	},
	apiKey: function () {
		var appDir = path.dirname(require.main.filename);
		var _iniPath = appDir + "/threat.ini";
		var iniData = fs.readFileSync(_iniPath, 'utf8', function (err, data) {
			if (err) {
				console.log('not found `threat.ini` file inside app directory. please create and try again!!!');
			}
		});
		if (iniData) {
			iniData = ini.parse(iniData);
			if (iniData.API_KEY) {
				apiKey = iniData.API_KEY;
			}
		}
		
		return apiKey;
	}
}
