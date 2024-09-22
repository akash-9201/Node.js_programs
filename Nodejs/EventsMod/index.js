const EventEmmitor=require("events");

const event=new EventEmmitor();
event.on("sayMyname",()=>{
    console.log("Your Name is akash")
});
event.on("sayMyname",()=>{
    console.log("Your Name is Vaibhav")
});
event.on("sayMyname",()=>{
    console.log("Your Name is Dhiraj")
});
event.on("sayMyname",()=>{
    console.log("Your Name is Omkar")
});
event.emit("sayMyname");