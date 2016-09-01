'use strict';

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