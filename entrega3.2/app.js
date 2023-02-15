const { getNumbers } = require('./getNumbers.js')
const { addition, subtraction, multiply } = require('./operations.js')
const { Middleware } = require('./Middleware.js')



const middleware = new Middleware

const app = (operation) => {
    const { num1, num2 } = getNumbers()
    const {output1, output2} = middleware.squaring(num1, num2) 
    operation(output1, output2)
}

app(addition)
app(subtraction)
app(multiply)