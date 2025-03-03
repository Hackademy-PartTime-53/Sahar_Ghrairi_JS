//Esercizio 1

let num_tot_gatti = 30;
let num_gatti_fila = 6;
let num_file = Math.floor(num_tot_gatti / num_gatti_fila);
let avanzo_gatti = (num_tot_gatti % num_gatti_fila);
let num_gatti_mancanti = (num_gatti_fila - avanzo_gatti);
console.log(`Ci sono ${num_file} file di gatti e ne mancano ${num_gatti_mancanti} per completare una nuova fila, con un avanzo di ${avanzo_gatti} `);

//Esercizio 2

let v = 28;
if (v < 18) {
    console.log("insufficiente");

} else if (v >= 18 && v < 21) {
    console.log("sufficiente");

} else if (v >= 21 && v < 24) {
    console.log("buono");

} else if (v >= 24 && v < 27) {
    console.log("distinto");

} else if (v >= 27 && v <= 29) {
    console.log("ottimo");

} else if (v == 30) {
    console.log("eccellente");

}

//Esercizio 3

let temperatura = parseInt(prompt("inserisci la temperatura"));
if (temperatura < -10) {
    console.log("copriti...ancora ti raddreddi");

} else if (temperatura < 0) {
    console.log("non è tanto il freddo quanto l'umidità");

} else if (temperatura < 20) {
    console.log("non ci sono più le mezze stagioni");

} else if (temperatura < 30) {
    console.log("mi dia una peroni sudata");

} else if (temperatura >= 30) {
    console.log("lu mare, lu sule, lu ientu");

}