/*Singleton
Construeix una aplicació que creï diversos Jugadors/es. Els jugadors/es podran ser afegits a un Joc, 
que mostrarà un marcador amb les puntuacions i el guanyador/a. L'aplicació ha de poder afegir o treure punts 
a cada jugador/a perquè el marcador canviï. La classe Marcador ha d'implementar un patró Singleton com a requisit 
indispensable. 


- Clase Jugadors

- Clase Joc?

- Clase Marcador ( Singleton Pattern )

- Treure o afegir punts als jugadors perqué el marcador canviï */

class Scorer {
    static instance

    constructor() {
        if (!Scorer.instance) {
            this.player1_score
            this.player2_score
            Scorer.instance = this
        }
        return Scorer.instance
    }

    updateScore(player){

    }
    
}

class Player {
    constructor(name) {
        this.name = name
        this.result
    }

    getName() {
        return this.name
    }

    throwDice() {
        return this.result = Math.ceil((Math.random() * 6))
    }

    getResult() {
        return this.result
    }
}

class Game {
    constructor() {
        this.players = []
    }

    addPlayer(player) {
        return this.players.push(player)
    }

    findPlayers(player1, player2) {
        const index1 = this.players.findIndex(element => element === player1)
        const index2 = this.players.findIndex(element => element === player2)
        return { index1, index2 }
    }

    throwDices(player1, player2) {
        const { index1, index2 } = this.findPlayers(player1, player2)
        const dicePlayer1 = this.players[index1].result
        const dicePlayer2 = this.players[index2].result
        return { dicePlayer1, dicePlayer2 }
    }

    showWinner(player1, player2) {
        const { dicePlayer1, dicePlayer2 } = this.throwDices(player1, player2)
        dicePlayer1 > dicePlayer2 ? updateScore(player1) : updateScore(player2)
    }
}

const sergi = new Player('Sergi')
const game = new Game()
game.addPlayer(sergi)
game.throwDice(sergi)
console.log(sergi.getResult())