/**
 * parent.children - is a nodeList of Elements
 * parent.firstElementChild - is 1 element node
 * parent.lastElementChild - is 1 element node
 * node.nextElementSibling - is 1 element node
 * node.previousElementSibling - is 1 element node
 * node.parentNode - is 1 element node
 * parent.contains(node) - returns Boolean
 */


let main = document.querySelector('.main');

let children = main.children;
let children2 = main.childNodes;

console.log(children.length);
console.log(children2.length);

console.log(children);

// Has the Textnodes aswell. The Carriage Return
console.log(children2);

//////////////////////////
console.log('\n');console.log('\n');

let ul = main.children[1];
let h2 = main.firstElementChild;
let ul2 = h2.nextElementSibling;
console.log(ul2);

let h2a = ul2.previousElementSibling;
console.log(h2a);



/////// 
console.log('GET THE LI \n\n\n');

let _ul = main.children[1];
let lis = _ul.children;
let firstLi = lis[0]; // ul.firstElementChild

let txt = firstLi.textContent;
let txt2 = firstLi.firstChild.nodeValue;

console.log(txt,txt2);

firstLi.firstChild.nodeValue = txt.toUpperCase();


////////////

let bool = main.contains( firstLi );
console.log(bool)

