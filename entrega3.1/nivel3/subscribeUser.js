const { User } = require('./User.js')

const subscribeUser = (topic, user, time = 0) => {
    setTimeout(() => {
        topic.addUser(user)
    }, time)
}

module.exports = { subscribeUser }