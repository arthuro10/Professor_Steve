// Logik

let h1 = document.getElementById('headline');

h1.style.color = 'red';

// Man kann auch zum bestehenden Text etwas hinzufügen
h1.textContent += ' kann ich die Überschrift auch erweitern?';
// interessant ist aber, dass die Formatierung zu einem h1 Element wegfällt
// FALSCH. Formatierung bleibt, ich habe nur eine falsche Referenz gesetzt. 

h1.textContent = 'Habe ich einen Fehler gemacht?'

h1.textContent += '... Ja habe ich. '

// Mit mehreren Objekten zurechtkommen

let ps = document.querySelectorAll('#boxing p');
ps.forEach(p => {
    console.log(p.textContent);
    p.style.color = 'blue';
    p.style.fontSize = '2rem'
    p.style.fontWeight = 'bold'
});

let newP = document.createElement('p');
newP.textContent = 'Inglesias';
newP.style.color = 'green';
newP.style.fontSize = '3rem';

let divBoxing = document.getElementById('boxing');
divBoxing.style.width = '250px';
divBoxing.style.height = '250px';
divBoxing.style.backgroundColor = 'grey';
divBoxing.appendChild(newP);


let array = ["Hans","Zimmer","Fahrenheit","Sturm","Darkness"];

// Durch Array iterieren, dabei Knoten erstellen und an DOM hängen
array.forEach(txt => {
    let temP = document.createElement('p');
    let textP = document.createTextNode(txt);
    temP.appendChild(textP);
    temP.style.color = 'gold';
    temP.style.fontSize = '1.5rem';
    divBoxing.appendChild(temP);
});


// Events !!!
let btn = document.createElement('button');
btn.textContent = 'CLICK ME!!!'
divBoxing.appendChild(btn);

function clickMe(e) {
    console.log("Ich wurde angeklickt!");
    btn.style.color = 'blue';
    let btn1 = document.createElement('button');
    btn1.textContent = 'CLICK ME TOO!!!'
    btn1.addEventListener('click', (e) => {
        console.log('Ich wurde auch angeklickt');
        console.log(e.target);
        e.target.style.color = 'red';
        let btn2 = document.createElement('button');
        btn2.textContent = 'STOOOOPPPP'
        divBoxing.appendChild(btn2);
        btn2.addEventListener('click',clickMe);
    });
    divBoxing.appendChild(btn1);

}

btn.addEventListener('click',clickMe);
