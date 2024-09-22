const fs = require("fs");

fs.writeFile("read.txt","This file is asychrounus",(err)=>{
    console.log("Completed");
    console.log(err);
});

fs.appendFile("read.txt","file System",(Err)=>{
    console.log("Task complete");
    console.log(Err);
});

fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data);
    console.log(err);
})