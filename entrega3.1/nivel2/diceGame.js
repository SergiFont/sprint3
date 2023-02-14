const { Player } = require('./Player.js')
const { Game } = require('./Game.js')
const { playGame } = require('./playGame.js')

const diceGame = (player1, player2) => {
    const p1 = new Player(player1)
    const p2 = new Player(player2)
    const game = new Game()
    let counter = 0
    console.log('Juego de dados, al mejor de 5!')
    console.log('------------------------------')
    game.addPlayer(p1)
    game.addPlayer(p2)
    const autoPlay = (rounds = 5) => {
        try {
            if (isNaN(rounds)) throw new Error('Insert a number, please')
            if ( counter <= rounds ) {
                playGame(p1, p2)
                game.showScore()
                console.log('-----------------------')
                setTimeout(() => {
                    if(counter === 5) game.showWinner(p1, p2) 
                    counter++
                    autoPlay(rounds)
                }, 1500)
            }    
        } catch (error) {
            console.log(error.message)
        }
    }
    autoPlay()
}

module.exports = { diceGame }