# README #

### What is this repository for? ###

* A security middleware for node.js.
* Version: 0.0.1

### How do I get set up? ###

## without npm ##

1. Download the `tar.gz` file from the site in your app folder.
2. unzip it in your app folder.
3. cd the directory.
4. In terminal, run `./install.sh`.

After doing those things "The plugin is sucessfully install" the message will be show in your terminal.

# Add those lines in your `app.js` or `server.js` file.

1. Open server.js/app.js file. Calling our plugin function immediate after express call.Ex:
   `var app= express();`
   `var plugin= require("nodejs-plugin");`
`
2. Configure the middleware function:
   
    `app.use(function(req, res, next){
    plugin.ThreatEquationMiddleware(req,res);
    next();
    });`


## Create a congigure.txt file in plugin directory ##

1. Go to the directory `cd /home/ubuntu/ThreatEquation/node_modules/nodejs-plugin/lib`
2. Create file.txt and add those lines.

    `user_id=<user_id>`
    
    `secret_key=<secret_key>`

* Run tests

for xss test run

`node test\xss.js`

## Features ##

ES5:

1. SQL injection
2. WEAK SESSION MANAGEMENT
3. XSS ATTACK
4. INSECURE DIRECT OBJECT REFERENCES
5. SECURITY MISCONFIGURATION
6. SENSITIVE DATA EXPOSURE
7. MISSING FUNCTION LEVEL ACCESS CONTROL
8. CROSS SITE REQUEST FORGERY
9. USING COMPONENTS WITH KNOWN VULNERABILITIES
10.UNVALIDATED REDIRECTS AND FORWARDS

ES6:

1. SQL injection
2. WEAK SESSION MANAGEMENT
3. XSS ATTACK
4. SECURITY MISCONFIGURATION
5. SENSITIVE DATA EXPOSURE
8. CROSS SITE REQUEST FORGERY
9. USING COMPONENTS WITH KNOWN VULNERABILITIES
10.UNVALIDATED REDIRECTS AND FORWARDS

Socket:

1. Injection
2. CSRF
3. Authentication

Requirements:

1. Express>=4.0
2. socket.io> 1.7.3

### Who do I talk to? ###

* contact@threatequation.com