//Traccia 1

let numbers = [13, 97, 4, 6, 2, 2000, 96, 367, 104, 22];

console.log("Array iniziale:", numbers);

let sortedDescending = [...numbers].sort((a, b) => b - a);
console.log("Arrey ordinato in modo decrescente:", sortedDescending);

let sortedAscending = [...numbers].sort((a, b) => a - b);
console.log("Arrey ordinato in modo crescente:", sortedAscending);

//Traccia 2

function calcoloMedia_filtroValori(array) {

    let somma = array.reduce((accumulatore, valoreCorrente) => accumulatore + valoreCorrente, 0);

    let media = somma / array.length;

    let valoriMinoriDellaMedia = array.filter(valore => valore < media);

    return {
        media: media,
        valoriMinoriDellaMedia: valoriMinoriDellaMedia
    };
}

let num = [115, 46, 21, 690, 5];
let risultato = calcoloMedia_filtroValori(num);

console.log("La media è:", risultato.media);
console.log("I valori minori della media sono i seguenti:", risultato.valoriMinoriDellaMedia);