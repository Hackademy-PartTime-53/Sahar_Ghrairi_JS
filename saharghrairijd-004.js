//Esercizio 1

let tabellina = parseInt(prompt("Inserire la tabellina da calcolare"));
console.log(`La tabellina del ${tabellina} è:`);
for (let i = 1; i <= 10; i++) {
    let risultato = `${tabellina} x ${i} = ${tabellina * i}`
    console.log(`${risultato}`);
}

//Esercizio 2

let dispari = 0;
let tot_dispari = 0;
for (let cont = 1; cont <= 20; cont++) {
    if (cont % 2 == 0) {
        console.log(cont);
    } else {
        dispari += cont
        tot_dispari++
    }
}
console.log(`La media tra i numeri dispari è ${dispari / tot_dispari}`);

//Esercizio 3

let num_bevanda = parseInt(prompt("Inserire numero bevanda"));
switch (num_bevanda) {
    case 1:
        console.log("E' stata selezionata l'acqua");
        break;
    case 2:
        console.log("E' stata selezionata la Coca-Cola");
        break;
    case 3:
        console.log("E' stata selezionata la birra");
        break;
    default:
        console.log("Inserire numero bevanda");
        break;
}