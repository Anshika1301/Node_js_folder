const EventEmitter = require("events");
const event = new EventEmitter();

event.on("passValue", (status, msg) =>{
    console.log(`pass value is sucessfully created with message ${msg} and status code ${status}`);
})

event.emit("passValue", 200, "OK");