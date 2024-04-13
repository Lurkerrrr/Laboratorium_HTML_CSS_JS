//1. Używając konsoli w przeglądarce wyświetl alert „Hello World!”.
alert("Hello World!");

//2. Utwórz zmienne: a=10, b=20, c=23.2, na zmiennych wykonaj instrukcje: dodawania,
//odejmowania, mnożenia i dzielenia.
let a = 10;
let b = 20;
let c = 30;

alert(a + b + c);
alert(b - a);
alert(a * b);
alert(b / a);

//3. Wyświetl wszystkie liczby parzyste z przedziału od 0 do 100 w konsoli.
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//4. Napisz program obliczający pole trójkąta o danych bokach.
let x = parseFloat(prompt("Podaj długość boku x: "));
let y = parseFloat(prompt("Podaj długość boku y: "));
let z = parseFloat(prompt("Podaj długość boku z: "));

let p = (x + y + z) / 2;
let pole = Math.sqrt(p * (p - x) * (p - y) * (p - z));
alert("Pole trójkąta wynosi: " + pole);

//5. Pobierz imię od użytkownika i powitaj go przy użyciu alert.
let name = prompt("Podaj swoje imię:");
alert("Witaj, " + name + "!");

//6. Napisz program, który poprosi użytkownika o podanie dwóch liczb całkowitych, a
//następnie wyświetli wynik dodawania tych liczb w oknie przeglądarki.
let num1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
let num2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
let wynik = num1 + num2;
alert("Wynik dodawania: " + wynik);

//7. Napisz program który zwróci największą spośród trzech podanych przez użytkownika
//liczb.
let licz1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
let licz2 = parseFloat(prompt("Podaj drugą liczbę:"));
let licz3 = parseFloat(prompt("Podaj trzecią liczbę:"));

let max = Math.max(licz1, licz2, licz3);
alert("Największa liczba to: " + max);

//8. Napisz program który wyznaczy największy wspólny dzielnik dwóch liczb całkowitych
//podanych przez użytkownika.
let number1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
let number2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

let najwiekszyWspolnyDzielnik = gcd(number1, number2);
alert("Największy wspólny dzielnik to: " + najwiekszyWspolnyDzielnik);

//9. Napisz funkcję, która będzie wyświetlać aktualny czas na stronie internetowej z
//odświeżaniem co sekundę. Funkcja powinna być wywołana automatycznie po
//załadowaniu strony.
function displayTime() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById('time').innerHTML = time;
}

window.onload = function () {
    displayTime();
    setInterval(displayTime, 1000);
};

//10. Napisz grę w zgadywanie liczby.
let targetNumber = Math.floor(Math.random() * 101);
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guess").value);

    if (userGuess === targetNumber) {
        alert("Gratulacje! Zgadłeś liczbę " + targetNumber + " po " + attempts + " próbach.");
        location.reload();
    } else if (userGuess < targetNumber) {
        alert("Podana liczba jest za mała. Spróbuj ponownie.");
        attempts++;
    } else {
        alert("Podana liczba jest za duża. Spróbuj ponownie.");
        attempts++;
    }
}
