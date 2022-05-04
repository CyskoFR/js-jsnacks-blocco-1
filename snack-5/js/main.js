const array = [];

for (let i =0; i < 6; i++) {
    const userNumber = Number(prompt("inserisci un numero"))
    if (userNumber % 2 === 1) {
        array.splice(0, 0, userNumber);
        // array.push(userNumber);
        console.log(array);
    }
}