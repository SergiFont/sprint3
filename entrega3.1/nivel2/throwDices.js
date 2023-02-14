const { Player } = require('./Player.js')

const throwDices = (player1, player2) => {
    const throwDice = () => Math.ceil((Math.random() * 6))
    const dicePlayer1 = throwDice()
    const dicePlayer2 = throwDice()
    console.log(`${player1.getName()} ha sacado un ${dicePlayer1} en el dado.`)
    console.log(`${player2.getName()} ha sacado un ${dicePlayer2} en el dado.`)
    return { dicePlayer1, dicePlayer2 }
}

module.exports = { throwDices }