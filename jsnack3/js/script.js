// Calcola la somma e la media dei primi 10 numeri.
let somma = 0;
console.log("Somma", somma);

for (let i = 1; i <= 10; i++) {
    console.log(i);
    somma = somma + i;
}

console.log("Somma finale", somma);

const media = somma / 10;
console.log("Media", media);