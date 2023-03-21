const setCountry = (data) =>{
    const html =`
        <div class="col-3">
            <div class="card h-100">
                <img src="${data.flags.png}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${data.name.common}</h5>
                </div>
                <ul class="list-group list-group-flush"> 
                    <li class="list-group-item">Population: ${(data.population /1000000).toFixed(4)}</li>
                    <li class="list-group-item">Capital: ${data.capital[0]}</li>
                    <li class="list-group-item">Language: ${data.languages.tur}</li>
                </ul>
            </div>
        </div>
    `;
    document.querySelector(".container .row").insertAdjacentHTML("beforeend", html);
}
displayCountry("turkey");
displayCountry("azerbaijan");

