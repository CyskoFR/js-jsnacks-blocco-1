const word1 = prompt ("inserisci prima parola");
const word2 = prompt ("inserisci seconda parola");

if (word1.length > word2.length) {
    console.log(word2);
    console.log(word1);
} else if (word1.length = word2.length) {
    console.log("stessa lunghezza!");
} else {
    console.log(word1);
    console.log(word2);
}