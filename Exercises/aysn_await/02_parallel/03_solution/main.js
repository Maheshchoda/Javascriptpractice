const { process1, process2 } = require("./process");

//Check the process1 function to overcome the problem we
//are facing.
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
