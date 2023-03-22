document.getElementById('btnLocation').addEventListener('click',()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
});
function onError(err){
    console.log(err);
}
function onSuccess(position){
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    console.log(lat , lng)
}