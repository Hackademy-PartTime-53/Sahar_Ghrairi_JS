let numeri = [3, 5, 10, 13, 17, 20, 36, 32, 9, 0, 13];

function mediaArray(arr) {
    /*    //metodo 1 ciclo for
        let sommaelementi = 0;
        for (let i = 0; i < arr.length; i++) {
            sommaelementi += arr[i];
        }
        let media = sommaelementi / arr.length;
        return media;
    */
    //metodo 2 FOREACH

    let sommaelementi = 0;
    arr.forEach(elemento => {
        return sommaelementi += elemento;
    });

    let media = sommaelementi / arr.length;
    return media;
}
let media_trovata = mediaArray(numeri);
console.log(media_trovata);

/*
    //metodo 3 .reduce
    let sommaelementi = arr.reduce((accumulatore, elemento) => {
        return accumulatore + elemento;
    })
}
let media_trovata = mediaArray(numeri)
console.log(media_trovata);
*/


function minoriMedia(arr) {
    //metodo 1 push
    /*let arr_minori = [];
    arr.forEach(elemento => {
        if (elemento < media_trovata) {
            arr_minori.push(elemento)
        }
    });
    return arr_minori;
*/
    //metodo 2 filter
    let arr_minori = arr.filter(elemento => {
        return elemento < media_trovata
    })
    return arr_minori;
}
let risul_Arr_minori = minoriMedia(numeri);
console.log(risul_Arr_minori);