const { Player } = require('./Player.js')
const { Game } = require('./Game.js')

const diceGame = (player1, player2) => {
    const p1 = new Player(player1)
    const p2 = new Player(player2)
    const game = new Game()
    let counter = 0
    console.log('Juego de dados, al mejor de 5!')
    console.log('------------------------------')
    while (counter < 5) {
        game.addPlayer(p1)
        game.addPlayer(p2)
        game.playGame(p1, p2)
        game.showScore()
        counter++
    }
    game.showResult(p1, p2)
}

module.exports = { diceGame }