console.log("start")
setTimeout(() =>{
    console.log("setTime out")
}, 1000)
Promise.resolve().then(() =>{
    console.log("Promise")
})
console.log("End")