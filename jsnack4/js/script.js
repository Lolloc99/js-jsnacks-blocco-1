// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

let numUtente = parseInt(prompt("Inserisci un numero a 4 cifre"));
console.log(numUtente);

somma = 0;

while (numUtente) {
    somma += numUtente % 10;
    numUtente = Math.floor(numUtente / 10);
}

console.log(somma);

//Non sò perchè funziona... ma funziona, grazie Stack overflow :D (chiederò domani)