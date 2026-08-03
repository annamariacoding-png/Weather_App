let selection = true;
let cities = []
const searchBar = document.querySelector(".Search-Bar");
const cityList = document.querySelector(".City-list");
function displayCities(cityArray) {
    cityList.innerHTML = "";
    cityArray.forEach(function(city){
        const cityItem = document.createElement("div");
        cityItem.className = "City-item";
        cityItem.innerHTML = `📍 ${city.city}`;
        cityItem.onclick = function() {
            selectcity(city.city);
            hidePopup();
        };
        cityList.appendChild(cityItem);
    });
}
fetch(`/static/cities.json`)
.then(response => response.json())
.then(data => {
    cities = data;
    displayCities(cities);
    document.querySelector(".Weather-Container").style.opacity = "1";
});
function searchcity() {
    const searchText = searchBar.value.toLowerCase();
    if (searchText === "") {
        displayCities(cities);
        return;
    }
    let filteredCities = cities.filter(function(city) {
    return city.city.toLowerCase().includes(searchText);
});
displayCities(filteredCities);
}
searchBar.addEventListener("input", searchcity);

let cityChange = JSON.parse(localStorage.getItem("cityname"));
if (cityChange !== null) {
    fetch(`/weather?city=${cityChange.cityname}`)
    .then(response => response.json())
    .then(data => {
        const weatherEmoji = data.weather[0].main;
        const body = document.querySelector(".Background");
        if (weatherEmoji === 'Clear') {
            document.querySelector("#weather-emoji").innerHTML = "☀️";
            body.style.backgroundImage = "url('/static/Pictures/Clear.png')";
        }  else if (weatherEmoji === 'Clouds') {
            document.querySelector("#weather-emoji").innerHTML = "☁️";
            body.style.backgroundImage = "url('/static/Pictures/Cloudy.png')";
        } else if (weatherEmoji === 'Rain') {
            document.querySelector("#weather-emoji").innerHTML = "🌧️";
            body.style.backgroundImage = "url('/static/Pictures/Rain.png')";
        } else if (weatherEmoji === 'Drizzle') {
            document.querySelector("#weather-emoji").innerHTML = "🌦️";
            body.style.backgroundImage = "url('/static/Pictures/Drizzle.png')";
        } else if (weatherEmoji === 'Thunderstorm') {
            document.querySelector("#weather-emoji").innerHTML = "⛈️";
            body.style.backgroundImage = "url('/static/Pictures/Thunder.png')";
        } else if (weatherEmoji === 'Snow') {
            document.querySelector("#weather-emoji").innerHTML = "❄️";
            body.style.backgroundImage = "url('/static/Pictures/Snow.png')";
        } else if (weatherEmoji === "Mist" || weatherEmoji === "Fog" || weatherEmoji === "Haze" || weatherEmoji === "Smoke" || weatherEmoji === "Dust") {
            document.querySelector("#weather-emoji").innerHTML = "🌫️";
            body.style.backgroundImage = "url('/static/Pictures/Fog.png')";
        }
        
        document.querySelector("#city-name").innerHTML = `📍 ${data.name}`;
        document.querySelector("#temperature").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector("#weather-desc").innerHTML = data.weather[0].description;
        document.querySelector("#humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector("#sunrise-time").innerHTML = `${data.sys.sunrise}`;
        document.querySelector("#sunset-time").innerHTML = `${data.sys.sunset}`;
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
    displayCities(cities);
    selection = true;
}

function selectcity(city) {
    fetch(`/weather?city=${city}`)
    .then(response => response.json())
    .then(data => {
        let details = {
    "cityname" : data.name
    }
    const weatherEmoji = data.weather[0].main;
    const body = document.querySelector(".Background");
    localStorage.setItem("cityname", JSON.stringify(details))
    document.querySelector("#city-name").innerHTML = `📍 ${data.name}`;
    document.querySelector("#temperature").innerHTML =
    `${Math.round(data.main.temp)}°C`;
    document.querySelector("#weather-desc").innerHTML = `${data.weather[0].description}`;
    document.querySelector("#humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector("#wind-speed").innerHTML = `${data.wind.speed} m/s`;
    document.querySelector("#sunrise-time").innerHTML = `${data.sys.sunrise}`;
    document.querySelector("#sunset-time").innerHTML = `${data.sys.sunset}`;
    document.querySelector("#country").innerHTML = `${data.sys.country}`;
    if (weatherEmoji === 'Clear') {
        document.querySelector("#weather-emoji").innerHTML = "☀️";
        body.style.backgroundImage = "url('/static/Pictures/Clear.png')";
     }  else if (weatherEmoji === 'Clouds') {
        document.querySelector("#weather-emoji").innerHTML = "☁️";
        body.style.backgroundImage = "url('/static/Pictures/Cloudy.png')";
    } else if (weatherEmoji === 'Rain') {
        document.querySelector("#weather-emoji").innerHTML = "🌧️";
        body.style.backgroundImage = "url('/static/Pictures/Rain.png')";
    } else if (weatherEmoji === 'Drizzle') {
        document.querySelector("#weather-emoji").innerHTML = "🌦️";
        body.style.backgroundImage = "url('/static/Pictures/Drizzle.png')";
    } else if (weatherEmoji === 'Thunderstorm') {
        document.querySelector("#weather-emoji").innerHTML = "⛈️";
        body.style.backgroundImage = "url('/static/Pictures/Thunder.png')";
    } else if (weatherEmoji === 'Snow') {
        document.querySelector("#weather-emoji").innerHTML = "❄️";
        body.style.backgroundImage = "url('/static/Pictures/Snow.png')";
    } else if (weatherEmoji === "Mist" || weatherEmoji === "Fog" || weatherEmoji === "Haze" || weatherEmoji === "Smoke" || weatherEmoji === "Dust") {
        document.querySelector("#weather-emoji").innerHTML = "🌫️";
        body.style.backgroundImage = "url('/static/Pictures/Fog.png')";
    }
    });
    document.querySelector(".Weather-Container").style.opacity = "1";
}