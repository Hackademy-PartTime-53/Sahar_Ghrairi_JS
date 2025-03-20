/*traccia 1*/

let num_volte = parseInt(prompt('inserisci il numero dei tiri'))

function gioca(tiri) {
    let player1_score = 0;
    let player2_score = 0;
    for (let i = 1; i <= tiri; i++) {

        let punteggio1 = Math.floor(Math.random() * 6 + 1);
        let punteggio2 = Math.floor(Math.random() * 6 + 1);
    }

    console.log(`Tiro giocatore ${punteggio1}`);
    console.log(`tiro giocatore ${punteggio2}`);
}

gioca(num_volte);