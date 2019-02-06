const { process1, process2 } = require("./process");

//The pitfall with this method is, if process 1 fails
// it's going to stop the execution and don't run the
// remaining code, this approach is good if two process
// is linked with each other, but if they are individual
// this approach fails.
async function main() {
  try {
    console.time("Total Running time");
    const data = await Promise.all([process1(), process2()]);

    console.log("Process1 returned", data[0]);
    console.log("Process2 returned", data[1]);

    console.timeEnd("Total Running time");
  } catch (error) {
    console.error("error", error);
  }
}

main();
