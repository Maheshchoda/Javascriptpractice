const now = require("performance-now");

const { secretAlgorithm } = require("./process");

const NUMBER_OF_RUNS = 10;

//Suppose we are benchmarking our algorithms
//we want to run it multiple times and figure out average running time

async function main() {
  try {
    let totalTime = 0;
    for (let i = 0; i < NUMBER_OF_RUNS; i++) {
      const start = now();
      await secretAlgorithm();
      const end = now();
      totalTime += end - start;
    }

    console.log();
    console.log("totalTime:", totalTime);
    console.log("Number of retries:", NUMBER_OF_RUNS);
    console.log(
      "Average Running Time:",
      (totalTime / NUMBER_OF_RUNS).toFixed(3)
    );
  } catch (error) {
    console.log(error);
  }
}

main();
