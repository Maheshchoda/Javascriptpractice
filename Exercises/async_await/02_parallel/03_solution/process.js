const util = require("util");
const wait = util.promisify(setTimeout);

module.exports = {
  async process1() {
    try {
      console.log("Process 1 started");
      throw new Error("Process 1 failed");
      console.time("Process 1 ended");

      await wait(5000);
      console.timeEnd("Process 1 ended");
      console.log();
      return "process-01-value";
    } catch (error) {
      console.error(error);
    }
  },

  async process2() {
    try {
      console.log("Process 2 started");
      console.time("Process 2 ended");
      await wait(3000);
      console.timeEnd("Process 2 ended");
      console.log();
      return "process-02-value";
    } catch (error) {
      console.error(error);
    }
  }
};
