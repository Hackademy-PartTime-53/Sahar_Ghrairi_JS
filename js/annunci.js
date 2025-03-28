/*/* 
Il file JSON
Javascript Object NOtation
è un file di testo per lo scambio di dati, progettato per essere facile da leggere sia per l'uomo che per qualunque linguaggio di programmazione

Un file JSON è strutturato in copppie chiave-valore e supporta tipi di dati primitivi e/o strutturati:
- stringhe
- numeri
- valori booleani
- array
- oggetti
un file JSON deve seguire una serie di caratteristiche sintattiche

[

    {
        "nome" : "Mario",
        "eta" : 45,
        "attivo" : true,
        "mail" : "pippo@pippo.it"
    },
    {
        "nome" : "Anotnio",
        "eta" : 12,
        "attivo" : false,
        "mail" : "pippo@topolino.it"
    }
]
*/

fetch('./dati/new_elenco_immobili.json  ')
    .then(Response => Response.json())
    .then(data => {

        //console.log(data);

        // catturo attraverso l'id il contenitore nel quale verranno inseriti dinamicamente gli annunci
        let elenco_annunci = document.querySelector('#elenco_annunci');
        let num_tot_annunci = document.querySelector('#num_tot_annunci');
        let inputPrezzo = document.querySelector('#inputPrezzo');
        let prezzo_scelto = document.querySelector('#prezzo_scelto');


        // Visualizzazione di tutti gli annunci
        function visualizza_annunci(arr_annunci) {

            // svuotare il contenitore nel quale ci sono gli annunci cioè le card
            elenco_annunci.innerHTML = '';

            num_tot_annunci.innerHTML = arr_annunci.length;

            let prezzo, larghezza, altezza;

            larghezza = 550;
            altezza = 400

            arr_annunci.forEach(annuncio => {

                // creiamo l'elemnto che conterrà la singola card
                let div = document.createElement('div');
                // aggiungiamo all'elemnto le classi di stile necessarie
                div.classList.add('col-sm-3', 'col-12', 'mb-4');



                prezzo = Math.floor(annuncio.prezzo);
                prezzo = prezzo.toLocaleString('it-IT');


                // gestiamo il contenuto del div, cioè la card con tutti i campi dinamici che andreamo a prelevare all'interno del nostro array di oggetti
                div.innerHTML = `
                <div class="card">
                    <img src="https://picsum.photos/${larghezza}/${altezza}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4>€ ${prezzo}</h4>
                        <h5 class="card-title mb-4">Regione:<br> ${annuncio.Regione}</h5>
                        <h6 class="mb-0">Superficie: <strong>${annuncio.metri_quadrati}</strong> mq</h6>
                        <h6>Stanze: ${annuncio.numero_camere}</h6>
                        <p class="card-text">
                        ${annuncio.descrizione}
                        </p>
                        
                    </div>
                </div>
        `;

                elenco_annunci.append(div);

                larghezza++;
                altezza++;

            }); // end data.forEach

        }

        // settaggio del filtro per regione
        function set_regioni() {

            let filtri_regione = document.querySelector('#filtri_regione');

            // dobbiamo avere a disposizione l'eleno delle regioni UNICHE
            let uniche_regioni = [];

            data.forEach(annuncio => {

                //console.log(annuncio.Regione);
                if (!uniche_regioni.includes(annuncio.Regione)) {
                    uniche_regioni.push(annuncio.Regione)
                }


            });
            //console.log(uniche_regioni);

            uniche_regioni.sort();

            // abbiamo l'elenco delle regioni uniche, iteriamo al suo interno per generare dinamicamente i radio button
            uniche_regioni.forEach(regione => {

                let div_radio_regione = document.createElement('div');
                div_radio_regione.classList.add('form-check');

                div_radio_regione.innerHTML = `
                <input class="form-check-input" type="radio" name="regioni" id="${regione}">
                <label class="form-check-label" for="${regione}">${regione}</label>
            `;

                filtri_regione.append(div_radio_regione);


            }

            );


        }

        // creaimo la funzione che sarà legata al click su un radio button del filtro regioni, tale funzione dovrà ricevere un parametro che ci consenta di sapere quale regione è stata selezionata
        //function filtra_regioni(regione) {
        function filtra_regioni(arr) {

            // trasformare la node list, che sarebbe l'insieme dei radio button generati dinamicamente dalla funzione set_regioni()
            let arr_from_nodelist_Regioni = Array.from(radio_regioni);

            //console.log(arr_from_nodelist_Regioni);


            // dobbiamo intercettare il radio button cliccato, che in realtà coincide con intercettare qual radio button abbia l'attributo checked
            let regione_selezionata = arr_from_nodelist_Regioni.find(radio_selezionato => {
                return radio_selezionato.checked;
            });

            console.log(regione_selezionata);


            let regione = regione_selezionata.id;

            if (regione == 'All') {
                //visualizza_annunci(data);
                return arr;
            } else {

                let regione_filtrata = arr.filter(annuncio => {
                    return annuncio.Regione == regione
                });
                //visualizza_annunci(regione_filtrata);
                return regione_filtrata;
                num_tot_annunci.innerHTML = `${regione_filtrata.length} per la regione ${regione}`

            }

        }

        function set_input_prezzo() {

            let arr_prezzi = data.map(annuncio => {
                return Math.floor(annuncio.prezzo);
            });

            // dobbiamo assegnare agli attributi min e max rispettivamente l'importo più piccolo e l'importo più tra tutti gli importi contenuti nell'array che abbimo generato
            arr_prezzi.sort((a, b) => a - b);

            console.log(arr_prezzi);

            inputPrezzo.min = arr_prezzi[0];
            inputPrezzo.max = arr_prezzi[arr_prezzi.length - 1];
            inputPrezzo.value = arr_prezzi[arr_prezzi.length - 1];

            // assegnamo all'atributo value il valore massimo tra gli importi degli annunci, per poter posizionere, al carciamento della pagina lo slider alla fine dell'input
            console.log(inputPrezzo.value);


            let prezzo_massimo = arr_prezzi[arr_prezzi.length - 1];

            prezzo_massimo = prezzo_massimo.toLocaleString('it-IT');
            prezzo_scelto.innerHTML = `€ ${prezzo_massimo}`;

        }

        function filtra_prezzo(arr) {

            // le seguenti righe commentate si riferiscono a un filtro che tiene conto solo del valore del prezzo selezioanto dal tag input
            // let arr_prezzi_filtrati = data.filter(  annuncio => {
            //     return annuncio.prezzo <= inputPrezzo.value;
            // });
            // visualizza_annunci(arr_prezzi_filtrati);

            let arr_filtrato = arr.filter(annuncio => {
                return annuncio.prezzo <= inputPrezzo.value;
            });

            return arr_filtrato;


        }



        // ========== invocazione funzioni ===========================

        visualizza_annunci(data);
        set_regioni();
        set_input_prezzo()

        // per intercettare il click dell'untete su uno dei radio button del filtro regioni, dobbiamo catturare tutti gli elementi creati dinamicamente e a ciascuno impostare un metodo di ascolto che ci servirà a intercettare il click
        let radio_regioni = document.querySelectorAll('.form-check-input');

        //console.log(radio_regioni);

        // l'oggetto radio_REgioni sarà una node list, un array formato da tutti i tag input che hanno come classe .form-check-input

        radio_regioni.forEach(singolaRegione => {

            singolaRegione.addEventListener('click', () => {

                //console.log(  singolaRegione.id  ); 
                //filtra_regioni(singolaRegione.id)
                filtro_globale();

            })

        });

        inputPrezzo.addEventListener('input', () => {

            //filtra_prezzo();
            filtro_globale();

            let prezzo_sel = inputPrezzo.value;
            prezzo_sel = prezzo_sel.toLocaleString('it-IT');
            prezzo_scelto.innerHTML = `€ ${prezzo_sel}`;

        });


        // funzione globale che ci permetta di far interagire i filtri tra di loro

        function filtro_globale() {

            //1°
            let risultato_filtro_regione = filtra_regioni(data);
            //2°
            let risultato_filtro_prezzo = filtra_prezzo(risultato_filtro_regione);

            visualizza_annunci(risultato_filtro_prezzo);


        }


    })