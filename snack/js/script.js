/*
Snack uno:

// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parolaUno = prompt ("Inserisci una parola");
console.log(parolaUno);

const parolaDue = prompt ("Inserisci un'altra parola");
console.log(parolaDue);

if (parolaUno.length > parolaDue.length) {
    console.log(`${parolaDue} ${parolaUno}`);
} else if (parolaDue.length > parolaUno.length) {
    console.log(`${parolaUno} ${parolaDue}`);
} else {
    console.log("Le parole sono di uguale lunghezza");
}
*/

/*
// Snack due:
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
*/

// Snack tre
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