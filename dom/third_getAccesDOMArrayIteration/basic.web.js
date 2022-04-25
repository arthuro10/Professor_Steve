// basic-web.js
// Document Object Model - DOM

// 1. convert arrray of anime into a string
let names = movies.join(",");
console.log(names);

// 2. find the paragraph with the id "para"
let p = document.getElementById("para");
console.log(p);


// 3. put the new string inside the paragraph
p.textContent = names;



// Document repräsentiert mein Dokument