//Zadanie 1 
//ver a - for 

for (let i = 10; i > 10; i--) {
    console.log(i);
}

console.log("Happy New Year!")

//Zadanie 2 

function silnia(liczba) {
    let iloczyn = 1;
    while (liczba > 1) {
        iloczyn *= liczba;
        liczba--;
    }
    return iloczyn;
}

let lb = parseFloat(prompt("Silnie jakiej liczby policzyc: "))

let wynik = silnia(5);
console.log(wynik)

//Zadanie 3 

let wiek = parseFloat(prompt("Ile masz lat?"));

function pelnoLetni(wiek, granica = 18) {
    if (wiek < granica) {
        window.open("error_redirect.html", "_self");
    }
}

pelnoLetni(wiek);

//Zadanie 4 

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => {
                btn.style.backgroundColor = '';
            });

            this.style.backgroundColor = 'lightblue';
        });
    });
});

//Zadanie 5 

toggleButton.addEventListener('click', function () {
    if (elementToToggle.style.display === 'none') {
        elementToToggle.style.display = 'block';
    } else {
        elementToToggle.style.display = 'none';
    }
});

//Zadanie 6 

function addToTheList() {
    var inputText = document.getElementById("textInput").value;
    var list = document.getElementById("list");

    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(inputText));

    list.appendChild(listItem);
    document.getElementById("textInput").value = "";
}

// Zadanie 7 

function addToTable() {
    var name = document.getElementById("nameInput").value;
    var surname = document.getElementById("surnameInput").value;
    var tableBody = document.getElementById("tableBody");

    var newRow = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.appendChild(document.createTextNode(name));
    newRow.appendChild(nameCell);

    var surnameCell = document.createElement("td");
    surnameCell.appendChild(document.createTextNode(surname));
    newRow.appendChild(surnameCell);

    tableBody.appendChild(newRow);

    document.getElementById("nameInput").value = "";
    document.getElementById("surnameInput").value = "";
}

// Zadanie 8 

function convertToFahrenheit() {
    var temperatureCelsius = parseFloat(document.getElementById("temperatureInput").value);
    if (!isNaN(temperatureCelsius)) {
        var temperatureFahrenheit = (temperatureCelsius * 9 / 5) + 32;
        document.getElementById("result").innerHTML = temperatureCelsius + " stopni Celsjusza to " + temperatureFahrenheit.toFixed(2) + " stopni Fahrenheita.";
    } else {
        document.getElementById("result").innerHTML = "Proszę wprowadzić poprawną liczbę.";
    }
}

function convertToCelsius() {
    var temperatureFahrenheit = parseFloat(document.getElementById("temperatureInput").value);
    if (!isNaN(temperatureFahrenheit)) {
        var temperatureCelsius = (temperatureFahrenheit - 32) * 5 / 9;
        document.getElementById("result").innerHTML = temperatureFahrenheit + " stopni Fahrenheita to " + temperatureCelsius.toFixed(2) + " stopni Celsjusza.";
    } else {
        document.getElementById("result").innerHTML = "Proszę wprowadzić poprawną liczbę.";
    }
}

// Zadanie 10 

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        var result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}