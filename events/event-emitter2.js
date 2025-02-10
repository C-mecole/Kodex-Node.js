// Import the built-in "events" module from Node.js
const events = require("events");

/**
 * Function to create a counter event emitter
 */
function CounterEvent() {
  let start = 0; // Initialize a counter variable

  // Create a new event emitter instance
  const counter = new events.EventEmitter();

  /**
   * Method to increment the counter
   */
  counter.increment = function () {
    start = start + 1; // Increase the counter value by 1

    // Emit an "increment" event with the updated count
    counter.emit("increment", start);
  };

  return counter; // Return the event emitter instance
}

// Create a counter instance
const counter = CounterEvent();

/**
 * Event listener function that logs the count to the console
 */
function listener(count) {
  console.log(count);
}

// Attach the "increment" event listener to the counter
counter.addListener("increment", listener);

// This line tries to remove a listener, remove this line if you want this code to run properly
counter.removeListener("increment", listener);

// Loop to increment the counter 20 times
for (let i = 0; i < 20; i++) {
  counter.increment();
}
