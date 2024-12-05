// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


/**
 * check if a word is palindrome
 * 
 * @param {string} word  - word to check
 * @returns {boolean}
 */
function isPalindrome(word) {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + userWord[i];
    }
    return word === reverseWord;
    // if(word === reverseWord) {
    //     return true;
    // } else {
    //     return false;
    // }  
  
}


// PROGRAMMA PRINCIPALE
const userWord = prompt('inserisci una parola');

const checkIsPalindrome = isPalindrome(userWord);

if (checkIsPalindrome) {
    console.log("la parola è palindroma")
} else {
    console.log ("la parola non è palindroma")
}



