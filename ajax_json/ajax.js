const displayCountry = (country) => {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://restcountries.com/v3.1/name/'+ country);
    request.send();

    // async

    request.addEventListener('load', function() {
        const data = JSON.parse(this.responseText);
        console.log(data[0]);            
        setCountry(data[0]);       
     // string to json
    });
}