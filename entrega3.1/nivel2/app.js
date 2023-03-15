const { diceGame } = require('./diceGame.js')
const { Game } = require('./Game.js')
const { Player } = require('./Player.js')
const { Scorer } = require('./Scorer.js')

/*Antes de la corrección de Iván, en el ejercicio original había, otra vez, demasiados archivos. 
También ha habido unos pequeños cambios en la forma de crear los juegos y los jugadores. 
Se creabam directamente en el juego de muestra. Modificada las classes Player y Game para que sea reutilizable 
en juegos diferentes. */

const scorer = new Scorer()

const game = new Game('Game1', scorer)

const p1 = new Player('Sergi')
const p2 = new Player('Gerard')

const game2 = new Game('Game2', scorer)

const p3 = new Player('Maria')
const p4 = new Player('Araceli')

diceGame(p1, p2, game) // juego de prueba automático para probar que funciona
diceGame(p3, p4, game2) // juego de prueba automático para probar que funciona

