console.log("start");

const login = (username, password, callback) =>{
    setTimeout(() =>{
        callback({username:username, email:"naime.dmts@gmail.com"})
    },1000);
}

const getPostsByUsername = (username, callback) => {
    setTimeout(()=>{
        callback(["post 1", "post 2","post 3"])
    },500);
}

const getPostDetails = (post, callback) =>{
    setTimeout(()=>{
        callback("Post Details");
    },500)
}

 login("Naime", "123", user =>{
    console.log(user.username);
    console.log(user.email);

    getPostsByUsername(user.username, (posts) => {
        console.log(posts);
        getPostDetails(posts[0], (details)=>{
            console.log(details);
        })
    });

});

//callback hell

console.log("end");