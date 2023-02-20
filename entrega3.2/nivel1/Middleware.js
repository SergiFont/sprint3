class Middleware {
    constructor() {}

    squaring(num1, num2) {
        const output1 = num1 **2
        const output2 = num2 **3
        console.log(`El resultado de ${num1} al cuadrado es: ${output1}, y el resultado de ${num2} al cuadrado es: ${output2}`)
        return this.cubed(output1, output2)
    }

    cubed(num1, num2) {
        const output1 = num1 **3
        const output2 = num2 **3
        console.log(`Ahora elevamos ${num1} al cubo, siendo el resultado: ${output1}, y lo mismo con ${num2}: ${output2}`)
        return this.divide(output1, output2)
    }

    divide(num1, num2) {
        const output1 = num1 / 2
        const output2 = num2 / 2
        console.log(`Dividiendo ${num1} entre dos, el resultado es: ${output1}, y con ${num2} el resultado es: ${output2}`)
        return { output1, output2 }
    }

    execute(num1, num2) {
        this.squaring(num1, num2)
    }
}

module.exports = { Middleware }