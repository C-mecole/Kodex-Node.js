const EventEmitter = require("events");

function Receiver() {
  const emitter = new EventEmitter();

  function send(message) {
    emitter.emit("message", message);
  }

  return { emitter, send };
}

function Sender() {
  const emitter = new EventEmitter();

  function send(message) {
    emitter.emit("message", message);
  }

  return { emitter, send };
}

const sender = Sender();
const receiver = Receiver();

sender.emitter.on("message", (message) => {
  console.log("Receiver said: ", message);
  if (message == "hi") {
    receiver.send("Hello");
  }
});

receiver.emitter.on("message", (message) => {
  console.log("Sender said: ", message);
  if (message == "Hello") {
    sender.send("How are you doing?");
  }
});

sender.send("hi");
