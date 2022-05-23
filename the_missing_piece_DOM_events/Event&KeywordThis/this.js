

const randColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255) 
    return `rgb(${r}, ${g}, ${b})`;
}
const buttons = document.querySelectorAll('button')
const h1s = document.querySelectorAll('h1')

// for(let button of buttons){
//     button.addEventListener('click', () => {
//         button.style.backgroundColor = randColor();
//         button.style.color = 'white';
//     })
// }
//
// for(let h1 of h1s){
//     h1.addEventListener('click', () => {
//         h1.style.backgroundColor = randColor();
//         h1.style.color = 'white';
//     })
// }

//This
for(let button of buttons){
    button.addEventListener('click', colorize)
}

for(let h1 of h1s){
    h1.addEventListener('click', colorize)
}

function colorize(){
    this.style.backgroundColor = randColor();
    this.style.color = 'white';
}