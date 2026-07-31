let selection = true;
let cityChange = JSON.parse(localStorage.getItem("cityname"));
if (cityChange !== null) {
    fetch(`/weather?city=${cityChange.cityname}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector("#city-name").innerHTML = `📍 ${data.name}`;
        document.querySelector("#temperature").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector("#weather-desc").innerHTML = data.weather[0].description;
        document.querySelector("#humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector("#wind-speed").innerHTML = `${data.wind.speed} m/s`;
        document.querySelector("#country").innerHTML = data.sys.country;
    })
}

function showPopup() {
    document.querySelector('.Pop-up').classList.add('show');
}

function hidePopup() {
    document.querySelector('.Pop-up').classList.remove('show');
    document.querySelector('.Search-Bar').value = '';
    selection = true;
}

function selectcity(city) {
    fetch(`/weather?city=${city}`)
    .then(response => response.json())
    .then(data => {
        let details = {
    "cityname" : data.name
    }
    localStorage.setItem("cityname", JSON.stringify(details))
    document.querySelector("#city-name").innerHTML = `📍 ${data.name}`;
    document.querySelector("#temperature").innerHTML =
    `${Math.round(data.main.temp)}°C`;
    document.querySelector("#weather-desc").innerHTML = `${data.weather[0].description}`;
    document.querySelector("#humidity").innerHTML = `${data.main.humidity}`;
    document.querySelector("#wind-speed").innerHTML = `${data.wind.speed}`;
    document.querySelector("#sunrise-time").innerHTML = `${data.sys.sunrise}`;
    document.querySelector("#sunset-time").innerHTML = `${data.sys.sunset}`;
    document.querySelector("#country").innerHTML = `${data.sys.country}`;
    });
}