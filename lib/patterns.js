/*var patterns_xss = [/((\%3C)|<)((\%2F)|\/)*[a-z0-9\%]+((\%3E)|>)/ix,
/((\%3C)|<)((\%69)|i|(\%49))((\%6D)|m|(\%4D))((\%67)|g|(\%47))[^\n]+((\%3E)|>)/I,
/((\%3C)|<)[^\n]+((\%3E)|>)/I];


*/
var p = [];

p.xss = function(){
   xss =  /[&<>"'`](?:\x00|^-*!?>|--!?>|--?!?$|\]>|\]$)(?:^$|[\x00\x09-\x0D "'`=<>])[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF][\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF]/g;
   return xss;
}  

//console.log(p.t);

/*
var patterns_SQL_ATTACKS = [/((\%3D)|(=))[^\n]*((\%27)|(\')|(\-\-)|(\%3B)|(;))/i, //SQL meta-characters
/\w*((\%27)|(\'))((\%6F)|o|(\%4F))((\%72)|r|(\%52))/i, //Simple SQLi
/((\%27)|(\'))union/i, //SQLi with UNION
/exec(\s|\+)+(s|x)p\w+/ix, //SQLi for MSSQL
/UNION(?:\s+ALL)?\s+SELECT/i,
/((\%27)|(\'))\s*(\-\-)/i, //Escaped comment
/\w*\s*((\%27)|(\'))\s*((\%41)|a|(\%61))((\%4E)|n|(\%65))((\%44)|d|(\%64))/i, //Escaped and
/\s*((\%3D)|(=))[^\n]*((\%27)|(\')(\-\-)|(\%3B)|(;))/i, //equal comment
];
*/

module.exports = p;

