const { Scorer } = require('./Scorer.js')

class Game {
    constructor() {
        this.players = []
    }

    addPlayer(player) {
        return this.players.push(player)
    }

    throwDices(player1, player2) {
        const dicePlayer1 = player1.throwDice()
        const dicePlayer2 = player2.throwDice()
        console.log(`${player1.getName()} ha sacado un ${dicePlayer1} en el dado.`)
        console.log(`${player2.getName()} ha sacado un ${dicePlayer2} en el dado.`)
        return { dicePlayer1, dicePlayer2 }
    }

    playGame(player1, player2) {
        const { dicePlayer1, dicePlayer2 } = this.throwDices(player1, player2)
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

    showScore() {
        const scorer = new Scorer
        return scorer.showScore()
    }

    showResult(player1, player2) {
        const scorer = new Scorer
        const p1_score = scorer.getScoreP1()
        const p2_score = scorer.getScoreP2()
        console.log('-----------------------')
        p1_score > p2_score ? console.log(`Ha ganado ${player1.getName()}!`) :
        p1_score < p2_score ? console.log(`Ha ganado ${player2.getName()}!`) :
        console.log(`${player1.getName()} y ${player2.getName()} han empatado!`)
    }
}

module.exports = { Game }