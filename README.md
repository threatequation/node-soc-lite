# node-soc-lite #

[![npm version](https://img.shields.io/npm/v/node-soc-lite.svg?style=flat-square)](https://www.npmjs.org/package/node-soc-lite)
[![license](https://badgen.net/badge/license/ISC/blue)](https://www.npmjs.org/package/node-soc-lite)

* A security middleware for node.js. app to Detect and generate report in your dashboard

### How do I get set up? ###

### with npm ###

`npm install node-soc-lite --save`

### or with Yarn ###

`yarn add node-soc-lite`

After doing those things "The node-soc-lite is successfully install" the message will be show in your terminal.

### Add those lines in your `app.js` or `server.js` file. ###

1. Open `server.js` or `app.js` file. Calling our plugin function immediate after express call. Ex:

    
    ```javascript
    var app = express();
    var nodeSoc = require("node-soc");
    ```
 
2. Configure the middleware function:

    ```javascript
    app.use(function(req, res, next){
        nodeSoc.ThreatEquationMiddleware(req, res);
        next();
    });
    ```


## Create file `threat.ini` in our project directory ##

1. add following lines

    ```javascript
    PRODUCT_KEY=<your_product_ky>
    API_KEY=<your_api_key>
    ```
   
restart the app.

## Features ##

Monitoring request data and generate reports on following areas -

1.SQL injection

2.XSS (Cross Site Scripting)


### Who do I talk to? ###

* contact@threatequation.com
