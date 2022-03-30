const os =require('os');
const user =os.userInfo()
console.log(user);
const currenuserinfo={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currenuserinfo)