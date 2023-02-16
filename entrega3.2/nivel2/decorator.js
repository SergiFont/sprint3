const fs = require('fs')

const addProperty = (instance, currency)=> {
    instance.EUR_currency = decorator(instance, currency)
}

const decorator = (instance, coin) => {
    const data = JSON.parse(fs.readFileSync('./currency_conversions.json', {encoding: 'utf-8'}))
    const convertedCurrency = data[`${coin.toUpperCase()}_EUR`] * instance.getPrice()
    const polishedCurrency = convertedCurrency.toFixed(2)
    return polishedCurrency
}

module.exports = { addProperty }