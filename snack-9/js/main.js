// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const array1 = [1, 43, 23, 23, 43, 32, 23];
const array2 = [3, 33, 53, 23, 43, 23, 23, 43, 32, 23, 43, 23, 23, 43, 32, 23];

let difference = 0;

if (array1.length > array2.length) {
    const difference = array1.length - array2.length;
    console.log("differenza:", difference);
    for (let i = 0; i < difference; i++) {
        array2.push(Math.floor(Math.random() * 100) + 1);
    }
} else if (array1.length < array2.length) {
    const difference = array2.length - array1.length;
    console.log("differenza:", difference);
    for (let i = 0; i < difference; i++) {
        array1.push(Math.floor(Math.random() * 100) + 1);
    }
}

console.log("array1:", array1);
console.log("array2:", array2);