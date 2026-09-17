 /*console.log("start")
setTimeout(() =>{
    console.log("setTime out")
}, 1000)
Promise.resolve().then(() =>{
    console.log("Promise")
})
console.log("End") */ 

console.log ("CPU Architecture: " + os.arch());
console.log ("CPU model: " + os.platform());
console.log("total memory: " + os.totalmem() /
(1024 * 1024 * 1024) + " GB");
console.log("free memory: " + (os.freemem() /
(1024 * 1024 * 1024)).  + " GB");
