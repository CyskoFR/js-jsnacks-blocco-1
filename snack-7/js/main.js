const firstnameList = ["Franco", "Gino", "Billy", "Bobby", "Renzo"];
const lastnameList = ["Ardi", "Silly", "Borth", "Groot", "Miscia"];

let randomName = [];

for (let i = 0; i < 10; i++) {
    const indexFirstname = Math.floor(Math.random() * 5);
    const indexLastname = Math.floor(Math.random() * 5);
    randomName.push(`${firstnameList[indexFirstname]} ${lastnameList[indexLastname]}`);
}

console.log(randomName);