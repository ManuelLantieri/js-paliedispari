// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/**
 * return a random number between min and max (both included)
 * @param {number} min - min number
 * @param {number} max - max number
 * @returns {number}
 */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (min -max + 1)) + min;
}

/**
 * check if a number is even
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
    if (sum % 2 === 0) {
        return true;
    }
    return false;
}


//PROGRAMMA PRINCIPALE
const userEvenOrOdd = prompt("inserisci pari o dispari");
const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
const cpuNumber = getRndInteger(1, 5);
const sum = userNumber + cpuNumber;

// console.log(`La cpu a scelto: ${cpuNumber}`)
// let resultEvenOrOdd = "";
// if (sum % 2 === 0) {
//     resultEvenOrOdd = "pari";
// } else {
//     resultEvenOrOdd = "dispari";
// }

// if(resultEvenOrOdd === userEvenOrOdd) {
//     alert("Hai vinto");
// } else {
//     alert("Hai vinto");
// }

if ((isEven(num) && userEvenOrOdd === 'pari') || (!isEven(num) % 2 === 1 && userEvenOrOdd === 'dispari')) {
    alert("Hai vinto");
} else {
    alert("Hai perso")
}
