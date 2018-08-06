var ThreatEquation = require('main');

exports.check = function (req, res) {
  for (var i = main.patterns.sql.length - 1; i >= 0; --i) {
    if (main.patterns.sql[i].test(req.url)) {
      main.http.handleAttack('SQLi-' + i, req, res);
      return;
    }
  }
};