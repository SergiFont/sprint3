const { Scorer } = require('./Scorer.js')
const { Player } = require('./Player.js')
const { throwDices } = require('./throwDices.js')

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

module.exports = { playGame }