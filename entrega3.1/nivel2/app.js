const { diceGame } = require('./diceGame.js')
const { Game } = require('./Game.js')
const { Player } = require('./Player.js')

const game = new Game

const p1 = new Player('Sergi')
const p2 = new Player('Gerard')


diceGame(p1, p2, game) // juego de prueba automático para probar que funciona