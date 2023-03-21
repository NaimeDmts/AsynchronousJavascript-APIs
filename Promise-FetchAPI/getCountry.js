const getCountry = (country) => {
    fetch('https://restcountries.com/v3.1/name/'+ country)
        .then((response) =>{ 
            if(!response.ok)
                throw new Error("Ülke bulunamadı")
           return response.json()
        })
        .then((data)=>{
            renderCountry(data[0]);
            const countries = data[0].borders;
            if(!countries)
                throw new Error("Komşu ülke bulunamadı")
            return fetch('https://restcountries.com/v3.1/alpha?codes=' + countries.toString());     
        })
        .then(response => response.json())
        .then((data) => renderNeighbors(data))
        .catch(err => renderError(err))
}