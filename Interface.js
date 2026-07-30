let selection = true;

if (JSON.parse(localStorage.getItem("cityname")) !== null) {
    cityChange = JSON.parse(localStorage.getItem("cityname"));
    document.querySelector('.City-name').innerHTML = `📍 ${cityChange.cityname}`;
}

function showPopup() {
    document.querySelector('.Pop-up').classList.add('show');
}

function hidePopup() {
    console.log("Hide pop up called");
    document.querySelector('.Pop-up').classList.remove('show');
    document.querySelector('.Search-Bar').value = '';
    selection = true;
}

function selectcity(city) {
    let details = {
    "cityname" : city
    }
    localStorage.setItem("cityname", JSON.stringify(details))
    document.querySelector('.City-name').innerHTML = `📍 ${city}`;
}