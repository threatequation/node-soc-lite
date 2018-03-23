

var HTML_CHARACTERS_EXPRESSION = /[&"'<>\/]/gm;



var HTML_ENTITY_MAP = {

  '&': '&amp;'

, '<': '&lt;'

, '>': '&gt;'

, '"': '&quot;'

, "'": '&#x27;'

, '/': '&#x2F;'

};


var HTML_ATTRIBUTE_CHARACTERS_EXPRESSION =

    /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF]/gm;


var JAVASCRIPT_CHARACTERS_EXPRESSION =

    /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]/gm;


var JSON_STRING_LITERAL_EXPRESSION =

    /"(?:\\.|[^"])*"/gm;

var CSS_CHARACTERS_EXPRESSION =

    /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF]/gm;



var _escapeHTML = function(text){

    return text && text.replace(HTML_CHARACTERS_EXPRESSION, function (c) {
        return HTML_ENTITY_MAP[c] || c;
        

      });

  }



var _escapeHTMLAttribute = function(text) {

    return text && text.replace(HTML_ATTRIBUTE_CHARACTERS_EXPRESSION, function (c) {

    return HTML_ENTITY_MAP[c] || "&#x" + ('00' + c.charCodeAt(0).toString(16)).slice(-2) + ";";

  });

  }



var _encodeJavaScriptIdentifier = function(text) {

  return text && text.replace(JAVASCRIPT_CHARACTERS_EXPRESSION, function (c) {

    return "\\u" + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);

  });

}

var _encodeJavaScriptString = function(text) {

  return text && '"' + _encodeJavaScriptIdentifier(text) + '"';

}



var _encodeJavaScriptData = function(object) {

  return JSON.stringify(object).replace(JSON_STRING_LITERAL_EXPRESSION, function (string) {

    return _encodeJavaScriptString(JSON.parse(string));

  });

}



var _encodeCSSIdentifier = function(text) {

  return text && text.replace(CSS_CHARACTERS_EXPRESSION, function (c) {

    return "\\" + ('000000' + c.charCodeAt(0).toString(16)).slice(-6);

  });

}



var _encodeCSSString= function (text) {

  return text && '"' + _encodeCSSIdentifier(text) + '"';

}

var _xssHeader = function(text) {

  if (text && text.setOnOldIE) {

    return function(req, res, next) {
      res.setHeader('X-XSS-Protection', '1; mode=block');
      next();
    };

  } else {

    return function(req, res, next)  {

      var matches = /msie\s*(\d+)/i.exec(req.headers['user-agent']);

      var value;
      if (!matches || (parseFloat(matches[1]) >= 9)) {
        value = '1; mode=block';
      } else {
        value = '0';
      }

      res.setHeader('X-XSS-Protection', value);
      next();

    };

  }

};

var e = [];

e.threatprotect = function(text){
  return _escapeHTML(text) || _escapeHTMLAttribute || _encodeCSSString || _encodeCSSIdentifier || _encodeJavaScriptString || _encodeJavaScriptIdentifier || _encodeJavaScriptData || _xssHeader;

}



module.exports = e;
