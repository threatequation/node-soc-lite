var fs = require('fs');

var get_rule=function(){
    var base = __dirname;
    data=base+"/rules.json";
fs.readFile(data, 'utf8', function (err, data) {
  if (err) {
    throw err;
  }
  var jsonData = JSON.parse(data);
  //console.log("I work well"+jsonData);
  return jsonData;
});
}

var converter=function(q){
var q = decodeURIComponent(q);
//console.log(q);
return q;
}

var xss_filter= function(q){
    var q = converter(q)
    f = 0
    for (var item in get_rule()){
        console.log("success double");
        var tag = item['tags']['tag'][0]
        if  (tag == 'xss' || tag == 'dos'){
            rules = item['rule']
            regex = new RegExp(rules)
            if (regex.search(q)){
                f = 1;
                }
                }
          }

    if (f == 0){
        return false;
        }
        else{
    return true;
    }
    }

module.exports=xss_filter;
