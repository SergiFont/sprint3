const { Middleware } = require('./Middleware.js')
const { Calculator } = require('./Calculator.js')
const numbers = require('./numbers.json')

const calc = new Calculator()
const app = new Middleware(calc)

/*Correcció Oriol: clase calculadora a part, que el middleware la absorbeixi. Fer la la classe Middleware reutilitzable. */

app.use((req, next) => {
  const number1 = req.num1
  const number2 = req.num2
    req.num1 = req.num1 ** 2
    req.num2 = req.num2 ** 2
    console.log(`El resultado de ${number1} al cuadrado es: ${req.num1}, y el resultado de ${number2} al cuadrado es: ${req.num2}`)
    next()
  })
  
app.use((req, next) => {
  const number1 = req.num1
  const number2 = req.num2
    req.num1 = req.num1 ** 3
    req.num2 = req.num2 ** 3
    console.log(`Ahora elevamos ${number1} al cubo, siendo el resultado: ${req.num1}, y lo mismo con ${number2}: ${req.num2}`)
    next()
  })

app.use((req, next) => {
  const number1 = req.num1
  const number2 = req.num2
    req.num1 = req.num1 / 2
    req.num2 = req.num2 / 2
    console.log(`Dividiendo ${number1} entre dos, el resultado es: ${req.num1}, y con ${number2} el resultado es: ${req.num2}`)
    next()
  })
  
  const num1 = numbers[0].num1
  const num2 = numbers[0].num2

  console.log(app.addition({num1, num2}))
  console.log(app.subtraction({num1, num2}))
  console.log(app.multiply({num1, num2}))