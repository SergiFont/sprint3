const EventEmitter = require('events')

class Topic {
    #name
    #users
    #sentinel

    constructor(name) {
        this.#users = []
        this.#name = name
        this.#sentinel = new EventEmitter()
    }
    
    getName() {
        return this.#name
    }

    addUser(user) {
        this.#users.push(user)
        return this.#sentinel.emit('user joined channel', user)
    }

    sendMessage(user, message) {
        try {
            const index = this.#users.indexOf(user)
            if (index === -1) {
                throw new Error('User is not subscribed on this topic')
            }
            this.#users.forEach(sub => {
                if(sub !== user) console.log(`Notification for ${sub.getName()}: ${user.getName()} has sent a new message!`)
            })
            return this.#sentinel.emit('message', user, message)
        } catch (error) {
            console.log(error.message)
        }
    }

    accesSentinel() {
        return this.#sentinel
    }

    subNotificacion() {
        
    }
}

module.exports = { Topic }