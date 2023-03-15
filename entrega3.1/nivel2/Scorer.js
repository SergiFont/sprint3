class Scorer {
    static instance
    scores = {}

    constructor() {
        if (!Scorer.instance) {
            Scorer.instance = this
        }
        return Scorer.instance
    }

    getScoreP1(game) {
        this.scores[game.name] = this.scores[game.name] || { p1_score: 0, p2_score: 0 };
        return this.scores[game.name].p1_score;
    }
    getScoreP2(game) {
        this.scores[game.name] = this.scores[game.name] || { p1_score: 0, p2_score: 0 };
        return this.scores[game.name].p2_score;
    }

    updateScoreP1(game) {
        this.scores[game.name] = this.scores[game.name] || { p1_score: 0, p2_score: 0 };
        this.scores[game.name].p1_score += 1;
        return this.scores[game.name].p1_score;
    }

    updateScoreP2(game) {
        this.scores[game.name] = this.scores[game.name] || { p1_score: 0, p2_score: 0 };
        this.scores[game.name].p2_score += 1;
        return this.scores[game.name].p2_score;
    }

    showScore(game) {
        this.scores[game.name] = this.scores[game.name] || { p1_score: 0, p2_score: 0 };
        console.log(`El marcador va ${this.scores[game.name].p1_score} - ${this.scores[game.name].p2_score}`);
    }
}

module.exports = { Scorer }