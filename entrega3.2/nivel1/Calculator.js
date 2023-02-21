class Calculator {
    addition({num1, num2}) {
        console.log(`El resultado de sumar ${num1} con ${num2} es: ${num1 + num2}`)
        console.log('------------------------')
        return num1 + num2
    }
    subtraction({num1, num2}) {
        console.log(`El resultado de restar ${num1} con ${num2} es: ${num1 - num2}`)
        console.log('------------------------')
        return num1 - num2
    }
    multiply({num1, num2}) {
        console.log(`El resultado de multiplicar ${num1} con ${num2} es: ${num1 * num2}`)
        console.log('------------------------')
        return num1 * num2
    }
}

module.exports = { Calculator }
