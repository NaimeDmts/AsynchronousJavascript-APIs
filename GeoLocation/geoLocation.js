document.getElementById('btnLocation').addEventListener('click',()=>{
    if(navigator.geolocation){
        document.querySelector('#loading').style.display ="block";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
});
function onError(err){
    console.log(err);
    document.querySelector('#loading').style.display ="none";
}
async function onSuccess(position){
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
   
    const api_key = "681336af8d6e473899858540079e557b";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${api_key}`;

    const response = await fetch(url)
    const data = await response.json();
    const country = data.results[0].components.country;
    
    document.querySelector('#txtSearch').value = country;
    document.querySelector('#btnSearch').click();
}