// desafio.js

const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

// 1. Map: criar array com "Nome do produto - Categoria"
const productDescriptions = products.map(product => `${product.name} - ${product.category}`);

console.log("1. Nome do produto - Categoria:");
console.log(productDescriptions);

// 2. Map: criar array com preços + 15% de imposto
const taxedPrices = products.map(product => ({
  ...product,
  priceWithTax: +(product.price * 1.15).toFixed(2)
}));

console.log("\n2. Preços com 15% de imposto:");
taxedPrices.forEach(product => {
  console.log(`${product.name} - R$${product.priceWithTax}`);
});

// 3. forEach + acumulador: calcular valor total dos produtos
let totalValue = 0;
products.forEach(product => {
  totalValue += product.price;
});

console.log(`\n3. Valor total dos produtos: R$${totalValue.toFixed(2)}`);
