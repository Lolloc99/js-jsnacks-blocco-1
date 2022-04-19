// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

const numeri = [];

for (let i = 0; i < 6; i++) {
    let num = parseInt(prompt("Inserisci un numero"));
    if (num % 2 === 1) {
        numeri.push(num)
    }
}
console.log(numeri);