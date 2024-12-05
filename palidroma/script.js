// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
const userWord = prompt('inserisci una parola');
let reverseWord = "";

for (let i = userWord.length - 1; i >= 0; i--) {
    reverseWord = reverseWord + userWord[i];
}

if(userWord === reverseWord) {
    alert('la parola è palindroma')
} else {
    alert('la parola non è palindroma')
}

