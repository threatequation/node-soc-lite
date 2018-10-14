const path = require('path');
var fs = require('fs');

var apiHome = 'https://www.threatequation.com';

var iniData;

var getIni = function() {
	var appDir = path.dirname(require.main.filename);
	var _iniPath = appDir + "/threat.ini";
	fs.readFile(_iniPath, 'utf8', function (err, data) {
		if (err) {
			console.log('not found>>>>');
		} else {
			console.log(data.PRODUCT_KEY)
			iniData = data;
		}
	});
};

var getClientID = function(ini) {
	if (ini) {
		console.log(ini);

	} else return null;
}

getIni();

module.exports = {
	pluginName: 'ThreatequationNode v0.0.5',
	postAttackData: apiHome + '/api/v1/attack_log/',
	verifyAccount: apiHome + '/api/v1/product_verify/',
	postLibraryLog: apiHome + '/api/v1/insecure_library/',
	getClientID: function() {
		return getClientID(iniData);
	},
}
