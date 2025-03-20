/* un oggetto è composto da:
caratteristiche che lo contraddistinguono : proprietà;
capacità di compiere  delle operazioni => METODI 
un oggetto è un tipo di dato strutturato, è una LISTA NON ORDINATA di coppie CHIAVE -VAlore
dopo il nome della chiave viene inserito il simbolo: dopo il quale viene inserito il Valore della chiave
*/
/*
let smartphone = {
    marca: `Samsung`,
    prezzo: 500,
    usato: false,
    contatti: ['andrea', 'Michele', 'Antonio', 'Luigi', 'Monica', 'Maria']


}
console.log(smartphone);*/
// progetto bowling
/*
let bowling = {

    giocatori: [
        { nome: 'Antonio', cognome: 'Rossi', punteggio: [1, 3, 5, 8, 12] },
        { nome: 'Michele', cognome: 'Bianchi', punteggio: [3, 5, 2, 5, 7, 11] },
        { nome: 'Luca', cognome: 'Gialli', punteggio: [3, 2, 2, 2, 0, 1] },
    ],
    nuovo_giocatore: function(nuovo_nome, nuovo_cognome) {
        this.giocatori.push({ nome: nuovo_nome, cognome: nuovo_cognome, punteggio: [] });
        let ultima_posizione = this.giocatori.length - 1;

        for (let i = 0; i < 5; i++) {
            let singolo_punteggio = Math.round(Math.random() * 10)


            this.giocatori[ultima_posizione].punteggio.push(singolo_punteggio);
        }
    }
}
console.log(bowling.giocatori[0].cognome)
console.log(bowling.giocatori[1].punteggio[3]);
bowling.nuovo_giocatore('Giovanni', 'Bruno');
console.log(bowling);*/

//esercizio rubrica
let rubrica = {
    contatti: [
        { nome: 'Antonio', numero: '111111111' },
        { nome: 'Luca', numero: '33333333' },
        { nome: 'Gianni', numero: '44444444' },
        { nome: 'Giovanni', numero: '5555555' },
    ],
    aggiungi_contatto: function(nuovo_nome, nuovo_numero) {
        let contatto_esistente = this.contatti.find(contatto => {
            return contatto.nome.toLowerCase() === nuovo_nome.toLowerCase();
        })
        if (contatto_esistente) {
            console.log('Contatto già presente');
        } else {

            this.contatti.push({ nome: nuovo_nome, numero: nuovo_numero });
            let ultimo_contatto = this.contatti.length - 1;
        }
        console.log(`Contatto ${nuovo_nome} aggiunto correttamente`);

    },
    visualizza_contatti: function() {
        console.log(`la tua rubrica contiene i seguenti contatti:`);
        this.contatti.forEach(contatto => {
                let vis_contatto = `Nominativo:${contatto.nome} - Telefono:${contatto.numero}`;
                console.log(vis_contatto);

            }

        )
    },
    //.find è un metodo array che restituisce un elemento che soddisfa una condizione
    mostra_contatto: function(nome_cercato) {
        let contatto_trovato = this.contatti.find(contatto => {
            return contatto.nome === nome_cercato;
        });
        // if, la condizione restituirà true se contatto_trovato è diverso da undefined e contiene dei dati

        if (contatto_trovato) {
            console.log(`Nominativo: ${contatto_trovato.nome} - Telefono: ${contatto_trovato.numero}`);
        } else {
            console.log(`Contatto con nome "${nome_cercato}" non trovato.`);
        };

    },
    elimina_contatto: function(elimina_contatto) {
        //il metodo findIndex restituisce l'indice posizione di un elemento che contiene il nome del contatto da eliminare 
        let index = this.contatti.findIndex(contatto => {
            return contatto.nome.toLowerCase() === elimina_contatto.toLowerCase();
        });
        console.log(index);
        if (index !== -1) {
            this.contatti.splice(index, 1);
            console.log(`Contatto con nome ${elimina_contatto} eliminato correttamente`);

        }

        /* if (contatto_trovato) {
            let index = this.contatti.indexOf(contatto_trovato);
            this.contatti.splice(index, 1);
            console.log(`Contatto con nome ${elimina_contatto} eliminato correttamente`);*/
        else {
            console.log(`Contatto con nome ${elimina_contatto} non trovato`);
        }

    },
    modifica_contatto: function(modifica_contatto) {
        let mod_contatto = this.contatti.find(contatto => {
            return contatto.nome.toLowerCase() == modifica_contatto.toLowerCase();
        });
        if (mod_contatto) {
            mod_contatto.nome = modifica_contatto;
            /*
                        let nuovo_numero = prompt('Inserisci il nuovo numero di telefono');
                        this.contatti[index].numero = nuovo_numero;*/
            console.log(`Contatto con nome ${modifica_contatto} modificato correttamente`);
            console.log(mod_contatto);

        } else {
            console.log(`Contatto con nome ${modifica_contatto} non trovato`);
        }

    }
}
console.log('=================');
rubrica.elimina_contatto('andrea')
rubrica.visualizza_contatti();
rubrica.mostra_contatto('Alice');
console.log('=================');
rubrica.elimina_contatto('antonio');
console.log(rubrica);
console.log('=================');
rubrica.aggiungi_contatto('Elisabetta', '88888888');
console.log(rubrica);
console.log('=================');
rubrica.modifica_contatto('Gianni');
console.log(rubrica);