const fs = require("fs/promises");
const { Readable } = require("stream");

const createFileStream = (filePath, chunkSize = 64) => {
  let fd = null;

  const reader = new Readable({
    read: async function () {
      if (!fd) {
        try {
          fd = (await fs.open(filePath, "r"));
        } catch (err) {
          this.destroy(err);
          return;
        }
      }

      const buffer = Buffer.alloc(chunkSize);
      try {
        const { bytesRead } = await fd.read(buffer, 0, chunkSize, null);
        if (bytesRead === 0) {
          await fd.close();
          this.push(null);
          return;
        }

        this.push(buffer);
      } catch (err) {
        this.destroy(err);
      }
    },
    destroy: async function (err, callback) {
      try {
        if (fd) {
          await fd.close();
        }
        callback(err);
      } catch (closeErr) {
        callback(closeErr);
      }
    },
  });

  return reader;
};

const filePath = "group.txt";
const fileStream = createFileStream(filePath, 10);

fileStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.toString());
});

fileStream.on("end", () => {
  console.log("File reading completed.");
});

fileStream.on("error", (err) => {
  console.error("Error:", err.message);
});
