const { diceGame } = require('./diceGame.js')
const { Game } = require('./Game.js')
const { Player } = require('./Player.js')

/*Antes de la corrección de Iván, en el ejercicio original había, otra vez, demasiados archivos. 
También ha habido unos pequeños cambios en la forma de crear los juegos y los jugadores. 
Se creabam directamente en el juego de muestra. Modificada las classes Player y Game para que sea reutilizable 
en juegos diferentes. */

const game = new Game

const p1 = new Player('Sergi')
const p2 = new Player('Gerard')


diceGame(p1, p2, game) // juego de prueba automático para probar que funciona