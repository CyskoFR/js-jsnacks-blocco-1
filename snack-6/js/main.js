const userNumber = Number(prompt("inserisci un numero"));

if (userNumber % 2 === 0) {
    console.log(userNumber);
} else if (userNumber % 2 === 1) {
    console.log(userNumber + 1);
}