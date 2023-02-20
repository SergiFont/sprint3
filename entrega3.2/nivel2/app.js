const { Product } = require('./Product.js')
const { Decorator } = require('./Decorator.js')

/*clase Decorator.js añadida por correción de Oriol. En el original, estaban los métodos de esta clase como funciones
en este archivo*/

const deco = new Decorator()

const product1 = new Product('Bolígrafo', 500)
const product2 = new Product('Libreta', 10)
const product3 = new Product('Goma de borrar', 2)
const product4 = new Product('Lápiz', 2.15)
const product5 = new Product('Típex', 5.25)
const product6 = new Product('Rotulador', 50.25)

deco.addProperty(product1, 'jpy')
deco.addProperty(product2, 'usd')
deco.addProperty(product3, 'chf')
deco.addProperty(product4, 'gbp')
deco.addProperty(product5, 'cad')
deco.addProperty(product6, 'cny')

deco.showConsole(product1, 'yenes')
deco.showConsole(product2, 'dólares americanos')
deco.showConsole(product3, 'francos suizos')
deco.showConsole(product4, 'libras esterlinas')
deco.showConsole(product5, 'dólares canadienses')
deco.showConsole(product6, 'yuanes chinos')