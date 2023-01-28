const products = [
    {
        name: "Iphone XS",
        price: 580
    },
    {
        name: "Playstation 5",
        price: 800
    }
]

const pricesInReal = products.map(p => p.price * 5)

const total = products.reduce((a, b) => a = a + b.price, 0)
const totalInReal = products.map(p => p.price * 5).reduce((a, b) => a = a + b, 0)

console.log(products)

console.log(total)
console.log(totalInReal)