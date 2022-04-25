// nested loops and multi-dimensional objects
// We can use nested loops to access all the elements
// inside multi-dimensional arrays or objects

let twoD = [
    [1,2,3,4,5,6,7],
    [8,10,5,7,3,22,6,42],
    [123,54,12,11,9,15],
];

let bigHero = {
    characters: [
        {name:"Hiro",voice:"Ryan Potter"},
        {name:"Baymax",voice:"Scott Adsit"},
        {name:"Go go Tamago",voice:"Jamie Chung"},
        {name:"Fred",voice:"T.J. Miller"},
    ]
};

console.log("Node is working properly\n\n");


// nested for loops
/*let rows = twoD.length;
for (let i =0; i<rows;i++){
    let amount = twoD[i].length;
    console.log(i, amount);
    for (let j = 0; j<amount;j++){
        console.log( twoD[i][j] );
    }
}*/

// Looping thorugh an Array that is in a object
let heroRows = bigHero.characters.length;
for (let index = 0; index < heroRows; index++) {
    console.log(bigHero.characters[index].name,bigHero.characters[index].voice);
}

// Loop another way
let chars = bigHero['characters']; // bigHero.characters
for (let i = 0; i < chars.length; i++) {
    console.log(chars[i]);
    console.log(chars[i].name);
    console.log(chars[i]['voice']);
    
}
console.log("\n\n");

for (let i = 0; i < chars.length; i++) {
    for(let prop in chars[i]) {
        console.log(prop,chars[i][prop])
    }
    
}

