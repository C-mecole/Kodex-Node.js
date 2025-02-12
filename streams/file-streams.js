const fs = require("fs");
const path = require("path");
const fsp = require("fs/promises");

(async function main() {
  const input = path.join("./streams", "file-streams.js");
  const stream = fs.createReadStream(input);
  const stream2 = fs.createWriteStream("./output/new-file.js");
  await fsp.mkdir("./output");

  stream.on("data", (chunk) => {
    stream2.write(chunk.toString());
    console.log("Successful");
  });
})();
