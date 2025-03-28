let Numero1 = document.querySelector("#Numero1");
let Numero2 = document.querySelector("#Numero2");
let Numero3 = document.querySelector("#Numero3");

function crea_intervallo(elementoHTML, numMax, tempo) {
    let counter = 0;
    let id_interval = setInterval(() => {
        if (counter < numMax) {
            counter++;
            elementoHTML.innerHTML = counter;


        } else {
            clearInterval(id_interval)
        }
    }, tempo);
}
/*
crea_intervallo(Numero1, 1000, 10);
crea_intervallo(Numero2, 177, 100);
crea_intervallo(Numero3, 3000, 5);*/
let controllo_ripetizione = 0;

let osserva = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && controllo_ripetizione == false) {
            crea_intervallo(Numero1, 1000, 10);
            crea_intervallo(Numero2, 177, 100);
            crea_intervallo(Numero3, 3000, 5);
            controllo_ripetizione = 1;
        }

    });
});
osserva.observe(Numero3);
