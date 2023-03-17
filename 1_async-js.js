 //sync
    // console.log(1);
    // console.log(2);
    // console.log(3);

//async
    console.log(1);

    setTimeout(()=> {
         console.log(2);
    },200)
        
    console.log(3);

    document.getElementById("btn").addEventListener("click",()=>{
         console.log("saved");
    })

    //api

    //callback, promise, asyc-await