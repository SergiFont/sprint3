class Player {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    throwDice() {
        return Math.ceil((Math.random() * 6))
    }
}

module.exports = { Player }