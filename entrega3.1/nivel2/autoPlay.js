const { Game } = require('./Game.js')
const { Player } = require('./Player.js')

const game = new Game()

const autoPlay = (rounds, player1, player2) => {
    if (isNaN(rounds)) throw new Error
    const p1 = new Player(player1)
    const p2 = new Player(player2)
    // const game = new Game()
    console.log('Juego de dados, al mejor de 5!')
    console.log('------------------------------')
    // let counter = 0
    if ( counter < rounds ) {
        game.addPlayer(p1)
        game.addPlayer(p2)
        game.playGame(p1, p2)
        game.showScore()
        setTimeout(() => {
            counter++
            console.log(counter)
            autoPlay(rounds)
        }, 1500)
    }
    game.showResult(p1, p2)
}

module.exports = { game, autoPlay }

// while (counter < 5) {
//     game.addPlayer(p1)
//     game.addPlayer(p2)
//     game.playGame(p1, p2)
//     game.showScore()
//     setTimeout(() => {}, 1500)
//     counter++
// }