const array = []

for (let i =0; i < 6; i++) {
    const userNumber = Number(prompt("inserisci un numero"))
    if (userNumber % 2 === 1) {
        array.splice(userNumber);
        console.log(array);
    }
}