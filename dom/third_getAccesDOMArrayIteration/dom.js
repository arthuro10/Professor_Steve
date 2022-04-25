// Was lerne ich hier?




// #1 Man kann beim Parent Element ebenso die 
// query Selector Methode aufrufen. 
// Damit kann man sofort die Kinder ansprechen
let main = document.querySelector('.main');

let h2 = main.querySelector('h2');

h2.textContent = 'Loading Series';

// Mit innerHTML können auch Tags hinzugefügt werden
let p = main.querySelector('p');
p.innerHTML = 'And now a list of <strong>SERIES</strong>';


// Mittles der Create Methode können auch Tags erstellt werden
let ul = document.createElement('ul');
// Zudem kann man mit der Methode Append ein Element an einen
// Parent anhängen. Dabei ist zu beachten, dass es immer an letzter
// Stelle hinzugefügt wird. 
main.appendChild(ul);

// Eine ganze Liste als Listitems in UL hinzugefügt. 
movies.forEach(e => {
    let li = document.createElement('li');
    let txt = document.createTextNode(e);
    li.appendChild(txt);
    ul.appendChild(li);
});
