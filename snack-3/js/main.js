let userNumber = 0;
let sum = 0;

for (let i = 0; i < 10; i++) {
    const userNumber = Number(prompt("inserisci numero"));
    sum += userNumber;
}

console.log(sum);