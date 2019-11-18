
// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// sayHello('Mosh');
// -------------------------------------------------------------------
// var sayHello = function() {

// }

// window.sayHello();
// -------------------------------------------------------------------
// console.log(module);

// -------------------------------------------------------------------
//var logger = require('./logger.js');  // to loading a module, use require function
//should change var to const to avoid change test2 by accident
const logger = require('./logger.js');
logger.log('message');
