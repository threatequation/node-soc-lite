# node-soc #

* A security middleware for node.js. app to Detect, Prevent and generate report in your dashboard

### How do I get set up? ###

### with npm ###

`npm install node-soc --save`

After doing those things "The plugin is sucessfully install" the message will be show in your terminal.

### Add those lines in your `app.js` or `server.js` file. ###

1. Open `server.js` or `app.js` file. Calling our plugin function immediate after express call. Ex:

    
    ```javascript
    var app = express();`
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

1. SQL injection
3. XSS Attack
4. Insecure File Access


### Who do I talk to? ###

* contact@threatequation.com
