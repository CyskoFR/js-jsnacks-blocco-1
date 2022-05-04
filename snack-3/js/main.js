// const number1 = Number(prompt("inserisci numero 1"))
// const number2 = Number(prompt("inserisci numero 2"))
// const number3 = Number(prompt("inserisci numero 3"))
// const number4 = Number(prompt("inserisci numero 4"))
// const number5 = Number(prompt("inserisci numero 5"))
// const number6 = Number(prompt("inserisci numero 6"))
// const number7 = Number(prompt("inserisci numero 7"))
// const number8 = Number(prompt("inserisci numero 8"))
// const number9 = Number(prompt("inserisci numero 9"))
// const number10 = Number(prompt("inserisci numero 10"))

// console.log(number1+number2+number3+number4+number5+number6+number7+number8+number9+number10)


let userNumber = 0;
let sum = 0;

for (let i = 0; i < 10; i++) {
    const userNumber = Number(prompt("inserisci numero"));
    sum += userNumber;
}

console.log(sum)

