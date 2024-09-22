const fs =require("fs");

const biodata={
    name:"akash",
    age:24,
    city:"Kolhapur"
};



const jsondata=JSON.stringify(biodata);
fs.writeFile("json.json",jsondata,(err)=>{
console.log("Done")
})

const objdata=JSON.parse(biodata);

fs.readFile("json.json","utf-8",(err,data)=>{
    console.log(data);
    const orgdata=JSON.parse(data);
    console.log(orgdata);
})


