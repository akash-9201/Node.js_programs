const http=require("http");
const log= require ("fs");

const myServer= http.createServer((req,res)=>{
  const log=`${Date.now()}:new req recieved \n`

  fs.appendFile("log.txt",log,(err,data)=>{
  switch(req.url){
  case"/":
  res.end("homepage");
  break;
  case"/about":
  res.end("about");
  break;
    default:
  res.end("404 Error ,Page not found")
}
  });

})

myServer.listen(8000,()=>{
  console.log("server Started");
});

