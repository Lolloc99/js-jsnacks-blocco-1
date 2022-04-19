// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.


let numUtente = parseInt(prompt("Inserisci un numero a 4 cifre"));
console.log("L'utente ha digitato", numUtente);

somma = 0;

while (numUtente) {
    somma += numUtente % 10;
    numUtente = Math.floor(numUtente / 10);
}

console.log("La somma finale tra gli elementi del numero digitato è:", somma);

//Ho capito perchè funziona, non ci sarei mai arrivato da solo ma in realtà non è cosi assurdo
