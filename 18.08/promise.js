/* incorret code 
const fetchuserdata = nerw Promise((resolve , reject) => {
let success = true;
    setTimeout (() =>{
        if (success){
        resolve ({ id :101 , username : "Manish"});
    }
    else {
        reject("failed to fetch the user data");
    }
    } , 1000);

    )
}
)
*/

     // correct code 
     const fetchuserdata = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve({
                id: 101,
                username: "Manish"
            });
        } else {
            reject("Failed to fetch the user data");
        }
    }, 1000);
});
 fetchuserdata.then((user)=>{
    console.log(user);
 })
    .catch((err=>{
        console.log(err);
   }))