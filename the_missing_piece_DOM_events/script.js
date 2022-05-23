// const btn = document.querySelector('#v2');
// 
// btn.onclick = function (){
//     console.log("You clicked me")
//     console.log("good job")    
// }
// 
// function scream(){
//     console.log('AHHHHHHH')
//     console.log('Stop touching me!')
// }
// btn.onmouseenter = scream;
// 
// document.querySelector('h1').onclick = () => {
//     console.log('You clicked on the EVENT')
// }
// 
// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('dblclick', () => {
//     alert('YOU CLICK ON THE THIRD BUTTON')
// })
// 
// function twist(){
//     console.log("TWIST")
// }
// function shout(){
//     console.log("SHOUT")
// }
// 
// const tasButton = document.querySelector('#tas')
// 
// //tasButton.onclick = twist; 
// //tasButton.onclick = shout;
// 
// tasButton.addEventListener('click', twist, {once: true})
// tasButton.addEventListener('click', shout)




//Keyboard Events and Event Objects
// const input = document.querySelector('input');
// input.addEventListener('keydown', (e) => {
//     console.log(e.key)
//     console.log(e.code)
// 
// })

// input.addEventListener('keyup', () => {
//     console.log('keyup')
// })

window.addEventListener('keydown', (e) => {
    switch(e.code){
        case 'ArrowUp':
            console.log("UP");
            break;
        case 'ArrowDown':
            console.log("DOWN");
            break;
        case 'ArrowLeft':
            console.log("LEFT");
            break;
        case 'ArrowRight':
            console.log("RIGHT");
            break;
        default:
            console.log("ignored!")
    }
})
