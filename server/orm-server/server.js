const server = require("./app");
const { PORT } = require("./config/env");

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
