// dom.js 
/**
 * node.insertBefore(newNode, referenceNode) - insert a node
 * 
 * parent.replaceChild(new, old) - replace one node inside
 * parent with another node
 * 
 * node.cloneNode(true) - copy a node and optionally its children
 */

let ul = document.querySelector('.main ul');


// Hinter Apocalypse werden wir ein Element hinzufügen

let lis = ul.children;
let AN = lis[5];
let newNode = document.createElement('li');
newNode.textContent = 'The Sixth Sense';

ul.insertBefore(newNode, AN);

// Zwischen Spiderman und Apocalpyse ist nun the sixth sense!

/** And now we are gonna insert Jurassic Park */

let jp = document.createElement('li');
jp.textContent = 'Jurassic Park';
ul.replaceChild(jp,lis[5]);

// How to clone

let f = ul.cloneNode(false);
// Wenn true, dann auch die Children
let t = ul.cloneNode(true);
console.log(f);
console.log(t);

