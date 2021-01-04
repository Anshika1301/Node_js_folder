const EventEmitter = require("events");
const event = new EventEmitter();

event.on("hellFrnd", () =>{
    console.log("we have successfully created event");
});

event.emit("hellFrnd");