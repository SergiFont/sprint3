const { Product } = require('./Product.js')

const showConsole = (product, currency) => {
    console.log(`Un/a ${product.getName()} tiene un precio de ${product.getPrice()} ${currency}.
Su valor en Euros es de ${product.EUR_currency}€.
-----------------------------------------------------`)
}

module.exports = { showConsole }