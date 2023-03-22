const renderError = (err) =>{
    const html = `
        <div class="alert alert-danger">
            ${err.message}
        </div>
    `;
    setTimeout(()=>{
        document.querySelector("#errors").innerHTML = "";
    },3000)
    document.querySelector("#errors").innerHTML = html;
}