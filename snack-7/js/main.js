// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const firstnameList = ["Franco", "Gino", "Billy", "Bobby", "Renzo"];
const lastnameList = ["Ardi", "Silly", "Borth", "Groot", "Miscia"];

let randomName = [];

for (let i = 0; i < 10; i++) {
    const indexFirstname = Math.floor(Math.random() * firstnameList.length);
    const indexLastname = Math.floor(Math.random() * lastnameList.length);
    randomName.push(`${firstnameList[indexFirstname]} ${lastnameList[indexLastname]}`);
}

console.log(randomName);