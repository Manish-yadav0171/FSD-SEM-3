/* generally refers to the simply fn run under settime out 
to run data from any site */

setTimeout(() => {
    console.log("Database connected") // this is the call back fn 
}, 2000);

Promise.resolve().then(() =>{
    console.log("{promise resolved");
})