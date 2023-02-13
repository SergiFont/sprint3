class Scorer {
    static instance

    constructor() {
        if (!Scorer.instance) {
            this.p1_score = 0
            this.p2_score = 0
            Scorer.instance = this
        }
        return Scorer.instance
    }

    getScoreP1() {
        return this.p1_score
    }
    getScoreP2() {
        return this.p2_score
    }

    updateScoreP1() {
        this.p1_score += 1
        return this.p1_score
    }

    updateScoreP2() {
        this.p2_score += 1
        return this.p2_score
    }

    showScore() {
        return console.log(`El marcador va ${this.p1_score} - ${this.p2_score}`)
    }
}

module.exports = { Scorer }