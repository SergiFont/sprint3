const fs = require('fs')

const getNumbers= () => {
    const file = './numbers.json'
    const jsonData = fs.readFileSync(file, {encoding: 'utf-8'})
    const data = JSON.parse(jsonData)
    const num1 = data.numbers[Math.ceil(Math.random() * data.numbers.length -1)]
    const num2 = data.numbers[Math.ceil(Math.random() * data.numbers.length -1)]
    console.log(`-----Los números elegidos són ${num1} y ${num2}-----`)

    return { num1, num2 }
}

module.exports = { getNumbers }