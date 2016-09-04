'use strict';

var ThreatEquation = require('ThreatEquation');

exports.check = function (req, res) {
  for (var i = fusker.patterns.xss.length - 1; i >= 0; --i) {
    if (ThreatEquation.patterns.xss[i].test(req.url)) {
      ThreatEquation.http.handleAttack('XSS-' + i, req, res);
      return;
    }
  }
};

var chars = {
  '&amp;'   : '&',
  '&quot;'  : '"',
  '&#39;'   : '\'',
  '&lt;'    : '<',
  '&gt;'    : '>',
  '&#x2F;'  : '/',
  '.dom'    :'document',
  '&#045;'  : '-',
  '&#061;'  : '=',
  '&#059;'  : ';',
  '&#038;'  : '&'
  };
  
    
module.exports = {
  escape: function(html) {
    if (!html) {
      return '';
    }

    var values = Object.keys(chars).map(function(key) { return chars[key]; });
    var re = new RegExp('(' + values.join('|') + ')', 'g');

    return String(html).replace(re, function(match) {
      for (var key in chars) {
        if (chars.hasOwnProperty(key) && chars[key] === match) {
          return key;
        }
      }
    });
  },
  unescape: function(html) {
    if (!html) {
      return '';
    }

    var re = new RegExp('(' + Object.keys(chars).join('|') + ')', 'g');

    return String(html).replace(re, function(match) {
      return chars[match];
    });
  }
};