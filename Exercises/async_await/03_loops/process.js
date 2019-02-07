const util = require("util");
const wait = util.promisify(setTimeout);

function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

module.exports = {
  async secretAlgorithm() {
    console.time("secretAlgorithm");
    await wait(randomNumber(1, 7) * 100);
    console.timeEnd("secretAlgorithm");
  }
};
