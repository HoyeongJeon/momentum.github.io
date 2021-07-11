const API_KEY = "64779c24be2bccf0ecbb74005b638849";
function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY + "&units=metric";
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        const weatherName = document.querySelector("#weather #weather-name");
        const weatherWeather = document.querySelector("#weather #weather-weather");
        const weatherTemp = document.querySelector("#weather #weather-temp");
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        weatherName.innerText = "Cool City! " + name;
        weatherWeather.innerText = weather;
        weatherTemp.innerText = temp;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you :(");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
