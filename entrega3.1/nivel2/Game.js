class Game {
    constructor(name, scorer) {
        this.name = name
        this.scorer = scorer;
    }

    getScoreP1() {
        return this.scorer.getScoreP1(this);
      }
    
    getScoreP2() {
        return this.scorer.getScoreP2(this);
      }
    
    updateScoreP1() {
        return this.scorer.updateScoreP1(this);
      }
    
    updateScoreP2() {
        return this.scorer.updateScoreP2(this);
      }
    
    showScore() {
        return this.scorer.showScore(this);
      }

    showWinner(player1, player2) {
        const p1_score = this.getScoreP1()
        const p2_score = this.getScoreP2()
        p1_score > p2_score ? console.log(`El ganador de la partida es ${player1.getName()}!`) :
        p1_score < p2_score ? console.log(`El ganador de la partida es ${player2.getName()}!`) :
        console.log(`${player1.getName()} y ${player2.getName()} han empatado!`)
    }
}

module.exports = { Game }