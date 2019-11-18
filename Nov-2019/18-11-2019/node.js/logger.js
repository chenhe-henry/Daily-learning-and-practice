

var url = 'http://mylogger.io/log';

function log(message) {
    //Send an HTTP request
    console.log(message);
}


module.exports.log = log;  //module.exports.xxx = yyy;  xxx is the name want to exports to app.js, 
