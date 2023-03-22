async function getCountry(country){
    try{
        const response = await fetch('https://restcountries.com/v3.1/name/'+ country);
            if(!response.ok)
                throw new Error("Ülke bulunamadı")
        const data = await response.json();
        renderCountry(data[0]);

        const countries = data[0].borders;
            if(!countries)
                throw new Error("Komşu ülke bulunamadı")
        const response2 = await fetch('https://restcountries.com/v3.1/alpha?codes=' + countries.toString());
        const neighbors =await response2.json();
        renderNeighbors(neighbors)
    }
    catch (err){
        document.querySelector('#loading').style.display ="none";
        renderError(err);
    }
}