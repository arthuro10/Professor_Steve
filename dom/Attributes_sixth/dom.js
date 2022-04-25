// dom.js

/**
 * element.getAttribute(name);
 * element.setAttribute(name,value);
 * 
 * element.dataset.prop = value
 */

let main = document.querySelector('.main');

main.getAttribute('id');
main.getAttribute('title');
console.log(main.getAttribute('title'));


//////////////////// Create

main.setAttribute('title',"my movies");
console.log(main.getAttribute('title'));


//// Dataset //////

// Man kann eigene Attribute erstellen. 
// Dafür muss man folgende Syntax einhalten
// data-
// wie bpsw. data-year

let li = main.querySelector('ul li');

console.log(li.getAttribute('data-year'));


// Die selbst erstellten Attribute

console.log("li.dataset");
li.dataset.year = 1999
console.log(li.dataset);

