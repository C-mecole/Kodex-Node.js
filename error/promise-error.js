const { setTimeout } = require("./setTimeout");

(async function main() {
  try {
    const [res1, res2, res3] = await Promise.all([
      await setTimeout(5000, "5 seconds"),
      await setTimeout(3000, "3 seconds"),
      await setTimeout(1000, "1 second"),
    ]);

    console.log(value);
  } catch (error) {
    console.log("An error occurred");
  } finally {
    // release database
  }
})();

function wait() {
  // const res = await setTimeout(1000, "data");
  return new Promise((resolve, reject) => {
    const rand = Math.random() * 10;
    if (rand > 5) {
      reject(new Error("Error occurred"));
    } else {
      resolve(rand);
    }
  });
}
