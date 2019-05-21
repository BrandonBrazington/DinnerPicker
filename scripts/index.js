let placesArray = ["Domino's", "Wendy's", "Taco Bell", "Subway", "IHOP", "Panera", "Burger King", "Carl's Jr", "Panda", "Applebees", "Palenque", "Taco Time", "McDonalds", "Rancho Viejo", "Jimmy John", "Pizza Hut", "Five Guys", "Azteca", "Red Robin", "Arby's"];

window.onload = () => {
for (let i = 0; i <placesArray.length; i++) {
    document.getElementById("list-of-options-ul").innerHTML += `<li class="current-option">${placesArray[i]}</li>`
}
}

function pickButtonOnClick() {
    let newPlace = placesArray[Math.floor(Math.random() * placesArray.length)];
    document.getElementById("current-pick-span").innerHTML = newPlace;
}