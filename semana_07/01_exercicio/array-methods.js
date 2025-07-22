const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
]

const productDescriptions = products.map(product => `${product.name} - ${product.category}`)
console.log("Descrições dos Produtos:")
console.log(productDescriptions)

const pricesWithTax = products.map(product => ({
  ...product,
  priceWithTax: (product.price * 1.15).toFixed(2)
}))
console.log("\nProdutos com Imposto (15%):")
pricesWithTax.forEach(product => {
  console.log (`${product.name} - R$${product.priceWithTax}`)
})

let totalValue = 0
products.forEach(product => {
  totalValue += product.price
})
console.log(`\nValor total dos produtos: R$${totalValue.toFixed(2)}`)
