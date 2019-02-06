const util = require("util");
const wait = util.promisify(setTimeout);

module.exports = {
  async process1() {
    console.log("Process 1 started");
    throw new Error("Process 1 failed");
    console.time("Process 1 ended");

    await wait(5000);
    console.timeEnd("Process 1 ended");
    console.log();
    return "process-01-value";
  },

  async process2() {
    console.log("Process 2 started");
    console.time("Process 2 ended");
    await wait(3000);
    console.timeEnd("Process 2 ended");
    console.log();
    return "process-02-value";
  }
};
