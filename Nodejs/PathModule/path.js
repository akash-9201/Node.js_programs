const path= require("path");

console.log(path.basename("F:/Node_Program/PathModule/path.js"));
console.log(path.dirname("F:/Node_Program/PathModule/path.js"));
console.log(path.extname("F:/Node_Program/PathModule/path.js"));

const myPath= path.parse("F:/Node_Program/PathModule/path.js");
console.log(myPath.root);