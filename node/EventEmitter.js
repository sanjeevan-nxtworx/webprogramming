// Create an event emitter instance and register a couple of callbacks
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

function c1() {
  console.log("an event occurred!");
}

function c2() {
  console.log("yet another event occurred!");
}

myEmitter.on("eventOne", c1); // Register for eventOne
myEmitter.on("eventOne", c2); // Register for eventOne

// Check Listener Count

console.log(myEmitter.listenerCount("eventOne"));
console.log(myEmitter.rawListeners("eventOne"));

myEmitter.emit("eventOne");

// Unregistering an event
myEmitter.off("eventOne", c1);

console.log(myEmitter.listenerCount("eventOne"));
console.log(myEmitter.rawListeners("eventOne"));

myEmitter.emit("eventOne"); // ignored for c1 not for c2

// Creating an event with parameters

myEmitter.on("status", (code, msg) => console.log(`Got ${code} and ${msg}`));

myEmitter.emit("status", 200, "ok");
