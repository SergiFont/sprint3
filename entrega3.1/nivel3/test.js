const EventEmitter = require('events');

class Player {
  constructor(name) {
    this.name = name;
  }
}

class Game {
  constructor() {
    this.players = [];
    this.eventEmitter = new EventEmitter();
  }

  addPlayer(player) {
    this.players.push(player);
    this.eventEmitter.emit('playerAdded', player);
  }

  removePlayer(player) {
    const index = this.players.indexOf(player);
    if (index !== -1) {
      this.players.splice(index, 1);
      this.eventEmitter.emit('playerRemoved', player);
    }
  }
}

const game = new Game();

game.eventEmitter.on('playerAdded', player => {
  console.log(`${player.name} has joined the game.`);
});

game.eventEmitter.on('playerRemoved', player => {
  console.log(`${player.name} has left the game.`);
});

const player1 = new Player('John');
const player2 = new Player('Jane');

game.addPlayer(player1);
game.addPlayer(player2);

game.removePlayer(player1);