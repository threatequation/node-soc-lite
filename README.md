### What is this repository for? ###

* A security middleware for node.js. to Detect, Prevent and generate report in your dashboard

### How do I get set up? ###

## with npm ##

1. `npm install node-soc --save`

After doing those things "The plugin is sucessfully install" the message will be show in your terminal.

# Add those lines in your `app.js` or `server.js` file.

1. Open server.js/app.js file. Calling our plugin function immediate after express call.Ex:
   `var app = express();`
   `var nodeSoc = require("node-soc");`
`
2. Configure the middleware function:
   
    `app.use(function(req, res, next){`
        `nodeSoc.ThreatEquationMiddleware(req, res);`
        `next();`
    `});`


## Create file `threat.ini` in our project directory ##

1. add following lines

    `PRODUCT_KEY=<your_product_ky>`
    
    `API_KEY=<your_api_key>`

## Features ##

1. SQL injection
3. XSS ATTACK (DOM)
4. Insecure File Access


### Who do I talk to? ###

* contact@threatequation.com