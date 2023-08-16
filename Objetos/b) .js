const carrinhoDeCompras = [];

function adicionarItemAoCarrinho(nome, preco, quantidade) {
  carrinhoDeCompras.push({
    nome: nome,
    preco: preco,
    quantidade: quantidade
  });
}

function calcularTotalCarrinho() {
  let total = 0;
  for (const item of carrinhoDeCompras) {
    total += item.preco * item.quantidade;
  }
  return total;
}

// Adicionar itens ao carrinho
adicionarItemAoCarrinho("Camiseta", 25.99, 2);
adicionarItemAoCarrinho("Calça", 39.99, 1);
adicionarItemAoCarrinho("Tênis", 79.99, 1);

//total do carrinho
const totalCarrinho = calcularTotalCarrinho();
console.log("Itens no Carrinho:", carrinhoDeCompras);
console.log("Total do Carrinho:", totalCarrinho);