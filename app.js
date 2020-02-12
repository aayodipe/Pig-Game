/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game */

// ** * A ** ** ** ** ** *

// on window load,

// get the variables from the dom
const roll = document.querySelector('.btn-roll')
const hold = document.querySelector('.btn-hold')
const startNewGame = document.querySelector('.btn-new')
const p1Session = document.querySelector('.player-0-panel')
const p2Session = document.querySelector('.player-1-panel')
let player, playerSession
const player1 = document.querySelector('#name-0');
const player2 = document.querySelector('#name-1');
const p1currentScore = document.querySelector('#current-0');
const p2currentScore = document.querySelector('#current-1');
const p1Score = document.querySelector('#score-0');
const p2Score = document.querySelector('#score-1');
let current = 0;
let p1TotalScore = 0;
let p2TotalScore = 0;

let dice
const rolledNumber = () => {
    let dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('img').setAttribute('src', 'dice-' + dice + '.png ')
    console.log(dice)

    if (p1Session.getAttribute('class').includes('active')) {
        if (dice === 1) {
            clearCurrentScore(p1currentScore) /* clear current score */
            p1Session.classList.remove('active')
            p2Session.classList.add('active')

        } else {
            current += dice;
            p1currentScore.innerHTML = current;
        }

    } else {
        if (dice === 1) {
            clearCurrentScore(p2currentScore) /* clear current score */
            p2Session.classList.remove('active')
            p1Session.classList.add('active')

        } else {
            current += dice;
            p2currentScore.innerHTML = current;
        }
    }
};

const clearCurrentScore = (e) => {
    current = 0;
    e.innerText = 0;

}

holdScore = () => {

    if (p1Session.getAttribute('class').includes('active')) {
        p1TotalScore += current;
        p1Score.innerText = p1TotalScore;
        if (p1TotalScore >= 100) {
            player1.innerText = 'Winner!!!'
            hold.remove();
            roll.remove();




        } else {
            clearCurrentScore(p1currentScore) /* clear current score */
            p1Session.classList.remove('active')
            p2Session.classList.add('active')
        }


    } else {
        p2TotalScore += current;
        p2Score.innerText = p2TotalScore;
        if (p2TotalScore >= 100) {
            player2.innerText = 'Winner!!!'
            hold.remove();
            roll.remove();


        } else {
            clearCurrentScore(p2currentScore) /* clear current score */
            p2Session.classList.remove('active')
            p1Session.classList.add('active')
        }

    }
}

const startOver = () => {
     window.location.reload()

}

roll.addEventListener('click', () => {
    rolledNumber()

})
hold.addEventListener('click', () => {
    holdScore()
})

startNewGame.addEventListener('click', () => {
    startOver()
})