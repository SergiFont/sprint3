const { Middleware } = require('./Middleware.js')
const fs = require('fs')

const addition = (num1, num2) => {
    console.log(`Finalmente, el resultado de sumar ${num1} con ${num2} es: ${num1 + num2}`)
    console.log('------------------------')
    return num1 + num2
}
const subtraction = (num1, num2) => {
    console.log(`Finalmente, el resultado de restar ${num1} con ${num2} es: ${num1 - num2}`)
    console.log('------------------------')
    return num1 - num2
}
const multiply = (num1, num2) => {
    console.log(`Finalmente, el resultado de multiplicar ${num1} con ${num2} es: ${num1 * num2}`)
    console.log('------------------------')
    return num1 * num2
}

const getNumbers= () => {
    const file = './numbers.json'
    const jsonData = fs.readFileSync(file, {encoding: 'utf-8'})
    const data = JSON.parse(jsonData)
    const num1 = data.numbers[Math.ceil(Math.random() * data.numbers.length -1)]
    const num2 = data.numbers[Math.ceil(Math.random() * data.numbers.length -1)]
    console.log(`-----Los números elegidos són ${num1} y ${num2}-----`)

    return { num1, num2 }
}

/////////////////////////////////////////////////////

const middleware = new Middleware

const app = (operation) => {
    const { num1, num2 } = getNumbers()
    const {output1, output2} = middleware.squaring(num1, num2) 
    operation(output1, output2)
}

app(addition)
app(subtraction)
app(multiply)