const renderNeighbors = (data) => {
    let html="";
    for(let country of data){
         html += `
            <div class="col-2 mt-2">
                <div class="card">
                    <img src="${country.flags.png}" class="card-img-top">
                    <div class="card-body">
                    <h6 class="card-title">${country.name.common}</h6>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('neighbors').innerHTML= html;
}