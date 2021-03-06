var rulesArray = [
	{
		"id": "1",
		"rule": "(?:\"[^\"]*[^-]?>)|(?:[^\\w\\s]\\s*\\\/>)|(?:>\")",
		"description": "finds html breaking injections including whitespace attacks",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "80"
	},
	{
		"id": "2",
		"rule": "(?:\"+.*[<=]\\s*\"[^\"]+\")|(?:\"\\s*\\w+\\s*=)|(?:>\\w=\\\/)|(?:#.+\\)[\"\\s]*>)|(?:\"\\s*(?:src|style|on\\w+)\\s*=\\s*\")|(?:[^\"]?\"[,;\\s]+\\w*[\\[\\(])",
		"description": "finds attribute breaking injections including whitespace attacks",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "80"
	},
	{
		"id": "3",
		"rule": "(?:^>[\\w\\s]*<\\\/?\\w{2,}>)",
		"description": "finds unquoted attribute breaking injections",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "2",
		"cwe": "80"
	},
	{
		"id": "4",
		"rule": "(?:[+\\\/]\\s*name[\\W\\d]*[)+])|(?:;\\W*url\\s*=)|(?:[^\\w\\s\\\/?:>]\\s*(?:location|referrer|name)\\s*[^\\\/\\w\\s-])",
		"description": "Detects url-, name-, JSON, and referrer-contained payload attacks",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "5",
		"cwe": "93"
	},
	{
		"id": "5",
		"rule": "(?:\\W\\s*hash\\s*[^\\w\\s-])|(?:\\w+=\\W*[^,]*,[^\\s(]\\s*\\()|(?:\\?\"[^\\s\"]\":)|(?:(?<!\\\/)__[a-z]+__)|(?:(?:^|[\\s)\\]\\}])(?:s|g)etter\\s*=)",
		"description": "Detects hash-contained xss payload attacks, setter usage and property overloading",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "5",
		"cwe": "79"
	},
	{
		"id": "6",
		"rule": "(?:with\\s*\\(\\s*.+\\s*\\)\\s*\\w+\\s*\\()|(?:(?:do|while|for)\\s*\\([^)]*\\)\\s*\\{)|(?:\\\/[\\w\\s]*\\[\\W*\\w)",
		"description": "Detects self contained xss via with(), common loops and regex to string conversion",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "5",
		"cwe": "79"
	},
	{
		"id": "7",
		"rule": "(?:[=(].+\\?.+:)|(?:with\\([^)]*\\)\\))|(?:\\.\\s*source\\W)",
		"description": "Detects JavaScript with(), ternary operators and XML predicate attacks",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "5",
		"cwe": "79"
	},
	{
		"id": "8",
		"rule": "(?:\\\/\\w*\\s*\\)\\s*\\()|(?:\\([\\w\\s]+\\([\\w\\s]+\\)[\\w\\s]+\\))|(?:(?<!(?:mozilla\\\/\\d\\.\\d\\s))\\([^)[]+\\[[^\\]]+\\][^)]*\\))|(?:[^\\s!][{([][^({[]+[{([][^}\\])]+[}\\])][\\s+\",\\d]*[}\\])])|(?:\"\\)?\\]\\W*\\[)|(?:=\\s*[^\\s:;]+\\s*[{([][^}\\])]+[}\\])];)",
		"description": "Detects self-executing JavaScript functions",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "5",
		"cwe": "79"
	},
	{
		"id": "9",
		"rule": "(?:\\\\u00[a-f0-9]{2})|(?:\\\\x0*[a-f0-9]{2})|(?:\\\\\\d{2,3})",
		"description": "Detects the IE octal, hex and unicode entities",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "2",
		"cwe": "79"
	},
	{
		"id": "10",
		"rule": "(?:(?:\\\/|\\\\)?\\.+(\\\/|\\\\)(?:\\.+)?)|(?:\\w+\\.exe\\??\\s)|(?:;\\s*\\w+\\s*\\\/[\\w*-]+\\\/)|(?:\\d\\.\\dx\\|)|(?:%(?:c0\\.|af\\.|5c\\.))|(?:\\\/(?:%2e){2})",
		"description": "Detects basic directory traversal",
		"tags": {
			"tag": [
				"dt"
			]
		},
		"impact": "5",
		"cwe": "23"
	},
	{
		"id": "13",
		"rule": "(?:%u(?:ff|00|e\\d)\\w\\w)|(?:(?:%(?:e\\w|c[^3\\W]|))(?:%\\w\\w)(?:%\\w\\w)?)",
		"description": "Detects halfwidth\/fullwidth encoded unicode HTML breaking attempts",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "3",
		"cwe": "80"
	},
	{
		"id": "14",
		"rule": "(?:#@~\\^\\w+)|(?:\\w+script:|@import[^\\w]|;base64|base64,)|(?:\\w\\s*\\([\\w\\s]+,[\\w\\s]+,[\\w\\s]+,[\\w\\s]+,[\\w\\s]+,[\\w\\s]+\\))",
		"description": "Detects possible includes, VBSCript\/JScript encodeed and packed functions",
		"tags": {
			"tag": [
				"ci"
			]
		},
		"impact": "5",
		"cwe": "94"
	},
	{
		"id": "15",
		"rule": "([^*:\\s\\w,.\\\/?+-]\\s*)?(?<![a-z]\\s)(?<![a-z\\\/_@\\-\\|])(\\s*return\\s*)?(?:create(?:element|attribute|textnode)|[a-z]+events?|setattribute|getelement\\w+|appendchild|createrange|createcontextualfragment|removenode|parentnode|decodeuricomponent|\\wettimeout|(?:ms)?setimmediate|option|useragent)",
		"description": "Detects JavaScript DOM\/miscellaneous properties and methods",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "6",
		"cwe": "79"
	},
	{
		"id": "18",
		"rule": "([^*:\\s\\w,.\\\/?+-]\\s*)?(?<![a-z]\\s)(?<![a-z\\\/_@\\-\\|])(\\s*return\\s*)?(?:join|pop|push|reverse|reduce|concat|map|shift|sp?lice|sort|unshift)",
		"description": "Detects JavaScript array properties and methods",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "79"
	},
	{
		"id": "19",
		"rule": "([^*:\\s\\w,.\\\/?+-]\\s*)?(?<![a-z]\\s)(?<![a-z\\\/_@\\-\\|])(\\s*return\\s*)?(?:set|atob|btoa|charat|charcodeat|charset|concat|crypto|frames|fromcharcode|indexof|lastindexof|match|navigator|toolbar|menubar|replace|regexp|slice|split|substr|substring|escape|\\w+codeuri\\w*)",
		"description": "Detects JavaScript string properties and methods",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "79"
	},
	{
		"id": "20",
		"rule": "(?:\\)\\s*\\[)|([^*\":\\s\\w,.\\\/?+-]\\s*)?(?<![a-z]\\s)(?<![a-z_@\\|])(\\s*return\\s*)?(?:globalstorage|sessionstorage|postmessage|callee|constructor|content|domain|prototype|try|catch|top|call|apply|url|function|object|array|string|math|if|for\\s*(?:each)?|elseif|case|switch|regex|boolean|location|(?:ms)?setimmediate|settimeout|setinterval|void|setexpression|namespace|while)",
		"description": "Detects JavaScript language constructs",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "79"
	},
	{
		"id": "21",
		"rule": "(?:,\\s*(?:alert|showmodaldialog|eval)\\s*,)|(?::\\s*eval\\s*[^\\s])|([^:\\s\\w,.\\\/?+-]\\s*)?(?<![a-z\\\/_@])(\\s*return\\s*)?(?:(?:document\\s*\\.)?(?:.+\\\/)?(?:alert|eval|msgbox|showmod(?:al|eless)dialog|showhelp|prompt|write(?:ln)?|confirm|dialog|open))\\s*(?:[^.a-z\\s\\-]|(?:\\s*[^\\s\\w,.@\\\/+-]))|(?:java[\\s\\\/]*\\.[\\s\\\/]*lang)|(?:\\w\\s*=\\s*new\\s+\\w+)|(?:&\\s*\\w+\\s*\\)[^,])|(?:\\+[\\W\\d]*new\\s+\\w+[\\W\\d]*\\+)|(?:document\\.\\w)",
		"description": "Detects very basic XSS probings",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "3",
		"cwe": "79"
	},
	{
		"id": "22",
		"rule": "(?:=\\s*(?:top|this|window|content|self|frames|_content))|(?:\\\/\\s*[gimx]*\\s*[)}])|(?:[^\\s]\\s*=\\s*script)|(?:\\.\\s*constructor)|(?:default\\s+xml\\s+namespace\\s*=)|(?:\\\/\\s*\\+[^+]+\\s*\\+\\s*\\\/)",
		"description": "Detects advanced XSS probings via Script(), RexExp, constructors and XML namespaces",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "5",
		"cwe": "79"
	},
	{
		"id": "23",
		"rule": "(?:\\.\\s*\\w+\\W*=)|(?:\\W\\s*(?:location|document)\\s*\\W[^({[;]+[({[;])|(?:\\(\\w+\\?[:\\w]+\\))|(?:\\w{2,}\\s*=\\s*\\d+[^&\\w]\\w+)|(?:\\]\\s*\\(\\s*\\w+)",
		"description": "Detects JavaScript location\/document property access and window access obfuscation",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "5",
		"cwe": "79"
	},
	{
		"id": "24",
		"rule": "(?:[\".]script\\s*\\()|(?:\\$\\$?\\s*\\(\\s*[\\w\"])|(?:\\\/[\\w\\s]+\\\/\\.)|(?:=\\s*\\\/\\w+\\\/\\s*\\.)|(?:(?:this|window|top|parent|frames|self|content)\\[\\s*[(,\"]*\\s*[\\w\\$])|(?:,\\s*new\\s+\\w+\\s*[,;)])",
		"description": "Detects basic obfuscated JavaScript script injections",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "5",
		"cwe": "79"
	},
	{
		"id": "25",
		"rule": "(?:=\\s*[$\\w]\\s*[\\(\\[])|(?:\\(\\s*(?:this|top|window|self|parent|_?content)\\s*\\))|(?:src\\s*=s*(?:\\w+:|\\\/\\\/))|(?:\\w+\\[(\"\\w+\"|\\w+\\|\\|))|(?:[\\d\\W]\\|\\|[\\d\\W]|\\W=\\w+,)|(?:\\\/\\s*\\+\\s*[a-z\"])|(?:=\\s*\\$[^([]*\\()|(?:=\\s*\\(\\s*\")",
		"description": "Detects obfuscated JavaScript script injections",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "5",
		"cwe": "79"
	},
	{
		"id": "30",
		"rule": "(?:=\\s*\\w+\\s*\\+\\s*\")|(?:\\+=\\s*\\(\\s\")|(?:!+\\s*[\\d.,]+\\w?\\d*\\s*\\?)|(?:=\\s*\\[s*\\])|(?:\"\\s*\\+\\s*\")|(?:[^\\s]\\[\\s*\\d+\\s*\\]\\s*[;+])|(?:\"\\s*[&|]+\\s*\")|(?:\\\/\\s*\\?\\s*\")|(?:\\\/\\s*\\)\\s*\\[)|(?:\\d\\?.+:\\d)|(?:]\\s*\\[\\W*\\w)|(?:[^\\s]\\s*=\\s*\\\/)",
		"description": "Detects common XSS concatenation patterns 1\/2",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "79"
	},
	{
		"id": "31",
		"rule": "(?:=\\s*\\d*\\.\\d*\\?\\d*\\.\\d*)|(?:[|&]{2,}\\s*\")|(?:!\\d+\\.\\d*\\?\")|(?:\\\/:[\\w.]+,)|(?:=[\\d\\W\\s]*\\[[^]]+\\])|(?:\\?\\w+:\\w+)",
		"description": "Detects common XSS concatenation patterns 2\/2",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "79"
	},
	{
		"id": "32",
		"rule": "(?:[^\\w\\s=]on(?!g\\&gt;)\\w+[^=_+-]*=[^$]+(?:\\W|\\&gt;)?)",
		"description": "Detects possible event handlers",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "79"
	},
	{
		"id": "33",
		"rule": "(?:\\<\\w*:?\\s(?:[^\\>]*)t(?!rong))|(?:\\<scri)|(<\\w+:\\w+)",
		"description": "Detects obfuscated script tags and XML wrapped HTML",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "93"
	},
	{
		"id": "34",
		"rule": "(?:\\<\\\/\\w+\\s\\w+)|(?:@(?:cc_on|set)[\\s@,\"=])",
		"description": "Detects attributes in closing tags and conditional compilation tokens",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "93"
	},
	{
		"id": "35",
		"rule": "(?:--[^\\n]*$)|(?:\\<!-|-->)|(?:[^*]\\\/\\*|\\*\\\/[^*])|(?:(?:[\\W\\d]#|--|{)$)|(?:\\\/{3,}.*$)|(?:<!\\[\\W)|(?:\\]!>)",
		"description": "Detects common comment types XSS",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "3",
		"cwe": "79"
	},
	{
		"id": "40",
		"rule": "(?:\\)\\s*when\\s*\\d+\\s*then)|(?:\"\\s*(?:#|--|{))|(?:\\\/\\*!\\s?\\d+)|(?:ch(?:a)?r\\s*\\(\\s*\\d)|(?:(?:(n?and|x?or|not)\\s+|\\|\\||\\&\\&)\\s*\\w+\\()",
		"description": "Detects MySQL comments, conditions and ch(a)r injections",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "6",
		"cwe": "89"
	},
	{
		"id": "41",
		"rule": "(?:[\\s()]case\\s*\\()|(?:\\)\\s*like\\s*\\()|(?:having\\s*[^\\s]+\\s*[^\\w\\s])|(?:if\\s?\\([\\d\\w]\\s*[=<>~])",
		"description": "Detects conditional SQL injection attempts",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "6",
		"cwe": "89"
	},
	{
		"id": "42",
		"rule": "(?:\"\\s*or\\s*\"?\\d)|(?:\\\\x(?:23|27|3d))|(?:^.?\"$)|(?:(?:^[\"\\\\]*(?:[\\d\"]+|[^\"]+\"))+\\s*(?:n?and|x?or|not|\\|\\||\\&\\&)\\s*[\\w\"[+&!@(),.-])|(?:[^\\w\\s]\\w+\\s*[|-]\\s*\"\\s*\\w)|(?:@\\w+\\s+(and|or)\\s*[\"\\d]+)|(?:@[\\w-]+\\s(and|or)\\s*[^\\w\\s])|(?:[^\\w\\s:]\\s*\\d\\W+[^\\w\\s]\\s*\".)|(?:\\Winformation_schema|table_name\\W)",
		"description": "Detects classic SQL injection probings 1\/2",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "6",
		"cwe": "89"
	},
	{
		"id": "43",
		"rule": "(?:\"\\s*\\*.+(?:or|id)\\W*\"\\d)|(?:\\^\")|(?:^[\\w\\s\"-]+(?<=and\\s)(?<=or\\s)(?<=xor\\s)(?<=nand\\s)(?<=not\\s)(?<=\\|\\|)(?<=\\&\\&)\\w+\\()|(?:\"[\\s\\d]*[^\\w\\s]+\\W*\\d\\W*.*[\"\\d])|(?:\"\\s*[^\\w\\s?]+\\s*[^\\w\\s]+\\s*\")|(?:\"\\s*[^\\w\\s]+\\s*[\\W\\d].*(?:#|--))|(?:\".*\\*\\s*\\d)|(?:\"\\s*or\\s[^\\d]+[\\w-]+.*\\d)|(?:[()*<>%+-][\\w-]+[^\\w\\s]+\"[^,])",
		"description": "Detects classic SQL injection probings 2\/2",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "6",
		"cwe": "89"
	},
	{
		"id": "44",
		"rule": "(?:\\d\"\\s+\"\\s+\\d)|(?:^admin\\s*\"|(\\\/\\*)+\"+\\s?(?:--|#|\\\/\\*|{)?)|(?:\"\\s*or[\\w\\s-]+\\s*[+<>=(),-]\\s*[\\d\"])|(?:\"\\s*[^\\w\\s]?=\\s*\")|(?:\"\\W*[+=]+\\W*\")|(?:\"\\s*[!=|][\\d\\s!=+-]+.*[\"(].*$)|(?:\"\\s*[!=|][\\d\\s!=]+.*\\d+$)|(?:\"\\s*like\\W+[\\w\"(])|(?:\\sis\\s*0\\W)|(?:where\\s[\\s\\w\\.,-]+\\s=)|(?:\"[<>~]+\")",
		"description": "Detects basic SQL authentication bypass attempts 1\/3",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "7",
		"cwe": "89"
	},
	{
		"id": "45",
		"rule": "(?:union\\s*(?:all|distinct|[(!@]*)\\s*[([]*\\s*select)|(?:\\w+\\s+like\\s+\\\")|(?:like\\s*\"\\%)|(?:\"\\s*like\\W*[\"\\d])|(?:\"\\s*(?:n?and|x?or|not |\\|\\||\\&\\&)\\s+[\\s\\w]+=\\s*\\w+\\s*having)|(?:\"\\s*\\*\\s*\\w+\\W+\")|(?:\"\\s*[^?\\w\\s=.,;)(]+\\s*[(@\"]*\\s*\\w+\\W+\\w)|(?:select\\s*[\\[\\]()\\s\\w\\.,\"-]+from)|(?:find_in_set\\s*\\()",
		"description": "Detects basic SQL authentication bypass attempts 2\/3",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "7",
		"cwe": "89"
	},
	{
		"id": "46",
		"rule": "(?:in\\s*\\(+\\s*select)|(?:(?:n?and|x?or|not |\\|\\||\\&\\&)\\s+[\\s\\w+]+(?:regexp\\s*\\(|sounds\\s+like\\s*\"|[=\\d]+x))|(\"\\s*\\d\\s*(?:--|#))|(?:\"[%&<>^=]+\\d\\s*(=|or))|(?:\"\\W+[\\w+-]+\\s*=\\s*\\d\\W+\")|(?:\"\\s*is\\s*\\d.+\"?\\w)|(?:\"\\|?[\\w-]{3,}[^\\w\\s.,]+\")|(?:\"\\s*is\\s*[\\d.]+\\s*\\W.*\")",
		"description": "Detects basic SQL authentication bypass attempts 3\/3",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "7",
		"cwe": "89"
	},
	{
		"id": "47",
		"rule": "(?:[\\d\\W]\\s+as\\s*[\"\\w]+\\s*from)|(?:^[\\W\\d]+\\s*(?:union|select|create|rename|truncate|load|alter|delete|update|insert|desc))|(?:(?:select|create|rename|truncate|load|alter|delete|update|insert|desc)\\s+(?:(?:group_)concat|char|load_file)\\s?\\(?)|(?:end\\s*\\);)|(\"\\s+regexp\\W)|(?:[\\s(]load_file\\s*\\()",
		"description": "Detects concatenated basic SQL injection and SQLLFI attempts",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "5",
		"cwe": "89"
	},
	{
		"id": "48",
		"rule": "(?:@.+=\\s*\\(\\s*select)|(?:\\d+\\s*or\\s*\\d+\\s*[\\-+])|(?:\\\/\\w+;?\\s+(?:having|and|or|select)\\W)|(?:\\d\\s+group\\s+by.+\\()|(?:(?:;|#|--)\\s*(?:drop|alter))|(?:(?:;|#|--)\\s*(?:update|insert)\\s*\\w{2,})|(?:[^\\w]SET\\s*@\\w+)|(?:(?:n?and|x?or|not |\\|\\||\\&\\&)[\\s(]+\\w+[\\s)]*[!=+]+[\\s\\d]*[\"=()])",
		"description": "Detects chained SQL injection attempts 1\/2",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "6",
		"cwe": "89"
	},
	{
		"id": "49",
		"rule": "(?:\"\\s+and\\s*=\\W)|(?:\\(\\s*select\\s*\\w+\\s*\\()|(?:\\*\\\/from)|(?:\\+\\s*\\d+\\s*\\+\\s*@)|(?:\\w\"\\s*(?:[-+=|@]+\\s*)+[\\d(])|(?:coalesce\\s*\\(|@@\\w+\\s*[^\\w\\s])|(?:\\W!+\"\\w)|(?:\";\\s*(?:if|while|begin))|(?:\"[\\s\\d]+=\\s*\\d)|(?:order\\s+by\\s+if\\w*\\s*\\()|(?:[\\s(]+case\\d*\\W.+[tw]hen[\\s(])",
		"description": "Detects chained SQL injection attempts 2\/2",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "6",
		"cwe": "89"
	},
	{
		"id": "50",
		"rule": "(?:(select|;)\\s+(?:benchmark|if|sleep)\\s*?\\(\\s*\\(?\\s*\\w+)",
		"description": "Detects SQL benchmark and sleep injection attempts including conditional queries",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "4",
		"cwe": "89"
	},
	{
		"id": "51",
		"rule": "(?:create\\s+function\\s+\\w+\\s+returns)|(?:;\\s*(?:select|create|rename|truncate|load|alter|delete|update|insert|desc)\\s*[\\[(]?\\w{2,})",
		"description": "Detects MySQL UDF injection and other data\/structure manipulation attempts",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "6",
		"cwe": "564"
	},
	{
		"id": "52",
		"rule": "(?:alter\\s*\\w+.*character\\s+set\\s+\\w+)|(\";\\s*waitfor\\s+time\\s+\")|(?:\";.*:\\s*goto)",
		"description": "Detects MySQL charset switch and MSSQL DoS attempts",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "6",
		"cwe": "89"
	},
	{
		"id": "53",
		"rule": "(?:procedure\\s+analyse\\s*\\()|(?:;\\s*(declare|open)\\s+[\\w-]+)|(?:create\\s+(procedure|function)\\s*\\w+\\s*\\(\\s*\\)\\s*-)|(?:declare[^\\w]+[@#]\\s*\\w+)|(exec\\s*\\(\\s*@)",
		"description": "Detects MySQL and PostgreSQL stored procedure\/function injections",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "7",
		"cwe": "89"
	},
	{
		"id": "54",
		"rule": "(?:select\\s*pg_sleep)|(?:waitfor\\s*delay\\s?\"+\\s?\\d)|(?:;\\s*shutdown\\s*(?:;|--|#|\\\/\\*|{))",
		"description": "Detects Postgres pg_sleep injection, waitfor delay attacks and database shutdown attempts",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "5",
		"cwe": "89"
	},
	{
		"id": "55",
		"rule": "(?:\\sexec\\s+xp_cmdshell)|(?:\"\\s*!\\s*[\"\\w])|(?:from\\W+information_schema\\W)|(?:(?:(?:current_)?user|database|schema|connection_id)\\s*\\([^\\)]*)|(?:\";?\\s*(?:select|union|having)\\s*[^\\s])|(?:\\wiif\\s*\\()|(?:exec\\s+master\\.)|(?:union select @)|(?:union[\\w(\\s]*select)|(?:select.*\\w?user\\()|(?:into[\\s+]+(?:dump|out)file\\s*\")",
		"description": "Detects MSSQL code execution and information gathering attempts",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "5",
		"cwe": "564"
	},
	{
		"id": "56",
		"rule": "(?:merge.*using\\s*\\()|(execute\\s*immediate\\s*\")|(?:\\W+\\d*\\s*having\\s*[^\\s\\-])|(?:match\\s*[\\w(),+-]+\\s*against\\s*\\()",
		"description": "Detects MATCH AGAINST, MERGE, EXECUTE IMMEDIATE and HAVING injections",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "5",
		"cwe": "564"
	},
	{
		"id": "57",
		"rule": "(?:,.*[)\\da-f\"]\"(?:\".*\"|\\Z|[^\"]+))|(?:\\Wselect.+\\W*from)|((?:select|create|rename|truncate|load|alter|delete|update|insert|desc)\\s*\\(\\s*space\\s*\\()",
		"description": "Detects MySQL comment-\/space-obfuscated injections and backtick termination",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "5",
		"cwe": "89"
	},
	{
		"id": "67",
		"rule": "(?:\\({2,}\\+{2,}:{2,})|(?:\\({2,}\\+{2,}:+)|(?:\\({3,}\\++:{2,})|(?:\\$\\[!!!\\])",
		"description": "Detects unknown attack vectors based on PHPIDS Centrifuge detection",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "7",
		"cwe": "829"
	},
	{
		"id": "68",
		"rule": "(?:[\\s\\\/\"]+[-\\w\\\/\\\\\\*]+\\s*=.+(?:\\\/\\s*>))",
		"description": "Finds attribute breaking injections including obfuscated attributes",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "79"
	},
	{
		"id": "69",
		"rule": "(?:(?:msgbox|eval)\\s*\\+|(?:language\\s*=\\*vbscript))",
		"description": "Finds basic VBScript injection attempts",
		"tags": {
			"tag": [
				"xss"
			]
		},
		"impact": "4",
		"cwe": "93"
	},
	{
		"id": "70",
		"rule": "(?:\\[\\$(?:ne|eq|lte?|gte?|n?in|mod|all|size|exists|type|slice|or)\\])",
		"description": "Finds basic MongoDB SQL injection attempts",
		"tags": {
			"tag": "sqli"
		},
		"impact": "4",
		"cwe": "74"
	},
	{
		"id": "72",
		"rule": "(?:(sleep\\((\\s*)(\\d*)(\\s*)\\)|benchmark\\((.*)\\,(.*)\\)))",
		"description": "Detects blind sqli tests using sleep() or benchmark().",
		"tags": {
			"tag": [
				"sqli"
			]
		},
		"impact": "4",
		"cwe": "564"
	},
]

module.exports = rulesArray;
