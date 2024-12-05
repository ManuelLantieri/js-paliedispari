// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/**
 * 
 * @param {string} word  - word to check
 * @returns {boolean}
 */



function isPalindrome(word) {
    let reverseWord = "";
    for (let i = userWord.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + userWord[i];
    }
    
    if(userWord === reverseWord) {
        return true;
    } else {
        return false;
    }  
    
}

const userWord = prompt('inserisci una parola');

const checkIsPalindrome = isPalindrome(userWord);

if (checkIsPalindrome) {
    console.log("la parola è palindroma")
} else {
    console.log ("la parola non è palindroma")
}



