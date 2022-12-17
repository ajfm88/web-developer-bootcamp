// hello.toUpperCase(); // Executing this alone will stop the code

// executing it here will allow the "AFTER!" console log to execute
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!!")
// }
// console.log("AFTER!")

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log('Please pass a string next time!');
  }
}
