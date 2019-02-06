const { process1, process2 } = require("./process");

//we have to process and run them sequentially
async function main() {
  try {
    console.time("Total Running time");
    const value1 = await process1();
    const value2 = await process2();

    console.log("Process1 returned", value1);
    console.log("Process2 returned", value2);

    console.timeEnd("Total Running time");
  } catch (error) {
    console.error("error", error);
  }
}

main();
