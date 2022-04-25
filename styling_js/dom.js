// dom.js
/**
 * element.className
 * element.classList.add()
 * element.classList.remove()
 * element.classList.toggle()
 * element.style.propName = value
 * element.style.cssText = ""
 * window.getComputedStyle(element)
 * 
 */

let main = document.querySelector('#main');
let ul = document.querySelector('ul');
let h1 = document.querySelector('header h1');
let foot = document.querySelector('#foot p');

// Können so Klassen hinzufügen. 
main.className = "some abc";
// Ist eben der Name in JS, in HTML/CSS weiterhin class

// Ohne andere zu beeinflussen, einfach anhängen
foot.classList.add("some");

foot.classList.remove("other");

foot.classList.toggle("other");
//foot.classList.toggle("other");
// Kann so immer hinzufügen/entfernen

// className da class schon reserviert ist in JS

main.title = "mousover text";
main.id = "main";

// In JS camelcase
// also background-color wird zu backgroundColor
foot.style.backgroundColor = "salmon";

// mehrere ändern
foot.style.cssText = "font-family: sans-serif; letter-spacing:5px;"



///////////

// welche Style werden applied
let style = window.getComputedStyle(ul);
console.log(style.cssText);
console.log(style.length);
console.log(style.item(200));
console.log(style.getPropertyValue('color'));



