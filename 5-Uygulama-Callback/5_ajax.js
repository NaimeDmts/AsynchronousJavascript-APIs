const displayCountry = (country) => {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://restcountries.com/v3.1/name/'+ country);
    request.send();

    // async
    request.addEventListener('load', function() {
        const data = JSON.parse(this.responseText);
        console.log(data[0]);            
        setCountry(data);   
        
        const countries = data[0].borders.toString();
        
        const req = new XMLHttpRequest();
        req.open('GET', 'https://restcountries.com/v3.1/alpha?codes=' + countries);
        req.send();

        req.addEventListener('load', function(){
            const data = JSON.parse(this.responseText);
            setCountry(data);
        })
    });
}