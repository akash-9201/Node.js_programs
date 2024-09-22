const os=require("os");

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
console.log(os.tmpdir());



const freeMemory=os.freemem();
console.log(`${freeMemory}`);

const TotalMemory=os.totalmem();
console.log(`${TotalMemory}`);