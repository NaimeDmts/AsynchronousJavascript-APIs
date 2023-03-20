const setCountry = (data) =>{
    for(let country of data){
        const html =`
            <div class="col-3">
                <div class="card h-100">
                    <img src="${country.flags.png}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${country.name.common}</h5>
                    </div>
                    <ul class="list-group list-group-flush"> 
                        <li class="list-group-item">Population: ${(country.population /1000000).toFixed(4)}</li>
                        <li class="list-group-item">Capital: ${country.capital[0]}</li>
                        <li class="list-group-item">Language: ${Object.values(country.languages)}</li>
                    </ul>
                </div>
            </div>
        `;
        document.querySelector(".container .row").insertAdjacentHTML("beforeend", html);
    }
}
displayCountry("turkey");


