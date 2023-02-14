const { Topic } = require('./Topic.js')
const { User } = require('./User.js')

const setUserJoinSentinel = (topic) => {
    topic.accesSentinel().on('user joined channel', user => {
        console.log(`${user.getName()} joined ${topic.getName()}`)
    })
}

module.exports = { setUserJoinSentinel }