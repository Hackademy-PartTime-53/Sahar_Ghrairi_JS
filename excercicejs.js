console.log(`=================traccia 1`)
let accumulatore = 0;
let cont = 0;
for (let i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        console.log(`il numero ${i} è pari`);

    } else {
        //console.log(`il numero ${i} è dispari`);
        //accumulatore = accumulatore + i;
        accumulatore += i
        cont++;
    }
}
console.log(`la somma dei due numeri dispari tra 1 e 20 è ${accumulatore}`)
let media_num_dispari = accumulatore / cont;
console.log(`la media dei numeri dispari e pari è ${media_num_dispari}`);


// scriviamo un  programma che simuli un distributore di bevande e che ripestti questi passaggi:
/*l'utente deve inserire un numero 
se inserisce 1 :stampa 'hai scelto l'acqua';
se inserisce 2 :stampa 'hai scelto la cocacola;
se inserisce 3 :stampa hai scelto la fanta;
se inserisce qualcosa di diverso il programma dovrà rispondere automaticamente con la domanda iniziale;
*/
/*

console.log(`traccia 2`);


let scelta;

do {
    scelta = parseInt(prompt('Digita 1 per acqua, 2 per cocacola, 3 per fanta '));
    switch (scelta) {

        case 1:
            console.log("hai scelto l'acqua");
            break;
        case 2:
            console.log("hai scelto la cocacola");
            break;
        case 3:
            console.log("hai scelto la fanta");
            break;
        default:
            console.log("la scelta inserita non è valida");
    }

}
while (scelta < 1 || scelta > 3);

*/
/*
console.log('funzioni')



/*Le funzioni sono un blocco di codice che puo essere ripetuto piu volte*/
/*
function myfunction() {
    console.log('sono una ');
}



/*invoco il suo nome con il suo nome'*/
/*
myfunction();


/*una funzione può ricevere uno o piu parametri dall'esterno che servono per eseguire le istruzioni presenti nella funzione*/
/* creiamo una funzione che ci consente di stampare la tabellina del numero passato*/

/*
function tabellina(numero) {

    let result;
    for (let i = 1; i <= 10; i++) {
        result = i * numero
        console.log(`${numero} x ${i} = ${result}`)
    }

}

let num_scelto = parseInt(prompt('digita il numero intero di cui vuoi calcolare la tabellina'));

tabellina(num_scelto);
*/


/*creiamo una funzione che ci permette di calcolare l'area e il perimetro di un rettangolo e triangolo 
 */

function calcola_rett_trian(altezza, larghezza, tipo) {

    if (tipo == 'rettangolo') {
        let area_rettangolo = altezza * larghezza;
        return area_rettangolo
    } else if (tipo == 'triangolo') {
        let area_triangolo = altezza * larghezza / 2;
        return area_triangolo;
    }
}

let figura = prompt(`digita triangolo o rettangolo di cui vuoi calcolare l'area`);

let altezza_utente = parseInt(prompt(`inserisci l'altezza della figura inserita`));
let larghezza_utente = parseInt(prompt(`inserisci la larghezza della figura inserita`));

let risultato = calcola_rett_trian(altezza_utente, larghezza_utente, figura);

console.log(`hai scelta di calcolare l'area di un ${figura} che ha valore pari a ${risultato}`);