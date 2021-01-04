const fs = require("fs");

fs.writeFileSync("read.txt","hello frnds");

fs.appendFileSync("read.txt", " Welcome to in this new year :)");

// console.log(data_read.toString());

fs.renameSync("read.txt","read_write.txt");
// fs.mkdirSync("ans");

const data_read = fs.readFileSync("read_write.txt", "utf-8");
console.log(data_read);


