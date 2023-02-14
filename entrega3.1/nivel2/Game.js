const { Scorer } = require('./Scorer.js')

class Game {
    constructor() {
        this.players = []
    }

    addPlayer(player) {
        return this.players.push(player)
    }

    showScore() {
        const scorer = new Scorer
        return scorer.showScore()
    }

    showWinner(player1, player2) {
        const scorer = new Scorer
        const p1_score = scorer.getScoreP1()
        const p2_score = scorer.getScoreP2()
        p1_score > p2_score ? console.log(`El ganador de la partida es ${player1.getName()}!`) :
        p1_score < p2_score ? console.log(`El ganador de la partida es ${player2.getName()}!`) :
        console.log(`${player1.getName()} y ${player2.getName()} han empatado!`)
    }
}

module.exports = { Game }