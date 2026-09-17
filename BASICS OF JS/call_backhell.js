 /*function getuser(id ,callback){
    setTimeout (() =>){
console.log("user fetched");
const user ={
    id :1;
    username = "john doe"
}

callback (null; , user)
    } , 1000)
}
    */

/* error code 
function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched");

        const user = {
            id: 1,
            username: "john doe"
        };

        callback(null, user);
    }, 1000);
}
 function getprofile(userid , callback){
    setTimeout(() => {
        console.log("profile fetched");
        const profile = {
            username = " john doe"
        }
        callback (null , profile)
    }, 1000);
 } 
    */ 

 /* incorrect code 
 function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched");

        const user = {
            id: 1,
            username: "john doe"
        };

        callback(null, user);
    }, 1000);
}

function getProfile(userid, callback) {
    setTimeout(() => {
        console.log("Profile fetched");

        const profile = {
            username: "john doe"
        };

        callback(null, profile);
    }, 1000);
}
function getPost(username , callback){
    setTimeout(() => {
       console.log("post fetched");
       const posts = ["post1" , "post2" , "post3"] 
       callback (null , posts)
    }, 1000);
}
 getUser ( 1, function (error , user ){
    if(error){
        console.error(error);
        return
    }
    getProfile (user.id , function(error , profile){
        if(error){
            console.error(error);
            return;
        }

        getPost(profile ,username , function (error, post){
            if error(error);
            return;
            console,log('post fetched ${posts}')
        })
    }

    ))
 }
    */

 function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched");

        const user = {
            id: 1,
            username: "john doe"
        };

        callback(null, user);
    }, 1000);
}

function getProfile(userid, callback) {
    setTimeout(() => {
        console.log("Profile fetched");

        const profile = {
            username: "john doe"
        };

        callback(null, profile);
    }, 1000);
}

function getPost(username, callback) {
    setTimeout(() => {
        console.log("Post fetched");

        const posts = ["post1", "post2", "post3"];

        callback(null, posts);
    }, 1000);
}

getUser(1, function (error, user) {
    if (error) {
        console.error(error);
        return;
    }

    getProfile(user.id, function (error, profile) {
        if (error) {
            console.error(error);
            return;
        }

        getPost(profile.username, function (error, posts) {
            if (error) {
                console.error(error);
                return;
            }

            console.log(`Posts: ${posts}`);
        });
    });
});
/* there are several errors in the code so its done mannualy and there is comment  out 
in the every side  that this is incorrect and this is the correct code */
