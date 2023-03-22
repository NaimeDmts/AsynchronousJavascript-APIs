const serverStatus = false;

const promise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        if(serverStatus){
            resolve({username: "sadikturan"});
        }else{
            reject("login error");
        }
    },2000)
});

promise.then(user => {
    console.log(user);
}).catch(err =>{
    console.log(err);
});

const login = (username, password) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            if(serverStatus){
                resolve({username:username, email:"naime.dmts@gmail.com"});
            }else{
                reject("server is offline");
            }
           
        },1000);
    })
}

const getPostsByUsername = (username) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(["post 1", "post 2","post 3"])
        },500);
    })
}

const getPostDetails = (post) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Post Details");
        },500)
    })
}

async function displayUser(){
    try{
        const user = await login("Naime", "1234");
        console.log(user);

        const posts = await getPostsByUsername(user.username);
        console.log(posts);

        const details = await getPostDetails(posts[0]);
        console.log(details);
    }
    catch(err){
        console.log(err);
    }
}
displayUser();