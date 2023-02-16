/*Decorator
Crea un Decorator en un arxiu que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros 
multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises inicials, 
aplicant diferents conversions que usin el Decorator del punt anterior. */
const { Product } = require('./Product.js')
const { addProperty } = require('./decorator.js')
const { showConsole } = require('./showConsole.js')

const product1 = new Product('Bolígrafo', 500)
const product2 = new Product('Libreta', 10)
const product3 = new Product('Goma de borrar', 2)
const product4 = new Product('Lápiz', 2.15)
const product5 = new Product('Típex', 5.25)
const product6 = new Product('Rotulador', 50.25)

addProperty(product1, 'jpy')
addProperty(product2, 'usd')
addProperty(product3, 'chf')
addProperty(product4, 'gbp')
addProperty(product5, 'cad')
addProperty(product6, 'cny')

showConsole(product1, 'yenes')
showConsole(product2, 'dólares americanos')
showConsole(product3, 'francos suizos')
showConsole(product4, 'libras esterlinas')
showConsole(product5, 'dólares canadienses')
showConsole(product6, 'yuanes chinos')