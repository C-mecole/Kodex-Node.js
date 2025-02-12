const EventEmitter = require("events");

function NameEvent() {
  const names = ["This", "is", "an", "array"];

  const emitter = new EventEmitter();
  emitter.trigger = function () {
    if (names.length != 0) {
      emitter.emit("event", names.shift());
    } else {
      emitter.emit("empty");
    }
  };

  return emitter;
}

const nameEvent = NameEvent();
nameEvent.addListener("event", (data) => {
  console.log(data);
});

nameEvent.addListener("empty", () => {
  console.log("Array is now empty");
});

nameEvent.trigger();
