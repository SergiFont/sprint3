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

module.exports = { addition, subtraction, multiply }