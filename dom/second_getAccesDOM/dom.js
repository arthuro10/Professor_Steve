// dom.js

// Es gibt ca. 13 Knoten im DOM und mit denen arbeiten wir. 

/**
 * Wir arbeiten mit Comment Nodes
 * Element Nodes
 * Attributes Nodes
 */

// Die drei wichtigen Methoden, mit denen man auf die Nodes / Elemente zugreifen kann

// document.getElementById('id') - returns 1 element node
// document.querySelector(css) - returns 1 element node
// document.querySelectorAll(css) - returns NodeList

let foot = document.getElementById('foot');
let p = document.getElementById('para');
p.textContent = "First Paragraph";

let p2 = document.querySelector('.main p.some');
p2.textContent = "Second Paragraph";

let ps = document.querySelectorAll('.main p');
ps.forEach(e => {
    e.textContent += " LOOPED";
});
