#-------------------------
Youtube tutorial from https://www.youtube.com/watch?v=TlB_eWDSMt4
Node.js Tutorial for Beginners: Learn Node in 1 Hour | Mosh
#-------------------------
setTimeout()
clearTimeout()
setInterval()
clearInterval()
#-------------------------
In app.js
var logger = require('./logger.js');
logger.log('message');

In logger.js
function log(message) {
    //Send an HTTP request
    console.log(message);
}
module.exports.log = log;

in app.js, require() is call the file name with module, var xxx, xxx is the name of xxx.js been called.
            logger.log()   the 'log' is what in logger.js, module.exports.log  
in logger.js
    module.exports.log = log, the later log is the function in logger.js


and it is better to use const  to call the require to load the module
#-------------------------
#-------------------------
#-------------------------
#-------------------------
#-------------------------
#-------------------------
#-------------------------
#-------------------------
#-------------------------
#-------------------------