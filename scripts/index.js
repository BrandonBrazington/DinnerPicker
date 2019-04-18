let placesArray = ["Domino's", "Wendy's", "Taco Bell"];

window.onload = () => {
for (let i = 0; i <placesArray.length; i++) {
    document.getElementById("list-of-options-ul").innerHTML += `<li class="current-option">${placesArray[i]}</li>`
}
}

function pickButtonOnClick() {
    let newPlace = placesArray[Math.floor(Math.random() * placesArray.length)];
    document.getElementById("current-pick-span").innerHTML = newPlace;
}