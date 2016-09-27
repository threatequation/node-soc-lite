var  escaping = require('./lib/escaping');
var url = require('url');

module.exports.escapeHTML = escaping.escapeHTML;
console.log(module.exports.escapeHTML);
module.exports.escapeHTMLAttribute = escaping.escapeHTMLAttribute;
module.exports.encodeJavaScriptIdentifier = escaping.encodeJavaScriptIdentifier;
module.exports.encodeJavaScriptString = escaping.encodeJavaScriptString;
module.exports.encodeJavaScriptData = escaping.encodeJavaScriptData;
module.exports.encodeCSSIdentifier = escaping.encodeCSSIdentifier;
module.exports.encodeCSSString = escaping.encodeCSSString;

//module.exports.consoleLog = logging;

function fullUrl(req) {
 console.log (req.originalUrl);
}
console.log("I found");