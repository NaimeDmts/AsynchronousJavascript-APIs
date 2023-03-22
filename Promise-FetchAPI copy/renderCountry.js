const renderCountry = (data) =>{
    document.querySelector("#country-details").innerHTML = "";
    document.querySelector("#neighbors").innerHTML = "";

    let html =`
        <div class="col-4">
            <img src="${data.flags.png}" alt="" class="img-fluid">
        </div>
        <div class="col-8">
            <h3 class="card-title">${data.name.common}</h3>
            <hr>
            <div class="row">
                <div class="col-4">Nufüs: </div>
                <div class="col-8">${(data.population /1000000).toFixed(1)} Milyon</div>
            </div>
            <div class="row">
                <div class="col-4">Resmi Dil: </div>
                <div class="col-8">${Object.values(data.languages)}</div>
            </div>
            <div class="row">
                <div class="col-4">Başkent: </div>
                <div class="col-8"> ${data.capital[0]}</div>
            </div>
            <div class="row">
                <div class="col-4">Para Birimi: </div>
                <div class="col-8"> ${Object.values(data.currencies)[0].name} (${Object.values(data.currencies)[0].symbol})</div>
            </div>
        </div>
    `;
    document.querySelector("#details").style.opacity = 1;
    document.querySelector("#country-details").innerHTML = html;
}

document.getElementById('btnSearch').addEventListener('click', ()=> {
    let text = document.getElementById('txtSearch').value;
    document.querySelector("#details").style.opacity = 0;
    getCountry(text);
})