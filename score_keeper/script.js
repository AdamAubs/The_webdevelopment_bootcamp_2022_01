const player1 = {
    score:0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const roundsPlayed = document.querySelector('#round')
const resetBtn = document.querySelector('#reset')
let winningScore = 3;
let isgameOver = false

function updateScores(player, opponent){
    if(!isgameOver){
        player.score+=1;
        if(player.score === winningScore){
            isgameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    player.display.textContent = player.score
    }
}


player1.button.addEventListener('click', () => {
    updateScores(player1, player2)
})
player2.button.addEventListener('click', () => {
    updateScores(player2, player1)
})

resetBtn.addEventListener('click', reset)

roundsPlayed.addEventListener('change', function (){
    winningScore = parseInt(this.value);
    reset()
})

function reset(){
    isgameOver = false
    for(let p of [player1,player2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
}