const { process1, process2 } = require("./process");

//we have to process and we want to run them in parallel
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
