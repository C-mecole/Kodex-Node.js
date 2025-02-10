// Import the built-in 'events' module from Node.js
const EventEmitter = require("events");

/**
 * Function to create a logger with an event-driven approach.
 */
function createLogger() {
  // Create an instance of EventEmitter
  const emitter = new EventEmitter();

  /**
   * Functions to log different types of messages by emitting events.
   */
  const logInfo = (message) => emitter.emit("info", message); // Emits an "info" event
  const logWarning = (message) => emitter.emit("warning", message); // Emits a "warning" event
  const logError = (message) => emitter.emit("error", message); // Emits an "error" event

  // Return the emitter along with the log functions
  return { emitter, logInfo, logWarning, logError };
}

// Create a logger instance
const Logger = createLogger();

/**
 * Set up event listeners to handle and display log messages.
 */
Logger.emitter.on("info", (message) => console.log(`ℹ️ [INFO]: ${message}`));

Logger.emitter.on("warning", (message) => {
  return console.log(`⚠️ [WARNING]: ${message}`);
});

Logger.emitter.on("error", (message) => console.log(`❌ [ERROR]: ${message}`));

/**
 * Log different types of messages by calling the respective functions.
 */
Logger.logInfo("Application started successfully."); // Triggers the "info" event
Logger.logWarning("Disk space running low."); // Triggers the "warning" event
Logger.logError("Failed to connect to the database."); // Triggers the "error" event
