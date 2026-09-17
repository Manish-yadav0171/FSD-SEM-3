          //sync
/*
synchrous means goes line by line in execution

*/
/*
console.log("start");
for(let i=0; i<10; i++){
    console.log('my name is manish  $(i)');
}
    */

/*
console.log("start");

for (let i = 0; i < 10; i++) {
    console.log(`my name is Manish ${i}`);
}


*/


          //async
    console.log( "=== synchronous start");
    
    console.log(" === asynchronous start");
    setTimeout(() => {
        console.log("hello world")
        
    }, 2000)
    console.log ( "=== asynchronous end");