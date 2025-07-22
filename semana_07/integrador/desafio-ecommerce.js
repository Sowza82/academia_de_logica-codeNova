const inventory = [
  { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
  { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
  { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
  { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
  { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
  { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
  { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] },
];

// 1. Mostrar uma lista formatada de todos os produtos
console.log("Lista de Produtos:");
inventory.forEach(produto => {
  console.log(`${produto.name} - R$${produto.price} | Estoque: ${produto.stock}`);
});

// 2. Filtrar produtos em estoque
const emEstoque = inventory.filter(produto => produto.stock > 0);
console.log("\nProdutos em estoque:", emEstoque);

// 3. Filtrar produtos 'Eletrônicos' com preço < 1000
const eletronicosBaratos = inventory.filter(
  produto => produto.category === "Eletrônicos" && produto.price < 1000
);
console.log("\nEletrônicos abaixo de R$1000:", eletronicosBaratos);

// 4. Verificar se há produto sem estoque
const temSemEstoque = inventory.some(produto => produto.stock === 0);
console.log("\nExiste produto sem estoque?", temSemEstoque);

// 5. Verificar se todos têm pelo menos uma avaliação
const todosTemReview = inventory.every(produto => produto.reviews.length > 0);
console.log("\nTodos os produtos têm avaliação?", todosTemReview);

// 6. Encontrar o índice do produto "Cafeteira"
const indexCafeteira = inventory.findIndex(produto => produto.name === "Cafeteira");
console.log("\nÍndice da Cafeteira:", indexCafeteira);

// 7. Encontrar o primeiro produto da categoria "Vestuário"
const primeiroVestuário = inventory.find(produto => produto.category === "Vestuário");
console.log("\nPrimeiro produto da categoria 'Vestuário':", primeiroVestuário);

// 8. Função de busca por nome (case insensitive)
function buscarProdutosPorNome(termo) {
  const termoLower = termo.toLowerCase();
  return inventory.filter(produto => produto.name.toLowerCase().includes(termoLower));
}

console.log("\nResultado da busca por 'fone':", buscarProdutosPorNome("fone"));

// 9. Adicionar propriedade averageRating com média das avaliações
const inventoryComMedia = inventory.map(produto => {
  const soma = produto.reviews.reduce((acc, nota) => acc + nota, 0);
  const media = soma / produto.reviews.length;
  return { ...produto, averageRating: Number(media.toFixed(2)) };
});
console.log("\nProdutos com média de avaliações:", inventoryComMedia);

// 10. Encontrar o produto com maior média de avaliação
const produtoTop = inventoryComMedia.reduce((melhor, atual) => {
  return atual.averageRating > melhor.averageRating ? atual : melhor;
});
console.log("\nProduto com melhor avaliação:", produtoTop);
