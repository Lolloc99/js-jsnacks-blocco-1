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