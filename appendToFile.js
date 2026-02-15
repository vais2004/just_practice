const fs = require("fs");

try {
  fs.appendFileSync("log.txt", "New log entry: Data appended at 9:23PM");

  console.log("Data appended successfully");
} catch (error) {
  console.log(error);
}
