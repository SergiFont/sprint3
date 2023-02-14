/*Escribe una aplicación que cree diferentes objetos Usuario/a. La aplicación podrá crear diferentes Temas y suscribirse
los usuarios/as a ellos. Cuando un Usuario/a añada un mensaje a un Tema se enviará una alerta por la consola desde el Tema.
También lo mostrarán por consola cada uno de los Usuarios/as que estén suscritos al Tema (recibirán el mensaje).
Crea un Tema con un Usuario/a y otro con dos y muestra la recepción de los mensajes por los usuarios/as.
Utiliza el módulo de eventos.*/

const EventEmitter = require('events')

class User {
    #name
    constructor(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }
}

class Topic {
    #name
    #users
    sentinel

    constructor(name) {
        this.#users = []
        this.#name = name
        this.sentinel = new EventEmitter()
    }
    
    getName() {
        return this.#name
    }

    addUser(user) {
        this.#users.push(user)
        return this.sentinel.emit('user joined channel', user)
    }

    sendMessage(user, message) {
        const index = this.#users.indexOf(user)
        if (index !== -1) {
           return this.sentinel.emit('message', user, message)
        }
    }
}

const user1 = new User('Sergi')
const topic1 = new Topic('Tema1')

topic1.sentinel.on('user joined channel', user => {
    console.log(`${user.getName()} joined ${topic1.getName()}`)
})

topic1.sentinel.on('message', (user, message) => {
    console.log(`${topic1.getName()}.... ${user.getName()}: ${message}`)
})

topic1.addUser(user1)
topic1.sendMessage(user1, 'Hello there')