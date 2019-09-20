let placesArray = ["Domino's", "Wendy's", "Taco Bell", "Subway", "IHOP", "Panera", "Burger King", "Carl's Jr", "Panda", "Applebees", "Palenque", "Taco Time", "McDonalds", "Rancho Viejo", "Jimmy John", "Pizza Hut", "Five Guys", "Azteca", "Red Robin", "Arby's"];
let approvedPlaces = [];
let vetoedPlaces = [];
let currentPick = "";

window.onload = () => {
    loadPlaces(document.getElementById("list-of-options-ul"), placesArray);
    randomlyPickPlace();
}

function loadPlaces(listUL, arrayOfPlaces) {
    listUL.innerHTML = "";
    for (let i = 0; i < arrayOfPlaces.length; i++) {
        listUL.innerHTML += `<li class="current-option">${arrayOfPlaces[i]}</li>`
    }
}

function randomlyPickPlace() {
    if (placesArray.length == 0 && approvedPlaces.length == 1) {
        document.getElementById("current-pick-span").innerHTML = approvedPlaces[0];
        window.alert(`The winning destination is ${approvedPlaces[0]}`);
        return;
    }
    currentPick = placesArray[Math.floor(Math.random() * placesArray.length)];
    document.getElementById("current-pick-span").innerHTML = currentPick;
}

function approveCurrentPick() {
    let currentPickIndex = placesArray.indexOf(currentPick)
    if (currentPickIndex != -1) {
        placesArray.splice(currentPickIndex, 1);
        approvedPlaces.push(currentPick);
        loadPlaces(document.getElementById("list-of-options-ul"), placesArray);
        loadPlaces(document.getElementById("list-of-approved-ul"), approvedPlaces);
        randomlyPickPlace();
    }
}

function vetoCurrentPick() {
    let currentPickIndex = placesArray.indexOf(currentPick)
    if (currentPickIndex != -1) {
        placesArray.splice(placesArray.indexOf(currentPick), 1);
        vetoedPlaces.push(currentPick);
        loadPlaces(document.getElementById("list-of-options-ul"), placesArray);
        loadPlaces(document.getElementById("list-of-vetoed-ul"), vetoedPlaces);
        randomlyPickPlace();
    }
}

function moveApprovedToCurrent() {
    if (approvedPlaces.length == 0) return;
    placesArray = [...placesArray, ...approvedPlaces]
    approvedPlaces = [];
    loadPlaces(document.getElementById("list-of-options-ul"), placesArray);
    loadPlaces(document.getElementById("list-of-approved-ul"), approvedPlaces);
    randomlyPickPlace();
}

function undoLastApproval() {
    if (approvedPlaces.length == 0) return;
    placesArray.push(approvedPlaces.splice(approvedPlaces.length - 1));
    loadPlaces(document.getElementById("list-of-options-ul"), placesArray);
    loadPlaces(document.getElementById("list-of-approved-ul"), approvedPlaces);
}

function undoLastVeto() {
    if (vetoedPlaces.length == 0) return;
    placesArray.push(vetoedPlaces.splice(vetoedPlaces.length - 1));
    loadPlaces(document.getElementById("list-of-options-ul"), placesArray);
    loadPlaces(document.getElementById("list-of-vetoed-ul"), vetoedPlaces);
}