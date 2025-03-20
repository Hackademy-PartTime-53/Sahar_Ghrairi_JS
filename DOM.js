/*DOM: document object Model
document:rappresenta la pagina html;
object:l'intera pagina html è considerata da js come un oggetto;
Model: Js è in grado di manipolare gli elementi della pagina html;
*/
console.log(document);
/*per manipolare gli elementi della pagina html dobbiamo essere in grado di identificarli;
in js per poter manipolare un elemento dobbiamo  prima catturarlo*/
let miotitolo = document.getElementById('titoloh1');
console.log(miotitolo);

miotitolo.innerText = 'Ciao';
miotitolo.innerHTML = 'Ciao <span style= "color: red;">come stai?</span>';

let paragrafo1 = document.getElementById('paragrafo1');
paragrafo1.style.backgroundColor = 'yellow';
paragrafo1.style.fontSize = '20px';

let contenitore = document.getElementById('contenitore');
contenitore.innerHTML = `
<ul> <li> primo comma</li> 
<li>secondo comma</li>
<li>terzo comma</li></ul>
`;

console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByClassName('miaclasse'));
let titoloh2 = document.querySelector('#titoloh2');
console.log(titoloh2);