const fs= require("fs");

fs.writeFileSync("read.txt","This is synchrnous");
fs.readFileSync("read.txt","utf-8");
const data=fs.readFileSync("read.txt","utf-8");
console.log(data);

fs.appendFileSync("read.txt","file System");