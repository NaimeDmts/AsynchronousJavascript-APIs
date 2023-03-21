const getCountry = (country) => {
    fetch('https://restcountries.com/v3.1/name/'+ country)
        .then((response) => response.json())

        .then((data)=>{
            renderCountry(data[0]);
            const countries = data[0].borders.toString();
            return fetch('https://restcountries.com/v3.1/alpha?codes=' + countries);     
        })

        .then(response => response.json())

        .then((data) =>renderNeighbors(data))
}