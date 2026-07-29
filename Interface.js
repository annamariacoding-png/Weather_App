let selection = true;
function showPopup() {
    document.querySelector('.Pop-up').classList.add('show');
}
function hidePopup() {
    document.querySelector('.Pop-up').classList.remove('show');
    document.querySelector('.Search-Bar').value = '';
    selection = true;
}
const weather = {
    city: "Kochi"
};
function selectcity(city) {
    document.querySelector('.City-name').innerHTML = `📍 ${city}`;
    localStorage.setItem("details", JSON.stringify(weather));
}