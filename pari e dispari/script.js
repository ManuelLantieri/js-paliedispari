// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
const evenOrOdd = prompt("inserisci pari o dispari");
const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
const cpuNumber = Math.floor(Math.random() * 5) + 1;
const sum = userNumber + cpuNumber;
console.log(`La cpu a scelto: ${cpuNumber}`)
let resultEvenOrOdd = "";
if (sum % 2 === 0) {
    resultEvenOrOdd = "pari";
} else {
    resultEvenOrOdd = "dispari";
}


if(resultEvenOrOdd === evenOrOdd) {
    alert("Hai vinto");
} else {
    alert("Hai vinto");
}
