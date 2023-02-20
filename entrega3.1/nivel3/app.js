const { User } = require('./User.js')
const { Topic } = require('./Topic.js')

/*Después de la correción de Oriol, modificada la clase Topic, en concreto el método sendMessage, para que notifique
también a los usuarios suscritos al mismo tema, de que uno de los miembros ha enviado un mensaje */


const setUserJoinSentinel = topic => {
    topic.accesSentinel().on('user joined channel', user => {
        console.log(`${user.getName()} joined ${topic.getName()}`)
    })
}

const setTopicMessageSentinel = topic => {
    topic.accesSentinel().on('message', (user, message) => {
        console.log(`${topic.getName()}.... ${user.getName()}: ${message}`)
    })
}

const subscribeUser = (topic, user, time = 0) => {
    setTimeout(() => {
        topic.addUser(user)
    }, time)
}

const showChat = (topic, user, message, time) => {
    setTimeout(() => {
        topic.sendMessage(user, message)
    }, time)
}


/////////////////////////////////////////////////////

const user1 = new User('Sergi')
const user2 = new User('Juan')
const user3 = new User('Pepe')
const topic1 = new Topic('Tema 1')
const topic2 = new Topic('Tema 2')

//Setting observers
setUserJoinSentinel(topic1)

setTopicMessageSentinel(topic1)

setUserJoinSentinel(topic2)

setTopicMessageSentinel(topic2)

//Subscribing users to the topics
subscribeUser(topic2, user3)

subscribeUser(topic1, user1, 2000)

subscribeUser(topic1, user2, 4000)

//Sending messages from the users to their subscribed topics
showChat(topic1, user2, 'Hello There!', 6000)

showChat(topic1, user1,'Welcome friend!', 8000)

showChat(topic2, user3, "Why I can't read anything? :(", 10000)