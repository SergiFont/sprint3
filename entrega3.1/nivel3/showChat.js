const { Topic } = require('./Topic.js')

const showChat = (topic, user, message, time) => {
    setTimeout(() => {
        topic.sendMessage(user, message)
    }, time)
}

module.exports = { showChat }