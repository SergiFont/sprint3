/*Escribe una aplicación que cree diferentes objetos Usuario/a. La aplicación podrá crear diferentes Temas y suscribirse
los usuarios/as a ellos. Cuando un Usuario/a añada un mensaje a un Tema se enviará una alerta por la consola desde el Tema.
También lo mostrarán por consola cada uno de los Usuarios/as que estén suscritos al Tema (recibirán el mensaje).
Crea un Tema con un Usuario/a y otro con dos y muestra la recepción de los mensajes por los usuarios/as.
Utiliza el módulo de eventos.*/
const { User } = require('./User.js')
const { Topic } = require('./Topic.js')
const { subscribeUser } = require('./subscribeUser.js')
const { showChat } = require('./showChat.js')
const { setUserJoinSentinel } = require('./setUserJoinSentinel.js')
const { setTopicMessageSentinel } = require('./setTopicMessageSentinel.js')

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