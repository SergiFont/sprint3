const { Product } = require('./Product.js')
const fs = require('fs')

class Decorator {

    addProperty(instance, currency) {
        instance.EUR_currency = this.decorate(instance, currency)
    }
    
    decorate(instance, coin){
        const data = JSON.parse(fs.readFileSync('./currency_conversions.json', {encoding: 'utf-8'}))
        const convertedCurrency = data[`${coin.toUpperCase()}_EUR`] * instance.getPrice()
        const polishedCurrency = convertedCurrency.toFixed(2)
        return polishedCurrency
    }
    
    showConsole(product, currency) {
        console.log(`Un/a ${product.getName()} tiene un precio de ${product.getPrice()} ${currency}.
    Su valor en Euros es de ${product.EUR_currency}€.
    -----------------------------------------------------`)
    }
}

module.exports = { Decorator }