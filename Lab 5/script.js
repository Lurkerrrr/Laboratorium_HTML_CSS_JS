//Zadanie 1 
let tablica = [];
for (let i = 0; i < 10; i++) {
    tablica[i] = parseInt(prompt("Podaj liczbę całkowitą: "));
}
console.log("Wprowadzone wartości: " + tablica.join(", "));
let szukana = parseInt(prompt("Podaj liczbę całkowitą do znalezienia: "));
let licznik = 0;
for (let i = 0; i < tablica.length; i++) {
    if (tablica[i] === szukana) {
        licznik++;
    }
}
console.log(`Liczba ${szukana} została znaleziona ${licznik} razy.`);

//Zadanie 2 
let tablica1 = [1, 2, 3, 4, 5, 6];
console.log("Tablica przed modyfikacją: " + tablica.join(", "));
let indeks = parseInt(prompt("Podaj indeks, na który chcesz wstawić liczbę: "));
let liczba = parseInt(prompt("Podaj liczbę całkowitą do wstawienia: "));
tablica.splice(indeks, 0, liczba);
console.log("Tablica po modyfikacji: " + tablica.join(", "));

//Zadanie 3 
function odwrocCiag(ciag) {
    return ciag.split("").reverse().join("");
}

let ciag = prompt("Podaj ciąg znaków: ");
console.log("Odwrócony ciąg: " + odwrocCiag(ciag));

//Zadanie 4 
function wypelnijTablice(rozmiar) {
    let tablica = [];
    for (let i = 0; i < rozmiar; i++) {
        tablica.push(Math.floor(Math.random() * 100));
    }
    return tablica;
}

let tablica2 = wypelnijTablice(10);
console.log("Wygenerowana tablica: " + tablica.join(", "));

//Zadanie 5 
let tablica3 = [1, 2, 3, 4, 5];
console.log("a. Suma wartości: " + tablica.reduce((a, b) => a + b));
console.log("b. Liczby parzyste: " + tablica.filter(num => num % 2 === 0));
console.log("c. Wartości pomnożone razy 3: " + tablica.map(num => num * 3));
let numer_albumu = 68166;
tablica.push(numer_albumu);
console.log("d. Indeks numeru albumu: " + tablica.indexOf(numer_albumu));
console.log("e. Średnia arytmetyczna: " + (tablica.reduce((a, b) => a + b) / tablica.length));
console.log("f. Największa liczba: " + Math.max(...tablica));
let wybrana_wartosc = 3;
console.log(`g. Ilość wystąpień liczby ${wybrana_wartosc}: ` + tablica.filter(num => num === wybrana_wartosc).length);

//Zadanie 6 
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

let fibArray = fibonacci(100);
console.log("Tablica 100 liczb ciągu Fibonacciego: " + fibArray.join(", "));

//Zadanie 7 
function sumaDwochNajwiekszych(tablica) {
    if (tablica.length < 2) return "Tablica musi zawierać co najmniej dwie liczby.";
    tablica.sort((a, b) => b - a);
    return tablica[0] + tablica[1];
}

let array = [10, 5, 20, 3, 15];
console.log("Suma dwóch największych liczb: " + sumaDwochNajwiekszych(array));

//Zadanie 8 
function usunDuplikaty(tablica) {
    return tablica.filter((element, index, arr) => arr.indexOf(element) === index);
}

let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 3, 7];
let arrayWithoutDuplicates = usunDuplikaty(arrayWithDuplicates);
console.log("Tablica bez duplikatów: " + arrayWithoutDuplicates);

//Zadanie 9 
function czyPierwsza(liczba) {
    if (liczba <= 1) return false;
    if (liczba <= 3) return true;
    if (liczba % 2 === 0 || liczba % 3 === 0) return false;
    let i = 5;
    while (i * i <= liczba) {
        if (liczba % i === 0 || liczba % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

let number = 17;
console.log(`Czy ${number} jest liczbą pierwszą? ${czyPierwsza(number)}`);

//Zadanie 10 
function odwrocKolejnoscSlow(zdanie) {
    return zdanie.split(" ").reverse().join(" ");
}

let sentence = "To jest przykładowe zdanie do odwrócenia";
console.log("Odwrócone zdanie: " + odwrocKolejnoscSlow(sentence));

//Zadanie 11 
function generujHaslo(dl) {
    const znaki = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let haslo = "";
    for (let i = 0; i < dl; i++) {
        haslo += znaki.charAt(Math.floor(Math.random() * znaki.length));
    }
    return haslo;
}

let dlugoscHasla = 8; // Możesz zmienić długość hasła według potrzeb
console.log("Losowe hasło: " + generujHaslo(dlugoscHasla));
