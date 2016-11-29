# README #

### What is this repository for? ###

* A security middleware for node.js.
* Version: 0.0.1

### How do I get set up? ###

## without npm ##

1. Download the `tar.gz` file from the site.
2. unzip it in your app `npm_module`'s directory.
3. cd folder directory. Ex: `cd /home/ubuntu/ThreatEquation/node_modules/nodejs-plugin`
4. then command `npm install` there.

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
2. Create congigure.txt and add those lines.

    `user_id=<user_id>`
    
    `secret_key=<secret_key>`

* Run tests

for xss test run

`node test\xss.js`


### Who do I talk to? ###

* contact@threatequation.com