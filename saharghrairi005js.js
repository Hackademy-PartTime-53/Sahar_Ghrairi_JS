// Traccia 1

function giocoDadi() {
    let numTiri = parseInt(prompt("Quanti tiri devono effettuare i giocatori?"));
    let punteggioGiocatore1 = 0;
    let punteggioGiocatore2 = 0;
    for (let i = 1; i <= numTiri; i++) {
        let numRandom = Math.floor(Math.random() * 6 + 1);
        punteggioGiocatore1 += numRandom;

    }
    for (let i = 1; i <= numTiri; i++) {
        let numRandom = Math.floor(Math.random() * 6 + 1);
        punteggioGiocatore2 += numRandom;

    }
    if (punteggioGiocatore1 > punteggioGiocatore2) {
        console.log(`Giocatore 1 vince con un totale di ${punteggioGiocatore1} punti`);

    } else if (punteggioGiocatore2 > punteggioGiocatore1) {
        console.log(`Giocatore 2 vince con un totale di ${punteggioGiocatore2} punti`);
    } else if (punteggioGiocatore1 == punteggioGiocatore2) {
        console.log(`La partita è finita in parità`);

    }
}
giocoDadi()

// Traccia 2

let N = Math.floor(Math.random() * 100 + 1);

function fizzBuzz(N) {

    for (let i = 1; i <= N; i++) {

        if (i % 15 === 0) {
            console.log('fizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(N);

//Traccia 3

let numUtente = parseInt(prompt("Inserisci un numero"));

function cifreNum() {
    if (numUtente <= 9) {
        console.log(`${numUtente} è composto da 1 cifra`);

    } else if (numUtente > 9 && numUtente <= 99) {
        console.log(`${numUtente} è composto da 2 cifre`);

    } else if (numUtente > 99 && numUtente <= 999) {
        console.log(`${numUtente} è composto da 3 cifre`);

    } else if (numUtente > 999 && numUtente <= 9999) {
        console.log(`${numUtente} è composto da 4 cifre`);

    } else {
        console.log("Il numero è troppo grande");
    }
}
cifreNum();