/*function playgame(tiri) {
    let player1 = 0;
    let player2 = 0;

    for (let i = 0; i < tiri; i++) {
        let player1Roll = Math.floor(Math.random() * 6) + 1;
        let player2Roll = Math.floor(Math.random() * 6) + 1;
        player1 = player1 + player1Roll;
        player2 = player2 + player2Roll;
    }

    if (player1 > player2) {
        return `player 1 ha vinto con un punteggio pari a ${player1}`
    } else if (player1 < player2) {
        return `player 2 ha vinto con un punteggio pari a ${ player2}`
    } else {
        return `pareggio con un punteggio ${player1}`
    }
}

let tiri = Number(prompt(`quanti tiri devono effettuare i giocatori`))
let result = playgame(tiri)
console.log(result);
*/
/*CICLO FOR*/
/*function FizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            console.log(`FizzBuzz`);
        } else if (i % 5 == 0) {
            console.log(`Fizz`);

        } else if (i % 3 == 0) {
            console.log(`Buzz`);
        } else { console.log(i) }

    }

}


FizzBuzz(25)*/



//traccia 3
/*function countNumber(num) {
    if (num < 10) {
        return '1 cifra'
    } else if (num < 100) {
        return `2 cifre`
    } else if (num < 1000) {
        return '3 cifre'
    } else if (num < 10000) {
        return '4 cifre'
    } else {
        return 'numero troppo grande'
    }
}
console.log(countNumber(199));*/




//traccia 4
function controlString(stringa) {

    stringa = stringa.replace(/\W/g, "");
    let reversed = stringa.split('').reverse().join('')
    console.log(reversed);
    if (stringa == reversed) {
        return true
    } else {
        return false
    }
}
console.log(controlString(`i topi non avevano nipoti`));