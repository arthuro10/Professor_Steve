// Logik

let box = document.querySelector('.box');

/*for (let i = 0; i <20;i++){
    let element = document.createElement('div');
    box.appendChild(element);
}*/



let ps = document.querySelectorAll('.box p');
console.log(ps);

ps.forEach(e => {
    e.style.color = 'yellow';
    e.textContent = 'Freedom'
});



    
