// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

const numberList = [2, 4, 55, 101, 33, 43, 87, 13];

let sum = 0;

for (let i = 0; i < numberList.length; i = i + 2) {
    sum += numberList[i];
    console.log(numberList[i]);
}

console.log("Totale",sum);