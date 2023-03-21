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

login("Naime","123")
    .then(user =>{
        console.log(user);
        return getPostsByUsername(user.username);
    })
    .then(posts =>{
        console.log(posts);
        return getPostDetails(posts[0]);
    })
    .then(details =>{
        console.log(details);
    })
    .catch(err =>{
        console.log(err);
    })