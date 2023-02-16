const { Scorer } = require('./Scorer.js')
const { Player } = require('./Player.js')
const { Game } = require('./Game.js')

const throwDices = (player1, player2) => {
    const throwDice = () => Math.ceil((Math.random() * 6))
    const dicePlayer1 = throwDice()
    const dicePlayer2 = throwDice()
    console.log(`${player1.getName()} ha sacado un ${dicePlayer1} en el dado.`)
    console.log(`${player2.getName()} ha sacado un ${dicePlayer2} en el dado.`)
    return { dicePlayer1, dicePlayer2 }
}

const playGame = (player1, player2) => {
    const { dicePlayer1, dicePlayer2 } = throwDices(player1, player2)
    const score = new Scorer
    if ( dicePlayer1 > dicePlayer2 ) {
        console.log(`Ha ganado ${player1.getName()}!`)
        return score.updateScoreP1()
    } else if ( dicePlayer1 < dicePlayer2) {
        console.log(`Ha ganado ${player2.getName()}!`)
        return score.updateScoreP2()
    }
    else return console.log(`Empate!`)
}

const diceGame = (p1, p2, game) => {
    let counter = 0
    console.log('Juego de dados, al mejor de 5!')
    console.log('------------------------------')
    game.addPlayer(p1)
    game.addPlayer(p2)
    const autoPlay = (rounds = 5) => {
        try {
            if (isNaN(rounds)) throw new Error('Insert a number, please')
            if ( counter <= rounds ) {
                playGame(p1, p2)
                game.showScore()
                console.log('-----------------------')
                setTimeout(() => {
                    if(counter === 5) game.showWinner(p1, p2) 
                    counter++
                    autoPlay(rounds)
                }, 1500)
            }    
        } catch (error) {
            console.log(error.message)
        }
    }
    autoPlay()
}

module.exports = { diceGame }