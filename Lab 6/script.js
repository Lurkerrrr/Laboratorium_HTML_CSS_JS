//Zadanie 1 
let ksiazka = {
    tytul: "Metro 2033",
    autor: "Dmitry Glukhovsky",
    rokWydania: 2002
};

function informacjeOKsiazce(ksiazka) {
    return `${ksiazka.tytul} - ${ksiazka.autor} (${ksiazka.rokWydania})`;
}

console.log(informacjeOKsiazce(ksiazka));

//Zadanie 2 
let student = {
    imie: "Viktor",
    nazwisko: "Pylypenko",
    numerAlbumu: "68166",
    oceny: {
        matematyka: 3.5,
        fizyka: 4.0,
        informatyka: 3.5
    }
};

let sumaOcen = Object.values(student.oceny).reduce((a, b) => a + b);
let sredniaOcen = sumaOcen / Object.keys(student.oceny).length;
console.log("Średnia ocen studenta: " + sredniaOcen.toFixed(2));

//Zadanie 3 
class Trojkat {
    constructor(wysokosc, dlugoscPodstawy, nazwa) {
        this.wysokosc = wysokosc;
        this.dlugoscPodstawy = dlugoscPodstawy;
        this.nazwa = nazwa;
    }

    obliczPole() {
        return 0.5 * this.dlugoscPodstawy * this.wysokosc;
    }

    static porownajPola(trojkat1, trojkat2) {
        return trojkat1.obliczPole() > trojkat2.obliczPole() ? trojkat1 : trojkat2;
    }
}

let trojkat1 = new Trojkat(5, 4, "Trojkat A");
let trojkat2 = new Trojkat(6, 3, "Trojkat B");
let trojkat3 = new Trojkat(7, 5, "Trojkat C");

console.log("Pole trojkata 1: " + trojkat1.obliczPole());
console.log("Pole trojkata 2: " + trojkat2.obliczPole());
console.log("Pole trojkata 3: " + trojkat3.obliczPole());

let trojkatWiekszePole = Trojkat.porownajPola(trojkat1, trojkat2);
console.log("Trojkat o większym polu: " + trojkatWiekszePole.nazwa);

//Zadanie 4 
class Trapez {
    constructor(wysokosc, podstawa1, podstawa2, nazwa) {
        this.wysokosc = wysokosc;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }

    obliczPole() {
        return 0.5 * (this.podstawa1 + this.podstawa2) * this.wysokosc;
    }

    zmienNazwe(nowaNazwa) {
        this.nazwa = nowaNazwa;
    }
}

let trapez1 = new Trapez(5, 4, 6, "Trapez A");
let trapez2 = new Trapez(6, 5, 7, "Trapez B");
let trapez3 = new Trapez(7, 6, 8, "Trapez C");

console.log("Pole trapezu 1: " + trapez1.obliczPole());
console.log("Pole trapezu 2: " + trapez2.obliczPole());
console.log("Pole trapezu 3: " + trapez3.obliczPole());

trapez1.zmienNazwe("Nowy Trapez A");
console.log("Nazwa trapezu 1 po zmianie: " + trapez1.nazwa);

//Zadanie 5 
function wiekszaFigura(trojkat, trapez) {
    let poleTrojkata = trojkat.obliczPole();
    let poleTrapezu = trapez.obliczPole();
    return poleTrojkata > poleTrapezu ? { nazwa: trojkat.nazwa, pole: poleTrojkata } : { nazwa: trapez.nazwa, pole: poleTrapezu };
}

let wieksza = wiekszaFigura(trojkat1, trapez1);
console.log(`Większa figura: ${wieksza.nazwa} (pole: ${wieksza.pole})`);

//Zadanie 7 
class Samochod {
    constructor(marka, model, rokProdukcji, kolor, predkoscMaksymalna) {
        this.marka = marka;
        this.model = model;
        this.rokProdukcji = rokProdukcji;
        this.kolor = kolor;
        this.predkoscMaksymalna = predkoscMaksymalna;
        this.predkosc = 0;
    }

    przyspiesz(wartosc) {
        this.predkosc += wartosc;
    }

    zwolnij(wartosc) {
        this.predkosc -= wartosc;
    }

    informacje() {
        return `${this.marka} ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc}`;
    }

    wiekSamochodu() {
        return new Date().getFullYear() - this.rokProdukcji;
    }
}

let mojSamochod = new Samochod("Toyota", "Corolla", 2019, "Czerwony", 180);
mojSamochod.przyspiesz(50);
console.log(mojSamochod.informacje());
console.log("Wiek samochodu: " + mojSamochod.wiekSamochodu() + " lat");

//Zadanie 8 
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Brak wystarczających środków na koncie.");
        }
    }

    getBalance() {
        return this.balance;
    }
}

let konto = new BankAccount(1000);
console.log("Saldo konta: " + konto.getBalance());
konto.deposit(500);
console.log("Saldo konta po wpłacie: " + konto.getBalance());
konto.withdraw(200);
console.log("Saldo konta po wypłacie: " + konto.getBalance());

//Zadanie 9 
class Pracownik {
    constructor(imie, nazwisko, pensja) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.pensja = pensja;
    }
}

class ZarzadzaniePracownikami {
    constructor() {
        this.listaPracownikow = [];
    }

    dodajPracownika(pracownik) {
        this.listaPracownikow.push(pracownik);
    }

    usunPracownika(imie, nazwisko) {
        this.listaPracownikow = this.listaPracownikow.filter(pracownik => pracownik.imie !== imie || pracownik.nazwisko !== nazwisko);
    }

    pobierzPracownika(imie, nazwisko) {
        return this.listaPracownikow.find(pracownik => pracownik.imie === imie && pracownik.nazwisko === nazwisko);
    }

    zapiszDoJSON() {
        let json = JSON.stringify(this.listaPracownikow);
        console.log(json);
    }

    wczytajZJSON(json) {
        this.listaPracownikow = JSON.parse(json);
    }
}

let zarzadzanie = new ZarzadzaniePracownikami();
zarzadzanie.dodajPracownika(new Pracownik("Viktor", "Pylypenko", 5000));
zarzadzanie.dodajPracownika(new Pracownik("Michal", "Nowak", 6000));
console.log(zarzadzanie.listaPracownikow);
zarzadzanie.usunPracownika("Viktor", "Pylypenko");
console.log(zarzadzanie.listaPracownikow);
zarzadzanie.zapiszDoJSON();

//Zadanie 10 
class Produkt {
    constructor(nazwa, cena, dostepneSztuki) {
        this.nazwa = nazwa;
        this.cena = cena;
        this.dostepneSztuki = dostepneSztuki;
    }
}

class ZarzadzanieProduktami {
    constructor() {
        this.listaProduktow = [];
    }

}
