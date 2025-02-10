const events = require("events");

function CounterEvent() {
  let start = 0;
  const counter = new events.EventEmitter();
  // no trigger here, it just emits the event on the message channel "increment"
  setInterval(() => {
    // start here is the data that is to be sent, you can send anything as data
    counter.emit("increment", start++);
  }, 1000);

  return counter;
}

// initialize the emitter here
const counter = CounterEvent();
// register the event handler to listen on the "increment" message channel
counter.on("increment", function (count) {
  // count is the data that was received
  console.log(count);
});
