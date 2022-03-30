const EventEmitter=require('events');
const event=new EventEmitter()
event.on("response",(name,id)=>{
    console.log(`your name is ${name} and your id is ${id}`)

})
event.emit("response",'viral',38);
event.on("father",(name,id)=>{
    console.log(`your father name is ${name} and your father number  is ${id}`)

})
event.emit("father",'vasudevbhai',50)