/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game */

// ** * A ** ** ** ** ** *



// get the variables from the dom
let player, playerSession, curent, p1TotalScore, p2TotalScore, dice
const selectDiv = (e) => {
    return document.querySelector(e)
}
const roll = selectDiv('.btn-roll')
const hold = selectDiv('.btn-hold')
const startNewGame = selectDiv('.btn-new')
const p1Session = selectDiv('.player-0-panel')
const p2Session = selectDiv('.player-1-panel')
const player1 = selectDiv('#name-0');
const player2 = selectDiv('#name-1');
const p1currentScore = selectDiv('#current-0');
const p2currentScore = selectDiv('#current-1');
const p1Score = selectDiv('#score-0');
const p2Score = selectDiv('#score-1');
current = 0;
p1TotalScore = 0;
p2TotalScore = 0;

//
const rolledOne = (pScore, p1, p2) => {
    clearCurrentScore(pScore) /* clear current score */
    p1.classList.remove('active')
    p2.classList.add('active')
}

const rolledNumber = () => {
    let dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('img').setAttribute('src', 'dice-' + dice + '.png ')
    console.log(dice)


    if (p1Session.getAttribute('class').includes('active')) {
        if (dice === 1) {

            rolledOne(p1currentScore, p1Session, p2Session)

        } else {
            current += dice;
            p1currentScore.innerHTML = current;
        }

    } else {
        if (dice === 1) {

            rolledOne(p2currentScore, p2Session, p1Session)

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

            rolledOne(p1currentScore, p1Session, p2Session)
        }
    } else {
        p2TotalScore += current;
        p2Score.innerText = p2TotalScore;
        if (p2TotalScore >= 100) {
            player2.innerText = 'Winner!!!'
            hold.remove();
            roll.remove();


        } else {

            rolledOne(p2currentScore, p2Session, p1Session)
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