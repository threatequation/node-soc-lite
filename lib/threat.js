const path = require('path');
var fs = require('fs');

function resolveHome(filepath) {
    if (filepath[0] === '~') {
      fs.readFile('threat.ini', 'utf8',  {
        location=path.join(process.env.HOME, filepath.slice(1));
        var array=[];
        
      }
    }
    return path;
}

plugin_name = 'ThreatequationNode v0.0.1'
django_server = 'http://api.threatequation.com/log/new'
verify_url = 'http://testapi.threatequation.com/';
server = ''
port = None
