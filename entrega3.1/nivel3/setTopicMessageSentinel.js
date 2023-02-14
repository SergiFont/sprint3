const { Topic } = require('./Topic.js')
const { User } = require('./User.js')

const setTopicMessageSentinel = (topic) => {
    topic.accesSentinel().on('message', (user, message) => {
        console.log(`${topic.getName()}.... ${user.getName()}: ${message}`)
    })
}

module.exports = { setTopicMessageSentinel }