// even handler for an event open

/*var fs = require('fs');
var rs = fs.createReadStream('./processExit.js');
rs.on('open',function(){
    
    console.log('the file is now open');
});*/

// using Node.js built in module - events to create custom events

var events = require('events');
var eventEmitter = new events.EventEmitter( );

// event handlre. 

var myEventHandler = function(){
    console.log(' I heard the scream');
}
eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');